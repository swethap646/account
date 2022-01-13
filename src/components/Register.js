import React, { useState } from 'react'
import axios from 'axios'

function Register(){

    const[name,setname] = useState('')
    const[username,setusername] = useState('')
    const[password,setpassword] = useState('')


    function register(event){

        event.preventDefault()
        alert('registered successfully');


        var user = {
            name:name,
            username:username,
            password:password
        }

        axios.post('/api/user/registeruser',user).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
            <div>
               

                <form onSubmit={register}>
                    <h1>REGISTER</h1> 
                    <input type="text" placeholder='your name' value={name} onChange={(event)=>{setname(event.target.value)}} className='form-control'/>
                    <input type="text" placeholder=' username' value={username} onChange={(event)=>{setusername(event.target.value)}} className='form-control'/> 
                    <input type="text" placeholder='password'  value={password} onChange={(event)=>{setpassword(event.target.value)}}className='form-control'/>
                    <input type="submit" className="btn btn-primary" value='register'/>
                </form>
            </div>
    )
}
export default Register