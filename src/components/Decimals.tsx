import CellRow from "Components/CellRow"

export default function Decimals() {
  const radix: number = 10

  return (
    <div className="decimals">
      <h2>Decimals</h2>
      <div className="cell-wapper">
        <CellRow radix={radix} digits={3}/>
        <div className="base">{radix}</div>
      </div>
    </div>
  );
}
