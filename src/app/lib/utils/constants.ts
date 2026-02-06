export const APP_NAME = 'PQA Platform'
export const APP_DESCRIPTION = 'Plataforma de Evaluación de Gestión Sostenible'

export const ROUTES = {
  HOME: '/home',
  LOGIN: '/login',
  CUESTIONARIO: '/cuestionario',
  ADMIN: '/admin',
} as const

export const ROLE = {
  ADMIN: 'admin',
  EVALUADOR: 'evaluador',
  CONSULTOR: 'consultor',
} as const