import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {dishesReducer} from './dishes'
import {reviewsReducer} from './reviews'
import {usersReducer} from './users'
import {connectRouter} from 'connected-react-router'
import {history} from '../history'

const reducer = combineReducers({
  router: connectRouter(history),
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  dishes: dishesReducer,
  reviews: reviewsReducer,
  users: usersReducer,
})

export {reducer}
