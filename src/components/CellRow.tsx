import { KeyboardEvent, useRef } from 'react'
import Cell from './Cell'

export default function CellRow({digits, radix}: {digits: number, radix: number}) {
  const digitsArray: number[] = [...Array(digits).keys()].reverse()

  const refs = useRef<(HTMLInputElement | null)[]>([])

  const focusHandler = (e: KeyboardEvent<HTMLInputElement>, number: number) => {
    if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return
    let i: number = 0
    number = digits - 1  - number
    if (e.key === 'ArrowLeft') {
      i = number > 0 ? number - 1 : 0
    } else {
      i = number > digitsArray.length - 2 ? digitsArray.length - 1 : number + 1
    }
    refs.current[i]?.focus()
  }

  const radixToString = () => {
    switch (radix) {
      case 2:
        return 'binary'
      case 8:
        return 'octal'
      case 10:
        return 'decimal'
      case 16:
        return 'hex'
      default:
        return 'unknown'
    }
  }

  const cells = digitsArray
    .map((item, index) => (
      <Cell
        number={item}
        radix={radix}
        digits={digits}
        key={`${radixToString}-${item}`}
        moveFocus={focusHandler}
        ref={(inst) => (refs.current[index] = inst)}
      />
    ))

  return (
    <>
      {cells}
    </>

  )
}
