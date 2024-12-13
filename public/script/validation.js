const form = document.querySelector("form");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");

function sendEmail() {
  const bodyMessage = `Pesan dari : ${inputName.value}<br>Email : ${inputEmail.value}<br>Pesan :<br>${inputMessage.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "viewartcreativemedia@gmail.com",
    Password: "5E88D52A9941BD4FD316D80F1CD89DD2B6F8",
    To: "viewartcreativemedia@gmail.com",
    From: "viewartcreativemedia@gmail.com",
    Subject: "Pesan dari Web Portofolio",
    Body: bodyMessage,
  }).then((message) => {
    if (message === "OK") {
      document.querySelector(".alert").classList.add("success");
      document.querySelector(
        ".alert p"
      ).innerHTML = `<i class="fa-solid fa-circle-check"></i><br><p>Pesan berhasil terkirim, Terimakash!</p>`;
      setTimeout(() => {
        document.querySelector(".alert").classList.remove("success");
        document.querySelector(".alert p").innerHTML = "";
      }, 7000);
    } else {
      document.querySelector(".alert").classList.add("danger");
      document.querySelector(
        ".alert p"
      ).innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i><br><p>Mohon maaf pesan anda tidak terkirim <br>Silakan coba beberapa saat lagi<p/>`;
      setTimeout(() => {
        document.querySelector(".alert").classList.remove("danger");
        document.querySelector(".alert p").innerHTML = "";
      }, 7000);
    }
  });
}

const checkInput = () => {
  // check jika kosong
  if (inputName.value == "") {
    notValueInputName();
    inputName.addEventListener("keyup", () => {
      if (inputName.value != "") {
        checkName();
      } else {
        notValueInputName();
      }
    });
  }
  if (inputEmail.value == "") {
    notValueInputEmail();
    inputEmail.addEventListener("keyup", () => {
      if (inputEmail.value != "") {
        checkEmail();
      } else {
        notValueInputEmail();
      }
    });
  }
  if (inputMessage.value == "") {
    notValueInputMessage();
    inputMessage.addEventListener("keyup", () => {
      if (inputMessage.value != "") {
        checkMessage();
      } else {
        notValueInputMessage();
      }
    });
  }

  //   check jika ada
  if (inputName.value != "") {
    checkName();
    inputName.addEventListener("keyup", () => {
      if (inputName.value != "") {
        checkName();
      } else {
        notValueInputName();
      }
    });
  }

  if (inputEmail.value != "") {
    checkEmail();
    inputEmail.addEventListener("keyup", () => {
      if (inputEmail.value != "") {
        checkEmail();
      } else {
        notValueInputEmail();
      }
    });
  }
  if (inputMessage.value != "") {
    checkMessage();
    inputMessage.addEventListener("keyup", () => {
      if (inputMessage.value != "") {
        checkMessage();
      } else {
        notValueInputMessage();
      }
    });
  }
};

const checkName = () => {
  const nameRegex = /^[A-Za-z ]+$/;
  if (inputName.value.match(nameRegex)) {
    inputName.removeAttribute("class");
    document.getElementById("blank-input-name").classList.remove("active");
    document.getElementById("invalid-input-name").classList.remove("active");
    document.getElementById("valid-input-name").classList.add("active");
  } else {
    inputName.classList.add("error");
    document.getElementById("blank-input-name").classList.remove("active");
    document.getElementById("invalid-input-name").classList.add("active");
    document.getElementById("valid-input-name").classList.remove("active");
  }
};

const notValueInputName = () => {
  inputName.classList.add("error");
  document.getElementById("blank-input-name").classList.add("active");
  document.getElementById("invalid-input-name").classList.remove("active");
  document.getElementById("valid-input-name").classList.remove("active");
};

const checkEmail = () => {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  if (inputEmail.value.match(emailRegex)) {
    inputEmail.removeAttribute("class");
    document.getElementById("blank-input-email").classList.remove("active");
    document.getElementById("invalid-input-email").classList.remove("active");
    document.getElementById("valid-input-email").classList.add("active");
  } else {
    inputEmail.classList.add("error");
    document.getElementById("blank-input-email").classList.remove("active");
    document.getElementById("invalid-input-email").classList.add("active");
    document.getElementById("valid-input-email").classList.remove("active");
  }
};

const notValueInputEmail = () => {
  inputEmail.classList.add("error");
  document.getElementById("blank-input-email").classList.add("active");
  document.getElementById("invalid-input-email").classList.remove("active");
  document.getElementById("valid-input-email").classList.remove("active");
};

const checkMessage = () => {
  inputMessage.removeAttribute("class");
  document.getElementById("blank-input-message").classList.remove("active");
  document.getElementById("valid-input-message").classList.add("active");
};

const notValueInputMessage = () => {
  inputMessage.classList.add("error");
  document.getElementById("blank-input-message").classList.add("active");
  document.getElementById("valid-input-message").classList.remove("active");
};

const validAll = () => {
  document.getElementById("valid-input-name").classList.remove("active");
  document.getElementById("valid-input-email").classList.remove("active");
  document.getElementById("valid-input-message").classList.remove("active");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();

  if (
    !inputName.classList.contains("error") &&
    !inputEmail.classList.contains("error") &&
    !inputMessage.classList.contains("error")
  ) {
    sendEmail();
    validAll();
    form.reset();
    return false;
  }
});
