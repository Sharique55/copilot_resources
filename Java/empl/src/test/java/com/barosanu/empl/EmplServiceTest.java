package com.barosanu.empl;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.barosanu.empl.models.Employee;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class EmplServiceTest {

    @MockBean
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmplService emplService;

    @Test
    public void getEmployeesTest() {
        Employee e1 = new Employee();
        Employee e2 = new Employee();
        when(employeeRepository.findAll()).thenReturn(Arrays.asList(e1, e2));

        List<Employee> result = emplService.getEmployees();

        assertEquals(2, result.size());
        verify(employeeRepository, times(1)).findAll();
    }

    @Test
    public void addNewEmployeeTest() {
        Employee e = new Employee();
        when(employeeRepository.save(e)).thenReturn(e);

        Employee result = emplService.addNewEmployee(e);

        assertEquals(e, result);
        verify(employeeRepository, times(1)).save(e);
    }

    @Test
    public void updateEmployeePositionTest() {
        Employee e = new Employee();
        e.setId(1L);
        when(employeeRepository.findById(1L)).thenReturn(Optional.of(e));

        emplService.updateEmployeePosition("1", "New Position");

        assertEquals("New Position", e.getPosition());
        verify(employeeRepository, times(1)).save(e);
    }

    @Test
    public void deleteEmployeeTest() {
        Employee e = new Employee();
        e.setId(1L);

        emplService.deleteEmployee("1");

        verify(employeeRepository, times(1)).deleteById(1L);
    }

    @Test
    public void getEmployeeByIdTest() {
        Employee e = new Employee();
        e.setId(1L);
        when(employeeRepository.findById(1L)).thenReturn(Optional.of(e));

        Employee result = emplService.getEmployeeById("1");

        assertEquals(e, result);
        verify(employeeRepository, times(1)).findById(1L);
    }

    @Test
    public void getEmployeesByPositionTest() {
        Employee e1 = new Employee();
        e1.setPosition("Position1");
        Employee e2 = new Employee();
        e2.setPosition("Position1");
        when(employeeRepository.findByPosition("Position1")).thenReturn(Arrays.asList(e1, e2));

        List<Employee> result = emplService.getEmployeesByPosition("Position1");

        assertEquals(2, result.size());
        verify(employeeRepository, times(1)).findByPosition("Position1");
    }
}