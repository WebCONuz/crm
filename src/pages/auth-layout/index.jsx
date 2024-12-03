import { Outlet } from "react-router-dom";
import AuthHeader from "../../components/auth/AuthHeader";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
