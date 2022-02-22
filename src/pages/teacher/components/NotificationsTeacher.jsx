import { useState } from 'react'

function notificationTeacher() {
  const [dropDown, setDropDown] = useState(false)

  const dropDownOpen = () => {
    setDropDown(!dropDown)
    }

  return (
    <div>
      <div className="flex cursor-pointer gap-2">
        <div x-data={`${dropDown}`} className="flex">
          <button
            onClick={dropDownOpen}
            className="relative z-10 rounded-md p-2 focus:outline-none"
          >
            <svg
              className="h-7 w-7 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>

          <div x-show={`${dropDown}`} onClick={dropDownOpen}></div>
          {dropDown ? (
            <div
              x-show="dropdownOpen"
              className="
              overflow-y-scroll
              relative top-20
              p-4
              items-center
              rounded-xl
              bg-white
              shadow-md"
              style={{width: "20em", position: "absolute", right: "calc(19%)"}}

            >
              <div className="py-4">
                <a
                  href="#"
                  className="-mx-2 flex items-center border-b px-4 py-3 hover:bg-gray-100"
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
              <a
                href="#"
                className="block bg-gray-800 py-2 text-center font-bold text-white"
              >
                Ver todas las notificaciones
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
export default notificationTeacher
