package com.barosanu.empl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @PostMapping("/add")
    public Employee addNewEmployee(@RequestBody Employee employee) {
        return emplService.addNewEmployee(employee);
    }

    @PostMapping("/test")
    public String test(@RequestBody Object object) {
        System.out.println("object: " + object);
        return "test";
    }

    @PutMapping("/{id}")
    public String updateEmployeePosition(@RequestBody String id, @RequestBody String position) {
        return emplService.updateEmployeePosition(id, position);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@RequestBody String id) {
        return emplService.deleteEmployee(id);
    }


    
}
