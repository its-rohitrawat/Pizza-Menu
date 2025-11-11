import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
   return(
    <div className="container">
    <Header />
    <Menu />
    <Footer />
    </div>
    )
}

function Header() {
    return(<header className="header">
      <h1 >Fast React Pizza Co.</h1>
    </header>) 
}

function Menu(){

  let pizzas = pizzaData;
  // let pizzas = [];
  let numPizzza = pizzas.length;

    return(
        <div className="menu">

            <h2>Our Menu</h2>
            
            {numPizzza > 0 ?(
            <ul className="pizzas"> 
              {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}/>)
              
            )} 
            </ul>) 
            : (<p>We are working on our menu please visit us later :)</p>)
            }
            
            {/* <Pizza 
            name="Focaccia" 
            ingredients="Bread with italian olive oil and rosemary" 
            imageName="pizzas/focaccia.jpg" 
            price={10}
            /> */}     
        </div>
    )
}

function Pizza(props){
  console.log(props)
  return(
  <li className="pizza">
    <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
    <div className="pizzas">
       <h3>{props.pizzaObj.name}</h3>
       <p>{props.pizzaObj.ingredients}</p>
       <span>{props.pizzaObj.price + "$"}</span>
    </div>

    
  </li>
  )      
}

function Footer(){
    let hour = new Date().getHours()
    let openHour = 10
    let closeHour  = 22
    let isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return ( 
    <footer className="footer">
      <div className="order">

        {isOpen 
      ? <p>We're currently open until {closeHour}:00. Come visit us or Order online. </p> //used a ternery operator! 
      : <p>We're currently closed. We'll open at {openHour}:00. Come vist us or Order online.</p> 
      }

      <button className="btn">Order</button>
      </div>
      
      </footer>)
}



const root = ReactDOM.createRoot(document.getElementById("root"));
//StrictMode will render twice in order to find bugs and to check outdaterd APIs
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
    )