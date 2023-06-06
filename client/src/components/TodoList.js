import React from "react";

const TodoList = ({ items, handleEdit, handleDelete }) => {
  return (
    <div className="container py-2">
      {items.length > 0 ? (
        items.map((item) => (
          <div className="row border rounded shadow p-3 mb-3 bg-white rounded p-2" key={item.id}>
            <div className="col-9">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="col-3 d-flex justify-content-end align-items-center">
              <button className="btn btn-primary mx-2" onClick={() => handleEdit(item.id)}>
                Edit
              </button>
              <button className="btn btn-danger mx-2" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No tasks found.</p>
      )}
    </div>
  );
};

export default TodoList;
