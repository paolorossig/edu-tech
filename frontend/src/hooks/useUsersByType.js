import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getStudents,
  getTeachers,
  selectStudents,
  selectTeachers
} from '@/features/teachers/teacherSlice'

function useUsersByType() {
  const dispatch = useDispatch()
  const teachers = useSelector(selectTeachers)
  const students = useSelector(selectStudents)

  useEffect(() => {
    !teachers?.length && dispatch(getTeachers())
    !students?.length && dispatch(getStudents())
  }, [])

  return { teachers, students }
}

export default useUsersByType
