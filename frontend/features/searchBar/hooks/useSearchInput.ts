import { useReducer } from 'react'
import { SearchInput, SearchQuery } from '@features/searchBar'

type State = SearchInput

type Action =
  | {
      type: 'updateLocation'
      value: SearchQuery
    }
  | {
      type: 'updateCheckin'
      checkinDay: string
      checkinTime: string
    }
  | {
      type: 'updateCheckout'
      checkoutDay: string
      checkoutTime: string
    }
  | {
      type: 'updateCountSizeA'
      countSizeA: number
    }
  | {
      type: 'updateCountSizeB'
      countSizeB: number
    }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'updateLocation': {
      return {
        ...state,
        ...action.value,
      }
    }
    case 'updateCheckin': {
      return {
        ...state,
        checkinDay: action.checkinDay,
        checkinTime: action.checkinTime,
      }
    }
    case 'updateCheckout': {
      return {
        ...state,
        checkoutDay: action.checkoutDay,
        checkoutTime: action.checkoutTime,
      }
    }
    case 'updateCountSizeA': {
      return {
        ...state,
        countSizeA: action.countSizeA,
      }
    }
    case 'updateCountSizeB': {
      return {
        ...state,
        countSizeB: action.countSizeB,
      }
    }
    default:
      return state
  }
}

export const useSearchInput = (initialValue: SearchInput) => {
  return useReducer(reducer, initialValue)
}
