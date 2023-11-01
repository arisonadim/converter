import 'Styles/App.scss'
import Binary from 'Components/Binary'
import Octal from 'Components/Octal'
import Decimals from 'Components/Decimals'
import Hex from './components/Hex'
import { StateProvider } from './context'

function App() {
  return (
    <>
      <h1>Converter <br />(Vite + React + TS)</h1>
      <div className="checkered">
        <StateProvider>
          <Binary />
          <Octal />
          <Decimals />
          <Hex />
        </StateProvider>
      </div>
    </>
  )
}

export default App
