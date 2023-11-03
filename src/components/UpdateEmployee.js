import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Header from './Header';

export default function UpdateEmployee() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    useEffect(() => {
        getUser();
    }, []);
    function getUser() {
        axios.get(`http://localhost/ems/reactapi/index.php/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(inputs);
        axios.put('http://localhost/ems/reactapi/', inputs).then(function(response){
        console.log(response.data);
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
            <Header heading={"Update Employee"} buttontext={"Back"} buttonturl={"/"}></Header>
            <div className='row'>
                
                <div className='col-lg-2'></div>
                <div className='col-lg-8 card p-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='row '>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Name</label>      
                                    <input type="text" name="name" required className='form-control' placeholder='Enter Name' onChange={handleChange} value={inputs.name} />
                                </div>
                            </div>
                            <div className='col-lg-6  mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Date Of Birth</label>      
                                    <input type="date" value={inputs.dob} name="dob" className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Employee Salary</label>      
                                    <input type="number" value={inputs.salary} name="salary" placeholder='Enter Salary' className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Joining Date</label>      
                                    <input type="date" value={inputs.joining_date} name="joining_date" className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Relieving Date</label>      
                                    <input type="date" value={inputs.relieving_date} name="relieving_date" className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Contact</label>      
                                    <input type="number" name="contact" value={inputs.contact} placeholder='Enter Contact Number' className='form-control' onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='col-lg-6 mt-4'>
                                <div className='form-group'>
                                    <label className='text-left'>Status</label>      
                                    <select name="status" className='form-control' value={inputs.status} onChange={handleChange} required>
                                        <option value={"Active"}>Active</option>
                                        <option  value={"Inactive"}>Inactive</option>
                                    </select>
                                </div>
                            </div>
                            
                
                        </div> 
                        <div className=' mt-4'>
                            <button className='btn btn-success'>Update Employee</button>
                        </div>
                        
                        
                    </form>
                </div>
            </div>
        

    </div>
  )
}
