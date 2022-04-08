import { useEffect, useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import { useAuth } from '@/contexts/auth'
import { useSocket } from '@/contexts/socket'

function TeacherChats() {
  const { auth } = useAuth()
  const { socket } = useSocket()
  const [messages, setMessages] = useState([])

  const userId = auth.user._id

  useEffect(() => {
    socket.on('msg-recieve', (message) => {
      setMessages((prev) => [...prev, message])
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = {
      from: userId,
      to: '6248baa319434cc74731379d',
      message: e.target.input.value
    }
    setMessages((prev) => [...prev, message])
    socket.emit('send-msg', message)

    e.target.input.value = ''
  }

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>Chats</ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <div className="mb-3 flex flex-auto flex-col gap-3">
          {messages.map((message, index) => {
            const isCurrentUser = message.from === userId

            return (
              <p
                key={index}
                className={`w-[50%] overflow-clip rounded-t-xl py-2 px-3 ${
                  isCurrentUser
                    ? 'self-end rounded-bl-xl bg-gray-200 text-right'
                    : 'bg-primary-200 rounded-br-xl'
                }`}
              >
                {message.message}
              </p>
            )
          })}
        </div>
        <form
          className="relative flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            id="input"
            type="text"
            autoComplete="off"
            placeholder="Escribe un mensaje"
          />
          <button
            type="submit"
            className="bg-primary-400 hover:bg-primary-900 absolute right-0 mr-3 cursor-pointer rounded-full p-[5px]"
          >
            <IoMdSend className="text-xl text-white" />
          </button>
        </form>
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default TeacherChats
