function Badge({ title, image, number }) {
  return (
    <div className="flex min-w-[250px] justify-between overflow-hidden rounded-3xl bg-white p-4">
      <img
        src={image}
        alt="teacher photo"
        className="h-14 w-14 rounded-full object-cover"
      />
      <h2 className="mx-2">{title}</h2>
      <div className="flex items-end justify-center">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <p className="text-sm text-blue-500">{number}</p>
        </div>
      </div>
    </div>
  )
}

export default Badge
