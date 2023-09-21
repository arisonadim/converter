import Cell from './Cell'

export default function Binary() {
  const digits: number[] = [ ...Array(8).keys() ]
  const base: number = 2

  const cells = digits.reverse().map((item) => 
      <Cell number={item} base={base} />
  )

  return (
    <div className="binary">
      <h2>Binary</h2>
      <div className="cell-wapper">
        {cells}
        <div className="base">{base}</div>
      </div>
    </div>
  );
}
