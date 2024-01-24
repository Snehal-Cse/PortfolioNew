"use client"
import React from "react"
export default function Page(){
    const[formData, setFormData] = React.useState({
        email : "",
        password : ""
    })
    
    function handleChange(e){
        const {name,value} = e.target
        setFormData((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }
    return(
        <div className = " w-screen h-[82.5vh] flex flex-col justify-center items-center bg-stone-100 ">
          <div className = " w-80 h-2.5/5  p-8 shadow-lg shadow-gray-500 flex flex-col bg-white font-['Georgia'] rounded" >
            <h1 className = "flex flex-row justify-center heading font-extrabold text-3xl pb-4"> LOGIN PAGE</h1>
            <div className = "flex flex-col gap-y-6 ">
            <input className="border-2 rounded p-1 outline-none" type="email"
             placeholder=" Email"
             name = "email"
             value= {formData.email}
             onChange = {handleChange}/>
             <input className="border-2 rounded p-1 outline-none" type = "password"
             placeholder="Password"
             name = "password"
             value={formData.password}
             onChange = {handleChange} />
            <button type="submit" className = "bg-indigo-500 text-white font-extrabold rounded font-['Georgia'] py-2">LOGIN</button>
            </div>
          </div>
          </div>
    )
}