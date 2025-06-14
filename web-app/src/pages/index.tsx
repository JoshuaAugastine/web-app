import { useTokenPrices } from '../hooks/useTokenPrices'
import { useState } from 'react'
import { TradingViewChart } from '../components/TradingViewChart'

export default function Home() {
  const { data, isLoading, refetch } = useTokenPrices()
  const [search, setSearch] = useState('')

  const filtered = data?.filter(token =>
    token.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Solana Token Price Tracker</h1>
      <input
        type="text"
        placeholder="Search tokens"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="p-2 border w-full max-w-md mb-4"
      />
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refresh
      </button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered?.map(token => (
            <div key={token.id} className="border p-4 rounded shadow">
              <div className="flex items-center space-x-2">
                <img src={token.image} alt={token.name} className="w-6 h-6" />
                <h2 className="font-semibold">{token.name}</h2>
              </div>
              <p>Price: ${token.current_price}</p>
              <p>Market Cap: ${token.market_cap.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10">
        <TradingViewChart symbol="SOLUSD" />
      </div>
    </main>
  )
}
