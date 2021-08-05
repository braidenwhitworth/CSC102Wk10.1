function start() {
  console.log("Start() function started");
  index = 0;
  timer = setInterval(updateDisplay, time_interval);
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}

function stop() {
  console.log("Stop() function started");
  clearInterval(timer);
  document.getElementById("stopButton").disabled = true;
  document.getElementById("startButton").disabled = false;
}

function getData() {
  var loadedData = loadData();
  return loadedData;
}

function dataRow(legend, value, units) {
  msg = "<td>";
  msg += legend;
  msg += ": </td><td>";
  msg += value;
  msg += " " + units;
  msg += "</td>";
  return msg;
}
