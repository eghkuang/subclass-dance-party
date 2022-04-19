// moves in squares
var makeSquareDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constuctor = makeSquareDancer;

makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
