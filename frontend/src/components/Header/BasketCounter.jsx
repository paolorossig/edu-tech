import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsCartPlusFill } from 'react-icons/bs'
import { selectTotalItems } from '@/features/basket/basketSlice'

function BasketCounter() {
  const totalItems = useSelector(selectTotalItems)

  return (
    <Link
      to="checkout"
      className="relative p-2 text-2xl text-gray-500 hover:text-black"
    >
      <BsCartPlusFill />
      {totalItems > 0 && (
        <div className="bg-primary-400 absolute top-0 right-0 h-5 w-5 rounded-full text-center text-sm text-white">
          {totalItems}
        </div>
      )}
    </Link>
  )
}

export default BasketCounter
