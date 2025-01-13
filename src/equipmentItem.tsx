import React from 'react';

interface EquipmentItemProps {
    name: string;
}

const EquipmentItem: React.FC<EquipmentItemProps> = ({ name }) => {
    return (
        <div className="equipment-item">
            <span>{name}</span>
        </div>
    );
};

export default EquipmentItem;