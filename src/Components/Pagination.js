
import React from 'react'

const Paginate = ({ DataPerPage, totalPosts, paginate,Data }) => {
  

    const pageNumbers = [];
console.log(Data)
  for (let i = 1; i <= Math.ceil(totalPosts / DataPerPage); i++) {
    pageNumbers.push(i);
  }

   
    return (
        <div>
            <tbody>
            <th> name</th>
                <th> abv</th>
                <th> attenuation</th>
                <th>brewers_tips</th>
                <th>contributed_by</th>
                <th> boil_volume</th>
                <th>description </th>
                <th>food_pairing </th>
                <th>tagline</th>


      {Data.map((item, i) => {
        return (
          <>
            <tr key={i} >
              
              <td>{item.name}</td>
              <td>{item.abv}</td>
              <td>{item.attenuation_level}</td>
              <td>{item.brewers_tips}</td>
              <td> {item.contributed_by}</td>
              <td> {item.boil_volume.value},{item.boil_volume.unit}</td>
              <td>{item.description}</td>
              <td>{item.food_pairing.map(e=>e)} </td>
              <td>{item.tagline}</td>

            </tr>
           
          </>
        );
      })}
    </tbody>
         <nav>
         
      <ul className=''>

        {pageNumbers.map(number => (<>
            
            <a key={number} onClick={() => paginate(number)} href='!#' className='page-link'>
                {number}

            </a>

            </>
        ))}

      </ul>
      
    </nav>
        </div>
    )
}

export default Paginate
