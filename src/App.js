import React,{useState,useEffect} from 'react';
import './App.css';
import Paginate from './Components/Pagination';
import {useSelector,useDispatch} from 'react-redux'
import {Page} from './Redux/Actions'

function App() {
  const state = useSelector(state => state.data)
  console.log(state)
const dispatch=useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage] = useState(5);
  useEffect(() => {
    dispatch(Page())

}, [])


const indexOfLastData = currentPage * DataPerPage;
const indexOfFirstData = indexOfLastData - DataPerPage;
const currentData = state.slice(indexOfFirstData, indexOfLastData);
const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
    <Paginate Data={currentData} 
     DataPerPage={DataPerPage}
        totalPosts={state.length}
        paginate={paginate}/>
          </div>
  );
}

export default App;
