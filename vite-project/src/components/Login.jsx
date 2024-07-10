export default function Login({
    isLogedInCloseHandler
}){
    return (
        <div className="overlay">
        <div className="backdrop" onClick={isLogedInCloseHandler}></div>
        <div className="modal">
          <form className="registerForm">
            <h2>Login</h2>
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
            <button className="button" type="submit">
              Register
            </button>
            <button
              className="button"
              type="button"
              onClick={isLogedInCloseHandler}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
}