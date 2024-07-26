import { useState } from "react"
import useForm from "../../hooks/useForm"
import { useRegister } from "../../hooks/useAuth"
import {useNavigate} from 'react-router-dom'

export default function Register({
    goBackHome,
}){

    const [error,setError] = useState('')
    const register = useRegister()
    const navigate = useNavigate()
    const registerHandler = async ({email,password,rePass})=>{
        if(password !== rePass){
            setError('Password missmatch!')
            return
        }
        try {
            const resp = await register(email,password)
            console.log(resp)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }
    const {values,changeHandler,submitHandler} = useForm({
        email:'',
        username:'',
        password:'',
        rePass:''
    },registerHandler)
  
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