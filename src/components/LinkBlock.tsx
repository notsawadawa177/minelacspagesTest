
import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LinkBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export const LinkBlock: React.FC<LinkBlockProps> = ({ 
  icon, 
  title, 
  description, 
  href 
}) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                link-block flex items-center gap-4 p-5 rounded-xl transition-all duration-300
                ${theme === 'dark' ? 'bg-[#171717]/90 hover:bg-[#222]/90' : 'bg-white/90 hover:bg-orange-50/90'}
                border ${theme === 'dark' ? 'border-orange-900/30' : 'border-orange-200'}
                shadow-lg hover:-translate-y-1
              `}
            >
              {/* Icon Container */}
              <div className={`
                w-14 h-14 flex items-center justify-center rounded-full
                ${theme === 'dark' ? 'bg-orange-900/20' : 'bg-orange-100'}
                text-orange-500
              `}>
                <div className="w-8 h-8">
                  {icon}
                </div>
              </div>
              
              {/* Animation container for text */}
              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}
              `}>
                <div className="whitespace-nowrap">
                  <h3 className={`font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}`}>
                    {title}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="z-50">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
