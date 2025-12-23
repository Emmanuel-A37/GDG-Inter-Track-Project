import Button from "../../components/Button";
import { EyeIcon } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
const Login = () => {
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

    timerRef.current = setTimeout(() => {
      if (password !== "12345") {
        setError("Incorrect password. Please try again.");
        setLoading(false);
        return;
      }
      localStorage.setItem("user_auth", "true");
      navigate("/");
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    // <div className="bg-[#F6F7F8] min-h-screen flex flex-col items-center justify-center">
    //   <Navbar title={"User Login"} />

    //   <div className="flex flex-col justify-between items-center min-h-screen w-md">
    //     <form onSubmit={handleLogin}>
    //       <h1 className="lexend font-bold text-3xl">Welcome Back</h1>
    //       <div className="flex flex-col">
    //         <label htmlFor="password">Password: </label>
    //           <div className="relative rounded-lg border border-lightGrey lg:bg-white lg:border-white w-full">
    //             <input
    //               type={showPassword ? "text" : "password"}
    //               id="password"
    //               value={password}
    //               onChange={(e) => {
    //                 setPassword(e.target.value);
    //                 setError("");
    //               }}
    //               autoComplete="current-password"
    //               aria-invalid={!!error}
    //               className="w-full pr-12 py-3 pl-3 border-0 outline-0"
    //             />

    //             {showPassword ? (
    //               <EyeOff
    //                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#60708a]"
    //                 onClick={() => setShowPassword(false)}
    //               />
    //             ) : (
    //               <EyeIcon
    //                 alt="Show password"
    //                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
    //                 onClick={() => setShowPassword(true)}
    //               />
    //             )}
    //           </div>
    //         <p className="text-sm text-primary mt-1">Forgot password?</p>
    //       </div>
    //        {error && (
    //             <p className="text-[12px] md:text-sm text-red-500 mt-1">
    //               {error}
    //             </p>
    //           )}
    //       <Button
    //         type="submit"
    //         disabled={loading}
    //         className="bg-primary text-white w-full mb-20"
    //       >
    //         Login
    //       </Button>
    //     </form>
    //     {/* Dont have an account
    //     <span
    //       onClick={() => goTo("signup")}
    //       className="ml-2 text-blue-600 cursor-pointer"
    //     >
    //       Signup
    //     </span> */}
    //   </div>
    // </div>
    <div className="min-h-screen flex flex-col lg:bg-grey">
      <Header
        headerTitle="User Portal"
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
                  <EyeIcon
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
            disabled={loading}
            className="bg-primary text-white w-full mb-20"
          >
            Login
          </Button>
        </form>
      </main>
    </div>
  );
};

export default Login;
