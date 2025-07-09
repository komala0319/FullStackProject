import { useState } from "react";
import axios from 'axios';
import{useNavigate,Link} from 'react-router-dom';

export default function Login(){
    const[form,setform] =useState({Email:"",Password:''});
    const Navigate = useNavigate();
    const handlechange =(e)=> setform({...form,[e.target.name]: e.target.value});
    const handleSubmit = async(e) =>{e.preventDefault();
        try{
            const res = await axios.post('http://Localhost:5000/api/login',form);
            alert(res.data.msg);
            localStorage.setItem('user',JSON.stringify(res.data.userNavigate))
            Navigate('/Success');
        }
        catch(err){
            alert(err.respones?.data?.msg||"Login Failed");
        }
    }
 
    return(
        <div>
            <h2>Login</h2>
            <form onsubmit ={handleSubmit}>
            <input name="email" type='email' onChange={handlechange} 
            placeholder="Email" required style={{margin:'10px',padding:'10px'}}/><br />
            <input name="password" type='password' onChange={handlechange} 
            placeholder="Password" required style={{margin:'10px',padding:'10px'}}/><br />
            <button type="Submit" style={{padding:'10px 20px'}}> Login</button>     
            </form>
            <div style={{marginTop:'20px'}}>
            <p>Don't Have an Account?</p>
             <Link to="/Register"></Link>
             <button style={{padding:'10px,20px'}}>Go to Register</button>
            </div>
        </div>
    )
}



