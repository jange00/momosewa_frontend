import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import LoginPromo from "../features/auth/components/LoginPromo";
import LoginForm from "../features/auth/components/LoginForm";
import Footer from "../features/landing/components/Footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
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
    
    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", formData);
      setIsLoading(false);
      // Navigate to dashboard or home after successful login
      navigate("/");
    }, 1000);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google login success:", tokenResponse);
      // Handle Google login success
      navigate("/");
    },
    onError: () => {
      console.error("Google login failed");
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-grey/5 via-white to-golden-amber/5 flex flex-col relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-deep-maroon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-golden-amber/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Professional Container */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-charcoal-grey/10">
            {/* Left Section - Promotional */}
            <LoginPromo />

            {/* Right Section - Login Form */}
            <LoginForm
              formData={formData}
              errors={errors}
              isLoading={isLoading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleGoogleLogin={handleGoogleLogin}
            />
          </div>
        </div>
      </div>

      {/* Footer Below */}
      <Footer />
    </div>
  );
};

export default LoginPage;

