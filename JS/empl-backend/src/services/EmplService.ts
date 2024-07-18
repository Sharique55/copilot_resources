import { Employee } from "../model/Employee";
import { EmployeeRepository } from "../repository/EmployeeRepository";

export class EmplService {

    private EmplRepository: EmployeeRepository = new EmployeeRepository();

    public async getAllEmployees() {
        return await this.EmplRepository.getAllEmployees();
    }

    public async getEmployeeById(id: number) {
        return await this.EmplRepository.getEmployeeById(id);
    }

    public async createEmployee(employee: Employee) {
        return await this.EmplRepository.createEmployee(employee);
    }

    public async updateEmployeePosition(id: number, position: string) {
        return await this.EmplRepository.updateEmployeePosition(id, position);
    }

    public async deleteEmployee(id: number) {
        return await this.EmplRepository.deleteEmployee(id);
    }

    public async getEmployeesByPosition(position: string) {
        return await this.EmplRepository.getEmployeesByPosition(position);
    }
}