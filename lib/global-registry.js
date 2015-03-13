module.exports = function() {
  var Registry = require('./registry');
  var registry = global.__loopback_global_registry__;
  if(!registry) {
    registry = global.__loopback_global_registry__ = new Registry();
  }
  return registry;
}
