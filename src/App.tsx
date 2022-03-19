import React, { useState } from 'react';

function App() {
  var [items, setItems] = useState<any>([]);
  var [newText, setNew] = useState("");

  function completed() {
    var c = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) c++;
    }
    return c;
  }

  function toGo() {
    var c = 0;
    for (var i = 0; i < items.length; i++) {
      if (!items[i].checked) c++;
    }
    return c;
  }

  return (
    <div className="checklist">
      <h1>My checklsit</h1>
      <h2>{completed()} items done, {toGo()} to go!</h2>
      {getItems()}
      <div className="buttons">
        <input placeholder="New checklist item" onChange={function (e) { setNew(e.target.value)}} value={newText}></input>
        <button onClick={function () { items.push({name: newText}); setItems(items); setNew(""); }}>+ Add</button>
      </div>
    </div>
  )

  function getItems() {
    var r = [];

    for (var i = 0; i < items.length; i++) 
    {
      let index = i;

      r.push(
        <div className={items[index].checked ? "checked" : "not-checked"}>
          <input type="checkbox" onChange={(e) => { items[index].checked = e.target.checked; setItems([...items]); }}></input> <span>{items[index].name}</span>
        </div>
      );
    }

    return r;
  }
}


export default App;
