import type{ BitcoinHistoryResponse } from "../../types/types";

interface CryptoCardProps {
  crypto: BitcoinHistoryResponse
}

export function CryptoCard({ crypto }: CryptoCardProps){
  return(
    <div className="coin-card">
      <div className="coin-header">
        <img src={crypto.image.small} alt={crypto.name} width={48}/>
        <h2 className="symbol">{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
      </div>

      <h3>Preços do {crypto.name}</h3>
        <ul>
          <li className="label">
            USD: {crypto.market_data.current_price.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </li>

          <li className="label">
            BRL: {crypto.market_data.current_price.brl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </li>

          <li className="label">
            EUR: {crypto.market_data.current_price.eur.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </li>
        </ul>
    </div>
  )
}