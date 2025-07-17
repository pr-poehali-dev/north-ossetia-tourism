import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Северная Осетия</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#work" className="text-foreground hover:text-primary transition-colors">Как мы работаем</a>
              <a href="#places" className="text-foreground hover:text-primary transition-colors">Места</a>
              <a href="#tours" className="text-foreground hover:text-primary transition-colors">Туры</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={20} className="md:hidden" />
              <span className="hidden md:inline">Заказать тур</span>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/9fd53f88-2a9c-4dc9-9d07-c87753a6b066.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Откройте для себя<br />
            <span className="text-primary">Северную Осетию</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Горы, история, культура и гастрономия в одном путешествии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать тур
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="work" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой процесс от выбора тура до незабываемого путешествия
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name="Search" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Выберите тур</h3>
              <p className="text-muted-foreground">Изучите наши маршруты и выберите подходящий</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name="MessageSquare" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Консультация</h3>
              <p className="text-muted-foreground">Обсудим детали и адаптируем под ваши пожелания</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name="CreditCard" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Бронирование</h3>
              <p className="text-muted-foreground">Забронируйте тур с удобной оплатой</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Путешествие</h3>
              <p className="text-muted-foreground">Отправляйтесь в незабываемое приключение</p>
            </div>
          </div>
        </div>
      </section>

      {/* Places Section */}
      <section id="places" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные места</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя самые красивые и интересные места Северной Осетии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/img/6f530a79-7ba0-435f-bdfb-2617d220e07a.jpg" 
                  alt="Башни Ингушетии" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Башни Ингушетии</CardTitle>
                  <Badge variant="secondary">Культурное наследие</Badge>
                </div>
                <CardDescription>
                  Древние каменные башни, свидетели многовековой истории региона
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/img/9fd53f88-2a9c-4dc9-9d07-c87753a6b066.jpg" 
                  alt="Горные вершины" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Горные вершины</CardTitle>
                  <Badge variant="secondary">Природа</Badge>
                </div>
                <CardDescription>
                  Величественные пики Кавказских гор с заснеженными вершинами
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/img/9fba5f65-0a3f-4b67-bbf6-eb2e43197f91.jpg" 
                  alt="Горные тропы" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Горные тропы</CardTitle>
                  <Badge variant="secondary">Треккинг</Badge>
                </div>
                <CardDescription>
                  Живописные маршруты для пеших походов и активного отдыха
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши туры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный тур для вашего приключения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mountain" size={20} />
                    Горный туризм
                  </CardTitle>
                  <Badge>5 дней</Badge>
                </div>
                <CardDescription>
                  Покорение вершин и треккинг по горным тропам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Казбек, Эльбрус</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">До 8 человек</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">от 25 000₽</span>
                    <Button>Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Castle" size={20} />
                    Культурный тур
                  </CardTitle>
                  <Badge>3 дня</Badge>
                </div>
                <CardDescription>
                  Исторические памятники и культурное наследие
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Владикавказ, Алания</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">До 12 человек</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">от 15 000₽</span>
                    <Button>Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="UtensilsCrossed" size={20} />
                    Гастрономический
                  </CardTitle>
                  <Badge>2 дня</Badge>
                </div>
                <CardDescription>
                  Традиционная кухня и местные деликатесы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Традиционные дома</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">До 10 человек</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">от 12 000₽</span>
                    <Button>Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Zap" size={20} />
                    Активный отдых
                  </CardTitle>
                  <Badge>4 дня</Badge>
                </div>
                <CardDescription>
                  Рафтинг, скалолазание и экстремальные виды спорта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Горные реки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">До 6 человек</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">от 20 000₽</span>
                    <Button>Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Leaf" size={20} />
                    Экотуризм
                  </CardTitle>
                  <Badge>6 дней</Badge>
                </div>
                <CardDescription>
                  Природные заповедники и экологические тропы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Национальные парки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">До 15 человек</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">от 18 000₽</span>
                    <Button>Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Star" size={20} />
                    Индивидуальный
                  </CardTitle>
                  <Badge variant="outline" className="border-primary-foreground text-primary-foreground">
                    По запросу
                  </Badge>
                </div>
                <CardDescription className="text-primary-foreground/80">
                  Создадим уникальный маршрут специально для вас
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Любые локации</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">Любая группа</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold">Обсудим</span>
                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Связаться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для бронирования тура или получения консультации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (8672) 123-456</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@ossetia-tours.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Владикавказ, ул. Мира, 25</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Время работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00-18:00<br />Сб-Вс: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mountain" size={24} />
                <span className="text-xl font-bold">Северная Осетия</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Откройте для себя красоту Кавказских гор и богатую культуру Северной Осетии
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Туры</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Горный туризм</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Культурные экскурсии</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Гастрономические туры</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Активный отдых</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Условия</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Безопасность</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Туры в Северную Осетию. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}