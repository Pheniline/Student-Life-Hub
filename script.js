const student = {
  name: "Pheniline Jerono",
  year: 3,
  course: "Electrical Engineering",
  units: 8,
};

console.log(student.name, student.year, student.course, student.units);
student.year = 4;
console.log(student.year);

student.gpa = 3.0;
console.log(student.gpa);

student.university = "JKUAT";
console.log(student.university);

const units = [
  {
    name: "Digital Systems",
    code: "EEE 301",
    status: "Incomplete",
    gpa: 2,
  },
  {
    name: "Simulation and Analysis",
    code: "EEE 302",
    status: "Incomplete",
    gpa: 4,
  },
];

const threegpaUnits = units.filter(function (units) {
  return units.gpa === 3;
});
threegpaUnits.forEach(function (units) {
  console.log(units.name);
});

const foundunit = units.find(function (units) {
  return units.gpa === 4;
});
console.log(foundunit.name, foundunit.code, foundunit.status);

const unitcodes = units.map(function (units) {
  return units.code;
});
console.log(unitcodes);

const unitgpa = units.every(function (units) {
  return units.gpa < 2;
});
console.log(unitgpa);

const heading = document.getElementById("welcome");
const button = document.getElementById("submit");
button.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;
  const course = document.getElementById("course").value;

  if (name === "") {
    heading.textContent = "Please enter your name";
  } else if (year < 1 || year > 5) {
    heading.textContent = "Please enter a valid year";
  } else if (course === "") {
    heading.textContent = "Please enter your course";
  } else {
    heading.textContent = `Welcome ${document.getElementById("name").value}  ${document.getElementById("course").value}
  ${document.getElementById("year").value}!`;
  }
});

const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //your app will load previously saved tasks
// if they exist, or start with an empty array if they don't.
function displaySavedtask() {
  // Function to enable the tasks to be displayed once the webpage is refreshed
  const tasklist = document.getElementById("task-list");
  tasks.forEach(function (task) {
    const listItem = document.createTaskElement(task); //Instead of creating an empty <li>, we call createTaskElement(task), which creates the task text and both buttons.

    tasklist.appendChild(listItem);
  });
}
addTaskButton.addEventListener("click", function () {
  const tasklist = document.getElementById("task-list");
  const task = taskInput.value.trim(); // Value entered by the user & trim() removes spaces at the beginning & end
  if (task === "") return; //Ignore empty task

  tasks.push(task); //add task to array
  localStorage.setItem("tasks", JSON.stringify(tasks)); //saves updated array to browser
  const listItem = createTaskElement(task);
  tasklist.appendChild(listItem); // A newly added task appears immediately with its delete & complete button

  taskInput.value = "";
});
function createTaskElement(task) {
  // Creating a list
  const listItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = task;

  listItem.appendChild(taskText); //
  // Delete Button
  const deleteButton = document.createElement("button"); //Creating delete button
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    //Event listener & Event
    const taskIndex = tasks.indexOf(task); //Finds task position in the array
    if (taskIndex !== -1) {
      //checks that the task was found before tring to remove it
      tasks.splice(taskIndex, 1); //remove one task from the array
      localStorage.setItem("tasks", JSON.stringify(tasks)); //update localStorage and the updated array so the deleted task doesn't return after refreshing
    }

    listItem.remove(); //Action to take
  });

  listItem.appendChild(deleteButton); // Display delete button

  //Complete Button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";

  let isCompleted = false; // Boolean
  completeButton.addEventListener("click", function () {
    isCompleted = !isCompleted;

    if (isCompleted === true) {
      taskText.style.textDecoration = "line-through";
      completeButton.textContent = "  Undo"; //Complete button text changes to undo
    } else {
      taskText.style.textDecoration = "none";
      completeButton.textContent = "Complete";
    }
  });
  listItem.appendChild(completeButton); // Display complete button

  return listItem;
  //Add task to the webpage
}
displaySavedtask(); //Displays task even after refereshing the webpage

// Promises : a JavaScript object representing a result that may become available later.

const order = new Promise((resolve, reject) => {
  //newPromise creates a promise resolve() : marks it as successful & supplies the result
  resolve("Your food is ready!");
});

result
  .then(function (message) {
    //runs a callback when the promise is fulfilled or handles a successful event
    console.log(message);
  })
  .catch(function (error) {
    //catch () handles a rejection or an error propagated through the promise chain
    console.log("Error:", error);
  });

//rejects marks as a promise as failed

function getAssignment() {
  return Promise.resolve("Read Chapter 1");
}

async function showAssignment() {
  // async always returns a Promise.
  const assignment = await getAssignment(); // await lets us wait for a Promise's result inside an async function.
  console.log(assignment);
}

showAssignment();

function getAssignment() {
  return new Promise(function (reject) {
    setTimeout(function () {
      reject("Server Unavailable");
    }, 2000); //2000 miliseconds is the timeout
  });
}

async function showAssignment() {
  try {
    //Attempts to run the code

    console.log("Loading assignment..."); //Prints first

    const assignment = await getAssignment(); //waits for the asnchronous result

    console.log("Assignment loaded");
  } catch (error) {
    //Handles the error if the awaited promise rejects
    console.log("Could not load assignments");
  }
}

showAssignment();
//fetch() sends a request to a URL to retrieve data from a server.
async function loadAssignment() {
  try {
    const response = await fetch(
      //sends a request to the server. It returns a Promise, so we use await to wait for the response
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const assignment = await response.json(); //reads the response body and converts JSON into a JavaScript value. It also returns a Promise, which is why we use await again.

    console.log("Assignments");
  } catch (error) {
    console.log("Could not load Assignments"); //displays the returned object in the console.
  }
}

const statusMessagen = document.getElementById("status");
const loadButton = document.getElementById("load-button");
const assignmentArea = document.getElementById("assignments");

loadButton.addEventListener("click", Assignments);

async function loadAssignment() {
  statusMessage.textContent = "Load Assignment .....";
  assignmentArea.textContent = "";

  try{
    const response = await  fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok){
      throw new Error("Failed to load Assignments")
    }

    const assignments = await response.json();
    assignmentArea.textContent = assignment.title;
    statusMessage.textContent = "Assignment loaded successfully";
    

  }
}
