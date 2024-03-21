console.log("Hello World!");

let ageAnswer = prompt("How old are you?");
let movieRating = prompt("Is the movie rated 12, 15, or 18?");

if (ageAnswer >= 18) {
  if (movieRating <= 18) {
    console.log("You can watch this movie!");
  } else {
    console.log("You can't watch this movie!");
  }
} else if (ageAnswer >= 15) {
  if (movieRating <= 15) {
    console.log("You can watch this movie!");
  } else {
    console.log("You can't watch this movie!");
  }
} else if (ageAnswer >= 12) {
  if (movieRating <= 12) {
    console.log("You can watch this movie!");
  } else {
    console.log("You can't watch this movie!");
  }
} else if (ageAnswer <= 11) {
  console.log("You can't watch this movie!");
}
