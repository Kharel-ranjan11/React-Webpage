import React from "react";
import { TodoUseContext } from "./TodoProvider";
export const FormTodo = () => {
  const {TodoList}=TodoUseContext()
  const HandleSubmit=()=>{

  }
  return (
    <form onSubmit={HandleSubmit}>
      <input type="text" name="" id=""  onChange={(e)=>TodoList(e)}/>
      <input type="button" value="Add" />
    </form>
  );
};
