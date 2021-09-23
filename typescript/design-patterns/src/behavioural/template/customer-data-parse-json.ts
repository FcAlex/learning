import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';
import { promises } from 'fs'

export class CustomerDataParserJson extends CustomerDataParser {
  
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath, 'utf8');

    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for(const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({ name, age, cpf });
    }

    return customerData;
  }
  
}