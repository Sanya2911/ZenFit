document
  .getElementById("send-button")
  .addEventListener("click", async function () {
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value;
    if (inputValue.trim() !== "") {
      showLoader(); // Show the loader
      appendMessage("user", inputValue);
      try {
        const response = await fetch("http://localhost:3000/get-response", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputValue }),
        });
        const data = await response.json();
        console.log(data);
        appendMessage("bot", data.message);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        hideLoader(); // Hide the loader after fetch is complete
      }
    }
    inputField.value = "";
  });

function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

function appendMessage(sender, message) {
  var chatbox = document.getElementById("chatbox");
  var item = document.createElement("div");
  item.className = sender === "user" ? "item right" : "item";
  var iconClass = sender == "user" ? "user" : "odnoklassniki";
  item.innerHTML = `
        <div class="icon">
            <i class="fa fa-${iconClass}"></i>
        </div>
        <div class="msg">
            <p>${message}</p>
        </div>
    `;
  chatbox.appendChild(item);
  chatbox.scrollTop = chatbox.scrollHeight;
}
