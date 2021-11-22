import { useContext } from 'react';
import context from '../../context/studentReportCard/studentContext';

const Alert = props => {
  const studentContext = useContext(context);
  const alerts = studentContext.alerts;

  return (    
      alerts.length > 0 &&
      alerts.map(alert => (        
        <div className={`alert alert-${alert.type}`}>
          {alert.msg.map((message, index) => (
            <p key={`msg-${index}`}><i className='fas fa-info-circle' /> {message.msg}</p>
          ))}
        </div>
      ))    
  );
};

export default Alert;