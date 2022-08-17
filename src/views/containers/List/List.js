import React, { useState } from "react";
import ListItem from "./ListItem/ListItem";
import TextInput from "../../components/Widgets/TextInput/TextInput";
import "./List.scss";

const List = (props) => {
  const { lists, editRow, deleteList } = props;

  const [filterStr, setfilterStr] = useState("");

  const handleFilter = (e) => {
    setfilterStr(e.target.value);
  };

  return (
    <div className="list">
      <TextInput
        className="list__search"
        placeholder="Search by title"
        onChange={handleFilter}
      />
      <div className="list__head">
        <h1 className="list__title">List</h1>
      </div>
      <div className="list__body">
        {lists.length > 0 ? (
          lists
            .filter((filterlist) =>
              filterlist.title
                .toLowerCase()
                .includes(filterStr.toLocaleLowerCase())
            )
            .map((list) => (
              <ListItem
                key={list.id}
                list={list}
                deleteList={deleteList}
                editRow={editRow}
              />
            ))
        ) : (
          <div className="list__empty">List is empty.</div>
        )}
      </div>
    </div>
  );
};

export default List;
