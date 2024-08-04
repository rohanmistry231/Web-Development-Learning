import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Update() {
    const {id} = useParams();
    const [inputData, setInputData] = useState({
        id:id,
        name: '',
        email: '',
        department: '',
        number: ''
    })
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/users/"+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err));
    },[id])
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put("http://localhost:8000/users/"+id,inputData)
        .then(res =>{
            alert("Data Updated Successfully!");
            navigate('/');
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='form w-50 border text-black p-4'>
      <h1 className='create-title mt-3'>Update Employee Details</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className='create-label' >Name:</label>
                <input type="text" name="name" className='create-input form-control' value={inputData.name || ''} onChange={e => setInputData({...inputData,name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="email" className='create-label' >Email:</label>
                <input type="email" name="email" className='create-input form-control' value={inputData.email || ''} onChange={e => setInputData({...inputData,email: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="department" className='create-label' >Department:</label>
                <input type="text" name="dept" className='create-input form-control' value={inputData.department || ''} onChange={e => setInputData({...inputData,department: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="number" className='create-label' >Number:</label>
                <input type="number" name="num" className='create-input form-control' value={inputData.number || ''} onChange={e => setInputData({...inputData,number: e.target.value})}/>
            </div><br/>
            <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update
