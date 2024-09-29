import { useState } from "react";
import LoginForm from "../Login/LoginForm";
import SignUpForm from "../SignUp/SignUpForm";

export default function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleForm = () => setIsLoginForm(!isLoginForm);

  return (
    <div id="login">
      <div className="container">
        <div className="section-header">
          <h3>{isLoginForm ? "Sign In" : "Sign Up"}</h3>
          <p>
            {isLoginForm
              ? "Don't have an account?"
              : "Already have an account?"}
            <button onClick={toggleForm}>
              {isLoginForm ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>

        <div className="form-container">
          {isLoginForm ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}
