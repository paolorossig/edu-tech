import { NavLink } from 'react-router-dom'
import { useUserMessagesQuery } from './messageApi'

function Inbox({ userId, users }) {
  const { data } = useUserMessagesQuery(userId)

  const senders = data?.messages?.map((el) => el.from)
  const uniqueSenders = senders?.filter(
    (item, index) => senders.indexOf(item) === index
  )

  return (
    <ul className="mb-4 flex h-[88px] gap-4">
      {uniqueSenders?.length
        ? uniqueSenders.map((id) => {
            const user = users.find((user) => user._id === id)
            if (!user) return null

            return (
              <li
                key={user._id}
                className="flex flex-col items-center overflow-hidden rounded-xl"
              >
                <NavLink
                  to={user._id}
                  className={({ isActive }) =>
                    isActive ? 'bg-gray-200 p-2' : 'p-2'
                  }
                >
                  <img
                    src={user.photoURL}
                    alt={user.firstName}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <h3 className="font-medium text-gray-600">
                    {user.firstName}
                  </h3>
                </NavLink>
              </li>
            )
          })
        : null}
    </ul>
  )
}

export default Inbox
