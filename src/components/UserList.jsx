import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetail, getUserRepo } from "../actions";

const UserList = ({ id, login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    dispatch(getUserDetail(login));
    dispatch(getUserRepo(login));
    navigate("/user/details");
  }

  return (
    <div className="flex justify-center">
      <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-90">
        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
          {id ? <p>ID:{id}</p> : <p>No se encontro login</p>}
          {login ? <p>Login: {login}</p> : <p>'No se encontro login'</p>}
          <a
            className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4 text-center"
            href="users/details"
          >
            <button onClick={(e) => handleClick(e)}>Get details</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserList;
