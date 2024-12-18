const scriptURL =
  "https://script.google.com/macros/s/AKfycbyzeFogB4aJNJGo5O6fsoIMROp_1aC6UAXjWnm4rPEgYKDkKz-87na4wk1BveNQwac67g/exec";
const form = document.getElementById("submit-to-google-sheet");

function handleSubmit(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitButton = form.querySelector(".send-btn");
    const loadingButton = form.querySelector(".loading-btn");

    submitButton.classList.add("d-none");
    loadingButton.classList.remove("d-none");

    if (form === form && !validateForm()) {
      submitButton.classList.remove("d-none");
      loadingButton.classList.add("d-none");
      return; // Hentikan pengiriman form jika validasi gagal
    }

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        submitButton.classList.remove("d-none");
        loadingButton.classList.add("d-none");

        window.location.href = "success.html";
      })
      .catch((error) => {
        console.error("Error!", error.message);
        submitButton.classList.remove("d-none");
        loadingButton.classList.add("d-none");
      });
  });
}

handleSubmit(form);
