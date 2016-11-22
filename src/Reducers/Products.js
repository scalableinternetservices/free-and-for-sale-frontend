import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, FILTER_PRODUCTS, Will_Upload_Product, Did_Upload_Product} from '../Actions/productsAction';

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

    case Will_Upload_Product:
      return Object.assign({}, state, {
        isUploading: true
      })

    case Did_Upload_Product:
      return Object.assign({}, state, {
        isUploading : false
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
