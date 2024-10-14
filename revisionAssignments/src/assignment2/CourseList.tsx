import Course from "./Course";
import { CourseProp } from "./Course";

interface CourseArray {
  courses: CourseProp[];
}

export default function CourseList({ courses }: CourseArray) {
  return (
    <div>
      {courses.map((course, index) => (
        <Course
          key={index}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
}
