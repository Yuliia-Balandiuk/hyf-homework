const class07Students = [];
function addStudentToClass(studentName) {
  if (typeof studentName === 'string' && studentName !== ' ') {
    if (class07Students.includes(studentName)) {
      console.log(`Student ${studentName} is already in the class`);
    } else {
      if (
        (studentName !== '' && class07Students.length <= 5) ||
        studentName === 'Queen'
      ) {
        class07Students.push(studentName);
      } else if (class07Students.length >= 6) {
        console.log('Cannot add more students to class 07');
      }
    }
  } else {
    console.log('Please enter the correct data');
  }
}

addStudentToClass('Stas');
addStudentToClass('Julia');
addStudentToClass(6);
addStudentToClass('Bob');
addStudentToClass('Bob');
addStudentToClass('Mark');
addStudentToClass('Cristina');
addStudentToClass('Olga');
addStudentToClass('Max');
addStudentToClass('Anastasia');
addStudentToClass('Oleg');
addStudentToClass('Queen');
addStudentToClass('Jon');

console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;
}

console.log(getNumberOfStudents());
