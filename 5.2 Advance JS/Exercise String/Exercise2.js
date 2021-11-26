str = "Check wording if have xxx or viagra example xxx 2 and viagra 2";

function checkSpam(str) {
    result = (str.includes('xxx') || str.includes('viagra')) ? true : false;
    return result;
}

console.log(checkSpam(str));
