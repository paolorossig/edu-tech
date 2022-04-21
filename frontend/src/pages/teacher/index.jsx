import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import TeacherHome from './TeacherHome'
import TeacherCourses from './courses'
import CreateCourse from './courses/CreateCourse'
import TeacherChats from './chats'
import ChatWithStudent from './chats/ChatWithStudent'
import NoDataWarning from '@/components/NoDataWarning'
import { teacherNavConfig } from './teacherConfig'
import CourseLessons from './lessons'
import RegisterLesson from './lessons/CreateLesson'
import CourseLessonsQuestions from './questions'
import RegisterQuestion from './questions/CreateQuestion'
import CourseLessonsQuestionsAnswers from './answers'
import RegisterAnswer from './answers/CreateAnswer'

function TeacherDashboard() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DashboardLayout navConfig={teacherNavConfig} />}
      >
        <Route index element={<TeacherHome />} />
        <Route path="courses">
          <Route index element={<TeacherCourses />} />
          <Route path="create" element={<CreateCourse />} />
          <Route path=":courseId">
            <Route index element={<Navigate to="lessons" />} />
            <Route path="lessons">
              <Route index element={<CourseLessons />} />
              <Route path="create" element={<RegisterLesson />} />
              <Route path=":lessonId">
                <Route index element={<Navigate to="questions" />} />
                <Route path="questions">
                  <Route index element={<CourseLessonsQuestions />} />
                  <Route path="create" element={<RegisterQuestion />} />
                  <Route path=":questionId">
                    <Route index element={<Navigate to="answers" />} />
                    <Route path="answers">
                      <Route
                        index
                        element={<CourseLessonsQuestionsAnswers />}
                      />
                      <Route path="create" element={<RegisterAnswer />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="chats" element={<TeacherChats />}>
          <Route
            index
            element={<NoDataWarning message="Selecciona un chat" />}
          />
          <Route path=":userId" element={<ChatWithStudent />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default TeacherDashboard
