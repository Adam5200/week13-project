function renderLoginForm() {
    return(
        <div className="App-login">
            <h3>Log In</h3>
            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
            <button type="submit">Submit</button>
        </div>        
    );
}
export default renderLoginForm;