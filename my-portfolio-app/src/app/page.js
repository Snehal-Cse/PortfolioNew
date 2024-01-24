

export default function Home() {
  return (
  <div className = "flex flex-row w-screen h-[83vh] justify-center items-center ">
    <div className = "flex flex-col h-full w-1/2 items-end justify-center p-4">
   <img src="./myImg.jpeg" alt="My Image" className="h-3/4 w-2/4 rounded-full" />
    </div>
    <div className="flex flex-col h-full w-1/2 items-center justify-center  font-['Georgia'] font-extrabold p-4 mr-4">
            <div className="flex flex-row text-4xl font-extrabold py-2 px-1 text-slate-950">HELLO, I AM</div>
            <div className = "flex flex-row text-4xl font-extrabold py-2 px-1 text-indigo-800 "> SNEHAL BANDI </div>
            <div className = "flex flex-row text-4xl font-extrabold py-2 text-slate-950 px-1 tracking-tight">
              WEB AND APP DEVELOPER
              </div>  
            <div className = "flex flex-row gap-x-4">
            <div className = "flex flex-col py-1"> <button type = "button" className="bg-indigo-500 p-2 rounded-lg text-xl text-white font-['Georgia']">Download CV</button> </div> 
            <div className = "flex flex-col py-1 "> <a href = "/contact"><button type = "button" className="bg-indigo-500 p-2 rounded-lg text-xl text-white font-['Georgia']">Contact Me</button></a></div> 
              </div>     
    </div>
  </div>
  )
}
