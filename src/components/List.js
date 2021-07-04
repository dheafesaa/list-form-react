import React from "react";
import ListItem from "./ListItem";
import DeleteItem from "./DeleteItem";
import "../scss/List.scss";

const List = (props) => {
  return (
    <div className="flex-large">
      <h1 style={{ color: "#81c4de" }}>List</h1>
      <table>
        <tbody>
          {props.lists.length > 0 ? (
            props.lists.map((list) => (
              <tr>
                <ListItem list={list} />
                <td>
                  <DeleteItem deleteList={props.deleteList} id={list.id} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>List is empty.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
