import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Success from './Success';
function App() {
  

  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/" element ={<Navigate to="/Login"/>} />
      <Route path="/Register" element ={<Register/>} />
      <Route path="/Login" element ={<Login/>} />
      <Route path="/Success" element ={<Success/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
