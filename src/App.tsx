import MenuItem from "./components/MenuItem"
import OrderContets from "./components/OrderContets"
import OrderTotal from "./components/OrderTotal"
import TipPorcentageForm from "./components/TipPorcentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()
 
  return (
    <>
      <header className=" bg-amber-400 py-3">
        <h1 className=" text-center text-2xl font-black">Calculadura de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-5 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-2xl font-black">Menú</h2>

          <div className=" space-y-2 mt-4">
            { menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-amber-400 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContets
                order={order}
                removeItem={removeItem}
              />

              <TipPorcentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center"> La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
