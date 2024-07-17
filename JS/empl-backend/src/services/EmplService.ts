import { EmployeeRepository } from "../repository/EmployeeRepository";

export class EmplService {

    private EmplRepository: EmployeeRepository = new EmployeeRepository();

    public async getAllEmployees() {
        return await this.EmplRepository.getAllEmployees();
    }
}