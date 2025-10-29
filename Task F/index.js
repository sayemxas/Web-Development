// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addCourseForm");
  const tableBody = document.querySelector("#timetable tbody");
  const clearBtn = document.getElementById("clearBtn");

  // 🟣 Add Row behavior
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form refresh

    const courseInput = document.getElementById("courseName");
    const checkedDays = Array.from(
      document.querySelectorAll('input[name="day"]:checked')
    ).map(cb => cb.value);

    // Create a new table row
    const row = document.createElement("tr");

    // Course cell
    const courseCell = document.createElement("td");
    courseCell.textContent = courseInput.value.trim() || "Unnamed Course";
    row.appendChild(courseCell);

    // Add day cells (Mon–Sun)
    const allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    allDays.forEach(day => {
      const cell = document.createElement("td");
      cell.textContent = checkedDays.includes(day) ? "✅" : "❌";
      row.appendChild(cell);
    });

    // Append the new row
    tableBody.appendChild(row);

    // Reset the form
    form.reset();
  });

  // 🟣 Clear Button behavior
  clearBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Stop accidental form submission
    form.reset(); // Reset inputs
  });
});
