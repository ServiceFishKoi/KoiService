import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { register as registerUser } from "../../../stores/slices/authSlice";

export default function SignUpForm({ onSuccess }) { 
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const onRegisterSubmit = async (data) => {
    try {
      const response = await dispatch(registerUser({
        username: data.username,
        address: data.address,
        email: data.email,
        password: data.password,
      }));
      console.log('Redux registration response:', response);
      if (response.error) {
        toast.error('Email has already registered'); 
      } else {
        toast.success("Registration successful!");
        onSuccess(); // chuyển sang login khi success
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onRegisterSubmit)} className="form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          {...register("username", { required: "Name is required" })}  
        />
        {errors.username && <p>{errors.username.message}</p>}  
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
