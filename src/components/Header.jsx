import "./header.css"
import Burgermenu from "./Burgermenu";
import { GiAlienBug} from 'react-icons/gi';
import { FiSearch} from 'react-icons/fi';
import { BiMessageSquareAdd} from 'react-icons/bi';
import { AiOutlineSetting,AiOutlineClose} from 'react-icons/ai';
import { IoMdNotifications} from 'react-icons/io';
import { GiHamburgerMenu} from 'react-icons/gi';
import { Link, NavLink } from "react-router-dom";
import profile1 from "../assets/profile1.jpg"
import { useState } from "react";

const Header = () => {

    const [burgerLink, showBurgerLink] = useState(false)

    const showBurger = () => {
        showBurgerLink(prevState => !prevState)
    }

  return (
       <section className="header" >
         <div className="header__container">
              <div className="logo">
                  <Link to="/">            
                  <GiAlienBug className="bug" />
                  </Link>
                  <div className="header__search">
                        <FiSearch className="text-muted srh" />
                        <input type="text"
                           placeholder="Search"
                        />
                        </div>
              </div>
              <div className="profile__sec">
                       
                        <div className="navlinks">
                            <ul>
                                <li ><NavLink to="/profile" onClick={()=> showBurgerLink(false)}>Account</NavLink></li>
                                <li><NavLink to="network" onClick={()=> showBurgerLink(false)}>My Network</NavLink></li>
                            </ul>
                        </div>
                        <div className="create">
                            {
                                burgerLink ?   <button className="btn btn-primary burger" 
                                onClick={()=> showBurgerLink(false)}
                                ><AiOutlineClose className="cre "  /></button> :   <button className="btn btn-primary burger" 
                                onClick={showBurger}
                                ><GiHamburgerMenu className="cre "  /></button>
                            }
                        
                           <label htmlFor="createPost"> <button className="btn btn-primary cree"><BiMessageSquareAdd className="cre" /> Create </button></label>
                            <button className="btn btn-primary "><AiOutlineSetting className="cre"  /></button>
                            <button className="btn btn-primary "><IoMdNotifications className="cre"  /></button>
                        </div>
                        <Link to="profile">
                        <div className="profile">
                            <img src={profile1} alt="" className="profile-picture" />
                        </div>
                        </Link>
              </div>
         </div>
         {
                            burgerLink && <Burgermenu />
                        }
       </section>
    )
}

export default Header