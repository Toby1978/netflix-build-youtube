import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow ]= useState(false);
    const transitionNavBar =() =>{
        if (window.scrollY>100){
        handleShow(true);
    }else{
        handleShow(false);
    }
}

useEffect(() => {
window.addEventListener("scroll", transitionNavBar)
return () => window.removeEventListener("scroll", transitionNavBar)
}, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav_contents"> 
        <img 
      className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt=""
        />
        <img 
         className="nav_avatar"
        src="https://i.pinimg.com/474x/c0/8e/6c/c08e6c9595e03202a46a95f66578799f--netflix-girly-things.jpg"
        alt=""
        />

         </div>   
    
    
    </div>
     
  )
}

export default Nav