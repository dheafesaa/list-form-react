import React from "react";
import "../scss/List.scss";

const DeleteItem = (props) => {
  return (
    <div className="flex-box-2">
      <button className="btn-edit">Edit</button>
      <button className="btn-delete" onClick={() => props.deleteList(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default DeleteItem;
