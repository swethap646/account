import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Register from './components/Register';
import Login from './components/Login';
import Userslist from './components/userslist';



function App() {
  return (
    <div className="App">
      <h1>Mern Stack Project</h1>

      <div className='row'>

        <div className = "col-md-6">
        <Register/>
        </div>
        <div className = "col-md-6">
        <Login/>
        </div>

      </div>

      <div className ='row justify-content-center'>
        <div className="col-md-8">
          <Userslist/>
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
