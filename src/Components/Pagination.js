import React,{useEffect} from 'react'
const Pagination = ({ postsPerPage, totalPosts, paginate,posts }) => {
  

    const pageNumbers = [];
console.log(posts)
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

   
    return (
        <div>
         <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
        </div>
    )
}

export default Pagination
