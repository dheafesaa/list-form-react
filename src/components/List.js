import React from "react";
import ListItem from "./ListItem";
import "../scss/List.scss";

const List = (props) => {
  const { lists, editRow, deleteList } = props;

  return (
    <div className="flex-large">
      <h1 style={{ color: "#81c4de" }}>List</h1>
      <div className="list-head">
        <div className="list-body">
          {lists.length > 0 ? (
            lists.map((list) => (
              <ListItem list={list} deleteList={deleteList} editRow={editRow} />
            ))
          ) : (
            <div className="full-list">
              <div className="list">List is empty.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
