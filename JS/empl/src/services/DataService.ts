import { Employee } from "../model/Empl";

const baseUrl = 'http://localhost:3001/empl/';



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

export async function getEmployee(id: number): Promise<Employee> {
    const response = await fetch(`${baseUrl}get/${id}`, {
        method: 'GET'
    });
    const parsedResponse = await response.json();
    return parsedResponse;
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