
import loginImg from "../assets/login.png"
import Template from "../components/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Login to your account"
      description2="Access feedback collection tools."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login