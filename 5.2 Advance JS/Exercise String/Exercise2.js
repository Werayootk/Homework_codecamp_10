str = "Welcome to the website. If you're here, you're likely looking to find xxx words. Random Word Generator is the perfect viagra to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. xxx better, it allows viagra to adjust the parameters of the random words to best fit your needs."

function checkSpam(word1, word2) {
    let i = 0;
    let j = 0;
    let n = 0;
    while (true) {
        i = str.indexOf(word1, i);
        j = str.indexOf(word2, j);
        if (i < 0) {                            // ใช้ i = -1 ก็ได้
            break;
        }
        if (j < 0) {                            // ใช้ j = -1 ก็ได้
            break;
        }
        console.log(`Found word "${word1}" at charactor number ${i}`);
        console.log(`Found word "${word2}" at charactor number ${j}`);
        i++;
        j++;
        n++;
    }

    if (n <= 0) {
        return false;
    }
    return true;
}

console.log( checkSpam("xxx", "viagra") );