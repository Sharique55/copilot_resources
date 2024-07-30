import matplotlib.pyplot as plt
import numpy as np

def initial():
    # prompt: generate some data and plot it

    # Generate data
    x = np.linspace(0, 10, 100)
    y = np.sin(x)

    # Plot data
    plt.plot(x, y)
    plt.xlabel('x')
    plt.ylabel('y')
    plt.title('Data Visualization')
    plt.show()

def plot_cosinus_and_sinus():
    # prompt: plot the cosinus and sinus functions

    # Generate data
    x = np.linspace(0, 10, 100)
    y1 = np.sin(x)
    y2 = np.cos(x)

    # Plot data
    plt.plot(x, y1, label='sin(x)')
    plt.plot(x, y2, label='cos(x)', linestyle='--')# prompt: make the line dashed
    plt.xlabel('x')
    plt.ylabel('y')
    plt.title('Data Visualization')
    plt.legend()
    plt.show()

    # prompt: plot the world population evolution by century
def plot_world_population():

    # World population data by century
    years = [1700, 1750, 1800, 1850, 1900, 1950, 2000, 2050, 2100]
    population = [0.6, 0.7, 1.0, 1.3, 1.6, 2.5, 6.1, 9.7, 11.2]  # in billions

     # Plot data
    plt.plot(years, population, marker='o')
    plt.xlabel('Year')
    plt.ylabel('Population (billions)')
    plt.title('World Population Evolution by Century')
    plt.show()

def plot_programming_languages():
        # Programming languages data
    languages = ['Python', 'Java', 'JavaScript', 'C++', 'C#']
    adoption = [30, 25, 20, 15, 10]  # in percentage

        # Plot data
    plt.pie(adoption, labels=languages, autopct='%1.1f%%')
    plt.title('Adoption of Programming Languages')
    plt.show()

plot_programming_languages()
