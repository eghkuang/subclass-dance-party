// Creates and returns a new dancer object that can step

// functional instantiation:
// dancer = {$node: xx, step: f(x), setPosition: f(x) }

// psuedo:
// dancer = {$node: xx, timeBtwSteps: time}
// prototype = {}
// debugger;


var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.isPaired = false;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// List of Questions:

// 1. Why can;t you pass the timeBetweenSteps argument into the step function (see code below):
/*
this.step(timeBetweenSteps);

makeDancer.prototype.step = function(timeBetweenSteps) {
  */

// 2. why _timeBetween

// 3. in the video, you needed to bind this otherwise the value "gets lost" and defaults to the global scope
  // why does "this" lose its bind to the focal object when the step function is called a second time with spy?
