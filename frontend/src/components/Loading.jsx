import Spinner from './Spinner'

function Loading({ open = true }) {
  if (!open) return null
  return (
    <div className="absolute inset-0 z-50 grid h-screen w-screen place-content-center backdrop-blur-sm">
      <Spinner size="large" />
    </div>
  )
}

export default Loading
