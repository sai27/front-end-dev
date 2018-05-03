(function(window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    console.log("Create DataStore");
    this.data = {};
  }
  DataStore.prototype.add = function(key,value) {
    this.data[key] = value;
  }
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  }
  DataStore.prototype.get = function(key) {
    return this.data[key];
  }
  DataStore.prototype.getAll = function(key) {
    return this.data;
  }

  App.DataStore = DataStore;

  window.App = App;
})(window);
