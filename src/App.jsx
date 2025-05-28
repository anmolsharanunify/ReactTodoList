import { useState } from 'react'

function App() {
  const [ip, setIp] = useState("")
  const [editable, setEditable] = useState(new Array())
  const [items, setItems] = useState(new Array())
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={ip} onChange={(e) => {
        setIp(e.target.value.trim())
      }}
      className='border rounded-md px-2 mx-1'/>
      <button onClick={() => {
        if(ip === "") return
        const cpyItems = [...items]
        const cpyEditable = [...editable]
        cpyItems.push(ip)
        cpyEditable.push(false)
        setItems(cpyItems)
        setEditable(cpyEditable)
      }} 
      className='rounded-md bg-teal-600 p-1 hover:bg-teal-500'>
        Add Item
      </button>
      {items.map((e, idx) => 
      <div key={idx}>
        <input type="text" value={e} onChange={(el) => {
          const copyItems = [...items]
          copyItems[idx] = el.target.value
          setItems(copyItems)
        }} disabled={!editable[idx]}/>
        <button className='rounded-md bg-teal-600 p-1 m-1 hover:bg-teal-500' onClick={() => {
          const cpyEditable = [...editable]
          cpyEditable[idx] = !editable[idx]
          setEditable(cpyEditable)
          setItems(items.filter((e) => {
            return e !== ""
          }))
        }}
        >{!editable[idx] ? 'Edit' : 'Update'}</button>
        <button className='rounded-md bg-red-400 p-1 m-1 hover:bg-red-300' onClick={() => {
          setItems(items.filter((ec, idxc) => {
            return idxc !== idx
          }))
        }}>Delete</button>
      </div>)
      }
    </div>
  )
}

export default App
