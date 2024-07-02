import { menuItems } from '../data/db'
import { MenuItem, OrderItem } from "../types";

export type OrderActions = 
    { type: 'ADD_ITEM', value: {item: MenuItem} } |
    { type: 'REMOVE_ITEM', value: {itemId: MenuItem['id']} } |
    { type: 'SET_TIP', value: {value: number} } |
    { type: 'PLACE_ORDER'}

export type OrcerState = {
    menuItems: MenuItem[]
    order: OrderItem[]
    tip: number
}

export const initialState : OrcerState = {
    menuItems,
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrcerState = initialState,
    action: OrderActions
) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log('DESDE ADD_ITEM');
            
            const itemExist = state.order.find(orderItem => orderItem.id === action.value.item.id)
            if (itemExist) {
                return {
                   ...state,
                    order: state.order.map(orderItem => orderItem.id === action.value.item.id ?
                        {...orderItem, quantity: orderItem.quantity + 1} :
                        orderItem
                    )
                }
            } else {
                return {
                   ...state,
                    order: [...state.order, {...action.value.item, quantity: 1}]
                }
            }
        case 'REMOVE_ITEM':
            return {
               ...state,
                order: state.order.filter(orderItem => orderItem.id !== action.value.itemId)
            }
        case 'SET_TIP':
            return {
               ...state,
                tip: action.value.value
            }
        case 'PLACE_ORDER':
            return initialState
        default:
            return state
    }
}