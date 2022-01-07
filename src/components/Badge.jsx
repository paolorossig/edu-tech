function Badge({ element }) {
  const { name, tag, users } = element

  return (
    <div className="flex p-4 bg-white rounded-3xl overflow-hidden">
      <div className="bg-black h-14 w-14 rounded-full"></div>
      <div className="mx-2">
        <h2>{name}</h2>
        <p className="text-gray-500 text-sm">{tag}</p>
      </div>
      <div className="flex items-end justify-center">
        <div className="flex items-center gap-1">
          <div className="bg-blue-500 h-3 w-3 rounded-full"></div>
          <p className="text-blue-500 text-sm">{users}</p>
        </div>
      </div>
    </div>
  )
}

export default Badge
