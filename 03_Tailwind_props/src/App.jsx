import './App.css'
import Card from './Components/card'
function App() {

  let img = "https://media.licdn.com/dms/image/D4D03AQGGuRG7AyOPTA/profile-displayphoto-shrink_200_200/0/1708279632383?e=2147483647&v=beta&t=6UNAJjS69Tiya1XT52O_izjPHukYTR15lU4YYefLksQ";

  return (
    <>
      <h1 className='bg-blue-400 p-5 text-black rounded-xl mb-4'>Hi Parth! How are you?</h1>

      <Card userName = "Parth" image={img} description = "My Name is Parth and i am computer engineering student at MBIT!" btnText = "Click Here" />
    </>
  )
}

export default App
