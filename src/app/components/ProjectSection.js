"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
const ProjectSection = () =>{
    const projects = [
    {
      id:1,
      title: "RAG PDF QA CHATBOT",
      tags: ["Langchain", "Ollama", "RAG"],
      description:"A conversational AI chatbot that lets users upload multiple PDFs and ask questions about their content. Built with Streamlit, LangChain, FAISS, and Groq API for fast, accurate, and interactive document Q&A.",
      fullDescription:
        "The PDF Chatbot is a Streamlit-based app that lets users upload and interact with multiple PDF documents through a conversational interface. Powered by LangChain, the Groq API, and a local FAISS vector database, it delivers fast, context-aware answers. Its clean UI and custom avatars make it easy to use, ideal for researchers, students, and professionals handling large documents. The chatbot efficiently extracts and retrieves relevant information across multiple files.",
        image: "/qarag.png",
        techStack: [
            "Streamlit",
            "LangChain",
            "Groq API",
            "FAISS",
            "PyPDF2",
            "Custom CSS"
        ],
        githubLink:"https://github.com/Sridhar016/PDF-Chatbot.git",
        demoLink:"https://aipdf-chatbot.streamlit.app/",
    },
    {
        id: 2,
        title: "AI FITNESS COACH",
        tags: ["Python", "Multi-Agent Systems", "Ollama", "Streamlit"],
        description: "An intelligent multi-agent system that generates personalized workout and nutrition plans, adapts to feedback, and tracks fitness progress using local LLM integration.",
        fullDescription: 
            "The AI Fitness Coach is a Python and Streamlit application that creates personalized 7-day workout and nutrition plans tailored to individual users. It adapts dynamically based on user feedback, resolves conflicts in constraints, and tracks progress with interactive Plotly visualizations. Using a local LLM (Llama3.2 via Ollama), it provides intelligent, data-driven recommendations. This makes it suitable for anyone seeking customized health plans or developers exploring advanced AI systems.",
        image: "/fitness.png",
        techStack: [
            "Python",
            "Streamlit",
            "Ollama (Llama3.2)",
            "Multi-Agent System",
            "JSON Storage",
            "Plotly",
            "AI-Driven Feedback"
        ],
        githubLink:"https://github.com/Sridhar016/AI-Multi-Agent-Fitness-Tool.git",
    },
    {
        id: 3,
        title: "FLAPPY BIRD GAME",
        tags: ["Python", "Pygame", "Game Development"],
        description: "A classic Flappy Bird game built with Python and Pygame. Features smooth physics, score tracking, and a restart button for endless gameplay.",
        fullDescription:
            "The Flappy Bird Game is a nostalgic recreation of the popular mobile game, built using Python and Pygame. Players control a bird and navigate through randomly generated pipes by tapping or clicking to keep it airborne. The game includes essential features such as collision detection, realistic gravity, score tracking, and a high score system. With its simple controls and smooth gameplay, it's perfect for casual gaming, learning core game development concepts like event handling and game loops, or showcasing Python and Pygame skills in a portfolio.",
        image: "/flappybird.png",
        techStack: ["Python", "Pygame", "Custom Sprites", "Game Loops", "Collision Detection", "Keyboard/Mouse Input"],
        githubLink:"https://github.com/Sridhar016/FlappyBird-CloneGame.git"
    },
    {

        id: 4,
        title: "WEATHER APP",
        tags: ["Next.js", "JavaScript", "HTML/CSS", "API Integration"],
        description: "A real-time weather app built with Next.js that displays current weather and 24-hour forecasts using the OpenWeatherMap API.",
        fullDescription:
            "The Weather App is a responsive web app built with Next.js that provides real-time weather updates and 24-hour forecasts for cities worldwide. It uses the OpenWeatherMap API to deliver accurate temperature and condition data. The app features a clean, mobile-friendly UI with dynamic updates and error handling. Users can search any city easily, making it ideal for daily use, learning API integration, or showcasing frontend skills.",
        image: "/weather.png",
        techStack:["HTML","CSS","JavaScript","OpenWeatherMap API"],
        githubLink:"https://github.com/Sridhar016/Weather-App.git",
        demoLink: "https://sridhar016.github.io/Weather-App/",


},
    ];
const [selectedProject, setSelectedProject] = useState(null);
const handleProjectClick = (id) => {
    setSelectedProject(id);
}
const handleCloseModal = () =>{
    setSelectedProject(null);
}
const handleNextProject = () =>{
    const currentIndex = projects.findIndex((project) => project.id===selectedProject);
    if (currentIndex===-1){
        return null;
    }
    const nextIndex =(currentIndex + 1)%projects.length;
    setSelectedProject(projects[nextIndex].id);
}
const handlePrevProject = () =>{
    const currentIndex = projects.findIndex((project) => project.id===selectedProject);
    if (currentIndex===-1){
        return null;
    }
    const prevIndex =(currentIndex - 1 + projects.length)%projects.length;
    setSelectedProject(projects[prevIndex].id);
}
    return(
        <section 
        id="projects"
        className="px-4 py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            {projects.map((project,index) =>(
                <button
                 onClick={() => handleProjectClick(project.id)}
                 key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left">
                    <div className="flex flex-col h-full ">
                        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-1 mt-auto">
                            {
                                project.tags.map((tag,index) =>(
                                    <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30">
                                    {tag}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </button>
            ))}
        </div>
        {
            selectedProject && (
                <ProjectModal
                  project={projects.find((project) => project.id === selectedProject)}
                  onClose={handleCloseModal}
                  onNext={handleNextProject}
                  onPrev={handlePrevProject}
                />  
            )
        }
        </section>
    );
}
export default ProjectSection;