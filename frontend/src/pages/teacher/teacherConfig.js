/* eslint-disable no-dupe-keys */
export function teacherNavConfig() {
  return {
    links: [
      { path: '.', name: 'Inicio' },
      { path: 'cursos', name: 'Cursos' },
      { path: 'actividades', name: 'Actividades' },
      { path: 'calendario', name: 'Calendario' },
      { path: 'estadisticas', name: 'Estadisticas' }
    ],
    buttons: ['Configuración']
  }
}

export const cursosTeacher = [
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
    name: 'Crea un curso',
    tag: 'Crea un curso',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm2PFi_UoiVijStrTiZIBqHtf8fap_VMbzw&usqp=CAU'
  }
]

export const cursosestadisticas = [
  {
    id: 1,
    curso: 'Javascript: async / await',
    matriculados: 50,
    enlinea: 2,
    conectadoshoy: 20,
    url: 'https://devsdata.com/wp-content/uploads/2020/08/acync_await-1.png'
  },
  {
    id: 1,
    curso: 'React: Hooks',
    matriculados: 35,
    enlinea: 5,
    conectadoshoy: 10,
    url: 'https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png'
  },
  {
    id: 1,
    curso: 'Docker: Images',
    matriculados: 59,
    enlinea: 18,
    conectadoshoy: 15,
    url: 'https://laravelnews.imgix.net/images/docker.png?ixlib=php-3.3.1'
  }
]

export const notificacions_Teacher = [
  {
    id: 1,
    name: 'Paolo',
    url: 'https://avatars.githubusercontent.com/u/62861353?v=4',
    consulta: 'Tengo una pregunta sobre el curso de Javascript'
  }
]

export const category_courses = [
  {
    CatCourses: 'Development',
    CatCourses: 'Math',
    CatCourses: 'Deport',
    CatCourses: 'Software',
    CatCourses: 'Javascript'
  }
]
