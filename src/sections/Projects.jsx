import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Terminal, Gamepad2, Clapperboard, Code2, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

const MissionHeader = ({ title, status = "COMPLETED" }) => (
  <div className="flex justify-between items-center bg-gray-900/80 p-3 border-b border-gray-700">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <h3 className="font-retro text-xs md:text-sm text-white uppercase tracking-wider">{title}</h3>
    </div>
    <span className="text-[10px] font-mono text-green-500 border border-green-900 bg-green-900/20 px-2 py-0.5 rounded">
      {status}
    </span>
  </div>
);

const ActionButtons = ({ githubLink, deployLink }) => (
  <div className="flex justify-end gap-3 mt-3 px-1">
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-body text-gray-400 hover:text-white transition-colors">
      <Code2 size={14} /> Code
    </a>
    <a href={deployLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-body text-arcade-primary hover:brightness-125 transition-colors">
      <Globe size={14} /> Live Demo
    </a>
  </div>
);

const SwipeCard = ({ project }) => {
  const controls = useAnimation();
  const [swiped, setSwiped] = useState(false);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      controls.start({ x: 500, opacity: 0, transition: { duration: 0.5 } });
      setSwiped(true);
    } else {
      controls.start({ x: 0, opacity: 1, transition: { type: "spring" } });
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 flex flex-col h-full">
      <MissionHeader title={project.title} />
      
      <div className="relative h-64 w-full overflow-hidden group">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-0 text-center p-6">
          <p className="font-body text-sm text-gray-300 mb-4">{project.longDesc}</p>
          <a href="https://github.com/wendelvx/CineMatch" target="_blank" rel="noopener noreferrer" className="font-retro text-[10px] md:text-xs bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors shadow-neon-magenta">
            VER DETALHES DA MISSÃO
          </a>
        </div>
        
        {!swiped && (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            whileHover={{ scale: 1.02 }}
            className="absolute inset-2 bg-arcade-dark border-2 border-red-500 rounded-lg flex flex-col items-center justify-center cursor-grab active:cursor-grabbing z-10 shadow-lg"
          >
            <Clapperboard size={48} className="text-red-500 mb-4" />
            <h3 className="font-retro text-red-400 text-lg mb-2">MATCH?</h3>
            <p className="font-body text-xs text-gray-400 text-center px-4 md:px-6 leading-relaxed">
              <span className="text-white font-bold">Objetivo:</span> Criar app estilo Tinder para escolha de filmes em grupo.
              <br/><br/>
              <span className="animate-pulse text-red-400 block mt-2">→ Arraste para Direita →</span>
            </p>
          </motion.div>
        )}
      </div>
      <div className="mt-auto pb-4 px-4">
          <ActionButtons githubLink="https://github.com/wendelvx/CineMatch" deployLink="#" />
      </div>
    </div>
  );
};

