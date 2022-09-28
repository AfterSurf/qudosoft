import { useState, useEffect, useContext } from "react";
import {
  CategoryContext,
  CategoriesContext,
  CategoryDispatchContext,
  CategoriesDispatchContext,
} from "../context/categoryContext";

const Header = () => {
  const chosenCategory = useContext(CategoryContext);
  const categoriesContext = useContext(CategoriesContext);
  const setCategory = useContext(CategoryDispatchContext);

  return (
    <div>
      <div className="header">
        Kategorien
        <div className="categories">
          {categoriesContext.map((element, i) => {
            return (
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const checked = e.target.checked;
                    console.log("changed: ", element, checked);
                    if (checked) {
                      setCategory([...chosenCategory, element]);
                    } else {
                      var filtered = chosenCategory.filter(
                        (value) => value !== element
                      );
                      setCategory([...filtered]);
                    }
                  }}
                />
                <label>{element}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
