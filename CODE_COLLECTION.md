# Code Collection

## User Folder

### src/pages/user/Details.jsx

```jsx
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { ChevronLeft } from "lucide-react";
import { apiCall } from "../../utils/api";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const isBuilding = location.pathname.includes("buildings");
        const endpoint = isBuilding
          ? `/buildings/${id}`
          : `/routes/${id}`;

        const res = await apiCall(endpoint);
        setItem(res.data);
      } catch (err) {
        console.error("Failed to fetch details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, location.pathname]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!item) return <p className="p-4">Item not found</p>;

  return (
    <div>
      <Navbar title={item.name || item.title}>
        <button onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
      </Navbar>

      {item.image_url && (
        <div className="h-80 overflow-hidden">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3 className="text-2xl font-bold pl-3 mt-4">
        {item.name}
      </h3>

      {item.description && (
        <p className="pl-6 pt-4 text-gray-600">
          {item.description}
        </p>
      )}
    </div>
  );
};

export default Details;

```

### src/pages/user/Home.jsx

```jsx
import React, { useState, useEffect } from "react";
import Searchbar from "../../components/Searchbar.jsx";
import Item from "../../components/Item.jsx";
import { Link, useNavigate } from "react-router-dom";
import { House, PersonStanding } from "lucide-react";
import { getRecent } from "../../utils/recent";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  setEntries(getRecent());
}, []);


  const handleItemClick = (item) => {
    if (item.type === "building") {
      navigate(`/home/buildings/${item.id}`, { state: { item } });
    } else if (item.type === "route") {
      navigate(`/home/routes/${item.id}`, { state: { item } });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F7F8]">
      <h1 className="text-[32px] font-bold text-dark pl-4 pt-[104.14px]">
        Welcome, Student!
      </h1>
      <Searchbar
        onResults={(results) => {
          setEntries(results);
        }}
      />

      <div className="flex gap-4 py-3 px-4">
        <Link
          to=""
          className="flex flex-col items-center justify-center h-40 bg-[#E7F2FE] w-full rounded-2xl p-6 my-3"
        >
          <div className="w-14 h-14 bg-[#137FEC] rounded-full flex items-center justify-center">
            <House size={30} className="text-white" />
          </div>
          <p className="font-bold">Find Building</p>
        </Link>
        <Link
          to=""
          className="flex flex-col items-center justify-center h-40 bg-[#FEF5E9] w-full rounded-2xl p-6 my-3"
        >
          <div className="w-14 h-14 bg-[#F8B449] rounded-full flex items-center justify-center">
            <PersonStanding size={30} className="text-white" />
          </div>
          <p className="font-bold">Find Lecturer</p>
        </Link>
      </div>

      <h3 className="text-dark font-bold text-lg p-4">
        {entries.length > 0 ? "Recent Searches" : "No Recent Searches"}
      </h3>
      <div className="flex flex-col gap-4  pl-4 pr-4">
        {entries.map((entry, index) => (
          <Item
            key={`${entry.type}-${entry.id}`}
            item={entry}
            index={index}
            onClick={() => handleItemClick(entry)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
```

### src/pages/user/Login.jsx

```jsx
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
      navigate("/home");
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
```

### src/pages/user/SearchResults.jsx

```jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Item from "../../components/Item";
import { saveToRecent } from "../../utils/recent";
import { apiCall } from "../../utils/api";

const SearchResults = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  const query = new URLSearchParams(search).get("q");

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const dataB = await apiCall(`/buildings/search?q=${query}`);
      const dataR = await apiCall(`/routes/search?q=${query}`);

      const items = [];

      if (dataB.success) {
        dataB.data.forEach((b) => {
          const item = { ...b, type: "building" };
          saveToRecent(item);
          items.push(item);
        });
      }

      if (dataR.success) {
        dataR.data.forEach((r) => {
          const item = { ...r, type: "route" };
          saveToRecent(item);
          items.push(item);
        });
      }

      setResults(items);
    };

    fetchResults();
  }, [query]);

  const handleClick = (item) => {
    saveToRecent(item);
    navigate(
      item.type === "building"
        ? `/home/buildings/${item.id}`
        : `/home/routes/${item.id}`
    );
  };

  return (
    <div className="p-4">
      {results.map((item, i) => (
        <Item
          key={`${item.type}-${item.id}`}
          item={item}
          index={i}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
};

export default SearchResults;
```

