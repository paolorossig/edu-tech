import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import Spinner from '@/components/Spinner'

function CoursesViewer({ data, isLoading }) {
  return (
    <section className="-mr-8">
      <h1 className="mb-8">Mis cursos</h1>
      <div className="scrollbar-hide flex gap-8 overflow-y-hidden overflow-x-scroll">
        {isLoading ? (
          <div className="mx-auto">
            <Spinner size="medium" />
          </div>
        ) : data ? (
          data.courses?.map((curso) => (
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
        ) : null}
      </div>
    </section>
  )
}

export default CoursesViewer
