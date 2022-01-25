function Card({ element }) {
  const { name, tag, url } = element

  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      <img
        src={url}
        alt={name}
        className="object-cover h-44 w-80 min-h-[176px] min-w-[320px]"
      />
      <div className="p-4">
        <h2>{name}</h2>
        <p className="text-gray-500 text-sm">{tag}</p>
      </div>
    </div>
  )
}

export default Card
