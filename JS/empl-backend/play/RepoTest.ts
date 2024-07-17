import { EmployeeRepository } from "../src/repository/EmployeeRepository";

const EmplRepository = new EmployeeRepository();

async function main(){
    // const allEmpl = await EmplRepository.getAllEmployees();
    // console.log(allEmpl);

    const empl = await EmplRepository.getEmployeeById(100);

}

main();