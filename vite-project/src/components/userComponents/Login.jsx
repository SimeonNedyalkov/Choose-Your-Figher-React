import { useState,useEffect } from "react"
export default function Login({
    isLogedInCloseHandler,
    isLogedIn
}){
    const [formData,setFormData] = useState({
      _id:'',
      username:"",
      password:""
    })
    useEffect(()=>{
      async ()=>{
        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles')
        const profile = await response.json()
        console.log(profile)
        setFormData(profile)
      }
    })
    const formSubmitHandler = (e) =>{
      e.preventDefault()
      console.log('Form Submitted')
    }
    const changeHandler = (e) =>{
      console.log(e.target.value)
      setFormData(oldValues=>({
        ...oldValues,
        [e.target.name] : e.target.value
        
      }))
    }
    if(!isLogedIn){
      return (
        <>
        <div className="overlay">
          <div className="backdrop" onClick={isLogedInCloseHandler}></div>
          <div className="modal">
            <div className="onTop">
            <button className="btn close" onClick={isLogedInCloseHandler}>
                &times;
              </button>
            </div>
            <form onSubmit={formSubmitHandler}>
              <h2>Login</h2>
              <div className="form-items">
              <div className="form-row">
                <div className="form-group">
                  <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={changeHandler} value={formData.username} required />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={changeHandler} value={formData.password} name="password" required />
                  </div>
                </div>
              </div>
              </div>
              <div className="buttons">
              <button className="button" type="submit">
                Register
              </button>
              <button
                className="button"
                type="button"
                value={formData.username}
                onClick={isLogedInCloseHandler}
              >
                Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
            </>
      )
    }
    
}