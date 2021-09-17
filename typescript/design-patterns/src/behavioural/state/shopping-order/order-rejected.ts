import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Pagamento não pode ser aprovado, pois o pedido foi recusado');
  }

  rejectPayment(): void {
    console.log('O pedido já está no estado como recusado');
  }

  waitPayment(): void {
    console.log(
      'Pagamento não pode ser dado como pendente, pois o pedido foi recusado',
    );
  }

  shipOrder(): void {
    console.log('Não será enviado o pedido, pois foi recusado');
  }
}
