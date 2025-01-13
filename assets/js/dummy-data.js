//I need to create dummy data in the following format and save it to localStorage with 'scores' label
// Function to create dummy data
function createDummyScores() {
    const dummyData = [
        { username: "Alice", score: 150, category: "Marvel" },
        { username: "Bob", score: 140, category: "Marvel" },
        { username: "Charlie", score: 130, category: "Marvel" },
        { username: "Dave", score: 120, category: "History" },
        { username: "Eve", score: 110, category: "History" },
        { username: "Frank", score: 100, category: "Production" },
        { username: "Grace", score: 90, category: "Production" },
        { username: "Hank", score: 80, category: "Production" },
        { username: "Ivy", score: 70, category: "Marvel" },
        { username: "Jack", score: 60, category: "History" },
    ];

    // Save to localStorage
    localStorage.setItem("scores", JSON.stringify(dummyData));
}

// Call the function to create and save the dummy data
createDummyScores();

// Log the data from localStorage to verify
console.log(JSON.parse(localStorage.getItem("scores")));
