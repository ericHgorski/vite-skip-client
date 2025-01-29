import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SkipClient, RouteResponse } from "@skip-go/client";


function App() {
  const skipClient = new SkipClient({});
  const [route, setRoute] = useState<RouteResponse | null>(null);


  const getCosmosRoute = async () => {
    try {
      setRoute(null);
      const result = await skipClient.route({
        amountIn: "1000000",
        sourceAssetDenom: "uusdc",
        sourceAssetChainID: "noble-1",
        destAssetDenom:
          "ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4",
        destAssetChainID: "osmosis-1",
        smartRelay: true,
      });
      setRoute(result);
      console.log('route', route)
    } catch (error) {
      console.error("Error getting Cosmos route:", error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={getCosmosRoute}>
          get route
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
