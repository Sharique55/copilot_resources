import { useEffect, useState } from 'react';
import { getEmployee, getEmployeeBio } from '../services/DataServiceMock';
import { Employee } from '../model/Empl';
import { useParams } from 'react-router-dom'

function EmplDetails() {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [employeeBio, setEmployeeBio] = useState<string | null>(null);
  const { emplId } = useParams<{ emplId: string }>();
  const [status, setStatus] = useState<string | null>('Loading employee details...');

  useEffect(() => {
    const fetchEmployee = async () => {
      console.log(`fetching id: ${emplId}`);
      try {
        if (emplId) {
          console.log('Fetching employee with id:', emplId);
          const employee = await getEmployee(parseInt(emplId));
          if (!employee) {
            setStatus('Employee not found');
            return;
          }
          setEmployee(employee); 
          const bio = await getEmployeeBio(parseInt(emplId));      
          setEmployeeBio(bio);   
        }
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, []);

  if (!employee) {
    return <div>{status}</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
        <strong>First Name:</strong> {employee.firstName} <br />
        <strong>Last Name:</strong> {employee.lastName} <br />
        <strong>Hire Date:</strong> {employee.hireDate} <br />
        <strong>Position:</strong> {employee.position} <br />
        <br />
        <strong>Bio:</strong> {employeeBio} <br />
    </div>
  )

};

export default EmplDetails; 
