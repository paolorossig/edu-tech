import Card from '../../components/Card'
import CardPay from './components/CardPay'
import { cursos, cursos_seleccionados, creditcards } from './data'
import { useState } from 'react'
import CreditCards from './components/CreditCards'
import CardSecurity from './components/CardSecurity'
import DetailPay from './components/DetailPay'

function Pasarela() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="mb-8">Tus cursos seleccionados</h1>
        <div className="flex gap-8">
          <div className="flex gap-8">
            <div>
              {cursos_seleccionados.map((curso) => (
                <CardPay element={curso} key={curso.name} />
              ))}
            </div>
          </div>
          <div>
            <h1>Total</h1>
            <p className="text-4xl mt-1 font-bold">S/. 89.99</p>
            <del className="font-bold mt-0 text-xl">S/. 109.98</del>
            <h2 className="text-gray-500 font-bold mt-2 mb-2">
              25 % de descuento
            </h2>
            <button
              type="button"
              className=" bg-slate-600 text-white p-3 font-bold mt-4"
              onClick={() => setShowModal(true)}
            >
              Realizar Compra
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-8">Tambien te puede interesar</h1>
        <div className="flex gap-8">
          {cursos.map((curso, index) => (
            <Card element={curso} key={index} />
          ))}
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-8 mx-auto max-w-6xl">
              {/*content*/}
              <div className="grid grid-cols-9 gap-4 bg-white overflow-hidden mb-4">
                <div className="col-span-6 m-autO bg-slate-200 p-4">
                  <h1 className="text-base text-slate-600 ml-4 mb-4">
                    Selecciona el método de Pago
                  </h1>
                  <div className="mb-4">
                    {creditcards.map((creditcard, index) => (
                      <CreditCards element={creditcard} key={index} />
                    ))}
                  </div>
                  <h1 className="text-base text-slate-600 ml-4 mb-4">
                    Confirma para finalizar tu compra
                  </h1>
                  <div className="ml-4">
                    <CardSecurity></CardSecurity>
                  </div>
                </div>
                <div className="col-span-3 ml-3 p-4">
                  <h1 className="text-2xl font-bold mt-2 mb-2">EduTECH</h1>
                  <button
                    className=" bg-slate-400 float-right absolute top-5 mt-3 right-0 mr-4 rounded-full h-8 w-8"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-white">×</span>
                  </button>
                  <DetailPay
                    subtotal={'109.98'}
                    descuento={'20.00'}
                    total={'89.98'}
                  ></DetailPay>
                  {/* esto es temporal xd ya no habia tiempo */}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button className=" bg-slate-800 text-white font-semibold p-4 w-full">
                    Pagar
                  </button>
                </div>
              </div>
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"></div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default Pasarela
