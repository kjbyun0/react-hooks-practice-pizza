import React from "react";

function PizzaForm({ pizza, onPizzaChange, onPizzasSubmit }) {
  function handleChange(e) {
    switch(e.target.name) {
      case 'topping':
        onPizzaChange({...pizza, topping: e.target.value});
        break;
      case 'size':
        onPizzaChange({...pizza, size: e.target.value});
        break;
      case 'vegetarian':
        onPizzaChange({...pizza, vegetarian: e.target.value === 'Vegetarian'});
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onPizzasSubmit(pizza.id);

    onPizzaChange({
      topping: '',
      size: '',
      vegetarian: false
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizza.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={pizza.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={pizza.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!pizza.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
