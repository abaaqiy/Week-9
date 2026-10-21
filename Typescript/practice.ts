let studentName: string = "Tunde";
let currentStudentAge: number = 21;
let isEnrolled: boolean = true;

let courseName: string = "Frontend Development";

function addNumbers(a: number, b: number): number { 
  return a + b; 
}

function isAdult(age: number): boolean { 
  return age >= 18; 
}

const getArea = (width: number, height: number): number => {
  return width * height;
};

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

const student1: Student = { id: 1, name: "Alice", age: 20, course: "Math", isActive: true };
const student2: Student = { id: 2, name: "Bob", age: 22, course: "Science", isActive: false };

interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const myInstructor: Instructor = { name: "Stanley", cohort: 8, subjects: ["HTML", "CSS", "JavaScript"] };
console.log(introduceInstructor(myInstructor));

let names: string[] = ["Ada", "Bola", "Chidi"];
let studentScores: number[] = [78, 90, 55, 88];

function formatId(id: string | number): string {
  return String(id); 
}

console.log(formatId(42));
console.log(formatId("abc"));