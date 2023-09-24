import { createContext, useContext, useReducer } from 'react'
import type { ReactNode } from 'react'

type StateContextType = {
  [index: number]: string
}

const initialContext: StateContextType = {
  2: '11111111',
  8: '101',
  10: '110',
  16: '000',
}

export const StateContext = createContext<StateContextType>(initialContext)
export const DispatchContext = createContext<React.Dispatch<Actions>>(() => {})

type Actions =
  | { type: 'added'; payload: string }
  | { type: 'binary'; payload: number }
  | { type: 'octal'; payload: number }
  | { type: 'decimals'; payload: StateContextType }
  | { type: 'hex'; payload: StateContextType }

export function useNumerals() {
  return useContext(StateContext)
}

export function useNumeralsDispatch() {
  return useContext(DispatchContext)
}

export function StateProvider({ children }: { children: ReactNode }) {
  // const [numerals, dispatch] = useReducer<
  //   (numerals: StateContextType, actions: Actions) => StateContextType
  // >(numeralsReducer, initialContext)
  const [numerals, dispatch] = useReducer(reducer, initialContext)

  return (
    <StateContext.Provider value={numerals}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

// function numeralsReducer({ numerals, action }: { numerals: StateContextType, action: Actions }) {
function reducer(numerals: StateContextType, action: Actions) {
  switch (action.type) {
    case 'added': {
      console.log('added')
      console.log(numerals)
      return {
        ...numerals,
        2: action.payload,
      }
    }
    case 'binary': {
      console.log('binary')
      return {
        ...numerals,
      }
    }
    case 'octal': {
      console.log('octal')
      return {
        ...numerals,
      }
    }
    case 'decimals': {
      console.log('decimals')
      return {
        ...numerals,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
