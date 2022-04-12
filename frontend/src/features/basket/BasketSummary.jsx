import { useSelector } from 'react-redux'
import { selectTotalPrice } from './basketSlice'
import Button from '@/components/Button'

function AccountSummary({ toggleModal }) {
  const totalPrice = useSelector(selectTotalPrice)

  return (
    <section className="md:ml-4">
      <h1>Total</h1>
      <p className="mt-1 text-4xl font-bold">{`S/ ${totalPrice * 0.8}`}</p>
      <del className="mt-0 text-xl font-bold">{`S/ ${totalPrice}`}</del>
      <h2 className="mt-2 mb-2 font-bold text-gray-500">20% de descuento</h2>
      <Button onClick={toggleModal} className="mt-4 p-3 font-bold text-white">
        Realizar Compra
      </Button>
    </section>
  )
}

export default AccountSummary
