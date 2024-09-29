import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { register as registerUser } from "../../../stores/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegisterSubmit = async (data) => {
    console.log("Register Data:", data);
    try {
      const response = await dispatch(registerUser({
        name: data.name,
        address: data.address,
        email: data.email,
        password: data.password,
      }));

      if (response.error) {
        throw new Error(response.error.message);
      }
      console.log("Registration Response:", response);
      navigate("/login"); 
    } catch (error) {
      console.error("Registration error:", error.message);
      toast.error("Registration failed! Please check your input and try again.");
    }
  };

  return (
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
          type="text"
          className="form-control"
          placeholder="Your Address"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format",
            },
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
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
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
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button className="btn-submit" type="submit">
        Sign Up
      </button>
    </form>
  );
}
