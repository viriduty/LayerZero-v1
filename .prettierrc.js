module.exports = {
    overrides: [
        {
            // Solidity files
            files: "*.sol",
            options: {
                bracketSpacing: false,   // No spaces between brackets
                printWidth: 300,         // Maximum line length
                tabWidth: 4,             // 4 spaces for indentation
                useTabs: false,          // Use spaces instead of tabs
                singleQuote: false,      // Use double quotes
                explicitTypes: "never",  // Do not explicitly type function parameters
            },
        },
        {
            // TypeScript files
            files: "*.ts",
            options: {
                printWidth: 145,         // Maximum line length
                semi: false,             // No semicolons at the end of statements
                tabWidth: 4,             // 4 spaces for indentation
                useTabs: false,          // Use spaces instead of tabs
                trailingComma: "es5",    // Trailing commas where valid in ES5 (e.g., in objects/arrays)
            },
        },
        {
            // JavaScript files
            files: "*.js",
            options: {
                printWidth: 145,         // Maximum line length
                semi: false,             // No semicolons at the end of statements
                tabWidth: 4,             // 4 spaces for indentation
                useTabs: false,          // Use spaces instead of tabs
                trailingComma: "es5",    // Trailing commas where valid in ES5
            },
        },
    ],
};
