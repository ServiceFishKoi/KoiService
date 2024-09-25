import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {  toast } from 'react-toastify';
import { apiLogin } from '../apis/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleForm = () => setIsLoginForm(!isLoginForm);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    try {
        const response = await apiLogin(data);
        console.log("Response:", response); 

        if (response && response.token) {
            const token = response.token; 
            localStorage.setItem("token", token); 
            toast.success("Login successful!");
            navigate("/"); 
        } else {
            throw new Error("No token received");
        }
    } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error.message);
        toast.error("Login failed! Please check your Username and Password.");
    }
};


  const onRegisterSubmit = (data) => {
    console.log("Register Data:", data);
  };


  return (
    <div id="login">
      <div className="container">
        <div className="section-header">
          <h3>{isLoginForm ? 'Sign In' : 'Sign Up'}</h3>
          <p>
            {isLoginForm ? "Don't have an account?" : "Already have an account?"} 
            <button onClick={toggleForm}>
              {isLoginForm ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        <div className="form-container">
          {isLoginForm ? (
            <form onSubmit={handleSubmit(onLoginSubmit)} className="form" >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" }
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <button className="btn-submit" type="submit">Sign In</button>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onRegisterSubmit)} className="form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" }
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat Your Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => value === watch("password") || "Passwords do not match"
                  })}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
              </div>
              <button className="btn-submit" type="submit">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
