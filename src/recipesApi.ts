
class RecipesApi {
    readonly urlRoot: string = "https://api.spoonacular.com/";
    readonly apiKey: string = "f53c897f899645caac3e98723eb0f84f";

    async searchRecipes(keyword: string): Promise<any> {
        const fullUrl = this.urlRoot + "recipes/complexSearch?query=" + keyword + "&number=1" + "&apiKey=" + this.apiKey;
        const response = await fetch(fullUrl);
        const data = await response.json();
        return data;
    }

    async getIngredients(recipeId: string): Promise<any> {
        const fullUrl = this.urlRoot + "recipes/" + recipeId + "/ingredientWidget.json?apiKey=" + this.apiKey;
        const response = await fetch(fullUrl);
        const data = await response.json();
        return data;
    }

    async getEquipment(recipeId: string): Promise<any> {
        const fullUrl = this.urlRoot + "recipes/" + recipeId + "/equipmentWidget.json?apiKey=" + this.apiKey;
        const response = await fetch(fullUrl);
        const data = await response.json();
        return data;
    }

    async getInstructions(recipeId: string): Promise<any> {
        const fullUrl = this.urlRoot + "recipes/" + recipeId + "/analyzedInstructions?apiKey=" + this.apiKey;
        const response = await fetch(fullUrl);
        const data = await response.json();
        return data;
    }
}
export default RecipesApi;

