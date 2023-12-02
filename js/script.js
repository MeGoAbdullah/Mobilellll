
// Array of group member names
const memberNames = [
    "Atheer Mohammed Al-Shehri:\t431005655",
    "Raghad Moeid Al-Anazi:\t    431002555",
    "BEEDOR AWAD  ALBALAWI:\t    431004897",
    // Add more names as needed
  ];
  
  // Function to shuffle array elements (Fisher-Yates shuffle algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Function to display shuffled names
  function displayRandomNames() {
    const shuffledNames = shuffleArray(memberNames);
    const list = document.getElementById("members-list");
    list.innerHTML = ""; // Clear previous list
    shuffledNames.forEach(name => {
      const listItem = document.createElement("li");
      listItem.textContent = name;
      list.appendChild(listItem);
    });
  }
  
  // Display random names on page load
  window.onload = displayRandomNames;
  