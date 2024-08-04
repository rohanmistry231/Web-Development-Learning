import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [inputData,setInputData] = useState({
        name: '',
        email: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:8000/users",inputData)
        .then(res =>{
            alert("Data Posted Successfully!");
            navigate('/');
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='form w-50 border text-black'>
        <form onSubmit={handleSubmit}>
            <h1 className='create-title'>Enter Employee Details</h1>
            <div>
                <label htmlFor="name" className='create-label'>Name :</label>
                <input type="text" name="name" placeholder='Enter your name' className='create-input form-control' onChange={(e)=> setInputData({...inputData,name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="email" className='create-label'>Email :</label>
                <input type="email" name="email" placeholder='Enter your email' className='create-input form-control' onChange={(e)=> setInputData({...inputData,email: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="department" className='create-label'>Department :</label>
                <input type="text" name="dept" placeholder='Enter your department' className='create-input form-control' value={inputData.department || ''} onChange={e => setInputData({...inputData,department: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="number" className='create-label'>Number :</label>
                <input type="number" name="num" placeholder='Enter your number' className='create-input form-control' value={inputData.number || ''} onChange={e => setInputData({...inputData,number: e.target.value})}/>
            </div><br/>
            <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
