import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faUser , faSearch} from '@fortawesome/free-solid-svg-icons'; 
import { faHeart as faHeartRegular, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import vector from "../../images/Vector.png"
import "./herder1.css"

function Header(){
    return(<>
    
    <nav>
<div className='UpperNav'>
<div><img src={vector} alt="image" /></div>
<FontAwesomeIcon icon={faBars} className="menu-icon" />
<h1>LOGO</h1>

<div className="RightSide">
<FontAwesomeIcon icon={faSearch} className="search-icon" />
<FontAwesomeIcon icon={faHeartRegular} className="icon" />
                    <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                    <FontAwesomeIcon icon={faUserRegular} className="icon" />
                    {/* <h3>eng</h3> */}
                    <select className="languageSel">
                        <option>ENG</option>
                    </select>
                </div>
</div>

{/* <div className='LowerNav'>

</div> */}
<ul>
    <li><a>Home</a></li>
    <li><a>Skills</a></li>
    <li><a>Stories</a></li>
    <li><a>About</a></li>
    <li><a>contact us</a></li>
</ul>
</nav>


   <div className="discovery">

    <h3>DISCOVER OUR PRODUCTS</h3>
    <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
   </div>
    </>)
}

export default Header