function Card({ title, subtitle, imageUrl, className, ...restProps }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl bg-white ${className}`}
      {...restProps}
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-44 min-h-[176px] w-80 min-w-[320px] object-cover"
      />
      <div className="p-4">
        <h2>{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  )
}

export default Card
