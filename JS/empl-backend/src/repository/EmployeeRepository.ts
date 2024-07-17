import { createPool } from 'mysql2/promise';
import { dbConfig } from '../config/dbConfig';
import { Employee } from '../model/Employee';



export class EmployeeRepository {

    private connection = createPool(dbConfig);

    public async getAllEmployees() {
        const result = await this.connection.query('SELECT * FROM employees');
        return result[0] as Employee[];
    }

    public async getEmployeeById(id: number) {
        const result = await this.connection.query('SELECT * FROM employees WHERE id = ?', [id]);
        const empl = result[0] as Employee[];
        if (empl.length === 0) {
            return undefined;
        }
        return empl[0];
    }
}