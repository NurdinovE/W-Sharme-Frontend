import { LoginForm } from '@/features/auth/email-password-auth/index.js'
import { AuthTemplate } from '../../../widgets/auth-widget'

// import { useAuthState } from 'react-firebase-hooks/auth';

export function LoginPage() {
  return (
    // <div
    //   style={{
    //     maxWidth: '100%',
    //     width: '100%',
    //     height: '100%',
    //     display: 'flex',
    //     flexDirection: 'column'
    //   }}
    // >
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
    // {/* </div> */}
  )
}
