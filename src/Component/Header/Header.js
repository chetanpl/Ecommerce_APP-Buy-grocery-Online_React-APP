import React,{memo} from 'react'
import '../Header/Header.css'
import CartItemTotalCount from '../CartItemTotalCount/CartItemTotalCount'
import Total_Purchased_Amount from '../Total_Purchased_Amount/Total_Purchased_Amount'
export default memo(function Header() {
  return (
    <div className='mobileDevice'>
    <div className='mainHeader'>
      <a href="#" className="logo">vf- apparel</a>
      <div><span className='cartPrice'><span>&#xa3;</span><Total_Purchased_Amount/></span> <span className='cartNumberOfItems'><CartItemTotalCount/></span></div>
   </div>
   <div className='HeaderImgBG'>
    </div>
    </div>
  )
});
