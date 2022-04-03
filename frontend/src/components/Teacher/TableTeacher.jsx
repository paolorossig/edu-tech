import { estadisticas } from '@/data/cursos.json'

function tableTeacher({ className }) {
  return (
    <section className={className}>
      <h1 className="mb-8">Estadísticas de tus cursos</h1>
      <div className="scrollbar-hide -mr-8 overflow-y-hidden overflow-x-scroll md:mr-0">
        <table className="table">
          <thead>
            <tr>
              <th className="table_head text-left">Cursos</th>
              <th className="table_head">Matriculados</th>
              <th className="table_head">Conectados</th>
              <th className="table_head">Hoy</th>
            </tr>
          </thead>
          <tbody className="table_body">
            {estadisticas.map((element, index) => {
              const { curso, matriculados, enlinea, conectadoshoy, url } =
                element

              return (
                <tr key={index}>
                  <td className="table_row flex items-center">
                    <img
                      src={url}
                      alt="course-image"
                      className="mr-4 h-10 w-10 rounded-full"
                    />
                    <label>{curso}</label>
                  </td>
                  <td className="table_row">{matriculados}</td>
                  <td className="table_row">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-100 font-semibold text-green-800">
                      {enlinea}
                    </span>
                  </td>
                  <td className="table_row">{conectadoshoy}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default tableTeacher
