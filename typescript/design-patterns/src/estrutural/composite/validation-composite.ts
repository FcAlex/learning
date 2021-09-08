// Component
export abstract class ValitadionComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValitadionComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@+/.test(value);
  }
}

export class ValidateString extends ValitadionComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValitadionComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

//Composite
export class ValitationComposite extends ValitadionComponent {
  private readonly children: ValitadionComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }

    return true;
  }

  add(...validations: ValitadionComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

const validationComposite = new ValitationComposite();
validationComposite.add(validateString, validateNumber, validateEmail);
console.log(validationComposite.validate('fcoalex100@gmail.com'));
