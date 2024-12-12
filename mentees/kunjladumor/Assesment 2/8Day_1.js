{
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  function validateUserInput(input) {
    if (!input || input.trim() === "") {
      throw new ValidationError("Input cannot be empty.");
    }
    if (input.length < 3) {
      throw new ValidationError("Input must be at least 3 characters long.");
    }
    return `Valid input: ${input}`;
  }

  try {
    console.log(validateUserInput(""));
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`Validation Error: ${error.message}`);
    } else {
      console.error(`Unknown Error: ${error.message}`);
    }
  }
}
