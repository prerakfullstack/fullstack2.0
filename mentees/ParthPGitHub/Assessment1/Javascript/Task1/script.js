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
    const reassignmentDemo = () => {
        // Reassigning let variable
        name = 'JS';
        console.log(`Reassigned Name: ${name}`);

        // Attempting to reassign const variable
        try {
            birthYear = 1995; // This will throw an error
        } catch (error) {
            console.error(`Error reassigning birthYear: ${error.message}`);
        }

        // Reassigning var variable
        isStudent = false;
        console.log(`Reassigned Is Student: ${isStudent}`);
        
        // Modifying the array (const can be modified if it's an object)
        languages.push('Node JS');
        console.log(`Updated Languages: ${languages.join(', ')}`);
    };

    return {
        displayVariables,
        reassignmentDemo
    };
})();

// Execute the module functions
demo.displayVariables();
demo.reassignmentDemo();