import { useRef, useState, useEffect } from "react";
import { useStateValue } from "../../context/auth.context";
import { useNavigate, useLocation } from "react-router-dom";

const RegisterPage = () => {
  const [update, setUpdated] = useState(false);
  const { user, setUser } = useStateValue();
  const navigate = useNavigate();

  const username = useRef("");
  const email = useRef("");
  const password = useRef("");
  const phone = useRef("");

  const location = useLocation();
  const paramsUserId = location.search.split("=")[1];

  function editUser() {
    const updated = user.find((item) => item.id == paramsUserId);

    if (updated) {
      username.current.value = updated.username;
      email.current.value = updated.email;
      password.current.value = updated.password;
      phone.current.value = updated.phone;

      setUpdated(true);
    }
  }

  function registerUser(e) {
    e.preventDefault();

    if (update) {
      const editUser = {
        id: +paramsUserId,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        phone: phone.current.value,
      };

      user.splice(paramsUserId - 1, 1, editUser);
    } else {
      const newUser = {
        id: user.length + 1,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        phone: phone.current.value,
      };

      user.push(newUser);
      username.current.value = "";
      email.current.value = "";
      password.current.value = "";
      phone.current.value = "";
    }

    setUser(user);
    navigate("/user/about");
  }

  useEffect(() => {
    editUser();
  }, []);
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <form
        className="block w-[400px] bg-white rounded-lg p-6"
        onSubmit={registerUser}
      >
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="text"
          placeholder="name"
          ref={username}
          required
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="email"
          placeholder="email"
          ref={email}
          required
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="text"
          placeholder="phone"
          ref={phone}
          required
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="password"
          placeholder="password"
          ref={password}
          required
        />
        <button className="w-full mb-3 bg-blue-500 text-white py-2 px-4 rounded-md outline-none border border-gray-300">
          {update ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
