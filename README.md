# Todo Web App

A modern, responsive todo application built with Node.js, Express, and vanilla JavaScript.

## Features

- ✅ Add new todos
- ✏️ Edit existing todos (double-click or use edit button)
- ✅ Mark todos as complete/incomplete
- 🗑️ Delete individual todos
- 🧹 Clear all completed todos
- 🔍 Filter todos (All, Active, Completed)
- 📊 View todo statistics
- 📱 Responsive design for mobile and desktop
- 🎨 Modern, clean UI with smooth animations

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Development**: Nodemon for auto-restart

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

The application provides a RESTful API:

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Project Structure

```
todo/
├── server.js          # Express server and API routes
├── package.json       # Project dependencies and scripts
├── README.md         # Project documentation
└── public/           # Static frontend files
    ├── index.html    # Main HTML file
    ├── styles.css    # CSS styling
    └── script.js     # Frontend JavaScript
```

## Usage

1. **Adding Todos**: Type in the input field and press Enter or click the + button
2. **Completing Todos**: Click the checkbox next to any todo
3. **Editing Todos**: Double-click on the todo text or use the Edit button
4. **Deleting Todos**: Click the Delete button next to any todo
5. **Filtering**: Use the All/Active/Completed buttons to filter your view
6. **Clearing Completed**: Use the "Clear Completed" button to remove all completed todos

## Data Storage

Currently, the application uses in-memory storage, which means todos will be lost when the server restarts. For production use, you would want to integrate with a database like:

- MongoDB with Mongoose
- PostgreSQL with Sequelize
- SQLite for simple local storage

## Future Enhancements

- User authentication and personal todo lists
- Database integration for persistent storage
- Due dates and priorities
- Categories and tags
- Search functionality
- Export/import features
- Dark mode toggle

## License

This project is open source and available under the MIT License.
