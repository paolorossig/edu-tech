function CardPay({ element }) {
  const { name, mentor, url, price, discount, finalPrice, rate, stars, level } =
    element
  return (
    <div className="mb-4 grid grid-cols-9 gap-4 overflow-hidden rounded-3xl bg-white">
      <div className="col-span-1 m-auto ml-3">
        <img
          src={url}
          alt={name}
          className="h-20 min-h-[80px] w-20 min-w-[80px] rounded-full"
        />
      </div>
      <div className=" col-span-4 ml-4 mt-2 mb-2">
        <h2>{name}</h2>
        <p className="mt-1 text-sm font-bold text-gray-500">Por {mentor}</p>
        <p className="mt-1 text-sm font-bold text-gray-500">
          {rate} ⭐⭐⭐⭐⭐ ({stars} Valoraciones)
        </p>
        <p className=" mt-1 text-sm font-bold text-gray-500">{level}</p>
      </div>
      <div className="col-span-2 m-auto">
        <p className="mt-1 text-sm font-bold text-gray-500">Eliminar</p>
      </div>
      <div className="col-span-2 m-auto font-bold">
        <h3 className="text-sm text-gray-500">S/. {finalPrice}</h3>
        {discount && (
          <p className="text-sm text-gray-500">
            <del>S/. {price}</del>
          </p>
        )}
      </div>
    </div>
  )
}
export default CardPay
