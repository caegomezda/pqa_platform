import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import GoogleLoginButton from '@/components/auth/GoogleLoginButton'
import LoginForm from '@/components/auth/LoginForm'
import { APP_NAME, APP_DESCRIPTION } from '@/lib/utils/constants'

export const metadata = {
  title: `Login - ${APP_NAME}`,
  description: APP_DESCRIPTION,
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-gray-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo y título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {APP_NAME}
          </h1>
          <p className="text-gray-600">
            {APP_DESCRIPTION}
          </p>
        </div>

        {/* Card de login */}
        <Card>
          <CardHeader>
            <CardTitle>Iniciar sesión</CardTitle>
            <CardDescription>
              Accede a tu cuenta para continuar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Login con Google */}
            <Suspense fallback={<div>Cargando...</div>}>
              <GoogleLoginButton />
            </Suspense>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  O continúa con email
                </span>
              </div>
            </div>

            {/* Formulario de login */}
            <LoginForm />
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          ¿No tienes una cuenta?{' '}
          <a href="#" className="text-green-600 hover:text-green-700 font-medium">
            Contacta al administrador
          </a>
        </p>
      </div>
    </div>
  )
}