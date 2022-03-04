// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
function CardRedirect({ element }) {
  const { name, tag, url, redirect } = element
  // let history = useHistory()

  return (
    <Link
      to={redirect}
      className="overflow-hidden rounded-2xl bg-white shadow-md"
    >
      <img
        src={url}
        alt={name}
        className="h-44 min-h-[176px] w-80 min-w-[320px] object-cover"
      />
      <div className="p-4">
        <h2>{name}</h2>
        <p className="text-sm text-gray-500">{tag}</p>
      </div>
    </Link>
  )
}

export default CardRedirect
