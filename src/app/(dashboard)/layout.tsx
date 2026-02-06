import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Navbar from '@/components/dashboard/Navbar'
import { ROUTES } from '@/lib/utils/constants'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(ROUTES.LOGIN)
  }

  // Obtener datos del usuario de la base de datos
  const { data: userData } = await supabase
    .from('usuarios')
    .select('*')
    .eq('id', user.id)
    .single()

  const userInfo = {
    id: user.id,
    email: user.email!,
    nombre: userData?.nombre,
    rol: userData?.rol || 'evaluador',
    created_at: user.created_at!,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={userInfo} />
      <main>{children}</main>
    </div>
  )
}