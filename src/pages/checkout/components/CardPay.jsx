function CardPay({ element }) {
  const { name, mentor, url, price, discount, finalPrice, rate, stars, level } =
    element
  return (
    <div className="grid grid-cols-9 gap-4 bg-white rounded-3xl overflow-hidden mb-4">
      <div className="col-span-1 m-auto ml-3">
        <img
          src={url}
          alt={name}
          className="rounded-full h-20 w-20 min-h-[80px] min-w-[80px]"
        />
      </div>
      <div className=" col-span-4 ml-4 mt-2 mb-2">
        <h2>{name}</h2>
        <p className="text-gray-500 text-sm font-bold mt-1">Por {mentor}</p>
        <p className="text-gray-500 text-sm font-bold mt-1">
          {rate} ⭐⭐⭐⭐⭐ ({stars} Valoraciones)
        </p>
        <p className=" text-gray-500 text-sm font-bold mt-1">{level}</p>
      </div>
      <div className="col-span-2 m-auto">
        <p className="text-gray-500 text-sm font-bold mt-1">Eliminar</p>
      </div>
      <div className="col-span-2 m-auto font-bold">
        <h3 className="text-gray-500 text-sm">S/. {finalPrice}</h3>
        {discount && (
          <p className="text-gray-500 text-sm">
            <del>S/. {price}</del>
          </p>
        )}
      </div>
    </div>
  )
}
export default CardPay
