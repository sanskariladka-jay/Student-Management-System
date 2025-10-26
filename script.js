const addBtn = document.getElementById("addBtn");
const studentTable = document.getElementById("studentTable");

let students = [];

addBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const course = document.getElementById("course").value.trim();

  if (name === "" || roll === "" || course === "") {
    alert("Please fill all fields");
    return;
  }

  const existing = students.find(s => s.roll === roll);
  if (existing) {
    alert("Roll number already exists!");
    return;
  }

  const student = { roll, name, course };
  students.push(student);
  renderTable();

  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("course").value = "";
});

function renderTable() {
  studentTable.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.roll}</td>
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    studentTable.appendChild(row);
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}

function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("roll").value = student.roll;
  document.getElementById("course").value = student.course;

  students.splice(index, 1);
  renderTable();
}
