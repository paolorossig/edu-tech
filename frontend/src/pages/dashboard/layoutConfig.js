export function alumnosNavConfig() {
  return {
    links: [
      { path: '.', name: 'Inicio' },
      { path: 'courses', name: 'Cursos' },
      { path: 'mentors', name: 'Mentores' },
      { path: 'sesiones', name: 'Sesiones' },
      { path: 'actividades', name: 'Actividades' },
      { path: 'eventos', name: 'Eventos' }
    ],
    buttons: [{ path: 'catalogue', name: 'Catálogo' }]
  }
}
