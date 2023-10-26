import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListEmployee from './components/ListEmployee';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
          <div className='container'>
            
        <Routes>
          <Route>
            <Route path="/" element={<ListEmployee />} />
            <Route path="/addemployee" element={<CreateEmployee heading={"Add Employee"} />}  />
            <Route path="/editemployee/:id" element={<UpdateEmployee  heading={"Update Employee"} />} />
          </Route>
        </Routes>
        
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
