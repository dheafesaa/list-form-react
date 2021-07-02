import React from "react";
import ListItem from "./ListItem";
import "./List.scss";

const List = ({lists}) => {
  return (
    <div className="flex-large">
      <h1 style={{color: "#81c4de"}}>List</h1>
      <ListItem lists={ lists } />
    </div>
  );
};

export default List;
