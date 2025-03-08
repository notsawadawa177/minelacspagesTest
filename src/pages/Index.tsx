import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import { Users, HeartHandshake, MessageSquare, Wrench, Shield, Heart, CodeXml, Send, BookOpen, ShoppingCart, MessageCircle } from "lucide-react"
import FluidBackground from "@/components/FluidBackground"
import NavigationButtons from "@/components/NavigationButtons"
import { useTheme } from "@/context/ThemeContext"
import { LinkBlock } from "@/components/LinkBlock"
import DeveloperCard from "@/components/DeveloperCard"

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen bg-background ${theme}`}>
      <Navbar />
      
      {/* FluidBackground as a fixed background */}
      <FluidBackground />
      
      {/* Hero Section */}
      <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 bg-[url('./minecraft-banner.jpg')] bg-cover bg-center ${theme === 'dark' ? 'opacity-30' : 'opacity-15'}`} />
        
        <div className="relative z-10 text-center space-y-6">
          <h1 className="minecraft-gradient text-7xl font-bold">MineLacs</h1>
          <p className={`hero-text text-xl font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Он такой один!</p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = "./launcher-download"}
              className="bg-orange-500 hover:bg-orange-600 text-lg font-bold nav-button shadow-lg"
            >
              Лаунчер
            </Button>
            <Button 
              size="lg"
              onClick={() => window.location.href = "https://dsc.gg/minelacs"}
              className={`theme-button text-lg font-bold nav-button shadow-lg ${theme === 'light' ? 'bg-orange-700 hover:bg-orange-800 text-white' : ''}`}
            >
              Начать
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - updated with new title and descriptions */}
      <div id="why-choose-us" className="relative py-20 px-4">
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 minecraft-gradient">Почему мы?</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="benefit-card p-8">
              <HeartHandshake className="w-12 h-12 feature-icon mb-4" />
              <h3 className="text-xl font-bold card-title mb-3">Активное комьюнити</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>У нас много активных игроков, которые всегда будут рады чем-то помочь и составить вам компанию. Здесь любой сможет найти себе новых друзей!</p>
            </div>

            <div className="benefit-card p-8">
              <MessageSquare className="w-12 h-12 feature-icon mb-4" />
              <h3 className="text-xl font-bold card-title mb-3">Голосовой чат</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>PlasmoVoice - продвинутый мод голосового чата, который позволяет общаться с другими игроками в голосовом чате прямо в игре, с поддержкой пространственного звука и возможностью настройки качества.</p>
            </div>

            <div className="benefit-card p-8">
              <Wrench className="w-12 h-12 feature-icon mb-4" />
              <h3 className="text-xl font-bold card-title mb-3">Механики</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Благодаря плагинам на нашем сервере, у Вас есть новые возможности для построек! Экспериментируйте с материалами и инструментами, создавайте уникальные локации и воплощайте свои идеи.</p>
            </div>

            <div className="benefit-card p-8">
              <Shield className="w-12 h-12 feature-icon mb-4" />
              <h3 className="text-xl font-bold card-title mb-3">Команда проекта</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>В команду проекта входят только адекватные и справедливые игроки, готовые помочь вам в любую минуту. Администрация регулярно следит за сервером, чтобы вам было комфортно играть.</p>
            </div>

            <div className="benefit-card p-8">
              <Heart className="w-12 h-12 feature-icon mb-4" />
              <h3 className="text-xl font-bold card-title mb-3">Донат не решает</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Донат - это в первую очередь поддержка сервера. Кто угодно может обеспечить наше развитие, не получая за это слишком больших преимуществ.</p>
            </div>

            <div className="benefit-card p-8">
              <CodeXml className="w-12 h-12 feature-icon mb-4" />
              <h3 className="text-xl font-bold card-title mb-3">Собственные разработки</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Наша команда разрабатывает уникальные плагины и моды, которые делают игровой процесс более увлекательным и разнообразным.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Developers Section */}
      <div id="developers" className="relative py-20 px-4">
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 minecraft-gradient">Разработчики</h2>
          <div className="container mx-auto flex flex-wrap justify-center gap-8">
            <DeveloperCard 
              username="SawaDawa177_" 
              role="Создатель проекта, разработчик сервера"
              githubUrl="https://github.com/notsawadawa177"
              namemcUrl="https://ru.namemc.com/profile/SawaDawa177_"
            />
            <DeveloperCard 
              username="GreatShow6102" 
              role="Редактор Вики, Администратор Дискорд Сервера"
              githubUrl="https://github.com/VGSS6102"
              namemcUrl="https://ru.namemc.com/profile/GreatShow6102"
            />
          </div>
        </div>
      </div>

      {/* Links Section - with interactive link blocks */}
      <div id="links" className="relative py-20">
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-10 minecraft-gradient">Наши ссылки</h2>
          <div className="container mx-auto flex flex-wrap justify-center gap-8">
            <LinkBlock 
              icon={<MessageCircle />} 
              title="Discord" 
              description="Познакомьтесь с сообществом" 
              href="https://dsc.gg/minelacs" 
            />
            <LinkBlock 
              icon={<Send />} 
              title="Telegram" 
              description="Следите за новостями" 
              href="http://t.me/minelacs" 
            />
            <LinkBlock 
              icon={<BookOpen />} 
              title="Вики" 
              description="Узнайте больше о сервере" 
              href="https://wiki.minelacs.ru" 
            />
            <LinkBlock 
              icon={<ShoppingCart />} 
              title="Магазин" 
              description="Поддержите проект" 
              href="https://shop.minelacs.ru" 
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div id="copyright" className="relative py-8 px-4 pb-24">
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex items-center space-x-4">
              <img 
                src="./lovable-uploads/ff43fe5e-edfd-441c-8d13-d8e5268e5a8f.png" 
                alt="MineLacs Logo" 
                className="h-16" 
              />
              <div className="flex flex-col items-start">
                <span className="font-bold text-xl minecraft-gradient mb-2">MineLacs, 2025</span>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  © Все права защищены
                </p>
              </div>
            </div>
            
            <div className="md:ml-auto flex flex-col items-start md:items-end">
              <div className="flex flex-wrap gap-6 mb-4">
                <a href="https://dsc.gg/minelacs" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
                  Discord
                </a>
                <a href="http://t.me/minelacs" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
                  Telegram
                </a>
                <a href="https://wiki.minelacs.ru" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
                  Вики
                </a>
                <a href="https://shop.minelacs.ru" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
                  Магазин
                </a>
              </div>
              
              <div className={`max-w-xl text-right ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                <p className="text-xs">
                  Not an official Minecraft product. We are in no way affiliated with or endorsed by Mojang Synergies AB, Microsoft Corporation or other rightsholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />
    </div>
  );
}

export default Index;
