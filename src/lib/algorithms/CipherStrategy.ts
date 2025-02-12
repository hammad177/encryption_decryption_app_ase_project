export interface CipherStrategy {
  encrypt(text: string): string;
  decrypt(text: string): string;
}
