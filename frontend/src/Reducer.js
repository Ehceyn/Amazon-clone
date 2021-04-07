export const initialState={
    basket:[
        { 
                key:'3',
                id:'3',
                title:'The Lean Startup: How can I can, all u need tom know aout how to know things u dont know an know them properly well',
                price:11.96,
                rating:5,
                image:"http://ecx.images-amazon.com/images/I/41B258JSAQL.jpg"},
    ],
};

// accumulates the total price of items in basket and store them in the 'amount'
export const getBasketTotal= (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

function reducer(state=initialState, action){
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding to basket
            return {...state,
                basket:[...state.basket, action.item]};
        case 'REMOVE_FROM_BASKET':
            // logic for removing from basket

            // we cloned the basket
            let newBasket=[...state.basket];

            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            );

                if(index>=0){
                    // item exists in basket remove it
                    newBasket.splice(index,1);
                } else {
                    console.warn(
                        `Can't remove (id: ${action.id}) as it is not existing`
                    );
                }

            return {...state,
            basket: newBasket};
        default:
            return state;
    }
}

export default reducer;