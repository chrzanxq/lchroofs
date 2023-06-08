 // Smooth scroll to target element with offset adjustment
 function scrollToTarget(element) {
    const target = document.querySelector(element);
    const offset = 100; 

  return window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth"
    });
  };

  function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const serviceId = "service_voqo5oc";
    const templateId = "template_q52daaa";
  
    if (!name || !email || !message) {
      return false;
    }
  
    if (!isValidEmail(email)) {
      return false;
    }
  
    const params = { name, email, message };
  
    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred while sending the message. Please try again later.");
      });
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
