
import { useState } from "react";
import {AiOutlineDown, AiOutlineLeft}  from "react-icons/ai"
import './Dashboard.css'

import { Link } from "react-router-dom";
import {BsPerson} from "react-icons/bs"
import  {BiLogOut} from "react-icons/bi"



const ProfileBar = ({user}: any) => {
    const [headerDropdown, setHeaderDropDown]  = useState(false)
   
    const opendd = <AiOutlineLeft title="open" onClick={() => setHeaderDropDown(!headerDropdown)} size="1.2rem" className="picon" />


    const closedd = <AiOutlineDown title="close" onClick={() => setHeaderDropDown(!headerDropdown)} size="1.2rem" className="picon" />

    return ( 
        <>
                    <div className="profilebar">
                        <Link title="dashboard" to="/idashboard">
                        <img  src="/profile.png"  alt=""/>
                        </Link>
                        <p>{user.name}</p>
                        {headerDropdown  ? opendd : closedd}
                      </div>
                    {headerDropdown  &&
                    
                    <div className="dropdown">
                        <Link to="/idashboard">
                        <button>
                            <BsPerson  size="1.5rem" className="dropdown_icon"/>
                           <span>Profile</span> 
                        </button>
                        </Link>
                        <button>
                            <BiLogOut size="1.5rem" className="dropdown_icon"/>
                           <span>Log Out</span> 
                        </button>
                    </div>
                    }
                </>
      
     );
}
 
export default ProfileBar;