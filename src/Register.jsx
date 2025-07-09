import { useState } from "react";
import axios from 'axios';


export default function Register(){
    const[form,setform] =useState({Username:'',Email:"",Password:''});
     const handlechange =(e)=> setform({...form,[e.target.name]: e.target.value});
    const handleSubmit = async(e) =>{e.preventDefault();
        try{
            const res = await axios.post('http://Localhost:5000/api/Register',form);
            alert(res.data.msg);
            }
        catch(err){
            alert(err.respones?.data?.msg);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        <input name="Username" onChange={handlechange} type="text" placeholder="Username" required /><br /><br />
        <input name="Email" onChange={handlechange} type="text" placeholder="Email" required /><br /><br />
        <input name="Password" onChange={handlechange} type="text" placeholder="Password" required /><br /><br />
        <button type="Submit">Register</button>
        </form>
    )
}