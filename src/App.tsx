import Button from "./components/Button"
import AdminInfo from "./components/Type practice/AdminInfo"
import UserInfo from "./components/Type practice/UserInfo"
import User from "./components/User"


function App() {


  return (
    <>
      {/* <User >
        <strong>Hello</strong>
      </User> */}
      {/* <Button label="Click me" disabled={false} onClick={()=>alert("hello")}/> */}
      <UserInfo id={'SKAenfuoswehew'}name={'Amiyo'} email={'tata@gmail.com'}/>
      <AdminInfo id={'SKAenfuoswehew'}name={'Amiyo'} email={'tata@gmail.com'} role="Admin" adminPass="isuaefhijsaencuief"/>
    </>
  )
}

export default App
