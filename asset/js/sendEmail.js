function sendMail(contactForm) {
    emailjs.send("ibi_olu_gmail_com", "ib", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "request_project": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
