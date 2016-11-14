import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, FILTER_PRODUCTS} from '../Actions/productsAction';

export default function Products (state = [], action ){
  switch (action.type) {

    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        products: action.products,
        initialProducts:action.products

      })

    case FILTER_PRODUCTS:
      var filteredProducts = [];
      for (var index = 0; index<state.initialProducts.length; index++)
      {
        if (state.initialProducts[index].description.indexOf(action.searchTerm) != -1 || state.initialProducts[index].name.indexOf(action.searchTerm) != -1)
        {
          filteredProducts.push(state.initialProducts[index]);
        }
      }

        return Object.assign({}, state, {
              isFetching: false,
              didInvalidate: false,
              products: filteredProducts
              })
    default:
      return state;
  }

}
