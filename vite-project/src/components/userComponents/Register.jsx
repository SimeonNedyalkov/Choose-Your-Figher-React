import { useState } from "react"
import {useNavigate} from 'react-router-dom'

import useForm from "../../hooks/useForm"
import { useRegister } from "../../hooks/useAuth"

export default function Register({
    goBackHome,
}){

    const [error,setError] = useState('')
    const register = useRegister()
    const navigate = useNavigate()

    const registerHandler = async ({email,username,password,rePass})=>{
        if(password !== rePass){
            setError('Password missmatch!')
            return
        }
        try {
          console.log(`Email: ${email},Password: ${password},Username: ${username}`)
            await register(email,username,password)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }
    const fileChangeHandler = (event) => {
      const file = event.target.files[0];
      changeHandler({ target: { name: 'image', value: file } });
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
                    <span className="spanClass" htmlFor="image">Image:</span>
                    <div className='inputImage'></div>
                    <input className="inputClass" type="file" name="image" onChange={fileChangeHandler} accept="image/*" required />
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