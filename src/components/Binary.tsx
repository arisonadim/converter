import CellRow from 'Components/CellRow'
// import type { Ref } from '@/types'
// import { useSelector, useDispatch } from 'react-redux'
// import { updateDigits } from './binarySlice'

export default function Binary() {
  // const digitsState = useSelector((state) => state.digits.value)
  // const dispatch = useDispatch()
  const radix: number = 2

  return (
    <div className="binary">
      <h2>Binary</h2>
      <div className="cell-wapper">
        <CellRow radix={radix} digits={8}/>
        <div className="base">{radix}</div>
      </div>
    </div>
  )
}
