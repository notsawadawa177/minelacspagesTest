import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon, ChevronDown, ShoppingCart, MessageCircle, Send, BookOpen } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  
  const scrollToLinks = () => {
    const linksSection = document.getElementById('links');
    if (linksSection) {
      linksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border/40">
      <div className="container flex h-16 items-center">
        <div className="mr-4">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <img 
              src="./lovable-uploads/ff43fe5e-edfd-441c-8d13-d8e5268e5a8f.png" 
              alt="MineLacs Logo" 
              className="h-14 transition-all duration-500 hover:rotate-[360deg]" 
            />
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <NavigationMenu className="justify-center">
            <NavigationMenuList className="justify-center ml-4">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/" 
                  className={cn(navigationMenuTriggerStyle(), "text-lg font-bold nav-button")}
                >
                  Главная
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("text-lg font-bold nav-button")}>
                  Сервисы
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink 
                      href="https://shop.minelacs.ru" 
                      className={cn("flex items-center p-3 hover:bg-accent rounded-md transition-colors", "text-base font-medium")}
                    >
                      <ShoppingCart className="mr-2 h-5 w-5 text-orange-500" />
                      <div>
                        <div className="font-medium">Магазин</div>
                        <div className="text-sm text-muted-foreground">Поддержите проект</div>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      href="https://wiki.minelacs.ru/" 
                      className={cn("flex items-center p-3 hover:bg-accent rounded-md transition-colors", "text-base font-medium")}
                    >
                      <BookOpen className="mr-2 h-5 w-5 text-orange-500" />
                      <div>
                        <div className="font-medium">Вики</div>
                        <div className="text-sm text-muted-foreground">Узнайте больше о сервере</div>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      href="https://dsc.gg/minelacs" 
                      className={cn("flex items-center p-3 hover:bg-accent rounded-md transition-colors", "text-base font-medium")}
                    >
                      <MessageCircle className="mr-2 h-5 w-5 text-orange-500" />
                      <div>
                        <div className="font-medium">Discord</div>
                        <div className="text-sm text-muted-foreground">Познакомьтесь с сообществом</div>
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      href="http://t.me/minelacs" 
                      className={cn("flex items-center p-3 hover:bg-accent rounded-md transition-colors", "text-base font-medium")}
                    >
                      <Send className="mr-2 h-5 w-5 text-orange-500" />
                      <div>
                        <div className="font-medium">Telegram</div>
                        <div className="text-sm text-muted-foreground">Следите за новостями</div>
                      </div>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <button 
                  onClick={scrollToLinks} 
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer text-lg font-bold nav-button")}
                >
                  Ссылки
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className={`flex items-center gap-2 ml-auto p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} hover:scale-105`}>
          {theme === 'dark' ? 
            <Moon className="h-5 w-5 text-yellow-400" /> : 
            <Sun className="h-5 w-5 text-yellow-500" />
          }
          <Switch 
            checked={theme === 'light'}
            onCheckedChange={toggleTheme}
            aria-label="Toggle theme"
            className={`${theme === 'light' ? 'data-[state=checked]:bg-blue-500' : 'data-[state=checked]:bg-gray-200'}`}
          />
          <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {theme === 'dark' ? 'Темная' : 'Светлая'}
          </span>
        </div>
      </div>
    </div>
  );
}
