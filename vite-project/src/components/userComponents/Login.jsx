import { useLogin } from "../../hooks/useAuth"
import useForm from "../../hooks/useForm"
import {useNavigate} from 'react-router-dom'
export default function Login({
  goBackHome,
}){
    const login = useLogin()
    const navigation = useNavigate()
    const {values,submitHandler,changeHandler} = useForm(
        {email:'',username:'',password:''},
        async ({email,password})=>{
            try {
                await login(email,password)
                navigation('/')
            } catch (error) {
              console.log(error.message)
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
                <button type='submit' className='btnSubmit mt-5'>
                  <div className='btnBackground'></div>
                  <div className='btnBackgroundImage'></div>
                  <div className='btnText'>
                      <span className='btnSpan'>Login</span>
                  </div>
                </button>
              </form>
              
            </div>
          </div>
          </div>
              </>
    )
}