import { createPool } from 'mysql2/promise';
import { dbConfig } from '../config/dbConfig';
import { Employee } from '../model/Employee';



export class EmployeeRepository {

    private connection = createPool(dbConfig);

    EmployeeRepository() {}

    public async getAllEmployees() {
        const result = await this.connection.query('SELECT * FROM employees');
        return result
    }
}