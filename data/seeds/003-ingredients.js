exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "flour", quantity: 4.2 },
        { name: "eggs", quantity: 4.2 },
        { name: "hotdog", quantity: 4.2 }
      ]);
    });
};
