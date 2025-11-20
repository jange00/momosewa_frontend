import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiPhone, FiCheck, FiTruck, FiClock, FiAward } from "react-icons/fi";
import { useGoogleLogin } from "@react-oauth/google";
import { IMAGE_PATHS } from "../../../common/imageConstant";
import Logo from "../../../common/Logo";
import Input from "../../../ui/inputs/Input";
import Checkbox from "../../../ui/inputs/Checkbox";
import Button from "../../../ui/buttons/Button";
import Footer from "../../landing/components/Footer";

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

  // Determine if input is email or phone
  const isEmail = formData.emailOrPhone.includes("@");
  const InputIcon = isEmail ? FiMail : FiPhone;

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
          {/* Left Section - Clean & Simple */}
          <div className="hidden lg:flex relative bg-gradient-to-br from-deep-maroon via-[#7a2533] to-[#6a1f2d] p-8 xl:p-10 flex flex-col justify-center overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 right-20 w-96 h-96 bg-golden-amber/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-golden-amber/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-white">
              {/* Brand Name */}
              <div className="mb-8">
                <h2 className="text-4xl xl:text-5xl font-black text-golden-amber mb-2">
                  Momo<span className="text-white">Sewa</span>
                </h2>
                <p className="text-white/70 text-base">Authentic Nepali Cuisine</p>
              </div>

              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-5xl xl:text-6xl font-black mb-3 leading-tight">
                  Welcome Back
                </h1>
                <p className="text-white/80 text-lg mb-4">
                  Sign in with your MomoSewa credentials
                </p>
                <div className="inline-block px-5 py-2.5 bg-golden-amber/20 rounded-full border border-golden-amber/30">
                  <p className="text-sm text-golden-amber font-semibold">स्वागत छ - Welcome</p>
                </div>
              </div>

              {/* Feature Box */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-golden-amber/20 mb-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  Access MomoSewa Platform
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  Manage your orders, track deliveries in real-time, customize your momo preferences, and unlock premium features for the best momo experience.
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-golden-amber text-sm font-semibold italic">
                    "ताजा मोमो, तुरुन्त वितरण"
                  </p>
                  <p className="text-white/60 text-xs mt-1">Fresh Momos, Instant Delivery</p>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/60 text-xs mb-2 uppercase tracking-wider">Trusted By</p>
                <p className="text-white font-bold text-lg mb-2">Customers & Vendors</p>
                <p className="text-golden-amber/90 text-sm font-medium">
                  "हाम्रो ग्राहक हाम्रो परिवार"
                </p>
                <p className="text-white/50 text-xs mt-1">Our Customers, Our Family</p>
              </div>
            </div>
          </div>

          {/* Right Section - Professional Login Form */}
          <div className="flex items-center justify-center p-6 lg:p-8 bg-white">
            <div className="w-full max-w-md">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4 lg:hidden">
                  <img 
                    src={IMAGE_PATHS.LOGO} 
                    alt="MomoSewa Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h1 className="text-2xl lg:text-3xl font-black text-charcoal-grey mb-2">
                  Welcome Back
                </h1>
                <p className="text-charcoal-grey/70 text-sm">
                  Sign in to your MomoSewa account
                </p>
              </div>

              {/* Login Form */}
              <div className="bg-white rounded-xl border border-charcoal-grey/10 p-6 lg:p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email/Phone Input */}
                  <Input
                    label="Email or Phone"
                    type="text"
                    name="emailOrPhone"
                    placeholder="Enter your email or phone number"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    error={errors.emailOrPhone}
                    icon={InputIcon}
                    required
                  />

                  {/* Password Input */}
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    icon={FiLock}
                    required
                  />

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <Checkbox
                      label="Remember Me"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <Link
                      to="/forgot-password"
                      className="text-sm font-semibold text-deep-maroon hover:text-golden-amber transition-colors duration-200"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>

                  {/* Divider */}
                  <div className="relative my-5">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-charcoal-grey/15"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-charcoal-grey/60 font-medium">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  {/* Google Login Button */}
                  <button
                    type="button"
                    onClick={() => handleGoogleLogin()}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-charcoal-grey/20 rounded-xl bg-white hover:bg-charcoal-grey/5 hover:border-golden-amber/40 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-charcoal-grey group-hover:text-deep-maroon transition-colors">
                      Continue with Google
                    </span>
                  </button>

                  {/* Sign Up Link */}
                  <div className="text-center pt-2">
                    <p className="text-sm text-charcoal-grey/70">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="font-semibold text-deep-maroon hover:text-golden-amber transition-colors duration-200"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

              {/* Footer Note */}
              <p className="text-center text-xs text-charcoal-grey/50 mt-6">
                By signing in, you agree to our{" "}
                <Link to="/terms" className="text-deep-maroon hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-deep-maroon hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer Below */}
      <Footer />
    </div>
  );
};

export default LoginPage;

