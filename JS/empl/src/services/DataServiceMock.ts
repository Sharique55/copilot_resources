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

export async function getEmployeeBio(id: number) {
    const employee = await getEmployee(id);
    // generate a long bio string for an employee - cu GC chat
    if (!employee) {
        return 'No bio available';
    }
    const bio = `Employee Name: ${employee.firstName} ${employee.lastName}\n` +
        `Position: ${employee.position}\n` +
        `Bio: ${employee.firstName} ${employee.lastName} has been a valuable member of the awesome department, ` +
        `working as a ${employee.position}. With a strong background in their field, ` +
        `${employee.firstName} has consistently demonstrated exceptional skills and dedication. ` +
        `Their contributions have significantly impacted the team's success and overall company growth.` +
        `In their free time, ${employee.firstName} enjoys spending time with their family and friends, exploring new places, `;

    return bio;
}

