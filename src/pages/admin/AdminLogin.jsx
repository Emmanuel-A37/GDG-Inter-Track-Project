import Button from "../../components/Button";
import Eye from "../../assets/eye.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeOff } from "lucide-react";
import Header from "../../components/Header";
import { adminLogin } from "../../utils/service";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    setLoading(true);

    try {
      const response = await adminLogin(password);

      if (response.success) {
        localStorage.setItem("admin_token", response.token);
        navigate("/admin/home", { replace: true });
      }
    } catch (err) {
      setError(err.message || "Invalid password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:bg-grey">
      <Header
        headerTitle="Admin Portal"
        showIcons={true}
        customClass="bg-grey border-0"
      />
      <main className="flex-1 px-4 pb-4 pt-8 md:pt-11.5 lg:pt-24.5 flex flex-col lg:justify-center lg:mx-auto lg:max-w-120 w-full">
        <form onSubmit={handleLogin} className="flex-1 flex flex-col">
          <div className="flex-1">
            <h1 className="text-[32px] font-bold text-dark mb-2 md:mb-2.5 lg:mb-5 lg:text-center">
              Welcome Back
            </h1>

            <p className="text-[14px] md:text-base text-darkGrey lg:hidden">
              Enter the password to access the admin portal.
            </p>

            <div className="mt-4 md:mt-6 w-full">
              <label
                className="text-[14px] text-dark mb-1 block"
                htmlFor="password"
              >
                Password
              </label>

              <div className="relative rounded-lg border border-lightGrey lg:bg-white lg:border-white w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  autoComplete="current-password"
                  aria-invalid={!!error}
                  className="w-full pr-12 py-3 pl-3 border-0 outline-0"
                />

                {showPassword ? (
                  <EyeOff
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#60708a]"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <img
                    src={Eye}
                    alt="Show password"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              {error && (
                <p className="text-[12px] md:text-sm text-red-500 mt-1">
                  {error}
                </p>
              )}
            </div>

            <p className="mt-4 text-[11px] md:text-[14px] text-primary md:font-medium cursor-pointer">
              <a href="#">Forgot Password?</a>
            </p>
          </div>

          <Button
            type="submit"
            title={loading ? "Logging in..." : "Login"}
            disabled={loading}
          />
        </form>
      </main>
    </div>
  );
};

export default AdminLogin;
