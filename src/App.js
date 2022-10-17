import Post from "./Post";
import { useState } from "react"; 




function App(){
  const [users, SetUsers ] = useState(
    [
        {name:"Manu drew with Newcastle", content:"The content of Manu and Newcastle match"},
        {name:"Chelsea defeats Aston Villa", content:"The content of Chelsea defeats Aston Villa"},
        {name:"AS Roma Plays Sampdoria Today", content:"AS Roma match is today content Plays"},
    ]
);

  return(
    <div className="container">
        {
          users.map(
              user=>(
                  <Post name={user.name} content={user.content} />
              )
          )
        }
    </div>
  )
}

export default App;