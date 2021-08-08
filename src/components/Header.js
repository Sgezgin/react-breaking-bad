import React,{useState} from 'react'
import logo from '../img/breaking-bad-removebg.png'

function Header({changeSearch}) {

    const searchCharacter = (e) => {
        changeSearch(e.target.value);
      }
    
    return (
        <>
            <div className="flex justify-between">
                <div>
               
                </div>
                <div>
                    <img className="h-48 w-100 animate-bounce" src={logo} />
                </div>
                <div>
             

                </div>


            </div>
            <div className="flex justify-center" >

                <form >
                    <input placeholder="Oyuncu İsmi Yazınız..." 
                    className="focus:outline-none focus:ring focus:border-blue-300 min-w-full p-2 mx-auto"
                    onChange={(e)=> searchCharacter(e)}  type="text" autoFocus/>
                </form>
            </div>
        </>
    )
}

export default Header
