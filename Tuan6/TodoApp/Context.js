import React, { createContext, useState } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
    const [courses, setCourses] = useState([]);

    return (
        <MyContext.Provider value={{ courses, setCourses }}>
            {children}
        </MyContext.Provider>
    );
};

export default Context;
