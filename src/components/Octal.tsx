import CellRow from 'Components/CellRow'

export default function Octal() {
  const radix: number = 8

  return (
    <div className="octal">
      <h2>Octal</h2>
      <div className="cell-wapper">
        <CellRow radix={radix} digits={3}/>
        <div className="base">{radix}</div>
      </div>
    </div>
  )
}