### src/pages/user/Signup.jsx

```jsx
import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

const Signup = () => {
  return (
    <div className="bg-[#F6F7F8] min-h-screen flex flex-col items-center justify-center">
      <Navbar title={"User Signup"} />

      <form className="flex flex-col justify-between items-center min-h-screen w-md">
        <h1 className="lexend font-bold text-3xl">We are glad to have you!</h1>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              className="h-10 bg-white w-md drop-shadow-3xl focus:outline-none p-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              className="h-10 bg-white w-md drop-shadow-3xl focus:outline-none p-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="h-10 bg-white w-md drop-shadow-3xl focus:outline-none p-3"
            />
          </div>
        </div>

        <Button type="submit" className="bg-primary text-white w-full mb-20">
          Signup
        </Button>
      </form>
    </div>
  );
};

export default Signup;
```

### src/pages/user/UserFlow.jsx

```jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Details from "./Details";
import UserLayout from "./UserLayout";
import UserProtectedRoute from "../../components/UserProtectedRoute";
import SearchResults from "./SearchResults";

const UserFlow = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        element={
          <UserProtectedRoute>
            <UserLayout />
          </UserProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/home/recent/:id" element={<Details />} />
        <Route path="/home/search" element={<SearchResults />} />
        <Route path="/home/buildings/:id" element={<Details />} />
        <Route path="/home/routes/:id" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default UserFlow;
```

---

## Item Component

### src/components/Item.jsx

```jsx
import { ChevronRight, Map, Building } from "lucide-react";

const iconMap = {
  building: Building,
  route: Map,
};

const Item = ({ item, index, onClick }) => {
  const Icon = iconMap[item.type] || Building;

  const colors =
    index % 2 === 0
      ? "bg-[#E7F2FD] text-[#137FEC]"
      : "bg-[#FEF5E9] text-[#F8B449]";

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl p-3 bg-white ${colors}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center `}
        >
          <Icon className="w-6 h-6" />
        </div>
        <p className="font-bold">{item.title}</p>
      </div>
      <ChevronRight />
    </button>
  );
};

export default Item;
```

---

## API & Service

### src/utils/api.js

```javascript
const API_BASE_URL = "http://localhost:8000/api/v1";

export const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem("admin_token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.message || "API Error");
  }

  return data;
};
```

### src/utils/service.js

```javascript
import { apiCall } from "./api";


export const adminLogin = (password) => {
  return apiCall("/auth/login", {
    method: "POST",
    body: JSON.stringify({ password }),
  });
};
```

---

## Searchbar Component

### src/components/Searchbar.jsx

```jsx
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchText.trim()) return;
    navigate(`/home/search?q=${encodeURIComponent(searchText)}`);
  };

  return (
    <div className="relative flex items-center w-full px-4 py-3">
      <button
        onClick={handleSearch}
        className="absolute left-5 top-1/2 -translate-y-1/2"
      >
        <SearchIcon size={24} />
      </button>

      <input
        value={searchText}
        className="flex-1 border pl-10 h-14 rounded-md"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default Searchbar;
```

---

## User Protected Route

### src/components/UserProtectedRoute.jsx

```jsx
import { Navigate } from "react-router-dom"


const UserProtectedRoute = ({ children}) => {
    const isUserAuthenticated = localStorage.getItem("user_auth") === "true"

    if (!isUserAuthenticated) {
        return <Navigate to="/" replace />
    }

    return children
}

export default UserProtectedRoute
```

---

## Root Button Component

### src/components/Button.jsx

```jsx
import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  href,
}) => {
  const base = `px-4 py-2 rounded ${className}`;
  if (href) {
    return (
      <a href={href} className={base} aria-disabled={disabled}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

```

---

## Utils

### src/utils/recent.js

```javascript
const KEY = "recent_searches";

export const saveToRecent = (item) => {
  const existing = getRecent();

  const filtered = existing.filter(
    (r) => !(r.id === item.id && r.type === item.type)
  );

  const updated = [{ ...item, createdAt: Date.now() }, ...filtered].slice(
    0,
    10
  );

  localStorage.setItem(KEY, JSON.stringify(updated));
};

```
