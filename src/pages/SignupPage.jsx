import { Link } from "react-router-dom";
import Button from "../ui/buttons/Button";
import Input from "../ui/inputs/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-grey/3 via-white to-golden-amber/5 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-charcoal-grey/10 p-8 shadow-xl">
          <h1 className="text-3xl font-black text-charcoal-grey mb-2">Create Account</h1>
          <p className="text-charcoal-grey/60 mb-8">Sign up to start ordering from MomoSewa</p>
          
          <form className="space-y-6">
            <Input
              type="text"
              placeholder="Full name"
              icon={FiUser}
            />
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
            <Input
              type="password"
              placeholder="Confirm password"
              icon={FiLock}
            />
            
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 rounded border-charcoal-grey/20" />
              <label className="text-charcoal-grey/70">
                I agree to the{" "}
                <Link to="/terms" className="text-deep-maroon hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-deep-maroon hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            
            <Button variant="primary" size="md" className="w-full">
              Create Account
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-charcoal-grey/60 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-deep-maroon hover:underline font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

