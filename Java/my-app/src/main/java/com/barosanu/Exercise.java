package com.barosanu;

import java.util.Arrays;

public class Exercise {

    private static final String rock = "rock";
    private static final String paper = "paper";
    private static final String scissors = "scissors";
    private static final String[] validArgs = {rock, paper, scissors};
    private static final String draw = "draw";

    public String play(String arg1, String arg2){
        if(!Arrays.asList(validArgs).contains(arg1) || !Arrays.asList(validArgs).contains(arg2)){
            return null;
        }

        if(arg1.equals(arg2)){
            return draw;
        }

        if(arg1.equals(rock)){
            if (arg2.equals(paper)){
                return paper;
            }
            if (arg2.equals(scissors)){
                return rock;
            }
        }

        if(arg1.equals(paper)){
            if (arg2.equals(rock)){
                return paper;
            }
            if (arg2.equals(scissors)){
                return scissors;
            }
        }

        if(arg1.equals(scissors)){
            if (arg2.equals(rock)){
                return rock;
            }
            if (arg2.equals(paper)){
                return scissors;
            }
        }

        return null;
    }
}