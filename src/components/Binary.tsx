import CellRow from 'Components/CellRow'
// import type { Ref } from '@/types'
// import { useSelector, useDispatch } from 'react-redux'
// import { updateDigits } from './binarySlice'

export default function Binary() {
  // const digitsState = useSelector((state) => state.digits.value)
  // const dispatch = useDispatch()
  const radix: number = 2

  const iterator = Array.from(Array(3).keys())

  const octets = iterator.map((i) => (
    <div className="arrow" key={i}>
      {
        iterator.map((item) => (
          <p className="cell__number" key={100+item}>2<sup>{2-item}</sup></p>
        ))
      }
    </div>
  ))

  return (
    <div className="binary">
      <h2>Binary</h2>
      <div className="cell-wapper">
        <div className="cell cell--lightgray">
          <p className="cell__number">2<sup>8</sup></p>
          <div className="cell__addzero">0</div>
          <p className="cell__number">256</p>
          <p className="cell__number">256 * 0</p>
          <p className="cell__number">0</p>
        </div>
        <CellRow radix={radix} digits={8}/>
        <div className="base">{radix}</div>
      </div>
      <div className="arrows cell--lightgray">
        {octets}
      </div>
    </div>
  )
}
