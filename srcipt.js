// Queue array
let patientQueue = [];

// Queue number
let queueNumber = 1;


// Add patient to queue
function addPatient() {

    let name = document.getElementById("patientName").value;
    let age = document.getElementById("patientAge").value;
    let reason = document.getElementById("patientReason").value;

    // Check if fields are empty
    if (name === "" || age === "" || reason === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create patient object
    let patient = {
        number: queueNumber,
        name: name,
        age: age,
        reason: reason
    };

    // Add patient to the END of the queue
    patientQueue.push(patient);

    queueNumber++;

    // Clear input fields
    document.getElementById("patientName").value = "";
    document.getElementById("patientAge").value = "";
    document.getElementById("patientReason").value = "";

    displayQueue();
}


// Display patients in queue
function displayQueue() {

    let queueList = document.getElementById("queueList");

    queueList.innerHTML = "";

    patientQueue.forEach(function(patient) {

        let patientDiv = document.createElement("div");

        patientDiv.className = "patient";

        patientDiv.innerHTML = `
            <strong>Queue #${patient.number}</strong><br>
            Name: ${patient.name}<br>
            Age: ${patient.age}<br>
            Reason: ${patient.reason}
        `;

        queueList.appendChild(patientDiv);
    });

    // Update queue count
    document.getElementById("queueCount").textContent =
        patientQueue.length;
}


// Serve next patient
function serveNext() {

    // Check if queue is empty
    if (patientQueue.length === 0) {

        alert("There are no patients waiting.");

        return;
    }

    // Remove the FIRST patient
    let patient = patientQueue.shift();

    // Display current patient
    document.getElementById("currentPatient").innerHTML = `
        <strong>Queue #${patient.number}</strong><br>
        Name: ${patient.name}<br>
        Age: ${patient.age}<br>
        Reason: ${patient.reason}
    `;

    displayQueue();
}


// Clear entire queue
function clearQueue() {

    patientQueue = [];

    displayQueue();

    document.getElementById("currentPatient").innerHTML =
        "No patient is currently being served.";
}