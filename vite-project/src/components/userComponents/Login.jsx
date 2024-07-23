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
          <div className="modal">
            <div className="onTop">
            <button className="btn close" onClick={goBackHome}>
                &times;
              </button>
            </div>
            <form  onSubmit={submitHandler} className="space-y-6">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Login</h2>
              <div className="form-items">
              <div className="form-row">
                <div className="form-group">
                  <div>
                    <label className="block pl-3 text-md font-medium leading-6 text-white" htmlFor="username">Username:</label>
                    <input className="rounded-md text-black" type="text" name="username" onChange={changeHandler} value={values.username} required />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <div>
                    <label className="block pl-3 text-md font-medium leading-6 text-white" htmlFor="password">Password:</label>
                    <input className="rounded-md text-black" type="password" onChange={changeHandler} value={values.password} name="password" required />
                  </div>
                </div>
              </div>
              </div>
              <div className="buttons">
              <button className="flex w-full justify-center rounded-md bg-emerald-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
                Login
              </button>
              <button
                className="flex w-full justify-center rounded-md bg-emerald-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
                value={values.username}
                onClick={goBackHome}
              >
                Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
        </div>
            </>
      )
}