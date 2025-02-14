import './App.css'
import { useBooleanFlagValue } from '@openfeature/react-sdk'

function App() {
  const isMyFirstFeatureEnabled = useBooleanFlagValue("isMyFirstFeaturesEnabled", false);

  return (
    <>
      My feature is { isMyFirstFeatureEnabled ? "enabled" : "disabled" }
    </>
  )
}

export default App
