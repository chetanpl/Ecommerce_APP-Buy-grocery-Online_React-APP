import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import './Cart.css'
import { addTOCart } from '../../Action/Shoping.action'
function Cart({ products, sortType }) {
  const [productList, setproductList] = useState([]);
  const dispatch = useDispatch();
  function newItemInCart(item, i) {
    const obj = {
      id: item.id, price: item.variants[0].price, title: item.title, size: item.options[0].name + '/' + item.options[0].values[0],
      UnitqueId: i
    }
    dispatch(addTOCart(obj));
  }

  useEffect(() => {
    let result = [];
    if (products && products.products && products.products.length > 0) {
          result = products.products.sort((a, b) => (a.title < b.title ? -1 : 1))
    }
    setproductList(result);

  }, [products && products.products && products.products.length > 0]);
  // sorting behalf of sort type
  useEffect(() => {
    if (products && products.products && products.products.length > 0) {
      switch (sortType) {
        case 'ATOZ': {
          setproductList(Object.assign([],products.products.sort((a, b) => (a.title < b.title ? -1 : 1))));
          break;
        }
        case 'ZTOA': {
          setproductList(Object.assign([],products.products.sort((a, b) => (a.title > b.title ? -1 : 1))))
          break;
        }
        case 'HP': {
          setproductList(Object.assign([],products.products.sort((a, b) => (Number(a.variants[0].price) > Number(b.variants[0].price) ? -1 : 1))))
          break;
        }
        case 'LP': {
          setproductList(Object.assign([],products.products.sort((a, b) => (Number(a.variants[0].price) < Number(b.variants[0].price) ? -1 : 1))))
          break;
        }
      }
    }
  }, [sortType]);

  if (productList.length > 0) {

    return (
      <div className='card_Container'>
        {productList.map((item) => (
          <div key={item.id}><div className='cards'>
            <div className='card_outer_box'>
              <div className='card__inner__box'>
                <img className='card__box__image' src={item.images[0].src}
                  alt={item.tags[2].title} />
              </div></div>
            <div className='card__action_box'>
              <div className='card__product_name_price'>
                <span className='card__product_name_price_left'> {item.title}</span> <span className='card__product_name_price_right'>&#xa3;{item.variants[0].price}</span>
              </div>
              <div className='card__quickView'>
                <div className='addtocart' onClick={() => { newItemInCart(item, Math.random()) }}>Add To Cart</div>
                <div className='quickview'> Quick View</div>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    );
  }
  else {
    return (<></>)
  }
}

const mapStatetoProps = (state) => {
  return { products: state.shopItem };
}

export default connect(mapStatetoProps, null)(Cart);