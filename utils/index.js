function buildVariations(chain) {
    const variations = [];
  
    // This function recursively traverses the evolution chain and builds variations.
    function traverse(evolution) {
      if (!evolution || !evolution.species) {
        return;
      }
  
      // Create a new variation object for the current species.
      const variation = {
        name: evolution.species.name,
        variations: []
      };
  
      // Check if there are further evolutions in the chain.
      if (evolution.evolves_to && evolution.evolves_to.length > 0) {
        // For each next evolution, recursively call traverse to build its variations.
        evolution.evolves_to.forEach(nextEvolution => {
          const nextVariation = traverse(nextEvolution);
          variation.variations.push(nextVariation);
        });
      }
  
      return variation;
    }
  
    // Start building the variations from the initial species in the chain.
    variations.push(traverse(chain.chain));
    return variations;
  }

  module.exports = buildVariations;
  