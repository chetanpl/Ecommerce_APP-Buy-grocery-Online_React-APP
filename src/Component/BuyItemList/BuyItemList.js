import React from 'react'
import { connect } from 'react-redux';
import '../BuyItemList/BuyItemList.css'
import {removeTOCart} from '../../Action/Shoping.action'
function BuyItemList(items) {
  return (
    <div className='card_board_scroll'>
      {items.WishList[0].length > 0 ?
        items.WishList[0].map((item) => (
          <div key={item.UnitqueId}>
          <div className='card_board__new_Entery'>
            <div className='card_board__Size'>
              <div> {item.title}</div>
              <div className='m12 fore_color'>  {item.size}</div>
            </div>
            <div className='card_board__item_Price'>
              <div><span>&#xa3;</span>{item.price}</div>
              <div className='m12'>
                <button className='btn' onClick={ ()=>items.onRemoveCartClick(item.UnitqueId)}>Remove</button>
                </div> 
            </div>
          </div>
          </div>
        )) : <div className='card_board_scroll_empty'>Cart is empty</div>
      }
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveCartClick: (id) => {
      dispatch(removeTOCart(id))
    }
  }
}
const mapStatetoProps = (state) => {
  return { WishList: [state.cartList] }
}

export default connect(mapStatetoProps, mapDispatchToProps)(BuyItemList);