import React from "react";

const ListItem = (props) => {
  return (
    <div>
      <table>
        <tbody>
          {props.lists.length > 0 ? (
            props.lists.map((list) => (
              <tr key={list.id}>
                <td>
                  <b>{list.title}</b>
                  <br />
                  <span>{list.quantity}</span>
                  <br />
                  <span>{list.price}</span>
                  <br />
                </td>
                <td>
                  <div className="flex-box-2">
                    <button className="btn-edit">Edit</button>
                    <button
                      className="btn-delete"
                      onClick={() => props.deleteUser(list.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
