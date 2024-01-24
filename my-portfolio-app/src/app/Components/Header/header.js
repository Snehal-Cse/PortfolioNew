export default function Header(){
    return(
        <div className = "w-screen ">
        <div className = " max-h-40 h-18 w-full flex flex-row px-4 shadow shadow-gray-500 font-extrabold justify-between items-center font-['Georgia']">
        <img className = "h-16 w-22" src = "./portfolioImg.jpg" />
        <ul className = " w-100 flex flex-row justify-evenly cursor-pointer text-lg mr-16 px-2" >
            <a href="/"><li className =" text-zinc-500 hover:text-indigo-800 px-2 text-xl ">HOME</li></a>
            <a href="/about"><li className =" text-zinc-500 hover:text-indigo-800 px-2 text-xl">ABOUT</li></a>
            <a href="/create">  <li className =" text-zinc-500 hover:text-indigo-800 px-2 text-xl">CREATE</li></a>
            <a href="/login"><li className =" text-zinc-500 hover:text-indigo-800 px-2 text-xl">LOGIN</li></a>
        </ul>
        </div>
    </div>
    )
}