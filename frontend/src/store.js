import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productReviewCreateReducer,productUpdateReducer,productCreateReducer,productListReducer,productDetailsReducer,productDeleteReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import {userListReducer,userDeleteReducer,userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer,userUpdateReducer} from './reducers/userReducers'
import {orderDeliverReducer,orderListReducer,orderCreateReducer,orderDetailsReducer,orderPayReducer,orderListMyReducer} from './reducers/orderReducers'

const reducer=combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,

    productList:productListReducer,
    productDetails:productDetailsReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    productReviewCreate:productReviewCreateReducer,
    cart:cartReducer,
    
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    orderList:orderListReducer,
    orderDeliver:orderDeliverReducer    
})
const cartItemsFromStorage=localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage=localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo')):null    

const shippingAddressFromStorage=localStorage.getItem('shippingAddress')?
    JSON.parse(localStorage.getItem('shippingAddress')):{}


const intialState={
    cart:{
        cartItems:cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage
    },
    userLogin:{userInfo:userInfoFromStorage}
    
}
const middleware=[thunk]
const store=createStore(reducer,intialState,
    composeWithDevTools(applyMiddleware(...middleware)))
    export default store