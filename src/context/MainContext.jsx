import { createContext, useContext, useReducer } from "react";

const MainProvider = createContext();

const initialState = {
  cart: [],
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "cart/add":
        return {
          ...state,
          cart: ["ekledim"],
        };

      case "cart/del":
        return {
          ...state,
          test: "ekle",
        };
    }
    return state;
  };

  const [{ cart }, dispatch] = useReducer(reducer, initialState);
  return (
    <MainProvider.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const useData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, useData };
