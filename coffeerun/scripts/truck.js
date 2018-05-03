(function(window){
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db){
    console.log("Create Truck");
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    this.db.add(order.emailAddress, order);
  }

  Truck.prototype.deliverOrder = function(emailAddress) {
    this.db.remove(emailAddress);
  }

  Truck.prototype.printOrders = function() {
      var emailAddressArray = Object.keys(this.db.getAll());
      emailAddressArray.forEach(function(item){
        console.log(this.db.get(item));
      }, this);
  }

  App.Truck = Truck;

  window.App = App;
})(window);
