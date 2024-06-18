package com.barosanu.empl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.barosanu.empl.models.Employee;

@Service
public class EmplService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public Employee addNewEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public String updateEmployeePosition(String id, String position) {
        Employee n = employeeRepository.findById(Long.parseLong(id)).get();
        n.setPosition(position);
        employeeRepository.save(n);
        return "Updated";
    }

    public String deleteEmployee(String id) {
        employeeRepository.deleteById(Long.parseLong(id));
        return "Deleted";
    }

    private Date getDateFromString(String date) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        try {
            return formatter.parse(date);
        } catch (Exception e) {
            return null;
        }
    }
    
}
