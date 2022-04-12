export function alumnosNavConfig() {
  return {
    links: [
      { path: '.', name: 'Inicio' },
      { path: 'courses', name: 'Cursos' },
      { path: 'teachers', name: 'Profesores' },
      { path: 'sesiones', name: 'Sesiones' }
    ],
    buttons: [{ path: 'catalogue', name: 'Catálogo' }]
  }
}
