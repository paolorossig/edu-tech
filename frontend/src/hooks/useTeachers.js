import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTeachers, selectTeachers } from '@/features/teachers/teacherSlice'

function useTeachers() {
  const dispatch = useDispatch()
  const teachers = useSelector(selectTeachers)

  useEffect(() => {
    !teachers.users?.length && dispatch(getTeachers())
  }, [])

  return teachers
}

export default useTeachers
