import { db } from "./firebase";

// Create User 
export const doCreateUser = (role, email, firstName, lastName, password) =>
  db
    .collection(role)
    .doc()
    .set({
      email,
      firstName,
      lastName,
      password
    });

//Get Students
export const onceGetStudents = () => db.collection("Student").get();

//Get Instructors
export const onceGetInstructors = () =>
  db.collection("Instructor").once("value");

//Create Course
export const doCreateCourse = (courseCode, CourseDescription) =>
  db
    .collection("Courses")
    .doc(courseCode)
    .set({
      CourseDescription
    });

//Get Courses
export const onceGetCourses = () => db.ref("Courses").once("value");

//Get Instructor Courses
export const onceGetInstructorCourses = () =>
  db.ref("Instructor").once("value");

//Get Student Courses
export const onceGetStudentCourses = () => db.ref("Student").once("value");
