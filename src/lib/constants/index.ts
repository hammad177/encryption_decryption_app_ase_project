export const cipherAlgorithms = {
  caesar: "Caesar Cipher",
  rot13: "ROT13 Cipher",
  atbash: "Atbash Cipher",
  base64: "Base64 Cipher",
} as const;

export const cipherAlgorithmsList = Object.entries(cipherAlgorithms).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);
