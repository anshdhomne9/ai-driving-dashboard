const labels = ["1", "2", "3", "4", "5"];

/* SECTION 1 CHARTS */
new Chart(document.getElementById("progressChart"), {
  type: "line",
  data: {
    labels,
    datasets: [{
      label: "Progress %",
      data: [20, 40, 60, 75, 90],
      borderWidth: 2
    }]
  },
  options: {
  responsive: true,
  maintainAspectRatio: false
}
});

new Chart(document.getElementById("accuracyChart"), {
  type: "bar",
  data: {
    labels,
    datasets: [{
      label: "Accuracy",
      data: [50, 65, 72, 80, 88],
      borderWidth: 2
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

new Chart(document.getElementById("lossChart"), {
  type: "line",
  data: {
    labels,
    datasets: [{
      label: "Loss",
      data: [1.2, 0.9, 0.7, 0.5, 0.3],
      borderWidth: 2
    }]
  },
  options: {
  responsive: true,
  maintainAspectRatio: false
}
});

/* SECTION 2 CHARTS */
new Chart(document.getElementById("speedChart"), {
  type: "line",
  data: {
    labels,
    datasets: [{
      label: "Speed",
      data: [40, 50, 60, 70, 72],
      borderWidth: 2
    }]
  },
  options: {
  responsive: true,
  maintainAspectRatio: false
}
});

new Chart(document.getElementById("steeringChart"), {
  type: "bar",
  data: {
    labels,
    datasets: [{
      label: "Steering",
      data: [5, 10, 15, 10, 8],
      borderWidth: 2
    }]
  },
  options: {
  responsive: true,
  maintainAspectRatio: false
}
});

new Chart(document.getElementById("sensorChart"), {
  type: "line",
  data: {
    labels,
    datasets: [{
      label: "Sensors",
      data: [90, 92, 95, 97, 99],
      borderWidth: 2
    }]
  },
 options: {
  responsive: true,
  maintainAspectRatio: false
}
});