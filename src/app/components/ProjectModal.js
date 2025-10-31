import Image from "next/image";
import { CircleX, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from "react";


export default function ProjectModal({ project, onClose, onNext, onPrev}){
    const modalRef = useRef();
        const handleOutsideClick = (e) => {
            if(modalRef.current === e.target){
                onClose();
            }
            
        }
    return(
        
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={handleOutsideClick} ref={modalRef}>
            <div ref={modalRef} className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-8 h-10/12" onClick={ (e) => e.stopPropagation}>
        <div className="flex justify-between mb-3">
            <h2 className="text-xl font-bold text-primary-50">{project.title}</h2><button onClick={onClose}className="text-primary-50  hover:text-primary-400 rounded-full p-2 transition-colors"><CircleX /></button>
        </div>
        <div className="flex flex-col  gap-6">
            <div className="relative h-64 w-full flex items-center justify-center">
            <Image 
                src={project.image} 
                alt={project.title} 
                layout="fill" 
                objectFit="contain"/></div> 
            <div className="space-y-4 w-full">
                <p className="text-gray-300">{project.description}</p>
                <p className="text-gray-300">{project.fullDescription}</p>
            <div>
                <h3 className="font-semibold mb-2 text-primary">Tech Stack:</h3>
                <ul className="list-disc list-inside">
                    {project.techStack.map((tech,index) => (
                        <li key={index} className="text-gray-300">{tech}</li>
                    ))}
                </ul>
                <div className="mt-4 flex gap-4">
                    {project.githubLink && (
                        <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-primary-50 rounded hover:bg-primary-600 transition"
                        >
                        View on GitHub
                        </a>
                    )}
                    {project.demoLink && (
                        <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-primary-50 rounded hover:bg-primary-600 transition"
                        >
                        Live Site
                        </a>
                    )}
                    </div>

            </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
            <button 
                onClick={onPrev}
                className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-full"
            >
                <ChevronLeft size={24}/></button>
            <button 
                onClick={onNext}
                className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[120%]"
            >
                <ChevronRight size={24}/></button>

            </div>
            
        </div>
        </div>
        </div>
    );
}