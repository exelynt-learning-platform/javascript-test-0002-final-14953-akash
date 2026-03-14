function printPattern(n) {

    for (let i = 0; i < n; i++) {

        // Print leading spaces
        let spaces = " ".repeat(i);

        let row = [];

        // Calculate Pascal triangle values
        let val = 1;

        for (let j = 0; j < n - i; j++) {
            row.push(val);
            val = val * (n - i - 1 - j) / (j + 1);
        }

        console.log(spaces + row.join(" "));
    }
}

printPattern(5);