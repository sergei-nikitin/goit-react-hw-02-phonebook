import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={value}
        onChange={(event) => onChangeFilter(event.target.value)}
        // onChange={onChengeFilter}
      />
    </div>
  );
};

export default Filter;
