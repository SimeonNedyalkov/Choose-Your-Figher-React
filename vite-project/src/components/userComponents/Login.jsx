import useForm from "../../hooks/useForm"
export default function Login({
  goBackHome,
}){
    const {values,changeHandler,submitHandler} = useForm({
      _id:'',
      username:"",
      password:""
    })
    
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