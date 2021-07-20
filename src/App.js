import React,{useState,useEffect} from 'react';
import './App.css';
import Pagination from './Components/Pagination';
import {useSelector,useDispatch} from 'react-redux'
import {Page} from './Redux/Actions'

function App() {
  const state = useSelector(state => state.data)
const dispatch=useDispatch()
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  useEffect(() => {

    dispatch(Page())
}, [setPosts])


console.log(posts)
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = state.slice(indexOfFirstPost, indexOfLastPost);
const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
    <Pagination posts={currentPosts} 
     postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}/>
          </div>
  );
}

export default App;
