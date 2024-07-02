import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/orderReducer"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch}: MenuItemProps) {
  return (
  <button className=" border-2 border-amber-400 rounded-lg hover:bg-amber-200 w-full p-3 flex justify-between"
    onClick={() => dispatch({type: 'ADD_ITEM', value:{item: item}})}>
    <p>{item.name}</p>
    <p className=" font-black">{formatCurrency(item.price)}</p>
  </button>
  )
}
