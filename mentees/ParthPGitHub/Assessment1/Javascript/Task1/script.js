// Module to demonstrate variable declarations and data types
const demo = (() => {
    // Declare variables
    let name = 'Test JS'; // Using let for mutable variable
    const birthYear = 1995; // Using const for a constant value
    var isStudent = true; // Using var for function-scoped variable
    const languages = ['JavaScript', 'TypeScript', 'React JS']; // Array of programming languages

    // Function to display variable values
    const displayVariables = () => {
        console.log(`Name: ${name}`);
        console.log(`Birth Year: ${birthYear}`);
        console.log(`Is Student: ${isStudent}`);
        console.log(`Languages Known: ${languages.join(', ')}`);
    };

    // Function to attempt reassigning variables
    const reassignVariables = () => {
        // Attempting to reassign
        try {
            // Uncommenting this will throw an error
            // birthYear = 1992; // Cannot reassign const variable

            // Reassigning let variable (this works)
            name = "New Name"; 
            console.log(`Updated name: ${name}`);

            // Reassigning var variable
            isStudent = false; // This works as var can be reassigned
            console.log(`Updated isStudent: ${isStudent}`);

            // Reassigning programmingLanguages array
            languages[0] = "Node JS"; // This works as we can mutate the array
            console.log(`Updated languages: ${languages.join(', ')}`);
        } catch (error) {
            console.error(`Error occurred: ${error.message}`);
        }
    };

    // Display initial variable values
    displayVariables();

    return {
        name,
        birthYear,
        isStudent,
        languages,
        reassignVariables,
    };
})();

// Call the function to demonstrate reassignment
demo.reassignVariables();