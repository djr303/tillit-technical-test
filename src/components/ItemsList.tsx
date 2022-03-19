// Refactor: Separated component out to display component
import React, { ChangeEvent } from 'react'
import { Items, Item } from '../types'

// Refactor: Added `ItemsList` prop type definition
type ItemsListProps = {
  items: Items
  onChange: (e: ChangeEvent<HTMLInputElement>, idx: number) => void,
}

// Refactor: Consider this component to only accept props and have no internal state
// therefor can be rationalized through the values passed in (a pure function)

// Note: Using index of array value as key, which is normally bad practice but here the array
// will maintain its value
const ItemsList: React.FC<ItemsListProps> = ({ items, onChange }) => {
  return (<>
    {!!items && items.map((item: Item, idx: number) => (
      <div key={idx} className={item.checked ? "checked" : "not-checked"}>
        <input type="checkbox" onChange={(e) => onChange(e, idx)}></input> <span>{item.name}</span>
      </div>
    ))}
  </>)
}

export default ItemsList