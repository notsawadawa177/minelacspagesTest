
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

const NavigationButtons = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showUpButton, setShowUpButton] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const sections = [
    { id: 'hero', label: 'Главная' },
    { id: 'why-choose-us', label: 'Почему мы' },
    { id: 'links', label: 'Ссылки' }
  ];

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowUpButton(scrollPosition > window.innerHeight * 0.5);
      
      // Determine which section is currently in view
      const viewportHeight = window.innerHeight;
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      sectionElements.forEach((element, index) => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= viewportHeight/2 && rect.bottom >= viewportHeight/2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  const buttonColor = "bg-orange-500 hover:bg-orange-600";
  
  return (
    <div className="fixed left-10 bottom-10 flex flex-col items-center gap-4 z-50">
      {/* Up button always positioned at the top */}
      {showUpButton && (
        <Button
          key="up-button"
          variant="outline"
          size="icon"
          className={`rounded-full ${buttonColor} border-none transition-all duration-300 shadow-lg`}
          onClick={scrollToTop}
        >
          <ChevronUp className="h-6 w-6" />
          <span className="sr-only">Наверх</span>
        </Button>
      )}
      
      {/* Down button always below up button */}
      {currentSection < sections.length - 1 && (
        <Button
          key="down-button"
          variant="outline"
          size="icon"
          className={`rounded-full ${buttonColor} border-none transition-all duration-300 shadow-lg animate-pulse-subtle`}
          onClick={() => scrollToSection(sections[currentSection + 1].id)}
        >
          <ChevronDown className="h-6 w-6" />
          <span className="sr-only">{sections[currentSection + 1].label}</span>
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
