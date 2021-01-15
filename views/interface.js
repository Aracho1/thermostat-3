
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature()


  $('#temperature-up').on('click', function() {
    thermostat.turnUp()
    updateTemperature()
  })

  $('#temperature-down').on('click', function() {
    thermostat.turnDown()
    updateTemperature()
  })

  $('#toggle-power-saving').on('click', function() {
    thermostat.togglePowerSavingMode()
    if (thermostat.powerSavingMode) {
      $('#power-saving-mode').text("ON")
    } else {
      $('#power-saving-mode').text("OFF")
    }
  })

  $('#reset').on('click', function() {
    thermostat.reset()
    updateTemperature()
  })

  function updateTemperature() {
    $('#temp').text(thermostat.temperature);
    $('#temp').attr('class', thermostat.usage())
  }

  // $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data){
  //   $('#city-temp').text(data.main.temp);
  // })

  // $('#current-city').change(function() {
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //     $('#current-temperature').text(data.main.temp)
  //   })
  // })

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#city-temp').text(data.main.temp);
    })
  };

  displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city)
  })


  // $('#select-city').submit(function(event) {
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //     $('#city-temp').text(data.main.temp);
  //   })
  // })
})