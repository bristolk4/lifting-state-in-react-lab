const BurgerStack = ({stack, removeFromBurg}) => {
    return (
      <ul>
        {/* list of ingredients in personal stack */}
        {stack.map((ingredient, index) => (
            // pick out individual ingreds with index, apply individual CSS for burg ingreds
          <li key={index} style={{backgroundColor: ingredient.color}}>
            {ingredient.name}
            {/* remove from burg button calls remove from burg function */}
            <button onClick={() => removeFromBurg(index)}>x</button>
          </li>
        ))}
      </ul>
    );
  };  export default BurgerStack;
  