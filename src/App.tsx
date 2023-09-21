import { useState } from 'react'
import 'Styles/App.scss'
import Binary from 'Components/Binary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Converter <br />(Vite + React + TS)</h1>
      <div className="checkered">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Binary />
      </div>
    </>
  )
}

export default App
