import { useEffect, useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { useSocket } from '@/contexts/socket'
import { useParams } from 'react-router-dom'
import { useAuth } from '@/contexts/auth'

function Chat() {
  const { socket } = useSocket()
  const { teacherId } = useParams()
  const { auth } = useAuth()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (messages.length) {
      socket.emit('send-msg', {
        from: auth.user._id,
        to: teacherId,
        message: messages.pop()
      })
    }
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = e.target.input.value
    setMessages((prev) => [...prev, message])
    e.target.input.value = ''
  }

  return (
    <>
      <h2 className="pb-4 text-2xl text-slate-600">{`Chat`}</h2>
      <div className="flex flex-auto flex-col items-end gap-3">
        {messages.map((message, index) => (
          <p
            key={index}
            className="w-[50%] rounded-t-xl rounded-bl-xl bg-gray-200 py-2 px-3 text-right"
          >
            {message}
          </p>
        ))}
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
    </>
  )
}

export default Chat
