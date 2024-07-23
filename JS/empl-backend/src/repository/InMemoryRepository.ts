import { Employee } from "../model/Employee";



export class InMemoryEmplRepo {

    private employees: Employee[] = [];
    private nextId = 1;

    public async getAllEmployees() {
        return this.employees;
    }

    public async getEmployeeById(id: number) {
        return this.employees.find(e => e.id === id);
    }

    public async createEmployee(employee: Employee) {
        employee.id = this.nextId;
        this.employees.push(employee);
        this.nextId++;
        return employee;
    }

    public async updateEmployeePosition(id: number, position: string) {
        const employee = this.employees.find(e => e.id === id);
        if (employee) {
            employee.position = position;
        }
    }

    public async getEmployeesByPosition(position: string) {
        return this.employees.filter(e => e.position === position);
    }

    public async deleteEmployee(id: number) {
        this.employees = this.employees.filter(e => e.id !== id);
    }


}