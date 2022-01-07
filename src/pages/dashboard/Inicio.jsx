import Badge from '../../components/Badge'
import Card from '../../components/Card'

function Inicio() {
  const cursos = [
    {
      name: 'Javascript: async / await',
      tag: 'Web Development',
      url: 'https://devsdata.com/wp-content/uploads/2020/08/acync_await-1.png'
    },
    {
      name: 'React: Hooks',
      tag: 'Web Development',
      url: 'https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png'
    },
    {
      name: 'Docker: Images',
      tag: 'DevOps',
      url: 'https://laravelnews.imgix.net/images/docker.png?ixlib=php-3.3.1'
    }
  ]

  const mentores = [
    { name: 'Cesar Arroyo', tag: 'Front end', users: '15' },
    { name: 'Fernando', tag: 'Back end', users: '12' },
    { name: 'Jose Cueva', tag: 'Front end', users: '10' },
    { name: 'Renzo', tag: 'Back end', users: '8' }
  ]

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="mb-8">Mis cursos</h1>
        <div className="flex gap-8">
          {cursos.map((curso, index) => (
            <Card element={curso} key={index} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-8">Mentores Disponibles</h1>
        <div className="flex gap-8 flex-wrap">
          {mentores.map((mentor, index) => (
            <Badge element={mentor} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inicio
