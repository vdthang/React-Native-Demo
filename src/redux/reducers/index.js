// reducers/index.js

import { combineReducers } from 'redux';
import listReducer from '../../ShipmentList/redux/reducer/ShipmentListReducer'

export default combineReducers({
    list : listReducer
   // ... other reducers
 });
 