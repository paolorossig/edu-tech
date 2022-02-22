import { Link } from 'react-router-dom'

function LateralCard({ element }) {
  const { name, tag, url } = element

  return (
    <div className="border-black-100 grid grid-cols-2 overflow-hidden rounded-3xl border bg-white shadow-md">
      <div className="px-4 py-10">
        <h2>{name}</h2>
        <p className="text-sm text-gray-500">{tag}</p>
        <center>
          <Link
            to={`/course/detail/${element.id}`}
            className=" h-20 rounded-xl border border-solid border-black px-2"
          >
            Ver Curso
          </Link>
        </center>
      </div>
      <img
        src={url}
        alt={name}
        className="h-44 min-h-[176px] w-80 min-w-[320px] object-cover"
      />
    </div>
  )
}

export default LateralCard
