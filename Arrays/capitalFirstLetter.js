
capitalFirstLetter = (text) => {
  let newText = text;
  newText = newText.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
  console.log(newText);
}

capitalFirstLetter("my code my rules");
