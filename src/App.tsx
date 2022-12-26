import { CowSdk, OrderKind, SupportedChainId } from '@cowprotocol/cow-sdk'
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const cowSdk = new CowSdk(SupportedChainId.MAINNET);

const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

function App() {

  useEffect(() => {

    cowSdk.cowApi.getQuote({
      appData: '0x',
      kind: OrderKind.SELL,
      sellToken: USDC,
      buyToken: WETH,
      from: '0x0000000000000000000000000000000000000000',
      sellAmountBeforeFee: '100000000',
      partiallyFillable: false,
      validTo: ((Date.now() / 1000) * 60 * 60),
    })

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
