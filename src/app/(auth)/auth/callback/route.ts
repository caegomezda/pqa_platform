import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { ROUTES } from '@/lib/utils/constants'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Redirect to home after successful login
  return NextResponse.redirect(new URL(ROUTES.HOME, requestUrl.origin))
}