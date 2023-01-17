import React from "react";

const UserCard = ({ id, login, url, created_at }) => {
  return (
    <div className="flex justify-center p-5">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <p className="text-gray-700 text-base mb-4">
          Login:
          {login}
        </p>
        <p className="text-gray-700 text-base mb-4">ID: {id}</p>
        <p className="text-gray-700 text-base mb-4">
          Profile URL:
          <a
            href={url}
            className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4"
          >
            {url}
          </a>
        </p>
        <p className="text-gray-700 text-base mb-4">Created at: {created_at}</p>
      </div>
    </div>
  );
};

export default UserCard;
