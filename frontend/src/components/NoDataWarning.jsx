import { ExclamationIcon } from '@heroicons/react/outline'

function NoDataWarning({ message }) {
  return (
    <div className="mr-4 grid h-64 w-full place-content-center md:mr-8">
      <label className="flex items-center gap-2 text-gray-500">
        <ExclamationIcon className="h-7 w-7" />
        {message}
      </label>
    </div>
  )
}

export default NoDataWarning
