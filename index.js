function explore() {
  let firstname = prompt("What is your firstname?");
  let lastname = prompt("What is your lastname?");
  let fullname = firstname + " " + lastname;
  let explore = prompt("Do you love nature vacation?");
  explore = explore.toLowerCase().trim().replace("yeah", "yes");

  if (explore === "yes") {
    alert(
      "Glad to hear that " +
        fullname +
        ". Explore some of the natural beauties of the world😃"
    );
  } else {
    alert(
      "I am so sad to hear that you do not love nature vacation😢 " +
        fullname +
        ". What type of vacation do you love?"
    );
  }
}

let explorebutton = document.querySelector("button");
explorebutton.addEventListener("click", explore);
