import { useState } from 'react'
import Card from '../../components/Card'
import CardPay from './components/CardPay'
import CreditCards from './components/CreditCards'
import CardSecurity from './components/CardSecurity'
import DetailPay from './components/DetailPay'

import { cursos, cursos_seleccionados } from '../../data/cursos.json'
import { creditcards } from '../../data/usuarios.json'

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
            <p className="mt-1 text-4xl font-bold">S/. 89.99</p>
            <del className="mt-0 text-xl font-bold">S/. 109.98</del>
            <h2 className="mt-2 mb-2 font-bold text-gray-500">
              25 % de descuento
            </h2>
            <button
              type="button"
              className=" mt-4 bg-slate-600 p-3 font-bold text-white"
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
          {cursos.map((curso) => (
            <Card element={curso} key={curso.id} />
          ))}
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-8 mx-auto w-auto max-w-6xl">
              {/*content*/}
              <div className="mb-4 grid grid-cols-9 gap-4 overflow-hidden bg-white">
                <div className="m-autO col-span-6 bg-slate-200 p-4">
                  <h1 className="ml-4 mb-4 text-base text-slate-600">
                    Selecciona el método de Pago
                  </h1>
                  <div className="mb-4">
                    {creditcards.map((creditcard, index) => (
                      <CreditCards element={creditcard} key={index} />
                    ))}
                  </div>
                  <h1 className="ml-4 mb-4 text-base text-slate-600">
                    Confirma para finalizar tu compra
                  </h1>
                  <div className="ml-4">
                    <CardSecurity></CardSecurity>
                  </div>
                </div>
                <div className="col-span-3 ml-3 p-4">
                  <h1 className="mt-2 mb-2 text-2xl font-bold">EduTECH</h1>
                  <button
                    className=" absolute top-5 right-0 float-right mt-3 mr-4 h-8 w-8 rounded-full bg-slate-400"
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
                  <button className=" w-full bg-slate-800 p-4 font-semibold text-white">
                    Pagar
                  </button>
                </div>
              </div>
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none"></div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  )
}

export default Pasarela
