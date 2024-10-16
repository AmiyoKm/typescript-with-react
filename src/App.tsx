import Button from "./components/Button"
import User from "./components/User"


function App() {


  return (
    <>
      {/* <User >
        <strong>Hello</strong>
      </User> */}
      <Button label="Click me" disabled={false} onClick={()=>alert("hello")}/>
    </>
  )
}

export default App
