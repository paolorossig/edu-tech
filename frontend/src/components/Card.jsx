function Card({ element, className, ...restProps }) {
  const { name, category, imageUrl } = element

  return (
    <div
      className={`overflow-hidden rounded-3xl bg-white ${className}`}
      {...restProps}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-44 min-h-[176px] w-80 min-w-[320px] object-cover"
      />
      <div className="p-4">
        <h2>{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  )
}

export default Card
