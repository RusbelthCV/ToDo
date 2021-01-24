import React, { useState} from 'react'

const usePassword = initial => {
    const [password, setPassword] = useState(initial)
    const validatePassword = e => {
        setPassword(e.target.value)
    }
    return { password, validatePassword }
}
const useSubmit = initial => {
    const [submit, setSubmit] = useState(initial)
    const validateSubmit = e => {
        setSubmit(e)
    }
    return { submit, validateSubmit }
}
const Create = () =>{
    const checkPassword = (e) => {
        if(e.target.value != {password}){
            validateSubmit(false)
        }
        else{
            validateSubmit(true)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!submit){
            
        }  
    }
    const { password, validatePassword } = usePassword("")
    const { submit, validateSubmit } = useSubmit(false)
    return(
        <div className="container">
            <div className="row py-5 row border d-flex justify-content-center align-items-center shadow-lg bg-light">
                <form onSubmit = {handleSubmit}>
                    <div className="form-group text-center">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required 
                        onBlur = { validatePassword } />
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" 
                        name="confirm-password" required onBlur={ checkPassword } />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-success">Submit</button>
                        <button className="btn btn-danger">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create;