import { CipherStrategy } from "./CipherStrategy";

export class CipherContext {
  private strategy: CipherStrategy;

  constructor(strategy: CipherStrategy) {
    this.strategy = strategy;
  }

  setAlgorithm(strategy: CipherStrategy) {
    this.strategy = strategy;
  }

  encrypt(text: string): string {
    return this.strategy.encrypt(text);
  }

  decrypt(text: string): string {
    return this.strategy.decrypt(text);
  }
}
