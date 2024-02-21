import ContactList from "./components/contactlist"
import {useState} from "react"
import './App.css'
import SelectedContact from "./components/SelectedContact"

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
     {selectedContactId ? (<div>Selected Contact View</div>) : (<ContactList setSelectedContactId={setSelectedContactId} />)}
    </>
);
}

export default App
