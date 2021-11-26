str1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus a illum. Repellendus magni laudantium error quidem reprehenderit voluptates assumenda eligendi, consectetur nihil rerum vero distinctio, dicta earum dignissimos id.";
str2 = "Lorem ipsum dolor sit";

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return `"${str.slice(0, maxlength)}..."`;
  }
  return `"${str}"`;
}

console.log(truncate(str1, 20));
console.log(truncate(str2, 50));


