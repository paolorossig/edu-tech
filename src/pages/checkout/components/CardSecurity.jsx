function CardSecurity() {
  return (
    <div className="mr-4 grid grid-cols-9 gap-4 overflow-hidden bg-white p-4">
      <div className="col-span-7">
        <p className="mt-1 text-sm font-bold text-gray-500">
          Ingrese su Código de Seguridad.
        </p>
        <input
          type="text"
          className="mt-2 w-full rounded-xl border-2 border-gray-800 p-1"
        />
        <p className="mt-1 text-sm font-bold text-gray-500">
          Últimos 3 dígitos de la parte posterior de tu tarjeta.
        </p>
      </div>
      <div className="col-span-2 m-auto ml-8 p-1">
        <img
          src="https://cdn4.iconfinder.com/data/icons/fintech-color-line-vol-1/256/CVV-512.png"
          alt="abc"
        />
      </div>
    </div>
  )
}

export default CardSecurity
