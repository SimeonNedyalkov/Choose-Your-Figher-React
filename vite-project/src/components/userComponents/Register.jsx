import { useState } from "react"
import {useNavigate} from 'react-router-dom'

import useForm from "../../hooks/useForm"
import { useRegister } from "../../hooks/useAuth"
const initialValues = {
  email:'',
  username:'',
  password:'',
  rePass:''
}
export default function Register({
    goBackHome,
}){

    const [errors,setErrors] = useState({})
    const register = useRegister()
    const navigate = useNavigate()

    const registerHandler = async ({email,username,password,rePass})=>{
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
        if(!pattern.test(email)){
          setErrors({email: 'Warning: Email should contain @ and a valid domain'})
          return
        }
        if(username.length < 4){
          setErrors({username: 'Warning: Username should be atleast 4 characters long'})
          return
        }
        if(password.length < 4){
          setErrors({password: 'Warning: Password should be atleast 4 characters long'})
          return
        }
        if(password !== rePass){
            setErrors({rePassword: 'Warning: Password and rePassword missmatch!'})
            return
        }
        try {
            await register(email,username,password)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }
    const {values,changeHandler,submitHandler} = useForm(initialValues,registerHandler)
    console.log(errors)
  return (
    <>
      <div className="loginAndRegisterBackground">
        <div className="overlay">
          <div className="backdrop" onClick={goBackHome}></div>
          <div className="modal2">
            <div className="onTop">
            <button className="btn close" onClick={goBackHome}>
                &times;
              </button>
            </div>
            <div className='dialogue p-2'>
                Welcome warrior
            </div>
            <div className='separator'></div>
            <form onSubmit={submitHandler} className="form">
              <div className='wrapperDiv'>
                <div className='idk'></div>
                  <label>
                    <span className="spanClass" htmlFor="email">Email:</span>
                    <div className='inputImage'></div>
                    <input className="inputClass" type="text" name="email" onChange={changeHandler} value={values.email} required />
                  </label>
                </div>
                <div className='wrapperDiv'>
                <div className='idk'></div>
                  <label>
                    <span className="spanClass" htmlFor="username">Username:</span>
                    <div className='inputImage'></div>
                    <input className="inputClass" type="text" name="username" onChange={changeHandler} value={values.username} required />
                  </label>
                </div>
                <div className='wrapperDiv'>
                <div className='idk'></div>
                  <label>
                    <span className="spanClass" htmlFor="password">Password:</span>
                    <div className='inputImage'></div>
                    <input className="inputClass" type="password" name="password" onChange={changeHandler} value={values.password} required />
                  </label>
                </div>
                <div className='wrapperDiv'>
                <div className='idk'></div>
                  <label>
                    <span className="spanClass" htmlFor="rePass">Repeat Password:</span>
                    <div className='inputImage'></div>
                    <input className="inputClass" type="password" name="rePass" onChange={changeHandler} value={values.rePass} required />
                  </label>
                  
                </div>
              <div className='downPart'>
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
              {errors.username && <p className="error">{errors.username}</p>}
              {errors.password && <p className="error">{errors.password}</p>}
              {errors.rePassword && <p className="error">{errors.rePassword}</p>}
              <button type='submit' className='btnSubmit mt-5'>
                <div className='btnBackground'></div>
                <div className='btnBackgroundImage'></div>
                <div className='btnText'>
                    <span className='btnSpan'>Register</span>
                </div>
              </button>
            </form>
            
          </div>
        </div>
        </div>
    
        
            </>
  )
}