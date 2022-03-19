import React, {
  useState,
  useCallback,
  ChangeEvent,
} from "react";
import ItemList from "./components/ItemsList";
import { Items, Item } from "./types";

// Refactor: Use Array.reduce here as this is FP best practice (Also a pure function)
// Refactor: This is a helper function related to display logic
const completed = (items: Items) =>
  items.reduce((a: number, c: Item) => {
    if (!!c.checked) {
      a++;
    }
    return a;
  }, 0);

// Refactor: Use Array.reduce here as this is FP best practice (Also a pure function)
const toGo = (items: Items) =>
  items.reduce((a: number, c: Item) => {
    if (!c.checked) {
      a++;
    }
    return a;
  }, 0);

// Refactor: Added TS React.FC type with no props defined
const App: React.FC<{}> = () => {

  // Refactor: Don't use `var` use `const` as this is best practice in JavaScript
  // when the item values don't change
  const [items, setItems] = useState<Items>([]);
  const [newText, setNewText] = useState<string>("");

  const itemListOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, idx: number) => {
      // Refactor: Make sure we have a immutable assignment back to state when changing
      // underlying values
      const newItems = [...items];
      const isChecked = e?.target?.checked;
      items[idx].checked = isChecked;
      setItems(newItems);
    },
    [items]
  );

  // Refactor: Use callback here to avoid unnecessary rerenders function
  const setNewTextOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const text = e?.target?.value;
    setNewText(text);
  }, []);

  // Refactor: Use callback here to avoid unnecessary rerenders on callback function
  const addItemOnClick: React.MouseEventHandler<HTMLButtonElement> =
    useCallback((e) => {
      const newItems = [...items];
      newItems.push({ name: newText });
      setItems(newItems)
    }, [items, newText]);

  return (
    <div className="checklist">
      <h1>My checklist</h1>
      <h2>
        {completed(items)} items done, {toGo(items)} to go!
      </h2>
      <ItemList items={items} onChange={itemListOnChange} />
      <div className="buttons">
        <input
          type="text"
          placeholder="New checklist item"
          onChange={setNewTextOnChange}
        ></input>
        <button onClick={addItemOnClick}>+ Add</button>
      </div>
    </div>
  );
};

export default App;
