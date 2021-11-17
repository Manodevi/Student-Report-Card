import Students from '../students/Students';
import StudentForm from '../students/StudentForm';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <StudentForm />
      </div>
      <div><Students /></div>
    </div>
  );
};

export default Home;