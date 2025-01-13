import React from 'react';
import Ingredient from './ingredient';
import EquipmentItem from './equipmentItem';
import EquipmentList from './EquipmentList';
import IngredientList from './IngredientList';
import Steps from './steps';
import Recipe from './Recipe';
import SearchPanel from './searchPanel';

const App: React.FC = () => {
    return (
        <div>
            <SearchPanel></SearchPanel>
        </div>
    );
};

export default App;