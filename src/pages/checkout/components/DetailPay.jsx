function DetailPay({ subtotal, descuento, total }) {
  return (
    <div className="pr-2">
      <p className="font-bold mb-4">Detalles de Tu Compra</p>
      <div className=" grid grid-cols-3 mb-4">
        <div className="  text-gray-700 col-span-2">
          <p>Subtotal</p>
        </div>
        <div className="text-gray-700 col-span-1 text-right">
          <p>S/. {subtotal}</p>
        </div>
      </div>
      <div className=" grid grid-cols-3 mb-4">
        <div className=" text-gray-700 col-span-2">
          <p>Descuento</p>
        </div>
        <div className=" text-gray-700 col-span-1 text-right">
          <p>S/. {descuento}</p>
        </div>
      </div>
      <hr />
      <div className=" grid grid-cols-3 mt-4 font-bold">
        <div className=" col-span-2">
          <p>Total</p>
        </div>
        <div className=" col-span-1 text-right">
          <p>S/. {total}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPay
