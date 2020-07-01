function sendForm(){
    let firstNameEl = $("input.firstName");
    let lastNameEl = $("input.lastName");
    let mobileEl = $("input.mobile");
    let emailEl = $("input.email");
    let addressEl = $("input.address");
    let errorEl = $("div.alert");

    if (firstNameEl.val() === "" || lastNameEl.val() === "" || mobileEl.val() === "" || emailEl.val() === "" || addressEl.val() === "") {
        errorEl.removeClass("alert-success");
        errorEl.addClass("alert-danger")
        errorEl.text("Please fill all fields before submitting");
        return;
        
    }
    else {
        errorEl.removeClass("alert-danger");
        errorEl.addClass("alert-success");
        errorEl.text("Form submitted successfuly!");
    }

    let submission = {
        firstName: firstNameEl.val(),
        lastName: lastNameEl.val(),
        mobile: mobileEl.val(),
        email: emailEl.val(),
        address: addressEl.val()
    }

    fetch("/api/submission", {
        method: "POST",
        body: JSON.stringify(submission),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => {    
        return response.json();
      })
      .then(data => {
        if (data.errors) {
          errorEl.text("Please fill all fields before submitting");
        }
        else {
          // clear form
          firstNameEl.val() = "";
          lastNameEl.val() = "";
          emailEl.val() = "";
          mobileEl.val() = "";
          addressEl.val() = "";
        }
      })
      .catch(err => {
        // fetch failed, so save in indexed db
        saveRecord(submission);
    
        // clear form
        firstNameEl.val() = "";
        lastNameEl.val() = "";
        emailEl.val() = "";
        mobileEl.val() = "";
        addressEl.val() = "";
      });
}

$("button.submit-btn").click(function() {
    sendForm();
  });

    