import React, { useContext } from "react";
import { myContext } from "../context/Appcontext";
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navContext = useContext(myContext);
  const { setFormArray, setFlag, setId, setformId } = navContext;

  const createForm = (e) => {
    e.preventDefault();
    setFlag(true);
    setformId("");
  };
  const clearForm = (e) => {
    e.preventDefault();
    setFlag(false);
    setFormArray([]);
    setId("");
  };

  return (
    <>
      <nav
        style={{ backgroundColor: "rgb(241,241,251)" }}
        className="nav-bar flex items-center justify-center gap-20 py-2"
      >
        <span className="nav-text font-semibold font-mono text-2xl cursor-pointer">
          @Ash-Form-Builder
        </span>
        <div className="nav-btns btns flex items-center justify-center gap-8">
          <Link
            to={"/"}
            // style={{width:"150px"}}
            onClick={createForm}
            className="text-white justify-center flex items-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-2 px-2  rounded-full"
          >
            Create Form <FaPlus color="yellow" size={20} />
          </Link>
          <Link
            to={"/"}
            
            // style={{width:"150px"}}
            onClick={clearForm}
            className="text-white flex justify-center items-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-2 px-2 rounded-full"
          >
            Saved Form <MdDeleteForever color="yellow" size={25} />
          </Link>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
