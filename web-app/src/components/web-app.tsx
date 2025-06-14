import Script from 'next/script'

export const TradingViewChart = ({ symbol = "SOLUSD" }: { symbol?: string }) => (
  <div>
    <div id="tradingview_widget" />
    <Script src="https://s3.tradingview.com/tv.js" onLoad={() => {
      new (window as any).TradingView.widget({
        container_id: "tradingview_widget",
        width: "100%",
        height: 400,
        symbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_legend: false,
        allow_symbol_change: true,
        studies: ["MACD@tv-basicstudies"]
      })
    }} />
  </div>
)