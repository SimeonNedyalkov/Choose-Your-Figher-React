import { useState } from "react"
import { useLogin } from "../../hooks/useAuth"
import useForm from "../../hooks/useForm"
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"
const initialValues = {email:'',username:'',password:''}
export default function Login({
  goBackHome,
}){
    const [error,setError] = useState('')
    const login = useLogin()
    const navigation = useNavigate()
    const {values,submitHandler,changeHandler} = useForm(
        initialValues,
        async ({email,password})=>{
            try {
                await login(email,password)
                navigation('/')
            } catch (error) {
              setError('Warning: Incorrect username or password')
            }}
    )
    
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
                      <span className="spanClass" htmlFor="password">Password:</span>
                      <div className='inputImage'></div>
                      <input className="inputClass" type="password" name="password" onChange={changeHandler} value={values.password} required />
                    </label>
                  </div>
                <div className='downPart'>
                </div>
                {error && <p className="error">{error}</p>}
                <button type='submit' className='btnSubmit mt-5'>
                  <div className='btnBackground'></div>
                  <div className='btnBackgroundImage'></div>
                  <div className='btnText'>
                      <span className='btnSpan'>Login</span>
                  </div>
                  
                </button>
                <div className='dialogue p-2'>
                      If you don't have an accout click the button bellow
                </div>
                <div className='column'>
                    <Link
                        to="/register"
                        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                      >
                        Register now
                    </Link>
                  </div>
              </form>
              
            </div>
          </div>
          </div>
              </>
    )
}