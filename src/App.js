import { useState } from "react";
import { Categories } from "./Categories";
import data from "./data";
import { Menus } from "./Menus";

const allCategories = ["all", ...new Set(data.map((menu) => menu.category))];

const App = () => {
  const [menus, setMenus] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenus(data);
      return;
    }

    const newMenus = data.filter((menu) => menu.category === category);
    setMenus(newMenus);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menus menus={menus} />
      </section>
    </main>
  );
};

export default App;
