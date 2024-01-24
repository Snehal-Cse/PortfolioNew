export default function Page(){
    return(
        
        <div className = "h-[82.1vh] w-screen flex flex-col justify-center  pt-10 gap-4 px-12 items-center">
        <div className="flex flex-col w-[180vh]  h-[64vh]  bg-indigo-200 rounded-md p-8 resize-none text-2xl font-semibold outline-none gap-y-3 ">
            <div className = "flex flex-row justify-between">
                <h3 className = "font-['georgia'], font-bold text-gray-500 ">Choose Color</h3>
           <input type = "color" className = " flex flex-row  p-2 outline-none border rounded border-black"   />
           </div>
            <input type="text" className = "resize-none flex flex-row rounded p-2 outline-none font-['georgia'] font-bold" placeholder="Write Category" />
             
            <textarea className = " h-3/4 w-full resize-none flex flex-row rounded p-2 outline-none font-['georgia'] font-bold"
               placeholder = "Enter Information"
               
               />
               
               </div>
               <div className = "flex flex-row justify-center "><button type = "submit" className = "bg-indigo-500 text-white font-['georgia'] font-bold px-8 py-2 rounded-lg">SUBMIT</button></div>
    </div>
    )
}