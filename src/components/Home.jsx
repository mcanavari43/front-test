import React from "react";
import { useEffect, useState } from "react";
import { getUserDetail, getUserSince } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import SearchUser from "./SearchUser";
import UserList from "./UserList";
import UserDetail from "./UserDetails";
import Pagination from "./Pagination";
import FilterSince from "./FilterSince";

const Home = () => {
  const dispatch = useDispatch();

  let userDetails = useSelector((state) => state.userDetail);
  let userSince = useSelector((state) => state.userSince);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentPerPage = userSince.slice(firstUserIndex, lastUserIndex);

  const pageNow = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getUserSince());
    dispatch(getUserDetail());
  }, [dispatch]);
  return (
    <div>
      <div>
        <div>
          <h1 className="font-medium leading-tight text-5xl mt-5 mb-10 text-blue-600 text-center">
            User List
          </h1>
        </div>
        <SearchUser />
        <FilterSince setCurrentPage={setCurrentPage} />
        <div>
          {userDetails.login ? (
            <UserDetail
              key={userDetails.id}
              id={userDetails.id}
              login={userDetails.login}
              url={userDetails.url}
              created_at={userDetails.created_at}
            />
          ) : (
            currentPerPage.map((e) => {
              return <UserList id={e.id} login={e.login} key={e.id} />;
            })
          )}
        </div>
        <ScrollToTop />
        <div>
          {!userDetails.login && (
            <Pagination
              usersPerPage={usersPerPage}
              users={userSince.length - 1}
              pageNow={pageNow}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
