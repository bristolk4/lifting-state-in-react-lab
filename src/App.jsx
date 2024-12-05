import React, { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  //added pickle because it is good
  { name: 'Pickle', color: 'olivedrab' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([])
  //shortened Burger to Burg, it is funny
  //ingredient is argument that can be any ingredient from the list
  const addToBurg = (ingredient) => {
  //updates personal burg stack
  // ... spread operator makes sure the OG stack is preserved and then add the new ingredient to a new burg stack array
    setStack([...stack, ingredient])
  }
  //still don't understand the filter but we're using it :|
  const removeFromBurg = (index) => {
    const updatedStack = stack.filter((_, i) => i !== index);
    setStack(updatedStack);
  };
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList 
          ingredients={availableIngredients} 
          addToBurg={addToBurg} 
        />
        <BurgerStack 
          stack={stack} 
          removeFromBurg={removeFromBurg} 
        />
      </section>
    </main>
  );
};

export default App;
