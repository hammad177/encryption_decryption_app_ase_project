"use client";

import { useMemo } from "react";
import {
  AtbashCipher,
  Base64Cipher,
  CaesarCipher,
  ROT13Cipher,
  CipherContext,
  CipherStrategy,
} from "../algorithms";

const useCipher = (algorithm: string) => {
  const cipherContext = useMemo(() => {
    let cipher: CipherStrategy;

    switch (algorithm.toLowerCase()) {
      case "caesar":
        cipher = new CaesarCipher();
        break;
      case "rot13":
        cipher = new ROT13Cipher();
        break;
      case "atbash":
        cipher = new AtbashCipher();
        break;
      case "base64":
        cipher = new Base64Cipher();
        break;
      default:
        throw new Error("Invalid algorithm");
    }

    return new CipherContext(cipher);
  }, [algorithm]); // Recreates context when algorithm changes

  const encrypt = (text: string) => cipherContext.encrypt(text);
  const decrypt = (text: string) => cipherContext.decrypt(text);

  return { encrypt, decrypt };
};

export default useCipher;
