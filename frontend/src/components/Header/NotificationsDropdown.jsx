import { BellIcon } from '@heroicons/react/solid'
import useToggle from '@/hooks/useToggle'
import Button from '../Button'

function NotificationsDropdown() {
  const [dropDown, toggleDropDown] = useToggle()

  return (
    <div className="flex cursor-pointer gap-2">
      <div className="flex">
        <button
          onClick={toggleDropDown}
          className="relative z-10 rounded-md p-2 focus:outline-none"
        >
          <BellIcon className="h-7 w-7 text-gray-500 hover:text-black" />
        </button>
        {dropDown && (
          <div className="scrollbar-hide absolute top-24 right-8 w-80 items-center overflow-y-scroll rounded-xl bg-white p-2 shadow-md">
            <div className="pb-2">
              <a
                href="#"
                className="flex items-center border-b px-4 py-3 hover:bg-gray-100"
              >
                <img
                  className="mx-1 h-8 w-8 rounded-full object-cover"
                  src="https://avatars.githubusercontent.com/u/62861353?v=4"
                  alt="Paolo"
                ></img>
                <p className="mx-2 text-sm text-gray-600">
                  <span className="font-bold" href="#">
                    paolo
                  </span>{' '}
                  Tengo una pregunta sobre el curso de Javascript{' '}
                </p>
              </a>
            </div>
            <Button className="mx-auto">Ver todas las notificaciones</Button>
          </div>
        )}
      </div>
    </div>
  )
}
export default NotificationsDropdown
