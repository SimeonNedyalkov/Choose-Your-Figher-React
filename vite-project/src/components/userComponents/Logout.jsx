export default function Logout({
    goBackHome,
}){
  
    return(
      <div className="overlay">
        <div className="backdrop" onClick={goBackHome}></div>
        <div className="modal">
            <button className="btn close" onClick={goBackHome}>
                    &times;
            </button>
          <div className="confirm-container">
              <header className="headers">
              <h2>Are you sure you want to logout?</h2>
              </header>
            <div className="actions">
              <div id="form-actions">
                <div className="buttonsForLogout">
                <button id="action-save" className="btn" type="submit">Logout</button>
                <button id="action-cancel" onClick={goBackHome} className="btn" type="button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
  
    
}