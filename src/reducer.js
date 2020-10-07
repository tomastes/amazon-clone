export const initialState = {
  basket: [
    // {
    //   id: 5,
    //   title:
    //     "Wireless Charger Car Touch Sensing Automatic Retractable Clip Fast Charging Compatible for iPhone Xs Max/XR/X/8/8Plus, ",
    //   price: 13.33,
    //   rating: 5,
    //   image:
    //     "https://m.media-amazon.com/images/I/61qCxGIUODL._AC_UL640_FMwebp_QL65_.jpg",
    // },
  ],
  btnDisable:true,
  user:null
};

function reducer(state, action) {
  switch (action.type) {

    case 'SET_USER':

    return{
      ...state,
      user:action.user
    }
    case "ADD_TO_BASKET":
      //!LOGIC FOR ADDING ITEMS TO BASKET
      // const itemToAdd = {
      //   id:action.item.id,
      //   title:action.item.title,
      //   price:action.item.price,
      //   rating:action.item.rating,
      //   image:action.item.image,
      //   quantity: action.item.quantity,
      //   instock:action.item.instock - 1
      // };
      
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //!LOGIC FOR REMOVING ITEM FROM BABSKET
      const copyBasket = [...state.basket];
      const index = copyBasket.findIndex((items) => items.id == action.id);
      if (index >= 0) {
        copyBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product with id ${action.id}`);
      }
      return {
        ...state,
        basket: copyBasket,
      };
    case "QUANTITY_CHANGED":
      const copiedBasket = [...state.basket];

      copiedBasket.forEach((item) => {
        if (item.id == action.uid) {
          return (item.quantity = action.quantity);
        }
      });
     
      return {
        ...state,
        basket: copiedBasket,
      };

      case 'EMPTY_BASKET':
        return{
          ...state,
          basket:[]
        }


    //!LOGIC UPDATING ITEM AMOUNT AND SUBTOTAL
    default:
      return state;
  }
}

export default reducer;
/**
 *
 */

//!cualculate sub total
export const subTotal = (basket) => {
  return basket?.reduce(
    (initialVal, item) => item.price * item.quantity + initialVal,
    0
  );
};
//!cualculate item quantity
export const totalItems = (basket) => {
  return basket?.reduce((init, item) => init + item.quantity, 0);
};

