import React, { useState } from 'react'
import axios from 'axios'

function Login(){


    const[username,setusername] = useState('')
    const[password,setpassword] = useState('')


    function Login(event){

        event.preventDefault()
        alert('login successfully');


        var user = {

            username:username,
            password:password
        }

        axios.post('/api/user/loginuser',user).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        console.log(user);
    }
    return(
            <div>
                

                <form onSubmit={Login}>
                <h1>LOGIN</h1>
        
                    <input type="text" placeholder=' username' value={username} onChange={(event)=>{setusername(event.target.value)}} className='form-control'/> 
                    <input type="text" placeholder='password'  value={password} onChange={(event)=>{setpassword(event.target.value)}}className='form-control'/>
                    <input type="submit" className="btn btn-primary" value='Login'/>
                </form>
            </div>
    )
}
export default Login