import 'Styles/App.scss'
import Binary from 'Components/Binary'
import Octal from 'Components/Octal'
import Decimals from 'Components/Decimals'

function App() {
  return (
    <>
      <h1>Converter <br />(Vite + React + TS)</h1>
      <div className="checkered">
        <Binary />
        <Octal />
        <Decimals />
      </div>
    </>
  )
}

export default App
