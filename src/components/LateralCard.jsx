function LateralCard({ element }) {
  const { name, tag, url } = element

  return (
    <div className="bg-white rounded-3xl overflow-hidden grid grid-cols-2 border border-black-100 shadow-md">
      <div className="px-4 py-10">
        <h2>{name}</h2>
        <p className="text-gray-500 text-sm">{tag}</p>
        <center>
          <button className="border-solid border border-black m-1 h-10 px-2 rounded-xl">
            Ver Curso
          </button>
        </center>
      </div>
      <img
        src={url}
        alt={name}
        className="object-cover h-44 w-80 min-h-[176px] min-w-[320px]"
      />
    </div>
  )
}

export default LateralCard
