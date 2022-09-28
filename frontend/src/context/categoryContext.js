import React, { createContext, useState } from "react";

const CategoryContext = createContext(undefined);
const CategoriesContext = createContext(undefined);
const CategoryDispatchContext = createContext(undefined);
const CategoriesDispatchContext = createContext(undefined);

function CategoryProvider({ children }) {
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <CategoryContext.Provider value={category}>
      <CategoriesContext.Provider value={categories}>
        <CategoryDispatchContext.Provider value={setCategory}>
          <CategoriesDispatchContext.Provider value={setCategories}>
            {children}
          </CategoriesDispatchContext.Provider>
        </CategoryDispatchContext.Provider>
      </CategoriesContext.Provider>
    </CategoryContext.Provider>
  );
}

export {
  CategoryProvider,
  CategoryContext,
  CategoriesContext,
  CategoryDispatchContext,
  CategoriesDispatchContext,
};
