import React from 'react';
import EquipmentItem from './equipmentItem';

interface EquipmentListProps {
    equipment: string[];
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipment }) => {
    return (
        <div>
            <span>Equipment</span>
            <ul>
                {equipment.map((item, index) => (
                    <li key={index}>
                        <EquipmentItem name={item}></EquipmentItem>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default EquipmentList;