import React from "react";

const ListItem = (props) => {
  return (
    <td key={props.list.id}>
      <b>{props.list.title}</b>
      <br />
      <span>{props.list.quantity}</span>
      <br />
      <span>{props.list.price}</span>
      <br />
    </td>
  );
};

export default ListItem;
