
import './App.css';
import NavBar from "./NavBar.js"
import LoginForm from "./LoginForm.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>  
      </header>
      <body className="App-body">
        <LoginForm/>
      </body>
    </div>
  );
}

export default App;
