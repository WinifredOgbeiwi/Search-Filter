import React from 'react'
import JSONDATA from './MOCK_DATA.json'
import { useState } from 'react'

function SeachFilter() {
    const[searchTerm, setSearchTerm]=useState('')
  return (
    <>
    <div className='wrapper'>
        <input placeholder='search here...' onChange={event =>{setSearchTerm(event.target.value)}}></input>
        <table>
        <tr>
            <th>FIRST NAME</th> 
            <th>LAST NAME</th> 
            <th>GENDER</th> 
        </tr>
{JSONDATA.filter((val =>{
   
    if(searchTerm == ''){
        return val
    }
    else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
    }
    else if(val.last_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
    }
    else if(val.gender.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
    }
})) .map((val,key) => {
    // return <p className='names' key={key}><span>{val.first_name} {val.last_name}</span> - {val.gender}</p>
    return(
        <>
        <tr>
            <td>{val.first_name}</td>
            <td>{val.last_name}</td>
            <td>{val.gender}</td>
        </tr>

        </>
    )

})}
</table>

    </div>
    </>
  )
}

export default SeachFilter 

// switch(searchTerm){
    
//     case (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())):
//     return val 
//     break;
    
//     case (val.last_name.toLowerCase().includes(searchTerm.toLowerCase())):
//     return val 
//     break
    
//     case (val.gender.toLowerCase().includes(searchTerm.toLowerCase())):
    
//     return val
//     break
//     }