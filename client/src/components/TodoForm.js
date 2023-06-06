import React from "react";

const TodoForm = ({ handleSubmit, inputTitle, setInputTitle, inputDesc, setInputDesc, toggleSubmit }) => {
  const handleInput = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputDesc = (e) => {
    setInputDesc(e.target.value);
  };

  return (
    <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
      <div className="row">
        <div className="text-center">
          <h2>{toggleSubmit ? "Add Task" : "Edit Task"}</h2>
        </div>
        <form className="col-12 p-2" onSubmit={handleSubmit}>
          <label htmlFor="title" className="my-2">
            Enter Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="w-100 my-1 p-2"
            onChange={handleInput}
            value={inputTitle}
            required
          />
          <label className="my-2" htmlFor="description">
            Enter Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            className="w-100 my-1 p-2"
            onChange={handleInputDesc}
            value={inputDesc}
          />
          <button className="btn btn-primary my-2" type="submit">
            {toggleSubmit ? "Save" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
