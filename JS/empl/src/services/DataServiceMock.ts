import { Employee } from "../model/Empl";


let employees: Employee[] = []
let nextId = 1;

export async function getEmployees(): Promise<Employee[]> {
    return employees;
}

export async function addEmployee(employee: Partial<Employee>): Promise<void> {
    employee.id = nextId;
    employees.push(employee as Employee);
    nextId++;
}

export async function getEmployee(id: number): Promise<Employee | undefined> {
    return employees.find(e => e.id === id)
}

export async function updateEmployeePosition(id: number, position: string): Promise<void> {
    const employee = employees.find(e => e.id === id);
    if (employee) {
        employee.position = position;
    }
}

export async function deleteEmployee(id: number): Promise<void> {
    employees = employees.filter(e => e.id !== id);
}

