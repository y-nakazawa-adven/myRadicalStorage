import { useReducer } from 'react'
import { PropertyForSearch } from '@features/searchList'

type State = PropertyForSearch[]

export type SearchPropertiesAction = {
  type: 'updateProperties'
  value: PropertyForSearch[]
}

const initialValue: PropertyForSearch[] = []
const reducer = (state: State, action: SearchPropertiesAction) => {
  switch (action.type) {
    case 'updateProperties': {
      return action.value
    }
    default:
      return state
  }
}

export const useSearchProperties = () => {
  return useReducer(reducer, initialValue)
}
