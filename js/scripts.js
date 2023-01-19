window.onload = function() {
  // we get the form element
  const form = document.querySelector("form");
  // we create an event handler for the form's submission
  form.onsubmit = function(event) {
    event.preventDefault();

    // we access two HTML elements, the drink menu and the message to underaged folks,
    // and add the hidden class to those elements;
    // doing this clears results before displaying new ones, which
    // allows the user to submit the form again and again, and
    // see new results.
    let eligible = document.getElementById("voter-info");
    eligible.setAttribute("class", "hidden");
    let tooYoung = document.getElementById("under-18");
    tooYoung.setAttribute("class", "hidden");

    // we gather the age value
    const age = parseInt(document.querySelector("input#age").value);

    // we check if the age is greater than 18.
    if (age >= 18) {
      eligible.removeAttribute("class");
    } else {
      tooYoung.removeAttribute("class");
    }
  };
};