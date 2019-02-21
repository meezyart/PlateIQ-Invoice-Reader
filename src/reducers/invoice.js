import ActionTypes from '../constants/actionTypes'

const initialState = {
  invoice: {
    client: '',
    clientItems: [],
    data:{}
  }
}

export default function counter(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.FETCH_ACTIVITY_SUCCESS:
      return {
        ...state,
        invoice: {
          client: payload.attributes.client,
          clientItems: payload.attributes.items,
          data: payload.attributes,
        }
      }
    default:
      return state
  }
}
