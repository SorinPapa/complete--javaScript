const day = prompt("Wich day is today ?");
switch (day) {
  case "monday": // day===monday
    console.log("Plan my course structure.");
    console.log("Go to coding meetup.");
    break;
  case "tuesday":
    console.log("Prepare theory!");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Almost weekend!");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend time!!! ");
    break;
  default:
    console.log("Not a valid day!");
}

if (day) {
  console.log("Esti cu capul! :)))");
}
