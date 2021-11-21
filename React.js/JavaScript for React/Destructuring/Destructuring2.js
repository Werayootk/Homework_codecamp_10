let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    if (salaries == null || undefined) {
        return null;
    } else {
        let maxSalary = Math.max(...Object.values(salaries));
        let nameOfMaxSalary = '';
        for (item in salaries) {
            if (salaries[item] == maxSalary) {
                nameOfMaxSalary += item;
            }
        }
        return nameOfMaxSalary;
    }
}

console.log(topSalary(salaries));