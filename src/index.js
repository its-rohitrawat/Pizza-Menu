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
      <h1 >OMNIDOSE Pizza Co.</h1>
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
              <React.Fragment>

              <p>Authentic Italian cuisine, six creative dishes to choose from. All from our stone oven, all organinc and delicious.</p>

            <ul className="pizzas"> 
              {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}/>)
              
            )} 
            </ul>
            </React.Fragment>) 
            : (<React.Fragment>
            <p>We currently have no pizza in the stock please visit us later or check the website daily.  Sorry for inconvinience</p>
            <p>We are working on our menu please visit us later :)</p>
            
            </React.Fragment>)
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

function Pizza({pizzaObj}){

  return(
  <li className={`pizza ${pizzaObj.soldOut ? `sold-out` : `pizza`}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name} />
    <div className="pizzas">
       <h3>{pizzaObj.name}</h3>
       <p>{pizzaObj.ingredients}</p>
       <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + "$"}</span>
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