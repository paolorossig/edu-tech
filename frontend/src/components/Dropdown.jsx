import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { LogoutIcon, PencilAltIcon } from '@heroicons/react/outline'
import useAuth from '@/hooks/useAuth'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'

function Dropdown({ children }) {
  const axiosPrivate = useAxiosPrivate()
  const { logout } = useAuth()

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-xl px-4 py-2 text-sm font-medium hover:bg-black hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {children}
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
        <Menu.Items className="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-primary text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <PencilAltIcon
                    className={`${!active && 'text-primary'} mr-2 h-5 w-5`}
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
                    active ? 'bg-primary text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <LogoutIcon
                    className={`${!active && 'text-primary'} mr-2 h-5 w-5`}
                    aria-hidden="true"
                  />
                  Cerrar sesión
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
