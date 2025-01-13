import React from 'react';
import EquipmentList from './EquipmentList';
import IngredientList from './IngredientList';
import Steps from './steps';

interface RecipeProps {
    title: string;
    equipment: any[];
    ingredients: any[];
    steps: any[];
    img : string;
}

const Recipe: React.FC<RecipeProps> = ({ title, equipment, ingredients, steps, img}) => {
    return (
        <div>
            <img src={img}></img><br></br>
            <span>{title}</span>
            <EquipmentList equipment={equipment}></EquipmentList>
            <IngredientList ingredients={ingredients}></IngredientList>
            <Steps steps={steps}></Steps>
        </div>
    );
};

export default Recipe;