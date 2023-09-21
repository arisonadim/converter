import { useState } from 'react'

function Cell({ number, base }: { number: number; base: number }) {
  const [digit, setDigit] = useState(0)
  console.log(base)

  function setValue(event: React.ChangeEvent<HTMLInputElement>) {
    const val: string = event.target.value
    const valFiltered: string = val.length
      ? val.slice(val.length - 1).replace(/[2-9]|[a-z,A-Z]/g, '')
      : '0'
    const valInt: number = parseInt(valFiltered)
    setDigit(valInt)
  }

  return (
    <div className="cell">
      <p className="cell__number">
        {base}
        <sup>{number}</sup>
      </p>
      <input
        name="digit"
        type="number"
        maxLength={1}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        tabIndex={8 - number}
        value={digit}
        onChange={setValue}
      />
      <p className="cell__number">{base ** number}</p>
      <p className={'cell__number ' + (digit ? '' : 'cell__number--gray')}>
        {base ** number} * {isNaN(digit) ? 0 : digit}
      </p>
      <p className={'cell__number ' + (digit ? '' : 'cell__number--gray')}>
        {base ** number * (isNaN(digit) ? 0 : digit)}
      </p>
    </div>
  )
}

export default Cell
