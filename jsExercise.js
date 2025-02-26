const students = [
    { 
        Name: "diego", 
        IDnum: 101010, 
        Year: 2020, 
        Grade: 90, 
},
    { 
        Name: "dora", 
        IDnum: 101011, 
        Year: 2020, 
        Grade: 80, 
},
    { 
        Name: "matilda", 
        IDnum: 101012, 
        Year: 2020, 
        Grade: 70, 
},
    { 
        Name: "john", 
        IDnum: 101013, 
        Year: 2020, 
        Grade: 75,
},
    { 
        Name: "jane", 
        IDnum: 101014, 
        Year: 2020, 
        Grade: 85,
},
    { 
        Name: "alex", 
        IDnum: 101015, 
        Year: 2020, 
        Grade: 95,
},
    { 
        Name: "emma", 
        IDnum: 101016, 
        Year: 2020, 
        Grade: 91, 
},
    { 
        Name: "liam", 
        IDnum: 101017, 
        Year: 2020, 
        Grade: 86,
},
    { 
        Name: "olivia", 
        IDnum: 101018, 
        Year: 2020, 
        Grade: 87,
},
    { 
        Name: "noah", 
        IDnum: 101019, 
        Year: 2020, 
        Grade: 88,
    }
];

function findHighestAndLowest() {
    let highestStudent = students.sort((a, b) => b.Grade - a.Grade)[0];
    let lowestStudent = students.sort((a, b) => a.Grade - b.Grade)[0];
    
    return `Highest Grade: ${highestStudent.Name} (${highestStudent.Grade})\nLowest Grade: ${lowestStudent.Name} (${lowestStudent.Grade})`;
}

console.log(findHighestAndLowest());
