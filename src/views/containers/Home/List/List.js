import React from "react";
import ListItem from "./ListItem/ListItem";
import "./List.scss";

const List = (props) => {
  const { lists, editRow, deleteList } = props;

  return (
    <div className="list">
      <div className="list__head">
        <h1 className="list__title">List</h1>
      </div>
      <div className="list__body">
        {lists.length > 0 ? (
          lists.map((list) => (
            <ListItem list={list} deleteList={deleteList} editRow={editRow} />
          ))
        ) : (
          <div className="list__empty">List is empty.</div>
        )}
      </div>
    </div>
  );
};

export default List;
