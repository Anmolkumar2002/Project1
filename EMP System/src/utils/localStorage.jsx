
// localStorage.clear()
const employees = [
    {
        "id": 1,
        "name": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskNumber": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare monthly report",
                "description": "Compile and finalize the monthly financial report.",
                "date": "2024-01-05",
                "category": "Finance"
            },
            {
                "taskNumber": 2,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Team meeting",
                "description": "Attend the weekly team sync-up meeting.",
                "date": "2023-12-15",
                "category": "Management"
            },
            {
                "taskNumber": 3,
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Review project plan",
                "description": "Analyze and provide feedback on the new project roadmap.",
                "date": "2024-01-02",
                "category": "Planning"
            }
        ]
    },
    {
        "id": 2,
        "name": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskNumber": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Code review",
                "description": "Review code for the authentication module.",
                "date": "2023-12-29",
                "category": "Development"
            },
            {
                "taskNumber": 2,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Fix UI bugs",
                "description": "Resolve reported bugs in the user interface.",
                "date": "2023-12-18",
                "category": "Development"
            },
            {
                "taskNumber": 3,
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Optimize API performance",
                "description": "Improve response times for critical API endpoints.",
                "date": "2023-12-20",
                "category": "Performance"
            }
        ]
    },
    {
        "id": 3,
        "name": "Kavya",
        "email": "employee3@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskNumber": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Update database schema",
                "description": "Add new columns to the orders table for tracking statuses.",
                "date": "2023-12-31",
                "category": "Database"
            },
            {
                "taskNumber": 2,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Write API documentation",
                "description": "Create comprehensive documentation for all public APIs.",
                "date": "2023-12-14",
                "category": "Documentation"
            },
            {
                "taskNumber": 3,
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Set up CI/CD pipeline",
                "description": "Automate deployment process using Jenkins.",
                "date": "2024-01-03",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 4,
        "name": "Ananya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskNumber": 1,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Research new frameworks",
                "description": "Investigate the latest web development frameworks.",
                "date": "2023-12-20",
                "category": "Research"
            },
            {
                "taskNumber": 2,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Plan team outing",
                "description": "Organize the logistics for the annual team outing.",
                "date": "2024-01-07",
                "category": "Management"
            },
            {
                "taskNumber": 3,
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Prepare presentation",
                "description": "Create slides for the upcoming client meeting.",
                "date": "2023-12-22",
                "category": "Presentation"
            }
        ]
    },
    {
        "id": 5,
        "name": "Rohan",
        "email": "e5@e.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "taskNumber": 1,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Optimize query performance",
                "description": "Improve the efficiency of slow database queries.",
                "date": "2024-01-10",
                "category": "Database"
            },
            {
                "taskNumber": 2,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Deploy new feature",
                "description": "Roll out the payment gateway integration feature.",
                "date": "2024-01-08",
                "category": "Development"
            },
            {
                "taskNumber": 3,
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Create test cases",
                "description": "Write unit tests for the order processing module.",
                "date": "2023-12-22",
                "category": "Testing"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "name": "Vikram",
        "email": "admin@example.com",
        "password": "123",
        "taskCount": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        }
    }
];



export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
    
}