import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  readonly fixCustomerData = async(): Promise<void> => {
    this.customerData = await this.parseData();
    this.customerData = this.fixCpf();
  }

  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => {
      return {
        ...customer,
        cpf: customer.cpf.replace(/\D/g, ''),
      };
    });
  }

  protected abstract parseData(): Promise<CustomerData[]>;

}