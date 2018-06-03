export function randomArrayItem(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export function getRandomTagLine() {
  const taglines = [
    "This could be your bucket list.",
    "This can be your shopping list.",
    "This could be your work tasks"
  ];

  return randomArrayItem(taglines);
}
