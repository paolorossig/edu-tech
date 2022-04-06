import { useDispatch, useSelector } from 'react-redux'
import {
  clearBasket,
  selectBasketItems,
  selectTotalPrice
} from '@/features/basket/basketSlice'
import { useBuyCoursesMutation } from '@/features/courses/CourseApi'
import CardSecurity from './CardSecurity'
import CreditCards from './CreditCards'
import DetailPay from './DetailPay'

function ModalPay({ creditInfo, toggleModal }) {
  const dispatch = useDispatch()
  const totalPrice = useSelector(selectTotalPrice)
  const basketItems = useSelector(selectBasketItems)
  const [buyCourses] = useBuyCoursesMutation()

  const courses = basketItems?.map((el) => el._id)

  const handleSubmit = async () => {
    await buyCourses({ data: { courses } })
    dispatch(clearBasket())
    return toggleModal()
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-8 mx-auto w-auto max-w-6xl">
          {/*content*/}
          <div className="mb-4 grid grid-cols-9 gap-4 overflow-hidden bg-white">
            <div className="col-span-6 bg-slate-200 p-4">
              <h1 className="ml-4 mb-4 text-base text-slate-600">
                Selecciona el método de Pago
              </h1>
              <div className="mb-4">
                {creditInfo.map((creditcard, index) => (
                  <CreditCards element={creditcard} key={index} />
                ))}
              </div>
              <h1 className="ml-4 mb-4 text-base text-slate-600">
                Confirma para finalizar tu compra
              </h1>
              <div className="ml-4">
                <CardSecurity />
              </div>
            </div>
            <div className="col-span-3 ml-3 p-4">
              <h1 className="mt-2 mb-2 text-2xl font-bold">EduTECH</h1>
              <button
                className=" absolute top-5 right-0 float-right mt-3 mr-4 h-8 w-8 rounded-full bg-slate-400"
                onClick={toggleModal}
              >
                <span className=" text-white">×</span>
              </button>
              <DetailPay
                subtotal={totalPrice}
                descuento={totalPrice * 0.2}
                total={totalPrice * 0.8}
              />
              <div className="h-[350px]" />
              <button
                onClick={handleSubmit}
                className="w-full bg-slate-800 p-4 font-semibold text-white"
              >
                Pagar
              </button>
            </div>
          </div>
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none"></div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25" />
    </>
  )
}

export default ModalPay
