import axios from 'axios'



export const Page = () => {
   
  return (dispatch) => {
    
      
    return  axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=10')
    .then(
          (res)=> {
             console.log(res.data)
             dispatch(Success(res.data))
          })
  }
}

export const Success = A => {
  

  return {
    type: "SUCCESS",
    payload: A
  }
}