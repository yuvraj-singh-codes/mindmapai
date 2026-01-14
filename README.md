# MindMapAI ![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-yellowgreen)

## Project Description
MindMapAI is an innovative web application that allows users to create interactive mind maps enhanced by AI. Users can brainstorm ideas collaboratively in real-time, with the AI providing suggestions and context from integrated knowledge bases. The app supports exporting mind maps in multiple formats and offers customizable templates for various use cases.

## Features
- 🧠 Interactive mind mapping with AI-generated suggestions
- 🤝 Real-time collaboration for multiple users
- 📚 Integration with external knowledge bases for enhanced context
- 📥 Export mind maps to various formats (PDF, image, etc.)
- 🎨 Customizable templates for different brainstorming sessions

## Tech Stack
### Frontend
- **Next.js** 🌐

### Backend
- **FastAPI** 🚀
- **LangChain** 🔗
- **OpenAI** 🤖

### Database
- **PostgreSQL** 🗄️

## Installation
To set up the MindMapAI project locally, follow these steps:

- Clone the repository
bash
git clone https://github.com/yuvraj-singh-codes/mindmapai
- Navigate to the project directory
bash
cd mindmapai
- Install the backend dependencies
bash
cd backend
pip install -r requirements.txt
- Install the frontend dependencies
bash
cd ../frontend
npm install
- Set up the PostgreSQL database and configure the connection settings in the `.env` file

## Usage
To start the application, follow these steps:

- Start the backend server
bash
cd backend
uvicorn main:app --reload
- Start the frontend development server
bash
cd ../frontend
npm run dev
- Open your browser and navigate to `http://localhost:3000` to access MindMapAI

## API Documentation
For detailed API documentation, please refer to the [API Docs](https://github.com/yuvraj-singh-codes/mindmapai/wiki/API-Documentation).

## Testing
To run the tests for the backend, execute the following command:

bash
cd backend
pytest
## Deployment
For deploying MindMapAI, follow these steps:

- Build the frontend for production
bash
cd frontend
npm run build
- Deploy the backend using your preferred cloud service (e.g., AWS, Heroku)

## Contributing
We welcome contributions! Please follow these guidelines:

- Fork the repository
- Create a new branch for your feature or bug fix
- Make your changes and commit them
- Push your branch and create a pull request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Special thanks to the contributors and the open-source community for their support and resources.