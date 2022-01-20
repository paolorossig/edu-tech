function CreditCards({ element }) {
  const { name, img, bank, selected } = element
  return (
    <div className="grid grid-cols-12 gap-4 bg-white overflow-hidden p-4 ml-4 mr-4">
      <div className="col-span-1 m-auto">
        <img
          src={img}
          alt={name}
          className="h-10 w-60 min-h-[10] min-w-[60px]"
        />
      </div>
      <div className="col-span-8 ml-8">
        <p className=" font-bold">{name}</p>
        <p className=" text-gray-500 text-sm font-bold">{bank}</p>
      </div>
      <div className="col-span-3 bg-white m-auto flex-col justify-center align-middle items-center text-center">
        <input
          id="creditcard"
          name="creditcard"
          type="radio"
          className=""
          checked={selected}
        ></input>
        <p className=" text-blue-400 font-bold">Modificar Datos</p>
      </div>
    </div>
  )
}

export default CreditCards
