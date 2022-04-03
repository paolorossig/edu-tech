import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCategories,
  selectCategories
} from '@/features/categories/categorySlice'

function useCategories() {
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories)

  useEffect(() => {
    !categories.options.length && dispatch(getCategories())
  }, [])

  return categories
}

export default useCategories
