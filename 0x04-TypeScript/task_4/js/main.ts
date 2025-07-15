/// <refernce path="./subjects/Java.ts"/>
/// <refernce path="./subjects/cpp.ts"/>
/// <refernce path="./subjects/React.ts"/>
/// <refernce path="./subjects/Subject.ts"/>


 const java = new Subjects.Java();
 const cpp = new Subjects.Cpp();
 const react = new Subjects.React();

 const cTeacher: Subjects.Teacher ={firstName:"hanan",  lastName:"abdulshikur", experienceTeachingC: 10};

console.log("c++");
cpp.setTeacher(cTeacher);
console.log(`${cpp.getRequirements()}"  "${cpp.getAvailableTeacher()}`);
console.log("java");
java.setTeacher(cTeacher);
console.log(`${java.getRequirements()}"  "${java.getAvailableTeacher()}`);
console.log("react");
react.setTeacher(cTeacher);
console.log(`${react.getRequirements()}"  "${react.getAvailableTeacher()}`);
