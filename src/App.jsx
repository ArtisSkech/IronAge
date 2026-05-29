export default function IronAgeUI() {
  const products = [
    {
      name: "Вилка hassns",
      price: "₾300",
      image:
        "https://avatars.mds.yandex.net/get-mpic/5234464/2a000001922168e26f1ddfab187a65784fd9/orig",
    },
    {
      name: "руль carbon 400mm",
      price: "₾200",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTC4JokqeFxNBYkzfv2lWBDe9ApRA3a8QXDqVU1nJ_M6mfsSTXIMHshC1JfWc4_Uda40s0yRfvWMR29tldtGTqDRek1l7sP0zIDdR4aXWgwxD6S0kCRsUAfWCz0KLVaI-VM9TvFYre7og&usqp=CAc",
    },
    {
      name: "Shimano Mt520 brakes",
      price: "₾300",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSu2o7gZgk2OG2AAAxyIg8CkiVPFsVT3476zLDL2qBRgqKn_0R6AVb6kDgbtCEUMhISJkfkcd-GuclQ_i7HoA0OeQhulHAxagYxiM1kjNVGvbAqc2TgExIQ0hYpUkMccogsDundAxGpA&usqp=CAc",
    },
  ];

  const services = [
    {
      title: "Переборка вилки",
      price: "от ₾60",
    },
    {
      title: "Полное ТО",
      price: "от ₾150",
    },
    {
      title: "Прокачка тормозов",
      price: "от ₾15",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-black">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />

        <div className="relative px-6 pt-10 pb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black tracking-[0.2em] uppercase">
                Iron Age
              </h1>
              <p className="mt-2 text-zinc-400 text-sm">
                Веломастерская • Магазин • Сервис
              </p>
            </div>

            <button className="rounded-2xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-900 transition">
              Корзина
            </button>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-zinc-500 uppercase text-xs tracking-[0.3em]">
                  Bike Shop
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  Премиальный сервис
                  <br />
                  для твоего велосипеда
                </h2>

                <div className="mt-6 flex gap-3">
                  <button className="rounded-2xl bg-white px-5 py-3 text-black font-semibold hover:scale-105 transition">
                    Каталог
                  </button>

                  <button className="rounded-2xl border border-zinc-700 px-5 py-3 hover:bg-zinc-900 transition">
                    Ремонт
                  </button>
                </div>
              </div>

              <div className="w-full md:w-[320px] h-[220px] rounded-3xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-bold">Товары</h3>
          <button className="text-zinc-400 text-sm hover:text-white transition">
            Смотреть всё
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 overflow-hidden hover:border-zinc-600 transition"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                  <span className="text-zinc-300">{product.price}</span>
                </div>

                <button className="mt-5 w-full rounded-2xl bg-white py-3 text-black font-semibold hover:opacity-90 transition">
                  Добавить в корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-12">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-bold">Услуги ремонта</h3>
          <button className="text-zinc-400 text-sm hover:text-white transition">
            Все услуги
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-6 hover:border-zinc-600 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="mt-2 text-zinc-400">{service.price}</p>
                </div>

                <div className="h-3 w-3 rounded-full bg-white animate-pulse" />
              </div>

              <button className="mt-6 w-full rounded-2xl border border-zinc-700 py-3 hover:bg-zinc-900 transition">
                Записаться
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 border-t border-zinc-800 bg-black/90 backdrop-blur">
        <div className="flex items-center justify-around py-4 text-sm">
          <button className="flex flex-col items-center text-white">
            <span>🏠</span>
            <span className="mt-1">Главная</span>
          </button>

          <button className="flex flex-col items-center text-zinc-500">
            <span>🛒</span>
            <span className="mt-1">Магазин</span>
          </button>

          <button className="flex flex-col items-center text-zinc-500">
            <span>🔧</span>
            <span className="mt-1">Сервис</span>
          </button>

          <button className="flex flex-col items-center text-zinc-500">
            <span>👤</span>
            <span className="mt-1">Профиль</span>
          </button>
        </div>
      </div>
    </div>
  );
}
