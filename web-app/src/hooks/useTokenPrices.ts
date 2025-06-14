import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useTokenPrices = () => {
  return useQuery(['tokenPrices'], async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: 'solana,bonk,samoyedcoin,raydium',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false
      }
    })
    return res.data
  })
}
