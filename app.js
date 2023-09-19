// var grade = 'B';
// document.write('Entering switch block <br />');

// switch (grade) {
//     case 'A': document.write('Good job <br />');
//     break;
//     case 'B': document.write('pretty good <br />');
//     break;
//     case 'C': document.write('passed <br />');
//     break;
//     case 'D': document.write('not so good <br />');
//     break;
//     case 'F': document.write('failed <br />');

//     default: document.write('Unknown grade <br />');
// }

// document.write("Existing switch block")

var aProperty;

document.write('Navigator Object Properties <br />');

for(aProperty in navigator) {
    document.write(aProperty);
    document.write('<br />');
};

document.write('Existing in the loop');