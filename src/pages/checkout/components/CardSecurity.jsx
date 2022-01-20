function CardSecurity() {
  return (
    <div className="grid grid-cols-9 gap-4 bg-white overflow-hidden p-4 mr-4">
      <div className="col-span-7">
        <p className="text-gray-500 text-sm font-bold mt-1">
          Ingrese su Código de Seguridad.
        </p>
        <input
          type="text"
          className="w-full mt-2 border-2 rounded-xl border-gray-800 p-1"
        />
        <p className="text-gray-500 text-sm font-bold mt-1">
          Últimos 3 dígitos de la parte posterior de tu tarjeta.
        </p>
      </div>
      <div className="col-span-2 ml-8 m-auto p-1">
        <img
          src="https://cdn4.iconfinder.com/data/icons/fintech-color-line-vol-1/256/CVV-512.png"
          alt="abc"
        />
      </div>
    </div>
  )
}

export default CardSecurity
