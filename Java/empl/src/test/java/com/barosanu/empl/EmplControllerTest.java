package com.barosanu.empl;

import com.barosanu.empl.models.Employee;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(EmplController.class)
public class EmplControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private EmplService emplService;

    @Test
    public void getEmployeesTest() throws Exception {
        Employee e1 = new Employee();
        Employee e2 = new Employee();
        List<Employee> employees = Arrays.asList(e1, e2);
        when(emplService.getEmployees()).thenReturn(employees);

        mockMvc.perform(get("/employees"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(employees)));

        verify(emplService, times(1)).getEmployees();
    }

    @Test
    public void getEmployeesByPositionTest() throws Exception {
        Employee e1 = new Employee();
        e1.setPosition("Position1");
        Employee e2 = new Employee();
        e2.setPosition("Position1");
        List<Employee> employees = Arrays.asList(e1, e2);
        when(emplService.getEmployeesByPosition("Position1")).thenReturn(employees);

        mockMvc.perform(get("/employees/get").param("position", "Position1"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(employees)));

        verify(emplService, times(1)).getEmployeesByPosition("Position1");
    }

    @Test
    public void addNewEmployeeTest() throws Exception {
        
        Employee e = new Employee(
            "John",
            "Doe",
            new Date(),
            "Manager");
        when(emplService.addNewEmployee(e)).thenReturn(e);

        mockMvc.perform(post("/employees/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(e)))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(e)));              

        verify(emplService, times(1)).addNewEmployee(e);
        System.out.println(e);
    }

    @Test
    public void updateEmployeePositionTest() throws Exception {
        Employee e = new Employee();
        e.setPosition("New Position");
        when(emplService.updateEmployeePosition("1", "New Position")).thenReturn("Updated");

        mockMvc.perform(put("/employees/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(e)))
                .andExpect(status().isOk())
                .andExpect(content().string("Updated"));

        verify(emplService, times(1)).updateEmployeePosition("1", "New Position");
    }

    @Test
    public void deleteEmployeeTest() throws Exception {
        when(emplService.deleteEmployee("1")).thenReturn("Deleted");

        mockMvc.perform(delete("/employees/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content("1"))
                .andExpect(status().isOk())
                .andExpect(content().string("Deleted"));

        verify(emplService, times(1)).deleteEmployee("1");
    }
}