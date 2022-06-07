import "./burgermenu.css"
import {  NavLink } from "react-router-dom";
import { FiSearch} from 'react-icons/fi';
import { BiMessageSquareAdd} from 'react-icons/bi';



const Burgermenu = () => {
  return (
                    <div className="burger__link">
                            <ul>
                            <div className="burger__search">
                        <FiSearch className="text-muted srh" />
                        <input type="text"
                           placeholder="Search"
                        />
                        </div>
                                <li><NavLink to="profile">Account</NavLink></li>
                                <li><NavLink to="network">My Network</NavLink></li>
                            </ul>
                            <button className="btn btn-primary creee"><BiMessageSquareAdd className="cre"  /> Create </button>
                        </div>
  )
}

export default Burgermenu