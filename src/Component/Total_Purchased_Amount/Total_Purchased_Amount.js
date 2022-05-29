import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

function Total_Purchased_Amount(cartlist) {
  let totalcount = 0
  const [TC, setTC] = useState(0);
  useEffect(()=>{
    if (cartlist.item && cartlist.item.cartList && cartlist.item.cartList.length > 0) {
      totalcount = cartlist.item.cartList.map(item => item.price).reduce((a, b) => Number(a || 0) + Number(b || 0), 0);
     } setTC(totalcount);
  },[cartlist.item.cartList])
  if (cartlist.item && cartlist.item.cartList && cartlist.item.cartList.length > 0) {
    return (
      <>{TC}</>
    )
  }
  else {
    return ( <>0</>)
  }
}

const mapStatetoProps = (state) => {
  return { item: state };
}

export default connect(mapStatetoProps, null)(Total_Purchased_Amount);