import React from "react";

export const Menus = ({ menus }) => {
  return (
    <div className="section-center">
      {menus.map((menu, index) => {
        const { id, title, img, desc, price } = menu;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
