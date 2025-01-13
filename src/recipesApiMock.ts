
class RecipesApiMock {

    async searchRecipes(keyword: string): Promise<any> {
        await new Promise(resolve => setTimeout(resolve, 100));
        const mockData = (await import('./mock_search_recipe_response.json')).default;
        return mockData;
    }

    async getIngredients(recipeId: string): Promise<any> {
        await new Promise(resolve => setTimeout(resolve, 100));
        const mockData = (await import('./mock_ingredients_widget_response.json')).default;
        return mockData;
    }

    async getEquipment(recipeId: string): Promise<any> {
        await new Promise(resolve => setTimeout(resolve, 100));
        const mockData = (await import('./mock_equipment_widget_response.json')).default;
        return mockData;
    }

    async getInstructions(recipeId: string): Promise<any> {
        await new Promise(resolve => setTimeout(resolve, 100));
        const mockData = (await import('./mock_analyze_instructions_response.json')).default;
        return mockData;
    }
}

export default RecipesApiMock;
