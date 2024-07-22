import {useEffect,useState} from 'react'
export default function Register({
    goBackHome,
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
  
    return(
      <>
<div className="overlay">
<div className="backdrop" onClick={goBackHome}></div>
<div className="modal">
  <div className="onTop">
  <button className="btn close" onClick={goBackHome}>
      &times;
    </button>
  </div>
  <form onSubmit={formSubmitHandler} className="space-y-6">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
    <div className="form-items">
    <div className="form-row">
          <div className="form-group">
            <div>
              <label className="block flex pl-3 text-md font-medium leading-6 text-gray-900" htmlFor="email">Email:</label>
              <input className="rounded-md" type="text" name="email" onChange={changeHandler} value={formData.email} required />
            </div>
          </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <div>
          <label className="block flex pl-3 text-md font-medium leading-6 text-gray-900" htmlFor='username'>Username:</label>
          <input className="rounded-md" type="text" name="username" onChange={changeHandler} value={formData.username} required />
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <div>
          <label className="block flex pl-3 text-md font-medium leading-6 text-gray-900" htmlFor='password'>Password:</label>
          <input className="rounded-md" type="password" name="password" onChange={changeHandler} value={formData.password} required />
        </div>
      </div>
    </div>
    </div>
    <div className="buttons">
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
                Login
              </button>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
                value={formData.username}
                onClick={goBackHome}
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