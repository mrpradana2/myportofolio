const form = document.querySelector("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const pesan = document.getElementById("pesan");

const sendEmail = () => {
  const bodyMessage = `Pesan dari : ${inputName.value}<br>Email : ${inputEmail.value}<br>Pesan :<br>${inputMessage.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mrpradana2@gmail.com",
    Password: "12B46E57B0C6ACD57D304F40EABC761F2DA6",
    To: "mrpradana2@gmail.com",
    From: "rizkipradana495@gmail.com",
    Subject: "Pesan dari Web Portofolio",
    Body: bodyMessage,
  }).then((message) => alert(message));
};

form.addEventListener("submit", (e) => {
  sendEmail();
});
