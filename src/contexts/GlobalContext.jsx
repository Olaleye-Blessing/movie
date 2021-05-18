import { createContext, useContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    // let baseUrl = `https://api.themoviedb.org/3`;
    let key = "651ef57b1ca582995fef27ff08df6717";
    return (
        <GlobalContext.Provider value={{ key }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };