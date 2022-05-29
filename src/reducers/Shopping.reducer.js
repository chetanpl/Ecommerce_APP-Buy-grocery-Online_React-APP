import { AddITEM, LOADPRODUCTS, REMOVECART_ITEM, GETPRODUCTS } from '../Action/Shoping.action'
const cart = { shopItem:[], cartList: [],CartTotalItem:0 };
const handlecart = (state = cart, action) => {
    //const product = action.payload;
    switch (action.type) {
        case AddITEM: {
            return {
                ...state,
                cartList: state.cartList.concat([action.payload])
            }
            break;
        }
        case LOADPRODUCTS: {
            return { ...state, 
                shopItem:action.payload }
            break;
        }
        case REMOVECART_ITEM: {
                return {
                    ...state,
                    cartList:[...state.cartList.filter(function (x) {
                        return x.UnitqueId !== action.payload
                    })
                ]
                }
            break;
        }
        case GETPRODUCTS: {
            return {
                ...state
            }
            break;
        }
        default:
            return state;
            break;
    }
}
export default handlecart