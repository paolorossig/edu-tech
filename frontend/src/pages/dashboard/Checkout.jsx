import { useSelector } from 'react-redux'
import BasketList from '@/features/basket/BasketList'
import BasketSummary from '@/features/basket/BasketSummary'
import { selectBasketItems } from '@/features/basket/basketSlice'
import useToggle from '@/hooks/useToggle'
import ModalPay from '@/components/Checkout/ModalPay'
import NoDataWarning from '@/components/NoDataWarning'

import { creditCards } from '@/data/usuarios.json'

function Checkout() {
  const [modalState, toggleModal] = useToggle()
  const coursesSelected = useSelector(selectBasketItems)

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="mb-8">Carrito de compras</h1>
        {!coursesSelected.length ? (
          <NoDataWarning message="Ningún curso seleccionado" />
        ) : (
          <div className="flex flex-col gap-4 md:flex-row">
            <BasketList />
            <BasketSummary toggleModal={toggleModal} />
          </div>
        )}
      </div>
      {modalState && (
        <ModalPay creditInfo={creditCards} toggleModal={toggleModal} />
      )}
    </div>
  )
}

export default Checkout
