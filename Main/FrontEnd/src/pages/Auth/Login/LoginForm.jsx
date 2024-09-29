import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { login } from "../../../stores/slices/authSlice"; // Import action login

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Khởi tạo useDispatch

  const onLoginSubmit = async (data) => {
    try {
      const response = await dispatch(login(data)); // Dispatch login action
      console.log("Response:", response);
      if (response.payload && response.payload.token) {
        const token = response.payload.token; // Lấy token từ response
        localStorage.setItem("token", token); // Lưu token vào localStorage
        toast.success("Login successful!");
        navigate("/");
      } else {
        throw new Error("No token received");
      }
    } catch (error) {
      toast.error("Login failed! Please check your Username and Password.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)} className="form">
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
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button className="btn-submit" type="submit">
        Sign In
      </button>
    </form>
  );
}
