import { CipherStrategy } from "./CipherStrategy";

export class ROT13Cipher implements CipherStrategy {
  encrypt(text: string): string {
    return this.rotate13(text);
  }

  decrypt(text: string): string {
    return this.rotate13(text); // ROT13 is symmetric
  }

  private rotate13(text: string): string {
    return text.replace(/[a-zA-Z]/g, (char) => {
      const base = char >= "a" ? 97 : 65;
      return String.fromCharCode(
        ((char.charCodeAt(0) - base + 13) % 26) + base
      );
    });
  }
}
