import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContets from "./components/OrderContets"
import OrderTotal from "./components/OrderTotal"
import TipPorcentageForm from "./components/TipPorcentageForm"
import { initialState, orderReducer } from "./reducers/orderReducer"

function App() {
  const [ state, dispatch ] = useReducer(orderReducer, initialState)
 
  return (
    <>
      <header className=" bg-amber-400 py-3">
        <h1 className=" text-center text-2xl font-black">Calculadura de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-5 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-2xl font-black">Menú</h2>

          <div className=" space-y-2 mt-4">
            { state.menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-amber-400 p-5 rounded-lg space-y-10">
          {state.order.length ? (
            <>
              <OrderContets
                order={state.order}
                dispatch={dispatch}
              />

              <TipPorcentageForm
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
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
