document.addEventListener("DOMContentLoaded", () => {
    const emailButton = document.getElementById("emailButton");

    emailButton.addEventListener("click", () => {
      const email = "hanishgowda7795@gmail.com";
      const subject = "Project Inquiry";
      const body = "Hi Hanish, I’d like to discuss my project with you.";
      
      // Create the mailto link dynamically
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the mailto link
      window.location.href = mailtoLink;
    });
  });