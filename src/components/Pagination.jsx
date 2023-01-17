import React from "react";
// import "./Pagination.css";

const Pagination = ({ usersPerPage, users, pageNow }) => {
  //Declaro paginado y me traigo las props del otro componente
  const pageNumbers = []; //declaro array vacio

  for (let i = 1; i <= Math.ceil(users / usersPerPage); i++) {
    //recorro un arreglo que voy a tomar el numero redondo que resulta de dividir todos los juegos por la pagina
    pageNumbers.push(i); //Con el numero que se genera lo pusheo a mi pageNumbers,
  }

  return (
    //renderizo, cuando tengo este arreglo mapealo y traeme cada numero que devuelve el paginado
    <div className="flex justify-center p-2">
      <nav>
        <ul>
          <li class="page-item ">
            {pageNumbers?.map((number) => (
              <button
                className="h-10 border m-1.5  text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4 w-10 hover:bg-gray-200 rounded-lg hover:border-none"
                onClick={() => pageNow(number)}
              >
                {number}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
