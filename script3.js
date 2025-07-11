document
  .getElementById("recForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Task 7: Append new recommendation
    const input = document.getElementById("recInput");
    const text = input.value.trim();
    if (text) {
      const div = document.createElement("div");
      div.className = "recommendation";
      div.textContent = `“${text}”`;
      document.getElementById("recList").append(div);
      input.value = "";

      // Task 9: Show pop-up
      const popup = document.getElementById("popup");
      popup.classList.remove("hidden");
      setTimeout(() => popup.classList.add("hidden"), 2000);
    }
  });