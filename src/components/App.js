import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizza, setPizza] = useState({
    topping: '',
    size: '',
    vegetarian: false
  });

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(data => setPizzas([...data]));
  }, []);

  function handleEditPizzaClick(pizzaId) {
    // console.log('in App, handleEditPizzaClick, pizzaId: ', pizzaId);
    setPizza({...pizzas.find(pizzaObj => pizzaObj.id === pizzaId)});
  }
  // console.log('in App, pizza: ', pizza);

  function handlePizzasSubmit(pizzaId) {
    fetch(`http://localhost:3001/pizzas/${pizzaId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pizza),
    })
    .then(resp => resp.json())
    .then(pizzaObj => setPizzas(pizzas.map(pizzaElem => pizzaElem.id === pizzaId ? pizzaObj : pizzaElem)));
  }

  // console.log('in App, pizzas: ', pizzas);

  return (
    <>
      <Header />
      <PizzaForm pizza={pizza} onPizzaChange={setPizza} onPizzasSubmit={handlePizzasSubmit} />
      <PizzaList pizzas={pizzas} onEditPizzaClick={handleEditPizzaClick} />
    </>
  );
}

export default App;
