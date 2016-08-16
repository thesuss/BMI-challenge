$(document).ready(function () {

  $('input:radio[name="units"]').change(function(){
    if($('#metric').is(':checked')) {
      $("#weight").attr("placeholder", "Weight in kg");
      $("#height").attr("placeholder", "Height in cm");
    } else {
      $("#weight").attr("placeholder", "Weight in lbs");
      $("#height").attr("placeholder", "Height in inches");
    }
  });
  $('#calculate').click(function () {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var n = $('#name').val();
    var person = new Person({name: n, weight: w, height: h});
    var inputName = document.getElementById('name');
    var inputHeight = document.getElementById('height');
    var inputWeight = document.getElementById('weight');

    if($('#metric').is(':checked')) {
      method = "metric"
    } else if($('#imperial').is(':checked')){
      method = "imperial"
    } else {
      this.style.border = "1px solid blue";
      this.style.backgroundColor = "blue";
      this.value = 'Choose metric or imperial please!';
    }
    if( inputName.value == "" || inputHeight.value == "" || inputWeight.value == ""  )
    {
      this.style.border = "1px solid red";
      this.style.backgroundColor = "red";
      this.value = 'No field should be left blank!';
    } else if($('#metric').is(':checked') || $('#imperial').is(':checked')){
      person.calculate_bmi(method);
      $('#display_value').html('Your BMI is ' + person.bmiValue);
      $('#display_message').html('which means, '+ person.bmiMessage);
      this.style.border = "1px solid green";
      this.style.backgroundColor = "green";
      this.value = 'Result below:';
    }
  });
});
