import { useState, useEffect } from 'react'

function App() {
  // --- ШАГ 7: Логика корзины ---
  const [cart, setCart] = useState([])

  // Функция добавления товара
  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  // Функция удаления товара (понадобится дальше по гайду)
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(item => item.id !== productId))
  }

  // Подсчет общей суммы (понадобится дальше по гайду)
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)


  // --- ШАГ 6: Подключение Telegram WebApp ---
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp
      tg.ready() // Сообщаем Telegram, что приложение загрузилось
      tg.expand() // Разворачиваем на весь экран смартфона
    }
  }, [])


  // --- Пример списка товаров для вашего магазина ---
  const products = [
    { id: 1, name: 'Меч Железного века', price: 150, icon: '⚔️' },
    { id: 2, name: 'Щит викинга', price: 90, icon: '🛡️' },
    { id: 3, name: 'Стальной шлем', price: 120, icon: '🪖' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans antialiased p-4 pb-24">
      {/* Шапка приложения */}
      <header className="text-center my-6">
        <h1 className="text-3xl font-extrabold text-teal-400 tracking-tight drop-shadow-sm">
          IronAge Store ⚔️
        </h1>
        <p className="text-xs text-slate-400 mt-1">Лучшее снаряжение эпохи в твоем Telegram</p>
      </header>

      {/* Список товаров */}
      <main className="flex-1 max-w-md mx-auto w-full space-y-4">
        <h2 className="text-lg font-bold text-slate-300 px-1">Доступное снаряжение:</h2>
        <div className="grid gap-3">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{product.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-200">{product.name}</h3>
                  <p className="text-sm font-medium text-teal-400">{product.price} TON</p>
                </div>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="bg-teal-500 hover:bg-teal-600 text-slate-950 text-xs font-bold py-2.5 px-4 rounded-xl transition-all active:scale-95"
              >
                Купить
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Фиксированная панель корзины внизу экрана */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 shadow-2xl z-50">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">В корзине товаров: <span className="text-slate-200 font-bold">{cart.length}</span></p>
            <p className="text-lg font-black text-teal-400">{totalPrice} TON</p>
          </div>
          <button 
            disabled={cart.length === 0}
            className="bg-teal-500 hover:bg-teal-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-teal-500/10"
          >
            Оформить заказ
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App