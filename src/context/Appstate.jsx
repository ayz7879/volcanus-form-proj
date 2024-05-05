import { myContext } from "./Appcontext";
import React, { useEffect, useState } from "react";

const Appstate = (props) => {
  const getlocal = () => {
    const getdata = JSON.parse(localStorage.getItem("saveFormData"));
    if (getdata) {
      return getdata;
    } else {
      return [];
    }
  };
  console.log(getlocal());

  const [flag, setFlag] = useState(false);
  const [formArray, setFormArray] = useState([]);
  const [saveFormData, setSaveFormData] = useState([]);
  const [id, setId] = useState("");
  const [flag1, setFlag1] = useState(false);
  const [open, setopen] = useState(false);
  const [label, setlabel] = useState("");
  const [formId, setformId] = useState("");
  const [editFlag, seteditFlag] = useState(false);
  useEffect(() => {
    if (id) {
      setFlag1(true);
    } else {
      setFlag1(false);
    }

  }, [id]);
  

  useEffect(() => {
    if (formId) {
      seteditFlag(true);
    } else {
      seteditFlag(false);
    }
  }, [formId]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!flag1) {
      const filterData = formArray.filter((e) => e.props.id === id);
      if (filterData.length > 0) {
        const filteredElement = filterData[0];
        const modifiedElement = React.cloneElement(filteredElement, {
          style: {
            ...filteredElement.props.style,
            backgroundColor: "lightblue",
          },
        });
        const updatedFormArray = formArray.map((item) =>
          item.props.id === id ? modifiedElement : item
        );
        setFormArray(updatedFormArray);
      }
    }
  }, [flag1, formArray, id]);

  const addInputs = (input) => {
    if (flag) {
      if (flag1) {
        setFormArray((prevState) =>
          prevState.map((e) =>
            e.props.id === id ? { ...formArray, ...input } : e
          )
        );
        setId("");
        setopen(false);
        setlabel("");
      } else {
        setFormArray([...formArray, input]);
        setopen(false);
        setlabel("");
      }
    } else {
      alert("click to create form");
    }
  };
  // localStorage.setItem("formData", JSON.stringify(formArray));
  return (
    <myContext.Provider
      value={{
        editFlag,
        setformId,
        formId,
        label,
        setlabel,
        saveFormData,
        setSaveFormData,
        flag1,
        setFlag1,
        setId,
        addInputs,
        flag,
        setFlag,
        formArray,
        setFormArray,
        setopen,
        open,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default Appstate;
