function CreditCards({ element }) {
  const { name, img, bank, selected } = element
  return (
    <div className="ml-4 mr-4 grid grid-cols-12 gap-4 overflow-hidden bg-white p-4">
      <div className="col-span-1 m-auto">
        <img
          src={img}
          alt={name}
          className="h-10 min-h-[10] w-60 min-w-[60px]"
        />
      </div>
      <div className="col-span-8 ml-8">
        <p className=" font-bold">{name}</p>
        <p className=" text-sm font-bold text-gray-500">{bank}</p>
      </div>
      <div className="col-span-3 m-auto flex-col items-center justify-center bg-white text-center align-middle">
        <input
          id="creditcard"
          name="creditcard"
          type="radio"
          className=""
          checked={selected}
        ></input>
        <p className=" font-bold text-blue-400">Modificar Datos</p>
      </div>
    </div>
  )
}

export default CreditCards
