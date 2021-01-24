import React from 'react'
import '../assets/styles/notlogged.css'
import { Link } from 'react-router-dom'

const Notlogged = () => {
    return (
        <div className=" py-5 row border d-flex justify-content-center align-items-center shadow-lg bg-light"> 
            <form method="POST">
                <div className="form-group text-center">
                    <label htmlFor="email" 
                    classNames="col-form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" required/>
                </div>
                <div className="form-group text-center">
                    <label htmlFor="password" 
                    classNames="col-form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" required/>
                </div>
                <div className="d-flex justify-content-between">
                    <button 
                    className="btn btn-success"
                    type="submit">Log In</button>
                    <button 
                    className="btn btn-danger"
                    type="reset">Reset</button>
                </div>
                <div className="form-group">
                    <small className="text-black font-weight-bold">Don't have an account? </small>
                    <span> 
                        <Link to="/create" className="badge badge-info">Create account</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Notlogged;