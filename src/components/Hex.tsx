import CellRow from 'Components/CellRow'

export default function Hex() {
  const radix: number = 16

  return (
    <div className="hex">
      <h2>Hex</h2>
      <div className="cell-wapper">
        <CellRow radix={radix} digits={3}/>
        <div className="base">{radix}</div>
      </div>
    </div>
  )
}
