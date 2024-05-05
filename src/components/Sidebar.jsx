import React, { useContext, useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { myContext } from "../context/Appcontext";
import uuid from "react-uuid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, ButtonBase, Checkbox, TextField } from "@mui/material";

const Sidebar = () => {
  const sideContext = useContext(myContext);
  const { addInputs, setopen, open, flag, label, setlabel } = sideContext;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const modalOpen = () => {
    if (flag) {
      setopen(true);
    } else {
      alert("click to create");
    }
  };

  const modalClose = () => {
    setopen(false);
  };

  return (
    <>
      <div
        style={{ width: "20%" }}
        className="side-bar bg-slate-800 flex px-2 py-2 flex-col gap-5"
      >
        <button
          onClick={modalOpen}
          className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1  rounded-full"
        >
          Inputs <IoAddCircle color="lightgreen" size={30} />
        </button>

        <button
          onClick={() =>
            addInputs(
              <Checkbox
                style={{ width: "1.2rem", height: "1.5rem" }}
                id={uuid()}
              />
            )
          }
          className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
        >
          CheckBox <IoAddCircle color="lightgreen" size={30} />
        </button>

        <button
          onClick={() =>
            addInputs(
              <input
                style={{ width: "1.5rem", height: "1.5rem" }}
                type="radio"
                id={uuid()}
              />
            )
          }
          className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
        >
          Radio <IoAddCircle color="lightgreen" size={30} />
        </button>

        <button
          onClick={() =>
            addInputs(
              <input
                style={{ width: "10rem", height: "3rem" }}
                type="date"
                className=" p-2"
                id={uuid()}
              />
            )
          }
          className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
        >
          Date <IoAddCircle color="lightgreen" size={30} />
        </button>

        <button
          onClick={modalOpen}
          className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1  rounded-full"
        >
          Number <IoAddCircle color="lightgreen" size={30} />
        </button>

        <button
          onClick={modalOpen}
          className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
        >
          Url <IoAddCircle color="lightgreen" size={30} />
        </button>

        <button
          onClick={() =>
            addInputs(
              <input
                type="submit"
                style={{ width: "10rem", height: "3rem" }}
                className=" rounded-md px-3 font-bold border-2  cursor-pointer  border-green-200 bg-blue-700 text-white"
                id={uuid()}
              />
            )
          }
          className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
        >
          Button <IoAddCircle color="lightgreen" size={30} />
        </button>
      </div>

      <div>
        <Modal
          className="modal-form"
          open={open}
          onClose={modalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modal-box flex  gap-3">
            <TextField
              value={label}
              onChange={(e) => setlabel(e.target.value)}
              label="Enter input label"
              sx={{ width: "100%" }}
              size="small"
            />
            <Button
              onClick={() =>
                addInputs(
                  <TextField
                    label={label}
                    size="small"
                    // sx={{ width: "30rem", height: "3rem" }}
                    id={uuid()}
                    className=" rounded-md px-3 font-bold border-2  border-green-200"
                  />
                )
              }
              variant="contained"
              color="success"
            >
              Add
            </Button>
            <Button
              onClick={() => setopen(false)}
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Sidebar;

// addInputs(
//   <input
//     style={{ width: "30rem", height: "3rem" }}
//     className=" rounded-md px-3 font-bold border-2  border-green-200"
//     placeholder="Enter text here..."
//     id={uuid()}
//   />
// )
