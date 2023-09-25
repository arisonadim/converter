import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type StateContextType = {
  [index: number]: string[]
}

const initialContext: StateContextType = {
  2: Array(8).fill('0'),
  8: Array(3).fill('0'),
  10: Array(3).fill('0'),
  // 16: '000',
}

type Context = {
  numerals: StateContextType
  setNumerals: React.Dispatch<StateContextType>
} | null

export const StateContext = createContext<Context>(null)

export function useNumerals() {
  return useContext(StateContext)
}

export function StateProvider({ children }: { children: ReactNode }) {
  const [numerals, setNumerals] = useState(initialContext)

  return (
    <StateContext.Provider value={{ numerals, setNumerals }}>
      {children}
    </StateContext.Provider>
  )
}
