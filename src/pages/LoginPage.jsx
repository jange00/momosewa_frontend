
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import LoginPromo from "../features/auth/components/login/LoginPromo";
import LoginForm from "../features/auth/components/login/LoginForm";
import Footer from "../features/landing/components/Footer";
import { ROLE_DASHBOARD_ROUTES, USER_ROLES } from "../common/roleConstants";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhones: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Email or Phone is required";
    } else if (
      !/^[\w\.-]+@[\w\.-]+\.\w+$/.test(formData.emailOrPhone) &&
      !/^\+?[\d\s-()]{10,}$/.test(formData.emailOrPhone)
    ) {
      newErrors.emailOrPhone = "Please enter a valid email or phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - In real app, API will return user role and token
    setTimeout(() => {
      console.log("Login attempt:", formData);
      
      // TODO: In production, replace this with actual API call
      // const response = await api.post('/auth/login', formData);
      // const { user, token, role } = response.data;
      // localStorage.setItem('token', token);
      // localStorage.setItem('role', role);
      
      // Get role from localStorage (in real app, this comes from API response)
      const userRole = localStorage.getItem("role");
      
      setIsLoading(false);
      
      // Redirect based on user role
      if (userRole && ROLE_DASHBOARD_ROUTES[userRole]) {
        navigate(ROLE_DASHBOARD_ROUTES[userRole]);
      } else {
        // Default to landing page if no role is set
        // In production, you might want to show an error or redirect to signup
        navigate("/");
      }
    }, 1000);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google login success:", tokenResponse);
      
      // TODO: In production, send token to backend to get user role
      // const response = await api.post('/auth/google', { token: tokenResponse.access_token });
      // const { user, token, role } = response.data;
      // localStorage.setItem('token', token);
      // localStorage.setItem('role', role);
      
      // For now, get role from localStorage
      // In production, role should come from API response
      const userRole = localStorage.getItem("role");
      
      if (userRole && ROLE_DASHBOARD_ROUTES[userRole]) {
        navigate(ROLE_DASHBOARD_ROUTES[userRole]);
      } else {
        // No role found - might need to complete profile or select role
        navigate("/");
      }
    },
    onError: () => {
      console.error("Google login failed");
      // TODO: Show error toast/notification to user
    },
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-grey/3 via-white to-golden-amber/5 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-charcoal-grey/10 p-8 shadow-xl">
          <h1 className="text-3xl font-black text-charcoal-grey mb-2">Welcome Back</h1>
          <p className="text-charcoal-grey/60 mb-8">Sign in to continue to MomoSewa</p>
          
          <form className="space-y-6">
            <Input
              type="email"
              placeholder="Email address"
              icon={FiMail}
            />
            <Input
              type="password"
              placeholder="Password"
              icon={FiLock}
            />
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-charcoal-grey/70 cursor-pointer">
                <input type="checkbox" className="rounded border-charcoal-grey/20" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-deep-maroon hover:underline font-medium">
                Forgot password?
              </Link>
            </div>
            
            <Button variant="primary" size="md" className="w-full">
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-charcoal-grey/60 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-deep-maroon hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
