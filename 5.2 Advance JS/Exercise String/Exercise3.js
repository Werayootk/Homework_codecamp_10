str1 = "What I'd like to tell on this topic is:";
str2 = "Hi everyone!";

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return `"${str.slice(0, maxlength)}..."`;
  }
  return `"${str}"`;
}

console.log(truncate(str1, 20));
console.log(truncate(str2, 20));
