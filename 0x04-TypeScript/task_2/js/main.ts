interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if(typeof salary === "number" && salary < 500) {
    return new Teacher()
  } else {
    return new Director();
  }
}

function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
   return "workDirectorTasks" in employee
}

function executeWork(employee: DirectorInterface | TeacherInterface): void {
  if(isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks()
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string{
     if(todayClass === "Math") {
      return "Teaching Math";
     } else {
       return "Teaching History"
     }
     
}

// function isDirector(
//   employee: DirectorInterface | TeacherInterface
// ye): employee is DirectorInterface {
//   return "workDirectorTasks" in employee;
// }

// function executeWork(employee: DirectorInterface | TeacherInterface): string {
//   if (isDirector(employee)) {
//     return employee.workDirectorTasks();
//   } else {
//     return employee.workTeacherTasks();
//   }
// }

// ✅ Example:
const emp1 = createEmployee(200);
console.log(executeWork(emp1)); // Getting to work

const emp2 = createEmployee(1000);
console.log(executeWork(emp2)); // Getting to director tasks

console.log(createEmployee(200) , 'expected ');
console.log(createEmployee('$500') , "expected");

executeWork(createEmployee(200));
// Getting to work
executeWork(createEmployee(1000));
// Getting to director tasks
