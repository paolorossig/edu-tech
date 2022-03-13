import useToggle from '@/hooks/useToggle'
import Card from '@/components/Card'
import CardPay from '@/components/Checkout/CardPay'
import ModalPay from '@/components/Checkout/ModalPay'

import { cursos, cursosSeleccionados } from '@/data/cursos.json'
import { creditCards } from '@/data/usuarios.json'

function Checkout() {
  const [modalState, toggleModal] = useToggle()

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="mb-8">Tus cursos seleccionados</h1>
        <div className="flex gap-8">
          <div className="flex gap-8">
            <div>
              {cursosSeleccionados.map((curso) => (
                <CardPay element={curso} key={curso.name} />
              ))}
            </div>
          </div>
          <div>
            <h1>Total</h1>
            <p className="mt-1 text-4xl font-bold">S/. 89.99</p>
            <del className="mt-0 text-xl font-bold">S/. 109.98</del>
            <h2 className="mt-2 mb-2 font-bold text-gray-500">
              25 % de descuento
            </h2>
            <button
              type="button"
              className=" mt-4 bg-slate-600 p-3 font-bold text-white"
              onClick={toggleModal}
            >
              Realizar Compra
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-8">Tambien te puede interesar</h1>
        <div className="flex gap-8">
          {cursos.map((curso) => (
            <Card element={curso} key={curso.id} />
          ))}
        </div>
      </div>
      {modalState && (
        <ModalPay creditInfo={creditCards} toggleModal={toggleModal} />
      )}
    </div>
  )
}

export default Checkout
