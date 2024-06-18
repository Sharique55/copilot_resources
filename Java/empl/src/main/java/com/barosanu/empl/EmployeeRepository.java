package com.barosanu.empl;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.barosanu.empl.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

    List<Employee> findByPosition(String position);
    
}
