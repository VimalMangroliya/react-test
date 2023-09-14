import { useEffect, useState } from 'react';
import './App.css';

const Loader = () => {
  return <img src='/spinner.gif' alt='Loader' />
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const waitFor = async () => {
    await new Promise((r) => setTimeout(r, 5000))
    setIsLoading(false)
  }

  useEffect(() => {
    waitFor()
  }, [])

  return (
    <div className="App">
      {isLoading ? <Loader /> : "Component is loaded ..."}
    </div>
  );
}

export default App;
