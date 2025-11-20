import { Link } from "react-router-dom";
import Button from "../ui/buttons/Button";
import Input from "../ui/inputs/Input";
import { FiMail, FiLock } from "react-icons/fi";

const LoginPage = () => {
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

