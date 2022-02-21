// import { createContext, useCallback, useState } from 'react'

import { useReducer } from 'react'

// type navMenuContextType = {
//   isOpen: boolean
//   setIsOpen: (isOpen: boolean) => void
// }

// const defaultCotext: navMenuContextType = {
//   isOpen: false,
//   setIsOpen: () => {},
// }

// export const NavMenuContext = createContext<navMenuContextType>(defaultCotext)
// export const useNavMenu = (): navMenuContextType => {
//   const [openFlg, setOpenFlg] = useState(false)
//   return {
//     isOpen: openFlg,
//     setIsOpen: useCallback((current: boolean): void => {
//       setOpenFlg(current)
//     }, []),
//   }
// }

const initialState = { count: 0 }

type State = {
  values: string[]
  message: string
}

type Action = {
  type: 'update'
  index: number
  value: string
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'update': {
      const newValues = [...state.values]
      newValues[action.index] = action.value
      return {
        ...state,
        values: newValues,
      }
    }
    default:
      return state
  }
}

// const useSearchList = () => {
//   return useReducer(reducer)
// }
