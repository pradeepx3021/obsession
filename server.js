const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// In-memory storage for todos (in production, you'd use a database)
let todos = [
    {
        id: 1,
        text: 'Learn Node.js',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        text: 'Build a todo app',
        completed: false,
        createdAt: new Date().toISOString()
    }
];

let nextId = 3;

// Routes

// Get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Create a new todo
app.post('/api/todos', (req, res) => {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
        return res.status(400).json({ error: 'Todo text is required' });
    }
    
    const newTodo = {
        id: nextId++,
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { text, completed } = req.body;
    
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    
    if (text !== undefined) {
        todos[todoIndex].text = text.trim();
    }
    
    if (completed !== undefined) {
        todos[todoIndex].completed = completed;
    }
    
    todos[todoIndex].updatedAt = new Date().toISOString();
    
    res.json(todos[todoIndex]);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    
    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.json(deletedTodo);
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Todo app server running on http://localhost:${PORT}`);
});
