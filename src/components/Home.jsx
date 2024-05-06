import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { myContext } from "../context/Appcontext";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import uuid from "react-uuid";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const homeContext = useContext(myContext);
  const {
    setformId,
    formId,
    saveFormData,
    formArray,
    setFormArray,
    flag,
    setFlag,
    setId,
    setFlag1,
    editFlag,
    setSaveFormData,
  } = homeContext;
  const handleSubmit = (e) => {
    e.preventDefault();
    setformId("");
  };
  const handleDelete = (id) => {
    const filterData = formArray.filter((e) => e.props.id != id);
    setFormArray(filterData);
    setId("");
    setFlag1(false);
  };

  const saveForm = () => {
    if (formId) {
      setSaveFormData((prevState) =>
        prevState.map((e) => (e.id === formId ? { ...e, form: formArray } : e))
      );
      alert("update successfull");
      setformId("");
      setFlag(false);
      setFormArray([]);
    } else {
      if (formArray.length > 0) {
        const newFormData = { id: uuid(), form: formArray };
        const updatedSaveFormData = [...saveFormData, newFormData];
        setSaveFormData(updatedSaveFormData);
        localStorage.setItem(
          "saveFormData",
          JSON.stringify(updatedSaveFormData)
        );
        alert("Successfully saved data");
        setFormArray([]);
        setformId("");
      } else {
        alert("Add some inputs");
        setformId("");
      }
    }
  };

  const deleteForm = (id) => {
    const filterData = saveFormData.filter((e) => e.id != id);
    setSaveFormData(filterData);
    alert("sucessfull delete");
  };

  const updateForm = (id) => {
    setformId(id);
    setFlag(true);
    if (saveFormData) {
      const filterData = saveFormData.find((e) => e.id === id);
      if (filterData) {
        setFormArray(filterData.form);
      }
    }
  };

  return (
    <>
      {!flag && (
        <>
          <div className="main-div flex items-center justify-center">
            <div className="home w-full flex flex-col gap-2 items-center justify-center">
              {saveFormData.length < 1 && (
                <div className="flex flex-col items-center justify-center">
                  <span
                    style={{ color: "white" }}
                    className=" font-bold text-3xl font-mono text-center "
                  >
                    Welcome To Form Builder Web......
                  </span>
                  <span
                    style={{ color: "white" }}
                    className=" text-2xl font-mono text-center"
                  >
                    Click create and Build From.....
                  </span>
                </div>
              )}

              <div className="saved-forms flex gap-3 flex-wrap m-3 justify-center items-center  ">
                {saveFormData.map((savedForm, index) => (
                  <div
                    key={saveForm.id}
                    style={{ backgroundColor: "rgb(241,241,251)" }}
                    className="saved-form border-2  border-black p-5"
                  >
                    <h2 className=" font-bold my-3 ">Form {index + 1}</h2>
                    {savedForm.form.map((e) => (
                      <>
                        <Box component="form" className="m-3" key={e.props.id}>
                          {e}
                        </Box>
                      </>
                    ))}
                    <Box key={savedForm.id} className="text-center ">
                      <Button>
                        <Link to={`/${savedForm.id}`}>View</Link>
                      </Button>
                      <Button onClick={() => updateForm(savedForm.id)}>
                        <Link>Edit</Link>
                      </Button>
                      <Button>
                        <Link onClick={() => deleteForm(savedForm.id)}>
                          Delete
                        </Link>
                      </Button>
                    </Box>
                  </div>
                ))}
              </div>
              <span
                style={{ color: "white" }}
                className="font-bold text-2xl font-mono py-1 px-2 fixed bottom-0 left-0"
              >
                @ash-forms
              </span>
            </div>
            <Sidebar />
          </div>
        </>
      )}
      {flag && (
        <>
          <div className=" main-div flex w-full">
            <div className="flex w-full gap-3 flex-col p-5">
              <h1
                style={{ color: "white" }}
                className=" flex justify-center text-4xl font-bold mb-2 mt-0"
              >
                Create a form..
              </h1>
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "rgb(241,241,251)",
                }}
                className="flex w-full gap-3 flex-col p-5  border-2  border-black  "
              >
                <h1 className=" font-bold text-2xl">FORM CREATER</h1>
                <div className=" flex flex-col gap-3">
                  {formArray?.map((e, index) => (
                    <div key={index} className="flex gap-3">
                      {e}{" "}
                      <FaEdit
                        onClick={() => setId(e.props.id)}
                        size={27}
                        color="darkviolet"
                        className=" cursor-pointer"
                      />
                      <MdDeleteForever
                        onClick={() => handleDelete(e.props.id)}
                        size={30}
                        color="red"
                        className=" cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </form>
              <div className="btns flex justify-center ">
                {!editFlag && (
                  <button
                    onClick={saveForm}
                    style={{ width: "15rem" }}
                    className="text-black flex items-center justify-center text-xl gap-2 bg-yellow-500 hover:bg-blue-700 font-bold py-1 p-10  rounded-full"
                  >
                    Save
                  </button>
                )}
                {editFlag && (
                  <button
                    onClick={saveForm}
                    style={{ width: "15rem" }}
                    className="text-black flex items-center justify-center text-xl gap-2 bg-yellow-500 hover:bg-blue-700 font-bold py-1 p-10  rounded-full"
                  >
                    update
                  </button>
                )}
              </div>
            </div>
            <Sidebar />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
