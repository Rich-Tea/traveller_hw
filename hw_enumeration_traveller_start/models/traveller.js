// - should have a collection of journeys

const Traveller = function(journeys) {
  this.journeys = journeys;
};

// - should be able to get the journeys start locations

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

// - should be able to get the journeys end locations

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

// - should be able to get journeys by transport

Traveller.prototype.getJourneysByTransport = function (transport) {
   return this.journeys.filter((journey) => {
     return journey.transport === "train"
   });
};

// - should be able to get journeys over a certain distance

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
   return this.journeys.filter((journey) => {
     return journey.distance >= 1200
   });
};

// should be able to calculate total distance travelled

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};


Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
