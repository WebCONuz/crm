import React from "react";
import { useStateValue } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const { user, setUser } = useStateValue();
  const navigate = useNavigate();

  const editUser = (userId) => {
    navigate(`/register?id=${userId}`);
  };

  return (
    <div className="">
      <div className="container py-10">
        <h1 className="text-2xl font-bold mb-4">Users List</h1>
        {user.map((item) => (
          <React.Fragment key={item.id}>
            <pre>{`${item.username} ${item.email} ${item.phone} ${item.password}`}</pre>
            <button onClick={() => editUser(item.id)}>Edit</button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
