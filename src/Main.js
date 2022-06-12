import React, { useCallback, useMemo, useEffect, useState, profiler, Profiler } from 'react';
import './Main.css'
import Header from './Component/Header/Header'
import BuyItemList from './Component/BuyItemList/BuyItemList'
import Cart from './Component/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from './Action/Shoping.action';
import CartItemTotalCount from './Component/CartItemTotalCount/CartItemTotalCount';
import Total_Purchased_Amount from './Component/Total_Purchased_Amount/Total_Purchased_Amount';
import FetchRecords from './Service/Service';
import Loading from './assets/Loading/Loading'
export default function Main() {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState('ATOZ');
  const [isLoading, setIsLoading] = useState(false);
  const triggerSortAction = (action) => { setSortType(action.target.value) }
  useEffect(() => {
    setIsLoading(true);
    FetchRecords().then(result => {
      dispatch(loadProducts(result.data));
      setIsLoading(false)
    }).catch(error => {
      dispatch(loadProducts(error));
      setIsLoading(false)
    })
  }, []);

  const addToCart = useCallback(() => {
    console.log('addTocart callback call', 'd')
  }, [sortType]);
  
  const totalCountCB = useMemo(() => {
    console.log('addTocart callback call', 'd')
  }, []);


  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    console.log(`id=${id} phase=${phase} actualDuration=${actualDuration} baseDuration=${baseDuration}startTime=${startTime} commitTime=${commitTime} interactions=${interactions} ${id} ${id}`)
  }
  return (
    <div>
      <Profiler id="Content" onRender={onRenderCallback}>
        <Header totalCountCB={totalCountCB} />
      </Profiler>
      <br></br>
      <select className='filter' name="filter" id="filter" onChange={triggerSortAction}>
        <option value="ATOZ">A to Z</option>
        <option value="ZTOA">Z to A</option>
        <option value="HP">Highest Price</option>
        <option value="LP">Lowest Price</option>
      </select>

      <div className='container'>
        <div className='card_Container' >
          {isLoading ? <Loading /> : <Cart addToCart={addToCart} sortType={sortType} />}
        </div>
        <div className='card_board'>
          <div className='card_board__checkout_Cart'>Cart <span className='card_board__Products'><CartItemTotalCount /></span></div>
          <hr></hr>
          <BuyItemList />
          <div>  <div className='card_board_total_Amount'> <div className='card_board__new_Entery'>
            <div className='card_board__totalPrice'>
              <div> Total</div>
              <div className='m12'> Inc. <span>&#xa3;</span>0 in taxes</div>
            </div>
            <div className='card_board__Amount'>
              <div><span>&#xa3;<Total_Purchased_Amount totalCountCB={totalCountCB}/> </span></div>
            </div>
          </div></div></div>
        </div>
      </div>
    </div>
  )
}