var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="squareDancer spin"></span>');
  this.setPosition(top, left);
  var time = Math.floor(Math.random() * 10) + 1;
  var spinner = document.querySelector('.spin');
  //spinner.styles.setProperty('--animation-duration', time +'s');

};
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

