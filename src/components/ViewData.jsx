import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../context/Appcontext";
import { Box } from "@mui/material";
const ViewData = () => {
  const { id } = useParams();
  const viewContext = useContext(myContext);
  const { saveFormData } = viewContext;
  const filterData = saveFormData.filter((e) => e.id === id);
  //   console.log(filterData);
  return (
    <>
      <div style={{height:"80vh"}} className="saved-forms flex gap-3 flex-wrap m-3 justify-center items-center  ">
        <div
          style={{ backgroundColor: "rgb(241,241,251)" }}
          className="saved-form border-2   border-black p-5"
        >
          <h2 className=" font-bold my-3 ">Form</h2>
          <Box component="form" className="m-3 flex flex-col gap-5">
            {filterData[0].form}
          </Box>
        </div>
      </div>
    </>
  );
};

export default ViewData;
