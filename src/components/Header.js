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
            <div>

                <form>
                    <input  onChange={(e)=> searchCharacter(e)}  type="text" autoFocus/>
                </form>
            </div>
        </>
    )
}

export default Header
