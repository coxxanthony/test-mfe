import dynamic from 'next/dynamic';
const Login = dynamic(
  async () => {
    return import('login/Login')
  },
  {
    ssr: false
  }
)

export default Login