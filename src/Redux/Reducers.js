const initialstate={
  data:[]
}
const reducer = (state = initialstate, action) => {
  switch (action.type) {
   
    case "SUCCESS":
      return {
       ...state,
       data:action.payload
        
      }
      default: return state
    }
  }
  export default reducer