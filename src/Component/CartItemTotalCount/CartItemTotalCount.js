import React from 'react'
import { connect } from 'react-redux';

function CartItemTotalCount({cartCount}) {
  if (cartCount.length === 0) {
    return (
      <div>0</div>
    )
  }
  else {
    return (
      <div>{cartCount.length}</div>
    )
  }
}

const mapStatetoProps = (state) => {
  return { cartCount: state.cartList };
}

export default connect(mapStatetoProps, null)(CartItemTotalCount);