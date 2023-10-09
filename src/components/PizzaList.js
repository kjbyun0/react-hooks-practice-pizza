import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onEditPizzaClick }) {
  const dispPizzas = pizzas.map(pizza => (<Pizza key={pizza.id} pizza={pizza} onEditPizzaClick={onEditPizzaClick} />));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          dispPizzas
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
