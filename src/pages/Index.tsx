import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handlePremiumClick = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-4xl animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 animate-scale-in">
            <Icon name="Database" size={40} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Оформить платную подписку<br />на восстановление базы 1С?
          </h1>
          <p className="text-muted-foreground text-lg">
            Выберите оптимальный тариф для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className={`p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
              selectedPlan === 'premium' 
                ? 'border-primary bg-primary/5 shadow-xl shadow-primary/20' 
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => handlePlanSelect('premium')}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">ДА</h3>
                <p className="text-primary font-medium">Премиальный сервис</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Быстрое восстановление</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Shield" size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Приоритетная поддержка</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Award" size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground">Гарантия качества</span>
              </div>
            </div>

            <Button 
              className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg"
              size="lg"
              onClick={handlePremiumClick}
            >
              Выбрать премиум
            </Button>
          </Card>

          <Card 
            className={`p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
              selectedPlan === 'basic' 
                ? 'border-secondary bg-secondary/5 shadow-xl shadow-secondary/20' 
                : 'border-border hover:border-secondary/50'
            }`}
            onClick={() => handlePlanSelect('basic')}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">НЕТ</h3>
                <p className="text-secondary font-medium">Базовый тариф</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Timer" size={20} className="text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">Ожидание ~1,5 часа</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle" size={20} className="text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">Стандартное восстановление</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Users" size={20} className="text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">Общая очередь</span>
              </div>
            </div>

            <Button 
              className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-6 text-lg"
              size="lg"
              variant="secondary"
            >
              Остаться на базовом
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="Lock" size={16} />
            <span className="text-sm">Безопасное восстановление данных 1С</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;