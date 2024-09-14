# Data Structures & Algorithms (DSA) Repository

Welcome to the **Data Structures & Algorithms (DSA) Repository**! This repository is used by mentees to submit their DSA solutions and for mentors to review code, provide feedback, and suggest improvements.

## Repository Structure

The repository is organized as follows:

```
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
├── mentees/
│   ├── mentee1/
│   │   ├── README.md
│   │   ├── algorithms/
│   │   │   ├── sorting/
│   │   │   │   ├── bubble_sort.py
│   │   │   │   ├── quick_sort.py
│   │   │   └── searching/
│   │   │       ├── binary_search.py
│   │   │       └── linear_search.py
│   │   ├── data_structures/
│   │   │   ├── linked_list.py
│   │   │   ├── stack.py
│   │   │   └── queue.py
│   │   ├── tests/
│   │   │   ├── test_algorithms.py
│   │   │   └── test_data_structures.py
│   ├── mentee2/
│   │   ├── README.md
│   │   ├── algorithms/
│   │   └── data_structures/
│   │   └── tests/
│   └── menteeN/
│       ├── README.md
│       ├── algorithms/
│       └── data_structures/
├── learnings/
│   ├── algorithms/
│   └── data_structures/
```


### Folder Breakdown:
- **`mentees/`**: Each mentee will have their own folder where they can submit their solutions to the various DSA problems. Mentees will create their folder here under their username.
- **`mother_repo_code/`**: This folder contains reference implementations or example solutions that the mentors may provide. Mentees can use this as a guide or reference, but are encouraged to write their own code.
- **`tests/`**: Mentees and mentors can use this folder for automated tests to validate the correctness of the code.

## Mentee Instructions

### 1. Fork the Repository
Each mentee must first fork this repository to their own GitHub account.

### 2. Create Your Folder
In the `mentees/` directory, create a folder with your GitHub username (e.g., `mentees/your_username/`).

Inside your folder, create the following structure:
- **`algorithms/`**: For storing your algorithm implementations (e.g., sorting, searching).
- **`data_structures/`**: For storing your data structure implementations (e.g., linked lists, stacks, queues).
- **`tests/`**: For storing any tests you write to verify your implementations.

Each algorithm and data structure should have its own file, with a corresponding test file if needed.

### 3. Implement the Code
Write your solutions to the DSA problems in the appropriate folders and make sure your code is well-commented and clean.

Example for sorting algorithms:
```
mentees/your_username/algorithms/sorting/bubble_sort.py 
mentees/your_username/algorithms/sorting/quick_sort.py
```


### 4. Submit a Pull Request (PR)
Once your code is ready, commit and push your changes to your forked repository, and submit a pull request to the central repository. Your code will be reviewed by the mentors, and feedback will be provided.

Make sure your PR contains:
- **Proper commit messages**.
- **A description** of what your code is solving.
- Any **test cases** to verify correctness.

## Contribution Guidelines

1. **Code Quality**: Ensure that your code is clean, well-commented, and properly organized.
2. **Folder Naming**: Use meaningful names for folders and files. Separate algorithms and data structures logically.
3. **Testing**: Always include tests for your implementations to verify correctness.
4. **PR Etiquette**: When submitting a pull request, provide detailed explanations of your approach. Mentors will review your code and provide feedback or merge it once approved.

## Branch Protection

The `main` branch is protected, and all changes must go through the pull request process. Direct commits to the `main` branch are not allowed.

