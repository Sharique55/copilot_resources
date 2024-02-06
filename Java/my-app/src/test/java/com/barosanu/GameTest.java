package com.barosanu;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class GameTest {

    private Exercise exercise;
    
    @BeforeEach
    public void setUp() {
        exercise = new Exercise();
    }

    @Test
    public void testRockDrawsRock() {
        String result = this.exercise.play("rock", "rock");
        assertEquals(result, "draw");
    }

    @Test
    public void testPaperDrawsPaper() {
        String result = this.exercise.play("paper", "paper");
        assertEquals(result, "draw");
    }

    @Test
    public void testScissorsDrawsScissors() {
        String result = this.exercise.play("scissors", "scissors");
        assertEquals(result, "draw");
    }

    @Test
    public void testRockBeatsScissors() {
        String result = this.exercise.play("rock", "scissors");
        assertEquals(result, "rock");
    }

    @Test
    public void testScissorsBeatsPaper() {
        String result = this.exercise.play("scissors", "paper");
        assertEquals(result, "scissors");
    }

    @Test
    public void testPaperBeatsRock() {
        String result = this.exercise.play("paper", "rock");
        assertEquals(result, "paper");
    }



    
}
