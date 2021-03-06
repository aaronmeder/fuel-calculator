import Alpine from "alpinejs";

// Define App Data
function appData() {
  return {
    distance: 32,
    costPerLiter: 2.0,
    usagePerHundretKm: 9.2,

    calculate() {
      const cost =
        (this.usagePerHundretKm / 100) * this.distance * this.costPerLiter;
      const roundedCost = Math.round((cost + Number.EPSILON) * 100) / 100;

      return roundedCost;
    },
  };
}

// Load Alpine
window.appData = appData;
window.Alpine = Alpine;
Alpine.start();
