import ActionTypes from '../constants/actionTypes'
import { createAction } from 'redux-actions'

import {
  fetchInvoices as fetchInvoicesAPI
} from '../api';


export const fetchItemStart = createAction(ActionTypes.FETCH_ACTIVITY_START);
export const fetchItemSuccess= createAction(ActionTypes.FETCH_ACTIVITY_SUCCESS);
export const fetchItemFail= createAction(ActionTypes.FETCH_ACTIVITY_FAIL);

export const fetchInvoices = () => async dispatch => {
    dispatch(fetchItemStart());
  try {
    const activityDet = await fetchInvoicesAPI();
    dispatch(fetchItemSuccess(activityDet))
  } catch (err) {
    dispatch(fetchItemFail(err));
  }
};

// // Tabs
// export const changeActiveTab = createAction(ActionTypes.ACTIVE_TAB);
