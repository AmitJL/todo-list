import logo from './logo.svg';
import './App.css';
import Header from "./MComponents/Header";
import {Todos} from "./MComponents/Todos";
import{Footer} from "./MComponents/Footer";
function App() {
  let todos = [
    {
     sno:1,
     titile: "Go to the market",
     desc: "You need to go to the market to get this "
    } ,
    {
      sno:1,
      titile: "Go to the market",
      desc: "You need to go to the market to get this "
     },
     {
      sno:1,
      titile: "Go to the market",
      desc: "You need to go to the market to get this "
     } ,
  ]
  return (
    <>
      <Header title ="MyTodosList!"/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
