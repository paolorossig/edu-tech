import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { LogoutIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useAuth } from '@/contexts/auth'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'

function UserDropdown() {
  const axiosPrivate = useAxiosPrivate()
  const { auth, logout } = useAuth()
  const { email, firstName, lastName, photoURL, role } = auth.user

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-xl px-4 py-2 text-sm font-medium hover:bg-black hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <div className="flex gap-2">
          <img
            src={photoURL}
            alt={email}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start">
            <h3>{`${firstName} ${lastName}`}</h3>
            <h4>{role === 'student' ? 'Estudiante' : 'Profesor'}</h4>
          </div>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-2 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-primary-400 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <PencilAltIcon
                    className={`${!active && 'text-primary-400'} mr-2 h-5 w-5`}
                    aria-hidden="true"
                  />
                  Editar
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => logout(axiosPrivate)}
                  className={`${
                    active ? 'bg-primary-400 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <LogoutIcon
                    className={`${!active && 'text-primary-400'} mr-2 h-5 w-5`}
                    aria-hidden="true"
                  />
                  Cerrar sesi??n
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserDropdown
