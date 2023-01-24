import React, { useEffect } from "react";
import { initialState, reducer } from "./Store";
import { ActionType } from "./ActionType";
import { ShowingData } from "./ShowingData";
import { ToDosProvider } from "./Provider";
import '../../App.css'
export const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
console.log(state.information)
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      id:new Date().getMilliseconds(),
      name: state.information.name,
      cast: state.information.cast,
    };   
    dispatch({ type: ActionType.AddValue, payload: Data });
    state.information.name = "";
    state.information.cast = "";
  
  };

  const handleChange = (e) => {  
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: ActionType.ChangeValue, payload: { name, value } });
  };
  return (
    <div>
      <section>
      <h5>Simple Todo list using useReducer and context API</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.information.name}
          onChange={handleChange}
          required
          placeholder="Enter Name...."
        />
        <input
          type="text"
          name="cast"
          value={state.information.cast}
          onChange={handleChange}
          required
          placeholder="Enter Cast...."
        />
        <button type="submit">Add</button>
      </form>
      <ToDosProvider.Provider value={{ state,dispatch }} >
        <ShowingData />
      </ToDosProvider.Provider>
      <span className="TodoInfo">You have {state.post.length} Todo List </span>
      </section>
    </div>
  );
};
