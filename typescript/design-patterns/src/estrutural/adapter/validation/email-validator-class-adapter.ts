import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './email-validator-protocol';

export class EmailValitatorClassAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
