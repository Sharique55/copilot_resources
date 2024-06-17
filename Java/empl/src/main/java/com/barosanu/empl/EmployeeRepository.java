package com.barosanu.empl;

import org.springframework.data.jpa.repository.JpaRepository;

import com.barosanu.empl.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
    
}
