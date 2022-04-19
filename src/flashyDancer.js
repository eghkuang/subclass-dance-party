//this dancer changes colors
var makeFlashyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeFlashyDancer.prototype = Object.create(makeDancer.prototype);
makeFlashyDancer.prototype.constuctor = makeFlashyDancer;

makeFlashyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
