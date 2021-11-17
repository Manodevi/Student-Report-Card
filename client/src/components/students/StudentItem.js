import PropTypes from 'prop-types';

const StudentItem = ({student}) => {
  const { name, std, section } = student;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}<span className={'badge badge-primary'}>{std}{section.toUpperCase()}</span>
      </h3>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

StudentItem.propTypes = {
  student: PropTypes.object.isRequired
};

export default StudentItem;