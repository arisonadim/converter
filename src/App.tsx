import 'Styles/App.scss'
import Binary from 'Components/Binary'
import Decimals from 'Components/Decimals'

function App() {
  return (
    <>
      <h1>Converter <br />(Vite + React + TS)</h1>
      <div className="checkered">
        <Binary />
        <Decimals value={100} />
      </div>
    </>
  )
}

export default App
