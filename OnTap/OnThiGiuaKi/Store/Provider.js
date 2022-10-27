import { useReducer } from "react";
import TodoContext from "./Context";
import reducer, { initState } from "./Reducer";

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
}

export default Provider;
