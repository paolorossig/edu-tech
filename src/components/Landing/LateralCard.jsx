import { Link } from 'react-router-dom'

function LateralCard({ element }) {
  const { name, tag, url } = element

  return (
    <div className="grid max-w-[500px] grid-cols-2 overflow-hidden rounded-3xl shadow-md">
      <div className="z-10 -mr-3 flex flex-col justify-end rounded-3xl bg-white p-4">
        <h2>{name}</h2>
        <p className="text-sm text-gray-500">{tag}</p>
      </div>
      <Link to={`/course/detail/${element.id}`} className="-ml-3 h-44">
        <img
          src={url}
          alt={name}
          className="h-full object-cover object-center brightness-90 grayscale hover:brightness-100 hover:grayscale-0"
        />
      </Link>
    </div>
  )
}

export default LateralCard
