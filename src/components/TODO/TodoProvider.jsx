import React from "react";
export const TodoProviderCreate = React.createContext();
export const TodoUseContext=React.useContext(TodoProviderCreate)
const initialState=["my name is ...."]
export const TodoProvider = ({ children }) => {
                    const [ToDos, setToDos] = React.useState(initialState);
                    return (
                                        <>
      <TodoProviderCreate.Provider>{children}</TodoProviderCreate.Provider>
    </>
  );
};
