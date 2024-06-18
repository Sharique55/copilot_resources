package com.barosanu.empl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.barosanu.empl.models.Employee;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmplController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping(path="/add")
    public @ResponseBody String addNewEmployee (@RequestParam String firstName, @RequestParam String lastName, @RequestParam Date hireDate, @RequestParam String position) {
        Employee n = new Employee();
        n.setFirstName(firstName);
        n.setLastName(lastName);
        n.setHireDate(hireDate);
        n.setPosition(position);
        employeeRepository.save(n);
        return "Saved";
    }
    
}
