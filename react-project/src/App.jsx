import Header from './Components/Header'
import Profile from './Components/Profile'
import Counter from './Components/Counter'
import './App.css'

function App() {
  console.log('App is loading');

  return (
    <>
      <Header />
      <Profile 
        name = "Yellow Cup"
        email= "yellowcup@gmail.com"
      />
      <Counter 
        initialCount={0}
      />
    </>
  )
}

export default App
