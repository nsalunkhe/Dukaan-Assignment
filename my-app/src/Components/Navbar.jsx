import HomeIcon from "../Icons/Home.svg";
import OrdersIcon from "../Icons/Orders.svg";
import ProductsIcon from "../Icons/Products.svg";
import DeliveryIcon from "../Icons/Delivery.svg";
import MarketingIcon from "../Icons/Marketing.svg";
import AnalyticsIcon from "../Icons/Analytics.svg";
import PayoutsIcon from "../Icons/Payouts.svg";
import DiscountsIcon from "../Icons/Discounts.svg";
import AudienceIcon from "../Icons/Audience.svg";
import AppearanceIcon from "../Icons/Appearance.svg";
import PluginsIcon from "../Icons/Plugins.svg";
import User from "../Icons/Profile.svg";
import Wallet from "../Icons/wallet.svg"
import Vector from "../Icons/Arrow.svg"
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar =()=>{
    return(
        <>
        <div className="nav-1">
        <div className="nav-3">
            <img src={User} alt='user'/>
            <div className="user-1">
                <div className="user-2">
                 <p>Nishyan</p>
                </div>
                <div className="user-3">
                  <p><Link className="visit" to='/'>Visit store</Link></p>
                </div>
            </div>
            <div className="user-4">
                 <img src={Vector} alt="arrow"/>
            </div>
        </div>
           <div className="nav">
            <Link className="nav-link">  
              <img src={HomeIcon} alt='home'/>
              <a href="/">Home</a> 
            </Link>
            <Link className="nav-link">
              <img src={OrdersIcon} alt='home'/>
              <a href="/">Orders</a>
            </Link>
            <Link className="nav-link">
              <img src={ProductsIcon} alt='home'/>
              <a href="/">Products</a>
            </Link>
            <Link className="nav-link">
              <img src={DeliveryIcon} alt='home'/>
              <a href="/">Delivery</a>
            </Link>
            <Link className="nav-link">
              <img src={MarketingIcon} alt='home'/>
              <a href="/">Marketing</a>
            </Link>
            <Link className="nav-link">
              <img src={AnalyticsIcon} alt='home'/>
              <a href="/">Analytics</a>
            </Link>
            <Link className="nav-link">
              <img src={PayoutsIcon} alt='home'/>
              <a href="/">Payouts</a>
            </Link>
            <Link className="nav-link">
              <img src={DiscountsIcon} alt='home'/>
              <a href="/">Discounts</a>
            </Link>
            <Link className="nav-link">
              <img src={AudienceIcon} alt='home'/>
              <a href="/">Audience</a>
            </Link>
            <Link className="nav-link">
              <img src={AppearanceIcon} alt='home'/>
              <a href="/">Appearance</a>
            </Link>
            <Link className="nav-link">
              <img src={PluginsIcon} alt='home'/>
              <a href="/">Plugins</a>
            </Link>
      </div>
           <div className="nav-2">
              <div className="nav-2-1">
                <img src={Wallet} alt="" />
              </div>
              <div className="nav-2-2">
                 <div className="nav-2-2-1">
                  <p>Available credits</p>
                 </div>
                 <div className="nav-2-2-2">
                  <p>222.10</p>
                 </div>
              </div>
           </div>
      </div>
        </>
    )
}
export default Navbar;