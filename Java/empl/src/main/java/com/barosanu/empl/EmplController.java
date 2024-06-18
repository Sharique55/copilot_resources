package com.barosanu.empl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.barosanu.empl.models.Employee;

@RestController
@RequestMapping("/employees")
public class EmplController {

    @Autowired
    private EmplService emplService;

    @GetMapping
    public List<Employee> getEmployees() {
        return emplService.getEmployees();
    }

    @GetMapping("/get")
    public List<Employee> getEmployeesByPosition(@RequestParam(required = true) String position) {
        System.out.println("Position: " + position);
        return emplService.getEmployeesByPosition(position);
    }

    @PostMapping("/add")
    public Employee addNewEmployee(@RequestBody Employee employee) {
        return emplService.addNewEmployee(employee);
    }

    @PutMapping("/{id}")
    public String updateEmployeePosition(@PathVariable String id, @RequestBody Employee employee) {
        return emplService.updateEmployeePosition(id, employee.getPosition());
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@RequestBody String id) {
        return emplService.deleteEmployee(id);
    }


    
}
