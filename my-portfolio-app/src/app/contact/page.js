"use client"
import React from "react"
export default function Page(){
  const [info, setInfo] = React.useState({
    fullname: "",
    email:"",
    phone:"",
    message:""
  })
  function handleChange(e){
    const {name,value} = e.target
    setInfo((prev)=>{
      return {
          ...prev,
          [name]: value
      }
    })
  }
  return (
      <div className = "w-screen h-[82.5vh] flex flex-row justify-center items-center bg-stone-200 ">
        <div className = " bg-white w-96 p-4 h-96 rounded-lg flex flex-col shadow-xl shadow-gray-400" >
          <h1 className = "flex flex-row font-['georgia'] justify-center font-extrabold text-xl py-4  text-indigo-800">FEEL FREE TO REACH OUT!</h1>
          <div className = "flex flex-col gap-y-4 ">
         <div className = "flex flex-row  border p-2 rounded-md">
            <input type = "text"
            className="w-full outline-none font-['georgia'] "
                 placeholder = "Full Name"
                 value = {info.fullname}
                 name = "fullname"
                 onChange = {handleChange} />
                  </div>
                  <div className = "flex flex-row  border p-2 rounded-md">
                  <input type = "email"
                  className="w-full outline-none font-['georgia'] "
                 placeholder = "Email"
                 value = {info.email}
                 name = "email"
                 onChange = {handleChange} />
                </div>
                 <div className = "flex flex-row  border p-2 rounded-md">
                  <input type = "text"
                  className="w-full outline-none font-['georgia'] "
                 placeholder = "Mobile"
                 value = {info.phone}
                 name = "phone"
                 onChange = {handleChange} />
                </div>
                 <div className = "flex flex-row border  p-2 rounded-md">
                 <textArea className = "resize-none w-full outline-none font-['georgia'] "
                 placeholder = "Enter a message"
                 value = {info.message}
                 name = "message"
                 onChange = {handleChange} />
                 </div>  
                 <div className = "bg-indigo-500 rounded"><button type = "submit" value="submit" className="w-full text-white font-extrabold p-1" >SUBMIT</button>
                 </div>
                 </div>
        </div>
      </div>
   
   
  )
}
 

