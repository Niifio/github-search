import React from "react";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.field}>
          <span>{item.field}: </span>
          {item.value}
        </li>
      ))}
    </ul>
  );
};

export default List;
