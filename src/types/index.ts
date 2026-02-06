export interface User {
  id: string
  email: string
  nombre?: string
  rol: 'admin' | 'evaluador' | 'consultor'
  created_at: string
}

export interface Pregunta {
  id: number
  numero: number
  dimension: string
  aspecto: string
  pregunta: string
  tipo: 'si_no' | 'multiple' | 'numerica' | 'abierta' | 'porcentaje'
  requiere_ia: boolean
}

export interface Respuesta {
  id: string
  usuario_id: string
  pregunta_id: number
  respuesta: any
  puntaje?: number
  estado: 'borrador' | 'completada'
  created_at: string
}