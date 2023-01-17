import React from "react";
import { useSelector } from "react-redux";

const UserRepos = () => {
  const repos = useSelector((state) => state.userRepo);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className="bg-white text-left py-2 ml-5 text-lg">Repo List</h1>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    URL
                  </th>
                </tr>
              </thead>
              <tbody>
                {repos?.map((e) => {
                  return (
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {e.id}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {e.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <a
                          href={e.html_url}
                          className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4"
                        >
                          {e.html_url}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div classNameName="p-3 height- bg-gray-100">
    //     <div classNameName="overflow-auto rounded-lg shadow hidden md:block">
    //       <table classNameName="min-w-full">
    //         <div>
    //           <thead classNameName="border-b min-w-full">
    //             <tr>
    //               <th>ID</th>
    //               <th>Name</th>
    //               <th>URL</th>
    //             </tr>
    //           </thead>
    //         </div>
    //         <tbody classNameName="divide-y divide-gray-100">
    //           <tr classNameName="bg-white w-10">
    //             <td classNameName="p-2 text-sm text-gray-700 whitespace-nowrap">
    //               {id}
    //             </td>
    //             <td classNameName="p-2 text-sm text-gray-700 whitespace-nowrap">
    //               {name}
    //             </td>
    //             <td classNameName="p-3 text-sm text-gray-700 whitespace-nowrap">
    //               <a
    //                 classNameName="font-bold text-blue-500 hover:underline"
    //                 href={html_url}
    //               >
    //                 {html_url}
    //               </a>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //     <div classNameName="grid grid-cols-1 gap-2 md:hidden">
    //       <div classNameName="bg-white p-4 rounded-lg shadow">
    //         <div classNameName="flex items-center space-x-2 text-sm">
    //           <div classNameName="text-gray-500">
    //             <div>{id}</div>
    //           </div>
    //           <div classNameName="text-sm text-gray-500">{name}</div>
    //           <div>
    //             <a
    //               classNameName="p-1.5 text-sm text-blue-500 font-bold hover:underline"
    //               href={html_url}
    //             >
    //               {html_url}
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserRepos;
