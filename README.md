# 🚀 AI Pipeline Builder

A visual workflow builder developed as part of the **VectorShift Frontend Technical Assessment**. The application enables users to create AI pipelines using draggable nodes, connect them with edges, and validate the pipeline through a FastAPI backend.

---

## 📌 Features

- 🎨 Interactive drag-and-drop interface
- 🔗 Connect nodes to create custom workflows
- 🧩 Multiple pipeline node types
- 📤 Submit pipeline to the backend
- ✅ Pipeline validation
- 📊 Displays:
  - Number of Nodes
  - Number of Edges
  - Whether the pipeline forms a Directed Acyclic Graph (DAG)
- 💻 Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React
- React Flow
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend
- FastAPI
- Python
- Uvicorn

---

## 📁 Project Structure

```text
ai-pipeline-builder/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/pamarthicharithsai20-create/ai-pipeline-builder.git
```

Navigate to the project folder:

```bash
cd ai-pipeline-builder
```

---

## ▶️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

## ▶️ Backend Setup

Open another terminal:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

**Windows**

```bash
venv\Scripts\activate
```

**Linux / macOS**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
uvicorn main:app --reload
```

The backend will be available at:

```
http://127.0.0.1:8000
```

---

## 📖 How It Works

1. Launch both the frontend and backend servers.
2. Drag and drop nodes onto the canvas.
3. Connect nodes to build a workflow.
4. Click **Submit**.
5. The frontend sends the pipeline to the FastAPI backend.
6. The backend validates the pipeline and returns:
   - Total Nodes
   - Total Edges
   - DAG Status
7. The results are displayed in the application.

---


## 🎯 Learning Outcomes

This project demonstrates:

- React component architecture
- Interactive graph-based UI development
- React Flow integration
- State management
- REST API integration
- FastAPI backend development
- Graph validation concepts
- Frontend and backend communication

---

## 🚀 Future Improvements

- Save and load pipelines
- Export pipeline as JSON
- Import existing workflows
- Custom node creation
- Undo / Redo functionality
- Dark mode
- Pipeline templates
- Real-time validation
- User authentication

---

## 🙏 Acknowledgements

This project was developed as part of the **VectorShift Frontend Technical Assessment** to demonstrate frontend engineering skills using React and FastAPI.

---

## 👨‍💻 Author

**Pamarthi Charith Sai**

- GitHub: https://github.com/pamarthicharithsai20-create
- LinkedIn: https://www.linkedin.com/in/pamarthi-charith-sai-37a507414/

---
