import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/bg-music.mp3'); 
    audioRef.current.loop = true; 
    audioRef.current.volume = 0.4; 
  }, []);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Erro ao tocar áudio:", e));
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    audioRef.current.play().then(() => {
      setIsAudioPlaying(true);
    }).catch(e => {
      console.log("Autoplay bloqueado", e);
      setIsAudioPlaying(false);
    });
  };

  const handleResetGame = () => {
    setGameStarted(false); 
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }
    setIsAudioPlaying(false); 
  };

  return (
    <main className="min-h-screen relative scanlines bg-arcade-bg overflow-x-hidden selection:bg-arcade-primary selection:text-black">
      
      {gameStarted && (
        <Header 
          isAudioPlaying={isAudioPlaying} 
          toggleAudio={toggleAudio}
          onReset={handleResetGame} 
        />
      )}

      {!gameStarted ? (
        <div id="hero">
           <Hero onStart={handleStartGame} />
        </div>
      ) : (
        <div className="animate-fade-in flex flex-col min-h-screen pt-16">
          <div className="flex-grow">
            <section id="about">
              <About />
            </section>
            
            <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10"></div>
            
            <section id="projects">
              <Projects />
            </section>
          </div>

          <section id="footer">
            <Footer />
          </section>

         
          <button 
            onClick={handleResetGame}
            className="fixed bottom-6 right-4 z-[100] px-4 py-2 bg-gray-900/90 border border-gray-500 rounded text-xs font-retro text-gray-200 shadow-xl backdrop-blur-sm active:scale-95 transition-all hover:bg-red-900/80 hover:text-white hover:border-red-500"
          >
            [ RESET GAME ]
          </button>
        </div>
      )}
    </main>
  );
}

export default App;