import ContactList from "./components/contactlist"
import {useState} from "react"
import { dummyContacts } from "./components/contactlist"


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
     {selectedContactId ? (<div>Selected Contact View</div>) : (<ContactList setSelectedContactId={setSelectedContactId} />)}
    </>
);
}

export default App
