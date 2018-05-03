(function(window){
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;

  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var myTruck = new Truck('shitTruck', new DataStore());
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.AddSubmitHandler(myTruck.createOrder.bind(myTruck));
  formHandler.AddCoffeeRangeEffect();
})(window);
