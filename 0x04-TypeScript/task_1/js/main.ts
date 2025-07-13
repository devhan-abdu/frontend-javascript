// 
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string; 
    [propName:string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName:string , lastName:string):string;
}

const printTeacher:printTeacherFunction = (firstName , lastName) => {
     return firstName.charAt(0)+ "." + lastName;
}
