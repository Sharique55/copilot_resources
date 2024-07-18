import { Employee } from "../model/Employee";
import { EmployeeRepository } from "../repository/EmployeeRepository";

export class EmplService {

    private emplRepository: EmployeeRepository = new EmployeeRepository();

    public async getAllEmployees() {
        return await this.emplRepository.getAllEmployees();
    }

    public async getEmployeeById(id: number) {
        return await this.emplRepository.getEmployeeById(id);
    }

    public async createEmployee(employee: Employee) {
        return await this.emplRepository.createEmployee(employee);
    }

    public async updateEmployeePosition(id: number, position: string) {
        return await this.emplRepository.updateEmployeePosition(id, position);
    }

    public async deleteEmployee(id: number) {
        return await this.emplRepository.deleteEmployee(id);
    }

    public async getEmployeesByPosition(position: string) {
        return await this.emplRepository.getEmployeesByPosition(position);
    }
}