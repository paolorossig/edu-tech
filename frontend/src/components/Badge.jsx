function Badge({ element }) {
  const { name, category, users } = element

  return (
    <div className="flex overflow-hidden rounded-3xl bg-white p-4">
      <div className="h-14 w-14 rounded-full bg-black"></div>
      <div className="mx-2">
        <h2>{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <div className="flex items-end justify-center">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <p className="text-sm text-blue-500">{users}</p>
        </div>
      </div>
    </div>
  )
}

export default Badge
