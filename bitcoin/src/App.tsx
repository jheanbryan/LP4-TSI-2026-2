import type { BitcoinHistoryResponse } from "./types/types"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState<BitcoinHistoryResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/history?date=22-10-2026')

        if(!response.ok) {
          throw new Error(`Erro ${response.status}: Não foi possível buscar os dados.`)
        }

        const json: BitcoinHistoryResponse = await response.json();
        setData(json)

      } catch (err) {
        if(err instanceof Error){
          setError(err.message)
        } else{
          setError('Erro desconhecido')
        }

      } finally {
        setLoading(false)
      }
    }
    
    fetchHistory();
  }, [])

  if(loading) return <p>Carregando dados...</p>
  if(error) return <p style={{ color: 'red' }}>Erro: {error}</p>

  return (
    <>
      <div>
        <h1>Histórico do Bitcoin</h1>

        {data && (
          <div>
            <img src={data.image.small} alt={data.name} width={48}/>
            <h2>{data.name} ({data.symbol.toUpperCase()})</h2>
          </div>
        )}

        {data && (
          <div>
            <h3>Preços do {data.name}</h3>
            <ul>
              <li>
                USD: {data.market_data.current_price.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </li>

              <li>
                BRL: {data.market_data.current_price.brl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </li>

              <li>
                EUR: {data.market_data.current_price.eur.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
