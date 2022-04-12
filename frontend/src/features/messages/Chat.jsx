import { useEffect, useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { useSocket } from '@/contexts/socket'
import { useSendMessageMutation, useUserMessagesQuery } from './messageApi'

function Chat({ from, to }) {
  const { socket } = useSocket()
  const [messages, setMessages] = useState([])

  const { data } = useUserMessagesQuery(from)
  if (data?.messages?.length && !messages.length) {
    setMessages(data.messages)
  }
  const [sendMessage] = useSendMessageMutation()

  useEffect(() => {
    socket.on('msg-recieve', (message) => {
      setMessages((prev) => [...prev, message])
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = {
      from,
      to,
      message: e.target.input.value
    }
    setMessages((prev) => [...prev, message])
    socket.emit('send-msg', message)
    sendMessage(message)

    e.target.input.value = ''
  }

  return (
    <div className="flex h-full flex-col">
      <h2 className="pb-4 text-2xl text-slate-600">Chat</h2>
      <div className="scrollbar-hide mb-3 flex flex-auto flex-col gap-3 overflow-y-scroll">
        {messages.map((message, index) => {
          const isCurrentUser = message.from === from

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
          required
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
    </div>
  )
}

export default Chat
