export interface CourseProp {
  name: string;
  courseId: string;
  studentPositions: number;
}

export default function Course({
  name,
  courseId,
  studentPositions,
}: CourseProp) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>{studentPositions}</p>
    </div>
  );
}
