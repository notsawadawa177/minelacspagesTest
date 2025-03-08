
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import FluidBackground from "@/components/FluidBackground";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: Пользователь попытался получить доступ к несуществующему маршруту:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen bg-background ${theme}`}>
      <Navbar />
      
      {/* FluidBackground как фиксированный фон */}
      <FluidBackground />
      
      {/* Содержимое страницы 404 */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-center space-y-6 p-8 max-w-md">
          <h1 className="text-8xl font-bold minecraft-gradient">404</h1>
          <p className={`text-xl font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-6`}>
            Упс! Страница не найдена
          </p>
          <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mb-8`}>
            Мы не смогли найти страницу "{location.pathname}"
          </p>
          <Link to="/">
            <Button 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-lg font-bold nav-button shadow-lg"
            >
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
