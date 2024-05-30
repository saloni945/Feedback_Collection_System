

import signupImg from '../assets/signup.png';
import Template from "../components/Template"

function Signup() {
  return (
    <Template
      title="Join our Feedback Collection System"
      description1="Build and grow with feedback."
      description2="Engage with your audience and improve your services."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
