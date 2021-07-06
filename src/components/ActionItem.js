import React from "react";
import "../scss/List.scss";

const ActionItem = (props) => {
  return (
    <div className="flex-box-2">
      <button className="btn-edit" onClick={() => props.editRow(props.list)}>
        Edit
      </button>
      <button className="btn-delete" onClick={() => props.deleteList(props.list.id)}>
        Delete
      </button>
    </div>
  );
};

export default ActionItem;
