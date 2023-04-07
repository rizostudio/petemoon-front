import { Basket } from "@/localSttorage/basket";

export const initState = {
  basket: [],
};
export const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "INIT_STATE":
      newState = action.payload;
      break;
    case "ADD_TOBASKET":
      newState = {
        ...state,
        basket: [
          ...state.basket,
          {
            name: action.payload.name,
            id: action.payload.id,
            category: action.payload.category,
            stars: action.payload.stars ? action.payload.stars : 5,
            pet_type: action.payload.pet_type,
            seller: action.payload.seller,
            price: action.payload.price,
            discount: action.payload.discount,
            image: action.payload.image,
            count: "1",
          },
        ],
      };
      break;
    case "INCRIMENT_ITEM_COUNT":
      newState = {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.payload.id) {
            const count = parseInt(item.count) + 1;
            return { ...item, count: count.toString() };
          }
          return item;
        }),
      };
      break;
    case "DECRIMENT_ITEM_COUNT":
      newState = {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.payload.id) {
            const count = parseInt(item.count) - 1;
            return { ...item, count: count.toString() };
          }
          return item;
        }),
      };
      break;
    case "REMOVE_BASKET_ITEM":
      newState = {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id),
      };
      break;
    case "EMPTY_BASKET":
      newState = { basket: [] };
      break;
  }
  Basket.set(JSON.stringify(newState));
  return newState;
};
