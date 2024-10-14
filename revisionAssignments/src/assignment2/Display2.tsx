import CourseList from "./CourseList";

export default function Display2() {
  return (
    <div>
      <h3>assignment2 courses</h3>
      <CourseList courses={courseArray} />
    </div>
  );
}
