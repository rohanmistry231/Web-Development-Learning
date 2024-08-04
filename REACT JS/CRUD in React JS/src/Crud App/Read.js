import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Read() {
    const {id} = useParams()
    const [Data , setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/users/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[id])
  return (
    <div className='container read-box p-3 mt-5'>
        <h2 className="read-title">Employee Details</h2>
        <div className='container pt-3'>
        <p className='read-data'><span className='read-data-label'>Name : </span>{Data.name}</p>
        <p className='read-data'><span className='read-data-label'>Email : </span>{Data.email}</p>
        <p className='read-data'><span className='read-data-label'>Department : </span>{Data.department}</p>
        <p className='read-data'><span className='read-data-label'>Number : </span>{Data.number}</p>
        <Link to="/" className="read-btn btn btn-success my-3">Back</Link>
        </div>
    </div>
  )
}

export default Read
