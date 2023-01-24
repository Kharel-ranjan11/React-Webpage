export const initialState = {
  information: {
    id:'',
       name: "",
    cast: "",
  },
  post: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        information: {
          ...state.information,
          [action.payload.name]: action.payload.value,
        },
      };
    case "ADD_VALUE":
      return {
        ...state,
        post: [...state.post, action.payload],
       }
    case "DELETE_VALUE":
      return {
        ...state,
        post: state.post.filter((Ele) => Ele.id !== action.payload),
      };
    case "UPDATE_VALUE":
      return {
    ...state,
    post:state.post.map((Ele)=>Ele.id?console.log("if"):console.log("else"))
      };
    default:
      return state;
  }
};
