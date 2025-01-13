import React from 'react';



interface StepsProps {
    steps: string[];
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
    return (
        <div>
            <span>Steps</span>
            <ol>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default Steps;          