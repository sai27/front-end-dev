(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;
  function FormHandler(selector){
    console.log('Create FormHandler');
    if (!selector) {
      throw new Error('No selector provided!')
    }

    this.$formElement = $(selector);

    if (this.$formElement.length === 0) {
      throw new Error('Could not found Selector: ' + selector);
    }
  }

  FormHandler.prototype.AddSubmitHandler = function(fn) {
      this.$formElement.on('submit', function() {
        event.preventDefault();
        var data = {};
        $(this).serializeArray().forEach(function(item){
          data[item.name] = item.value;
        });
        fn(data);
        this.reset();
        this.elements[0].focus();
      })
  }

  App.FormHandler = FormHandler;

  window.App = App;
})(window);
