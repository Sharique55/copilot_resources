import { Employee } from "../model/Empl";

const baseUrl = 'http://localhost:3000/empl/';



export async function getEmployees(): Promise<Employee[]> {
    const response = await fetch(baseUrl, {
        method: 'GET'
    });
    const parsedResponse = await response.json();
    return parsedResponse;
}

export async function addEmployee(employee: Partial<Employee>): Promise<void> {
    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
}

export async function getEmployee(id: number): Promise<Employee | undefined> {
    const response = await fetch(`${baseUrl}get/${id}`, {
        method: 'GET'
    });
    if (response.status === 404) {
        return undefined;
    }

    const parsedResponse = await response.json();
    return parsedResponse;
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

export async function updateEmployeePosition(id: number, position: string): Promise<void> {
    const requestBody = {
        position: position
    };
    await fetch(`${baseUrl}position/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });
}

export async function deleteEmployee(id: number): Promise<void> {
    await fetch(`${baseUrl}delete/${id}`, {
        method: 'DELETE'
    });
}

