export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} está ${this.getPowerStatus()}`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity < 100) this.intensity += 1;
    console.log(`${this.name} está ${this.getPowerStatus()}`);
    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity > 0) this.intensity -= 1;
    return this.intensity;
  }
}
