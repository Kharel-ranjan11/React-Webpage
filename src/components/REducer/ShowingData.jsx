import React from "react";
import { ActionType } from "./ActionType";
import { ToDosProvider } from "./Provider";

  export const ShowingData = () => {
  const { state,dispatch } = React.useContext(ToDosProvider);
  const handleDelete = (id) => {
  dispatch({type:ActionType.DeleteValue,payload:id})
  };
  const handleUpdate = (item) => {
  dispatch({type:ActionType.Update_value,payload:item})
  };
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
          <th>...</th>
            <th>ID</th>
            <th>Name</th>
            <th>Cast</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.post.map((item, index) => (
            <tr key={index}>
              <td> <form> <input type="checkbox" name="" id="" /> </form> </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.cast}</td>
              <td> 
                <button style={{border:'1px solid #ff3d00',borderRadius:'3px'}} onClick={()=>handleDelete(item.id)}>Delete</button></td><td> 
                <button onClick={()=>handleUpdate(item)} style={{border:'1px solid green',borderRadius:'3px'}}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
