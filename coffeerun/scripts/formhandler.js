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

  FormHandler.prototype.AddCoffeeRangeEffect = function() {
    var label = $("#strengthLevelLabel");
    var setStrengthControl = function(value) {
        label.text("Coffeine Rating: " + value);
        if (value >= 0 && value <= 50) {
          var r = Math.ceil(value/50*255);
          var c = "#"+r.toString(16)+"ff00";
        }
        else {
          var g = 255-Math.ceil((value-50)/50*255);
          var c = "#ff"+g.toString(16)+"00";
        }
        label.css("color",c);
    }

    $('#strengthLevel').on('input propertychange', function(v) {
      setStrengthControl($(this).val());
    })
    this.$formElement.on('reset', function(){
      setStrengthControl($("#strengthLevel")[0].defaultValue);
    })
    setStrengthControl($("#strengthLevel")[0].defaultValue);
  }

  App.FormHandler = FormHandler;

  window.App = App;
})(window);
