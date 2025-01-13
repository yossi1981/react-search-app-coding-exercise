import React from 'react';

interface IngredientProps {
    name: string;
    quantity: string;
    unit: string;
}

const Ingredient: React.FC<IngredientProps> = ({ name, quantity, unit}) => {
    return (
        <div>
            <span>{name} - {quantity} {unit}</span>
        </div>
    );
};

export default Ingredient;