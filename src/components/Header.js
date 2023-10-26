import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
            <div className='row'>
                <div className='col-lg-12 text-center text-decoration-underline'>
                    <h1 className='text-success'>Employee Management System Using React And PHP</h1>
                </div>
                <div className='col-lg-6 mt-4 mb-4'>
                    <h2 className='text-success'>{props.heading}</h2>
                </div>
                <div className='col-lg-6 mt-4 mb-4'>
                    <Link to={props.buttonturl} className='btn btn-success'>{props.buttontext}</Link>
                </div>
            </div>
        
    </div>
  )
}
