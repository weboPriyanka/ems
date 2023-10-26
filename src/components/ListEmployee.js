import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from './Header';



export default function ListEmployee() {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/reactapi/').then(function(response) {
            console.log(response.data);
            setEmployees(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/reactapi/index.php/${id}`).then(function(response){
        console.log(response.data);
        if(response.data.Success)
        {
            alert(response.data.Success);
            getUsers();
        }
        else
        {
            alert(response.data.Failed);
        }
       
    });
}

  return (
    <div>
        <div className='row'>
            {/* <div className='col-lg-2'></div> */}
            <Header  heading={"Employee List"} buttontext={"Add Employee"} buttonturl={"/addemployee"}></Header>
            <div className='col-lg-12 text-center'>
                <table className='table table-bordered '>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Contact</th>
                            <th scope='col'>DOB</th>
                            <th scope='col'>Salary</th>
                            <th scope='col'>Joining Date</th>
                            <th scope='col'>Relieving Date</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employees, key) =>
                            <tr key={key}>
                                <td>{employees.id}</td>
                                <td>{employees.name}</td>
                                <td>{employees.contact}</td>
                                <td>{new Date(employees.dob).toLocaleDateString('en-US', {month: 'long',day: 'numeric',year: 'numeric',})}</td>
                                <td>{employees.salary}</td>
                                <td>{new Date(employees.joining_date).toLocaleDateString('en-US', {month: 'long',day: 'numeric',year: 'numeric',})}</td>
                                <td>{new Date(employees.relieving_date).toLocaleDateString('en-US', {month: 'long',day: 'numeric',year: 'numeric',})}</td>
                                <td>{employees.status}</td>
                                <td>
                                    <Link to={`editemployee/${employees.id}`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
                                    <button onClick={() => deleteUser(employees.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}
