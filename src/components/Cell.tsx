import { useState, KeyboardEvent, forwardRef, LegacyRef } from 'react'
import { useNumerals, useNumeralsDispatch } from '../context'

const Cell = forwardRef(function (
  {
    number,
    radix,
    moveFocus,
  }: {
    number: number
    radix: number
    moveFocus: (e: KeyboardEvent<HTMLInputElement>, number: number) => void
  },
  ref: LegacyRef<HTMLInputElement>
) {
  const numerals = useNumerals()
  const dispatch = useNumeralsDispatch()

  const initialCell = numerals![radix].split('').reverse()[number]
  const [digit, setDigit] = useState(initialCell)

  function setValue(event: React.ChangeEvent<HTMLInputElement>) {
    const val: string = event.target.value
    let regexpCondition = ''
    switch (radix) {
      case 2:
      case 8:
        regexpCondition =`[${radix}-9]|[a-z]`
        break
      case 10:
        regexpCondition =`[a-z]`
        break
      default:
        regexpCondition = `[j-z]`
        break
    }

    const regexp = new RegExp(`^0+(?=d)|${regexpCondition}/gi`)
    const valFiltered: string =
      val.slice(val.length - 1).replace(regexp, '') || '0'
    setDigit(valFiltered)
    dispatch({ type: 'added', payload: '00000000'})
  }

  const tabIndex = (): number => {
    switch (radix) {
      case 2: {
        return 8 - number
      }
      case 8: {
        return 11 - number
      }
      case 10: {
        return 14 - number
      }
      case 16: {
        return 17 - number
      }
      default: {
        return 20 - number
      }
    }
  }

  return (
    <div className="cell">
      <p className="cell__number">
        {radix}
        <sup>{number}</sup>
      </p>
      <input
        name="digit"
        type="number"
        maxLength={1}
        max={radix - 1}
        min="0"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        tabIndex={tabIndex()}
        value={digit}
        onChange={setValue}
        onKeyUp={(e) => moveFocus(e, number)}
        ref={ref}
      />
      <p className="cell__number">{radix ** number}</p>
      <p className={'cell__number ' + (parseInt(digit) ? '' : 'cell__number--gray')}>
        {radix ** number} * {digit}
      </p>
      <p className={'cell__number ' + (parseInt(digit) ? '' : 'cell__number--gray')}>
        {radix ** number * parseInt(digit)}
      </p>
    </div>
  )
})

export default Cell
