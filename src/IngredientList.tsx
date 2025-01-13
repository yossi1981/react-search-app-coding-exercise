import React from 'react';
import Ingredient from './ingredient';

class IngredientListItem {
    name: string;
    quantity: string;
    unit: string;

    constructor(name: string, quantity: string, unit: string) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }
}

interface IngredientListProps {
    ingredients: IngredientListItem[];
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
    return (
        <>
            <span>Ingredients</span>
            <ul>
                {ingredients.map((ingredientListItem, index) => (
                    <li key={index}>
                        <Ingredient
                            name={ingredientListItem.name}
                            quantity={ingredientListItem.quantity}
                            unit={ingredientListItem.unit}>
                        </Ingredient>

                    </li>
                ))}
            </ul>
        </>
    );
};

export default IngredientList;