import { KeyboardEvent, useRef } from 'react'
import Cell from './Cell'

export default function CellRow({digits, radix}: {digits: number, radix: number}) {
  const digitsArray: number[] = [...Array(digits).keys()]

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

  const cells = digitsArray
    .reverse()
    .map((item, index) => (
      <Cell
        number={item}
        radix={radix}
        key={`octal-${item}`}
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
