function BMICalculator(){

  };

    BMICalculator.prototype.metric_bmi = function(obj) {
      var weight = obj.weight;
      var height = obj.height;
      var name = obj.name;
      if (weight > 0 && height > 0) {
        var finalBmi = weight / (height / 100 * height / 100);
        obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
        setBMIMessage(obj);
      }
    };

    function setBMIMessage (obj, value, name){
      if (obj.bmiValue < 18.5) {
        obj.bmiMessage = obj.name + " - You need to gain some weight"
      }
      if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = obj.name + " - You are of normal BMI"
      }
      if (obj.bmiValue > 25 && obj.bmiValue < 30) {
        obj.bmiMessage = obj.name + " - You are Overweight"
      }
      if (obj.bmiValue > 30) {
        obj.bmiMessage = obj.name + " - You need to loose some weight"
      }
    };
