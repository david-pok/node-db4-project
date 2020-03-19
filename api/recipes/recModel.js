const db = require("../../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getSteps
};

// getRecipes():
// should return a list of all recipes in the database.
function getRecipes() {
  return db("recipes");
}

// getShoppingList(recipe_id):
// should return a list of all ingredients
//  and quantities for a given recipe
function getShoppingList(id) {
  return db("recipes as r")
    .join("rec_ing as ri", "ri.recipe_id", "r.id")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .select("r.name", "i.name", "i.quantity")
    .where("r.id", id);
}

// getInstructions(recipe_id):
// should return a list of step by step
//  instructions for preparing a recipe
function getSteps(id) {
  return db("recipes as r")
    .join("steps as s", "s.recipe_id", "r.id")
    .select("r.name", "s.step_number", "s.description")
    .where("r.id", id)
    .orderBy("s.step_number");
}
