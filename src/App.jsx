// Conditional rendering 

const ValidPassword = () => {
  return(
    <h1>Valid password</h1>
  );
}

const InvalidPassword = () => {
  return <h1>Invalid Password</h1>
}

const Password = ({isValid}) =>{
  if(isValid) {
   return <ValidPassword/>
  } else {
   return <InvalidPassword/>
  }
}

const App = () => {
  return(
    <Password isValid={false} />
  );
}

export default App;