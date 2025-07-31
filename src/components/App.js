import { useState } from "react"
import Stats from "./Stats"
import PackingList from "./PackingList"
import Form from "./Form"
import Logo from "./Logo"

export default function App() {
  const [items, setItems] = useState([])
  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list? This action cannot be undone."
    )
    if (confirmed) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  )
}
