export default function Register({
    isRegisteredCloseHandler
}){
    return(
        <>
<div className="overlay">
  <div className="backdrop" onClick={isRegisteredCloseHandler}></div>
  <div className="modal">
    <div className="onTop">
    <button className="btn close" onClick={isRegisteredCloseHandler}>
        &times;
      </button>
    </div>
    <form className="registerForm">
      <h2>Register</h2>
      <div className="form-items">
      <div className="form-row">
        <div className="form-group">
          <div>
            <label>Username:</label>
            <input type="text" name="username" required />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <div>
            <label>Password:</label>
            <input type="password" name="password" required />
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
        onClick={isRegisteredCloseHandler}
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