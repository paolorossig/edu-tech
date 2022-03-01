function DetailPay({ subtotal, descuento, total }) {
  return (
    <div className="pr-2">
      <p className="mb-4 font-bold">Detalles de Tu Compra</p>
      <div className=" mb-4 grid grid-cols-3">
        <div className="  col-span-2 text-gray-700">
          <p>Subtotal</p>
        </div>
        <div className="col-span-1 text-right text-gray-700">
          <p>S/. {subtotal}</p>
        </div>
      </div>
      <div className=" mb-4 grid grid-cols-3">
        <div className=" col-span-2 text-gray-700">
          <p>Descuento</p>
        </div>
        <div className=" col-span-1 text-right text-gray-700">
          <p>S/. {descuento}</p>
        </div>
      </div>
      <hr />
      <div className=" mt-4 grid grid-cols-3 font-bold">
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
