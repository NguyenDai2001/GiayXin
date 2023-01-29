import React from "react";
import { NavLink } from "react-router-dom";
import Lookup from "./lookup";
import Cart from "./cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


//css
import '../../styles/header/header.scss'




class Header extends React.Component{
    render(){
        
    
        return(
            <>
                <div className="NavBar_container">
                    <div className="NavBar_child">
                        <div className="NavBar_logo">
                            <img src={require('../../assets/images/logo/logo.png')} alt="logo"/>
                        </div>

                        {/* thanh tìm kiếm */}
                        <Lookup />
                        <div className="NavBar_Select">
                            <ul>
                                <li>
                                    <NavLink to="trangChu"  className="Select_item">TRANG CHỦ</NavLink>
                                </li> 
                                <li>
                                    <NavLink to="sanPham" className="Select_item">SẢN PHẨM</NavLink>
                                </li>  
                                <li>
                                    <NavLink to="lienHe" className="Select_item">LIÊN HỆ</NavLink>
                                </li>   
                            </ul> 
                            
                            
                            

                        </div>
                        <div className="NavBar_cart">
                            <NavLink to="gioHang" className='icon_cart'>{<FontAwesomeIcon icon={faCartShopping } />}</NavLink>
                        </div>
                        
                    </div>
                </div>

                
            </>
        )
    }
}
export default Header