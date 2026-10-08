const units = [
  "Digital systems",
  "Simulation and Analysis",
  "Signals & Systems",
  "Electronic and Photonic Devices",
];

function showMyunits(units) {
  console.log("Semester 1 year 3 units : ");

  units.forEach(function (unit) {
    console.log(unit);
  });
}
showMyunits(units);

units.push("Partial Differential Equations");
units.push("Induction machines");
showMyunits(units);

units.pop("Digital systems");
showMyunits(units);
