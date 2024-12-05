const IngredientList = ({ingredients, addToBurg}) => {
    return (
        <ul>
        {/* list individual ingredients */}
          {ingredients.map((ingredient, index) => (
            // set CSS for individual ingredients
            <li key={index} style={{backgroundColor: ingredient.color}}>
              {ingredient.name}
              {/* add ingredient to burg button with '+' */}
              <button onClick={() => addToBurg(ingredient)}>+</button>
            </li>
          ))}
        </ul>
      );
  };
  
  export default IngredientList;
  