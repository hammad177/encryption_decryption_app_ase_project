import { CipherStrategy } from "./CipherStrategy";

export class AtbashCipher implements CipherStrategy {
  encrypt(text: string): string {
    return this.reverseAlphabet(text);
  }

  decrypt(text: string): string {
    return this.reverseAlphabet(text); // Atbash is symmetric
  }

  private reverseAlphabet(text: string): string {
    return text.replace(/[a-zA-Z]/g, (char) => {
      const base = char >= "a" ? 97 : 65;
      return String.fromCharCode(25 - (char.charCodeAt(0) - base) + base);
    });
  }
}
