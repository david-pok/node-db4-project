exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { step_number: "1", description: "mix eggs and flour", recipe_id: 1 },
        { step_number: "2", description: "pour on pan", recipe_id: 1 },
        {
          step_number: "3",
          description: "cook until ready to eat",
          recipe_id: 1
        },
        { step_number: "1", description: "break open eggs", recipe_id: 2 },
        {
          step_number: "2",
          description: "scramble on pan until ready to eat",
          recipe_id: 2
        },
        { step_number: "1", description: "cook hotdog", recipe_id: 3 },
        {
          step_number: "2",
          description: "use flour to make bun",
          recipe_id: 3
        },
        { step_number: "3", description: "toast bun", recipe_id: 3 },
        { step_number: "4", description: "put together", recipe_id: 3 }
      ]);
    });
};
