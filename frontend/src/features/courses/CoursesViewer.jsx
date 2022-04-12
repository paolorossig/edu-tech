import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import Spinner from '@/components/Spinner'
import NoDataWarning from '@/components/NoDataWarning'

function CoursesViewer({ data, isLoading }) {
  return (
    <section className="-mr-4 md:-mr-8">
      <h1 className="mb-8">Mis cursos</h1>
      <div className="scrollbar-hide flex gap-8 overflow-y-hidden overflow-x-scroll">
        {isLoading ? (
          <div className="mx-auto">
            <Spinner size="medium" />
          </div>
        ) : data?.courses.length ? (
          data.courses.map((curso) => (
            <Link
              to={`courses/${encodeURIComponent(curso._id)}`}
              key={curso._id}
            >
              <Card
                title={curso.name}
                subtitle={curso.category.name}
                imageUrl={curso.imageURL}
                element={curso}
              />
            </Link>
          ))
        ) : (
          <NoDataWarning message="No cuentas con acceso a ningún curso" />
        )}
      </div>
    </section>
  )
}

export default CoursesViewer
