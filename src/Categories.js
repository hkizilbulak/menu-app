import React from "react";

export const Categories = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
