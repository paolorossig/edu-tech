function LateralCard({ title, subtitle, imageURL }) {
  return (
    <div className="grid max-w-[500px] grid-cols-2 overflow-hidden rounded-3xl shadow-md">
      <div className="z-10 -mr-3 flex flex-col justify-end rounded-3xl bg-white p-4">
        <h2>{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <a href="#" className="-ml-3 h-44">
        <img
          src={imageURL}
          alt={title}
          className="h-full object-cover object-center brightness-90 grayscale hover:brightness-100 hover:grayscale-0"
        />
      </a>
    </div>
  )
}

export default LateralCard
