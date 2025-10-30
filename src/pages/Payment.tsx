import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'sbp' | null>(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handlePayment = () => {
    console.log('Processing payment with method:', paymentMethod);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-2xl animate-fade-in">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <Icon name="ArrowLeft" size={20} />
          <span>Назад к выбору тарифа</span>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Icon name="CreditCard" size={32} className="text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Оплата подписки
          </h1>
          <p className="text-muted-foreground">
            Премиальный тариф — быстрое восстановление баз 1С
          </p>
        </div>

        <Card className="p-8 border-2 border-border">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Выберите способ оплаты</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                  paymentMethod === 'card'
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon name="CreditCard" size={20} className="text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">Банковская карта</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Visa, MasterCard, МИР
                </p>
              </Card>

              <Card
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                  paymentMethod === 'sbp'
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setPaymentMethod('sbp')}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon name="Smartphone" size={20} className="text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">СБП</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Система Быстрых Платежей
                </p>
              </Card>
            </div>
          </div>

          {paymentMethod === 'card' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Номер карты</Label>
                <Input
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  className="text-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Срок действия</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/ГГ"
                    maxLength={5}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="password"
                    placeholder="***"
                    maxLength={3}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardHolder">Имя держателя карты</Label>
                <Input
                  id="cardHolder"
                  placeholder="IVAN IVANOV"
                  className="uppercase"
                />
              </div>

              <Button
                onClick={handlePayment}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg"
                size="lg"
              >
                <Icon name="Lock" size={20} className="mr-2" />
                Оплатить подписку
              </Button>
            </div>
          )}

          {paymentMethod === 'sbp' && (
            <div className="animate-fade-in">
              <div className="bg-muted rounded-lg p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-48 h-48 bg-white rounded-lg">
                  <div className="text-8xl">📱</div>
                </div>
                <p className="text-foreground font-medium">
                  Отсканируйте QR-код в приложении банка
                </p>
                <p className="text-sm text-muted-foreground">
                  Для оплаты через Систему Быстрых Платежей откройте приложение вашего банка и отсканируйте QR-код
                </p>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg flex items-start gap-3">
                <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  После успешной оплаты вы получите доступ к премиальному сервису восстановления баз 1С
                </p>
              </div>
            </div>
          )}

          {!paymentMethod && (
            <div className="text-center py-8">
              <Icon name="ArrowUp" size={32} className="text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">
                Выберите способ оплаты выше
              </p>
            </div>
          )}
        </Card>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={16} />
            <span>Безопасная оплата</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Lock" size={16} />
            <span>Защита данных</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
