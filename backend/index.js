// Import the Express module
import express from "express";

// Create an Express application
const app = express();

// Define a route handler for the root URL
app.get("/", function (req, res) {
  res.send("server is ready");
});

app.get("/api/jokes", function (req, res) {
  const jokes = [
    { id: 1, title: "Why did the scarecrow win an award?" },
    { id: 2, title: "How do you organize a space party?" },
    { id: 3, title: "Why couldn't the bicycle stand up by itself?" },
    {
      id: 4,
      title: "What do you get when you cross a snowman with a vampire?",
    },
    { id: 5, title: "Why don't scientists trust atoms?" },
    { id: 6, title: "What do you call a fake noodle?" },
    { id: 7, title: "Why did the tomato turn red?" },
  ];
  res.send(jokes);
});
// Define the port number for your server
const port = process.env.PORT || 3000;

// Start the server, listening on the specified port
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
