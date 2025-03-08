
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Github } from 'lucide-react';

interface DeveloperCardProps {
  username: string;
  role: string;
  githubUrl?: string;
  namemcUrl?: string;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ 
  username, 
  role, 
  githubUrl,
  namemcUrl
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-2
      ${theme === 'dark' ? 'bg-[#1A1A1A]/80 border-orange-900/20' : 'bg-white/80 border-orange-100'}
      border shadow-lg
    `}>
      {/* Minecraft Head with namemc link */}
      <div className="mb-4">
        {namemcUrl ? (
          <a 
            href={namemcUrl}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`${username}'s NameMC profile`}
          >
            <img 
              src={`https://mc-heads.net/head/${username}/128`} 
              alt={`${username}'s Minecraft head`}
              width="128"
              height="128"
              className="transition-transform duration-300 hover:animate-jump"
            />
          </a>
        ) : (
          <img 
            src={`https://mc-heads.net/head/${username}/128`} 
            alt={`${username}'s Minecraft head`}
            width="128"
            height="128"
            className="minecraft-head-jump transition-transform duration-300 hover:animate-jump"
          />
        )}
      </div>
      
      {/* Username */}
      <h3 className={`
        text-xl font-bold mb-2
        ${theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}
      `}>
        {username}
      </h3>
      
      {/* Role */}
      <p className={`
        text-sm text-center mb-4
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
      `}>
        {role}
      </p>
      
      {/* Social Links */}
      <div className="flex gap-2">
        {/* GitHub Link */}
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              p-2 rounded-full transition-colors
              ${theme === 'dark' ? 
                'bg-orange-900/20 text-orange-400 hover:bg-orange-900/30' : 
                'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }
            `}
            aria-label={`${username}'s GitHub`}
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default DeveloperCard;
