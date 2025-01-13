import React, { useState } from 'react';
import Recipe from './Recipe';
import RecipeFetcher from './recipesFetcher';


const SearchComponent: React.FC<{ query: string; onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onSearch: () => void }> = ({
    query,
    onInputChange,
    onSearch,
}) => {
    return (
        <>
            <input
                type="text"
                value={query}
                onChange={onInputChange}
                placeholder="Search for recipes..."
            />
            <button onClick={onSearch}>Search</button>
        </>
    );
};


const SearchPanel: React.FC = () => {
    const [query, setQuery] = useState('');
    const [recipeFetchResult, setRecipeFetchResult] = useState<any>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        // Implement search logic here
        console.log('doing a search')
        const rf: RecipeFetcher = new RecipeFetcher();
        const res = await rf.getRecipes(query);
        setRecipeFetchResult(res);
    };

    if (recipeFetchResult != null) {
        return (
            <div>
                <div>
                    <SearchComponent
                        query={query}
                        onInputChange={handleInputChange}
                        onSearch={handleSearch}
                    />
                </div>
                <Recipe
                    img={recipeFetchResult.results[0].image}
                    title={recipeFetchResult.results[0].title}
                    equipment={recipeFetchResult.results.equipment.equipment?.map((elem: any) => {
                        return elem.name;
                    })}
                    ingredients={recipeFetchResult.results.ingredients.ingredients.map((elem: any) => {
                        return {
                            name: elem.name,
                            quantity: elem.amount.us.value,
                            unit: elem.amount.us.unit
                        }
                    })}
                    steps={recipeFetchResult.results.instructions[0].steps.map((elem: any) => {
                        return elem.step
                    })}
                />
            </div>
        );
    }
    else {
        return (
            <div>
                <SearchComponent
                    query={query}
                    onInputChange={handleInputChange}
                    onSearch={handleSearch}
                />
            </div>);
    }
};

export default SearchPanel;