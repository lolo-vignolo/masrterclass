const StudentsIng = () => {
  const students = [
    { name: "Juan", age: 20 },
    { name: "Pedro", age: 25 },
    { name: "Maria", age: 40 },
  ];
  return (
    <div
      style={{ textAlign: "center", height: "50rem", backgroundColor: "red" }}
    >
      <h1>ingles</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsIng;
