import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import Header from './Header';

export default function CreateEmployee() {
    
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(inputs);
        axios.post('http://localhost/ems/reactapi/', inputs).then(function(response){
        console.log(response.data.Success);
        if(response.data.Success)
        {
            alert(response.data.Success);
            navigate('/');
        }
        else
        {
            alert(response.data.Failed);
        }
    });
    }

  return (
    <div>
            <Header heading={"Add Employee"} buttontext={"Back"} buttonturl={"/"}></Header>
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8 card p-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='row '>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Name</label>      
                                    <input type="text" name="name" required className='form-control' placeholder='Enter Name' onChange={handleChange} />
                                </div>
                            </div>
                            <div className='col-lg-6  mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Date Of Birth</label>      
                                    <input type="date" name="dob" className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Employee Salary</label>      
                                    <input type="number" name="salary" placeholder='Enter Salary' className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Joining Date</label>      
                                    <input type="date" name="joining_date" className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Relieving Date</label>      
                                    <input type="date" name="relieving_date" className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Contact</label>      
                                    <input type="number" name="contact" placeholder='Enter Contact Number' className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Status</label>      
                                    <select name="status" className='form-control' onChange={handleChange} required>
                                        <option value={"Active"}>Active</option>
                                        <option  value={"Inactive"}>Inactive</option>
                                    </select>
                                </div>
                            </div>
                            
                
                        </div> 
                        <div className=' mt-4'>
                            <button className='btn btn-success'>Add Employee</button>
                        </div>
                        
                        
                    </form>
                </div>
            </div>
      

    </div>
  )
}
