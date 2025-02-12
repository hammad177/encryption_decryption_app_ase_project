import { CipherStrategy } from "./CipherStrategy";

export class Base64Cipher implements CipherStrategy {
  encrypt(text: string): string {
    return btoa(text); // Converts string to Base64
  }

  decrypt(text: string): string {
    return atob(text); // Converts Base64 back to string
  }
}
