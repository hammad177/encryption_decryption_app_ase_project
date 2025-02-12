import { CipherStrategy } from "./CipherStrategy";

export class CaesarCipher implements CipherStrategy {
  private shift: number = 3;

  encrypt(text: string): string {
    return text
      .split("")
      .map((char) => this.shiftChar(char, this.shift))
      .join("");
  }

  decrypt(text: string): string {
    return text
      .split("")
      .map((char) => this.shiftChar(char, -this.shift))
      .join("");
  }

  private shiftChar(char: string, shift: number): string {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const offset = char >= "a" ? 97 : 65;
      return String.fromCharCode(((code - offset + shift + 26) % 26) + offset);
    }
    return char;
  }
}
