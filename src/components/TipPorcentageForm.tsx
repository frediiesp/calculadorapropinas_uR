import type { Dispatch } from "react"
import { OrderActions } from "../reducers/orderReducer"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageProps = {
    dispatch: Dispatch<OrderActions>
    tip: number
}

export default function TipPorcentageForm({dispatch, tip}: TipPercentageProps) {
  return (
    <div>
      <h3 className="font-black text-xl">Propina:</h3>
      <form>
        {tipOptions.map(tipOption => (
            <div key={tipOption.id} className=" flex gap-2">
                <label htmlFor="">{tipOption.label}</label>
                <input
                    type="radio"
                    id={tipOption.id}
                    name="tip"
                    value={tipOption.value}
                    onChange={e => dispatch({type: 'SET_TIP', value: {value: +e.target.value}})}
                    checked={tip === tipOption.value}
                />
            </div>
        ))}
      </form>
    </div>
  )
}
