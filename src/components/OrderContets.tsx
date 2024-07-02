import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/orderReducer"

type OrderContentProps = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
}

export default function OrderContets({ order, dispatch }: OrderContentProps) {
  return (
    <div>
      <h2 className=' font-black text-2xl'>Consumo</h2>

      <div className=" space-y-2 mt-4">
        {order.map (item => (
            <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                <div>
                    <p className="text-lg ">
                        {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className="font-black">
                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                </div>
                <div>
                    <button className=" bg-red-600 h-8 w-8 rounded-full text-white"
                        onClick={() => dispatch({type: 'REMOVE_ITEM', value: {itemId: item.id}})}>
                        X
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
