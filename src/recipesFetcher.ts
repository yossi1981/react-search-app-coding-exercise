import RecipesApi from "./recipesApi";
import RecipesApiMock from "./recipesApiMock";

class RecipeFetcher {
    //private api: RecipesApiMock;
    private api: RecipesApi;
    constructor() {
        //this.api = new RecipesApiMock();
        this.api = new RecipesApi();
    }

    async getRecipes(keyword: string): Promise<any> {
        const recipes = await this.api.searchRecipes(keyword);
        for (const recipe of recipes.results) {
            recipes.results.ingredients = await this.api.getIngredients(recipe.id);
            recipes.results.equipment = await this.api.getEquipment(recipe.id);
            recipes.results.instructions = await this.api.getInstructions(recipe.id);
        }
        return recipes
    }
}

export default RecipeFetcher;