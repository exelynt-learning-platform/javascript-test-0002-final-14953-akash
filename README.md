# javascript-test-0002-final-14953-akash
Final Project Assignment - This repository contains the complete final project code and documentation.

## Problem Statement

This assessment evaluates the candidate’s ability to implement **decreasing pattern structures and logical loop control using JavaScript**. The solution must ensure correct spacing, alignment.

The objective is to generate the pattern using **logical calculations and loops**.

---

# Approach

1. **Define the number of rows**
   - Use a variable `n` representing the number of rows.

2. **Use nested loops**
   - The outer loop controls the rows.
   - The inner loop generates numbers for each row.

3. **Generate numbers dynamically**
   - The numbers follow **Pascal's Triangle logic**.
   - Each row contains binomial coefficients.

4. **Use the binomial formula**
   - Next value =  
     `value = value * (rowLength - 1 - j) / (j + 1)`

5. **Print leading spaces**
   - For each row print spaces equal to the row index.

6. **Print numbers**
   - Join the computed values and print the row.

---