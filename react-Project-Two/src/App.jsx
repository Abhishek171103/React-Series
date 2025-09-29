import UserCard from "./components/UserCard"
import Meee from './assets/Meee.jpg'

function App() {

  return (
    <>
      <div className="container">
        <UserCard name="Abhishek Jain" 
                  desc="desc1" 
                  image={Meee} 
                  style={{"border-radius":"10px"}}>
        </UserCard>               
        <UserCard name="Pooja Jain" desc="desc2" image={Meee} style={{"border-radius":"10px"}}></UserCard>
        <UserCard name="Dhanu Jain" desc="desc3" image={Meee} style={{"border-radius":"10px"}}></UserCard>
      </div>
    </>
  )
}

export default App


/* 

props ===> Jaise hum CSS me attribute ko use karte hai vese hi jsx me css ki jaise attribute ko use karna
          props kahlata hai. 
          Eg :- <UserCard name="Abhishek Jain"></UserCard> 

*/ 