const QuizCard = ({ project }) => {
  const [solved, setSolved] = useState(false);

  const handleCorrectAnswer = () => {
    setSolved(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#4ade80', '#5c4033'] });
  };

  return (
    <div className="bg-indigo-950 border-2 border-indigo-500/50 rounded-xl overflow-hidden shadow-xl flex flex-col h-full">
      <MissionHeader title={project.title} />

      <div className="h-64 p-4 flex flex-col relative">
        {!solved ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <Gamepad2 className="text-indigo-300" />
              <span className="font-retro text-[10px] text-red-400 bg-red-900/20 px-2 py-1 rounded border border-red-900">RANK: CADETE</span>
            </div>
            
            <h3 className="font-body text-white text-center mb-4 md:mb-6 text-xs md:text-sm px-2 uppercase tracking-wide font-bold">
              <span className="text-red-500 block text-[10px] mb-2">ATENÇÃO SOLDADO!</span>
              Qual é o framework PHP que mantém a disciplina deste Backend?
            </h3>

            <div className="grid grid-cols-2 gap-2 md:gap-3 mt-auto">
              <button className="bg-indigo-900/50 border border-indigo-700 p-2 rounded text-[10px] md:text-xs text-gray-400 hover:bg-red-900/50 active:scale-95 transition-transform">Wordpress</button>
              
              <button onClick={handleCorrectAnswer} className="bg-green-600/20 border border-green-500 p-2 rounded text-[10px] md:text-xs text-green-400 font-bold hover:bg-green-600 hover:text-white transition-all shadow-neon-green uppercase active:scale-95">
                Laravel
              </button>
              
              <button className="bg-indigo-900/50 border border-indigo-700 p-2 rounded text-[10px] md:text-xs text-gray-400 hover:bg-red-900/50 active:scale-95 transition-transform">Django</button>
              <button className="bg-indigo-900/50 border border-indigo-700 p-2 rounded text-[10px] md:text-xs text-gray-400 hover:bg-red-900/50 active:scale-95 transition-transform">Spring</button>
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center">
            <h3 className="font-retro text-lg md:text-xl text-green-400 mb-3">MISSÃO CUMPRIDA!</h3>
            <p className="font-body text-xs md:text-sm text-gray-300 mb-4 px-4">{project.longDesc}</p>
          </motion.div>
        )}
      </div>
      <div className="mt-auto pb-4 px-4">
        <ActionButtons githubLink="https://github.com/wendelvx/kahoot" deployLink="#" />
      </div>
    </div>
  );
};

const TerminalCard = ({ project }) => {
  const [text, setText] = useState('');
  
  const fullText = `> Initializing Concord Protocol...\n> Frontend: React (Vite)\n> Connection: Socket.IO Stream\n> Status: Online.\n> Access granted.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-gray-700 rounded-xl overflow-hidden shadow-xl flex flex-col h-full">
      <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-2 text-[10px] font-mono text-gray-500 truncate max-w-[150px]">root@wendel:~/projects/{project.title.toLowerCase()}</span>
      </div>

      <div className="h-64 p-4 font-mono text-xs md:text-sm text-green-500 flex flex-col">
        <div className="whitespace-pre-line leading-relaxed mb-4 opacity-90">
          {text}<span className="animate-pulse">_</span>
        </div>
        
        <div className="mt-auto border-t border-gray-800 pt-3 text-gray-400 text-[10px] md:text-xs">
          <p className="mb-1 text-white">Project Description:</p>
          <p>{project.longDesc}</p>
        </div>
      </div>
      <div className="mt-auto pb-4 px-4">
        <ActionButtons githubLink="https://github.com/wendelvx/Concord" deployLink="#" />
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CineMatch",
      type: "swipe",
      desc: "Tinder para filmes",
      longDesc: "Aplicação Fullstack que resolve indecisão em grupo. Usa algoritmo de match e WebSocket para sincronia.",
      tech: ["Vue.js", "Node", "MySQL"] // Ajustado para Vue conforme seu stack original
    },
    {
      id: 2,
      title: "Caehoot",
      type: "quiz",
      desc: "Quiz Multiplayer",
      longDesc: "Sistema de quiz similar ao Kahoot, com temática militarizada para os mais indisciplinados!",
      tech: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      id: 3,
      title: "Concord",
      type: "terminal",
      desc: "Chat Voz e Texto",
      longDesc: "Clone de chat focado em comunicação em tempo real via WebSockets, com salas dinâmicas e interface reativa.",
      tech: ["Node", "React", "Socket.IO"]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="font-retro text-3xl md:text-4xl text-arcade-cyan mb-4 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
          MISSION SELECT
        </h2>
        <p className="font-body text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">
          Cada projeto abaixo representa um desafio técnico superado. 
          Interaja com os cards para desbloquear os detalhes da implementação.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="h-full"
          >
            {proj.type === 'swipe' && <SwipeCard project={proj} />}
            {proj.type === 'quiz' && <QuizCard project={proj} />}
            {proj.type === 'terminal' && <TerminalCard project={proj} />}
            
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {proj.tech.map(t => (
                <span key={t} className="text-[10px] uppercase font-retro text-arcade-primary/80 border border-arcade-primary/30 px-2 py-1 rounded bg-arcade-primary/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;