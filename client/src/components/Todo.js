import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [showForm, setShowForm] = useState(false);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [items, setItems] = useState([
    {
      id: "001",
      name: "Default Task",
      desc: "Default Description",
      status: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTitle || !inputDesc) {
      alert("Please fill in all fields.");
      return;
    }

    if (toggleSubmit) {
      const newItem = {
        id: new Date().getTime().toString(),
        name: inputTitle,
        desc: inputDesc,
      };
      setItems([newItem, ...items]);
    } else {
      const updatedItems = items.map((elem) => {
        if (elem.id === isEditItem) {
          return { ...elem, name: inputTitle, desc: inputDesc };
        }
        return elem;
      });
      setItems(updatedItems);
      setToggleSubmit(true);
      setIsEditItem(null);
    }

    setInputTitle("");
    setInputDesc("");
    setShowForm(false);
  };

  const handleEdit = (id) => {
    setShowForm(true);
    setToggleSubmit(false);
    setIsEditItem(id);

    const editItem = items.find((elem) => elem.id === id);
    setInputTitle(editItem.name);
    setInputDesc(editItem.desc);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((elem) => elem.id !== id);
    setItems(updatedItems);
  };

  const handleAdd = () => {
    setShowForm(true);
    setToggleSubmit(true);
    setIsEditItem(null);
    setInputTitle("");
    setInputDesc("");
  };

  return (
    <div>
      <div className="container">
        <div className="col-12 text-end">
          <button className="btn btn-primary" onClick={handleAdd}>
            New
          </button>
        </div>
      </div>

      {showForm && (
        <TodoForm
          handleSubmit={handleSubmit}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
          inputDesc={inputDesc}
          setInputDesc={setInputDesc}
          toggleSubmit={toggleSubmit}
        />
      )}

      <TodoList items={items} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default Todo;
