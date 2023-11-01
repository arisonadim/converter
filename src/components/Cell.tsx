import { KeyboardEvent, forwardRef, LegacyRef } from 'react'
import { useNumerals } from '../context'

const Cell = forwardRef(function (
  {
    number,
    radix,
    digits,
    moveFocus,
  }: {
    number: number
    radix: number
    digits: number
    moveFocus: (e: KeyboardEvent<HTMLInputElement>, number: number) => void
  },
  ref: LegacyRef<HTMLInputElement>
) {
  const context = useNumerals()

  const cellIndex = digits - 1 - number
  const initialCell = context?.numerals[radix][cellIndex]
  const digit: string = initialCell || '0'

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
    const stateArray = [...context!.numerals[radix]]
    stateArray[cellIndex] = valFiltered
    const stateObj: { [key: number]: string[] } = {}
    stateObj[radix] = stateArray
    const rest = calcOthers(stateArray)
    context?.setNumerals( {...rest, ...stateObj} )
  }

  const calcOthers = (stateArray: string[]) => {
    const state = {...context!.numerals }
    const systems = [2, 8, 10]
    const stateArrayToString = stateArray.join('').toString()
    systems.forEach((i) => {
      if (i === radix) return
      const decimal = parseInt(stateArrayToString, radix)
      const radixLength = i === 2 ? 8 : 3
      const radixArray = decimal.toString(i).split('')
      const leadingZeros = Array(radixLength - radixArray.length).fill(0)
      state[i] = [...leadingZeros, ...radixArray]
    })

    return state
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
    <div className={'cell ' + (parseInt(digit, radix) ? '' : 'cell--gray')}>
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
      <p className="cell__number">
        {radix ** number} * {parseInt(digit, radix)}
      </p>
      <p className="cell__number">
        {radix ** number * parseInt(digit, radix)}
      </p>
    </div>
  )
})

export default Cell
