import { Routes, Route } from "react-router-dom";

import UserLayout from "./pages/user-layout";
import HomePage from "./pages/user-layout/home";
import AboutPage from "./pages/user-layout/about";
import Error from "./pages/error-layout";
import ContactPage from "./pages/user-layout/contact";
import PortfolioPage from "./pages/user-layout/portfolio";

import AuthLayout from "./pages/auth-layout";
import LoginPage from "./pages/auth-layout/login";
import RegisterPage from "./pages/auth-layout/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/user" element={<UserLayout />}>
          <Route path="/user/" element={<HomePage />} />
          <Route path="/user/about" element={<AboutPage />} />
          <Route path="/user/contact" element={<ContactPage />} />
          <Route path="/user/portfolio" element={<PortfolioPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
