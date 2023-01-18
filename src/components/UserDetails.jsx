import React from "react";
import { useSelector } from "react-redux";
import UserRepos from "./UserRepos";
import UserCard from "./UserCard";
import ScrollToTop from "react-scroll-to-top";

const UserDetail = () => {
  const userDetails = useSelector((state) => state.userDetail);

  return (
    <div className="overflow-x-hidden">
      <UserCard
        id={userDetails.id}
        login={userDetails.login}
        html_url={userDetails.html_url}
        created_at={userDetails.created_at}
      />
      <div className="flex space-x-2 p-4 justify-center">
        <a href="/">
          <button className="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Return Home
          </button>
        </a>
      </div>
      <UserRepos />
      <ScrollToTop />
    </div>
  );
};

export default UserDetail;
