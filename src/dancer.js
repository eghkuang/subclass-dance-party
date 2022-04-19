// Creates and returns a new dancer object that can step

// functional instantiation:
// dancer = {$node: xx, step: f(x), setPosition: f(x) }

// psuedo:
// dancer = {$node: xx, timeBtwSteps: time}
// prototype = {}
// debugger;


var makeDancer = function(top, left, timeBetweenSteps) {

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


