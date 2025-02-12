"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import useCipher from "@/lib/hooks/useCipher";
import { cipherAlgorithmsList } from "@/lib/constants";

const CipherApp = () => {
  const [algorithm, setAlgorithm] = useState<string>("caesar");
  const [encryptInput, setEncryptInput] = useState<string>("");
  const [encryptedText, setEncryptedText] = useState<string>("");
  const [decryptedText, setDecryptedText] = useState<string>("");
  const [decryptInput, setDecryptInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [decryptError, setDecryptError] = useState<string | null>(null);

  const { encrypt, decrypt } = useCipher(algorithm);

  const handleEncrypt = () => {
    if (!encryptInput.trim()) {
      setError("Encryption input cannot be empty!");
      return;
    }
    setError(null);
    setEncryptedText(encrypt(encryptInput));
  };

  const handleDecrypt = () => {
    if (!decryptInput.trim()) {
      setDecryptError("Decryption input cannot be empty!");
      return;
    }
    setDecryptError(null);
    setDecryptedText(decrypt(decryptInput));
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Encryption & Decryption
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Algorithm Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Select Algorithm:</h3>
            <Select onValueChange={setAlgorithm} defaultValue="caesar">
              <SelectTrigger>
                <SelectValue placeholder="Select an algorithm" />
              </SelectTrigger>
              <SelectContent>
                {cipherAlgorithmsList.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Encryption Section */}
          <Input
            placeholder="Enter text to encrypt"
            value={encryptInput}
            onChange={(e) => setEncryptInput(e.target.value)}
          />
          <Button onClick={handleEncrypt}>Encrypt</Button>

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {encryptedText && (
            <Card className="bg-gray-100">
              <CardContent className="p-4">
                Encrypted: {encryptedText}
              </CardContent>
            </Card>
          )}

          {/* Decryption Section */}
          <Input
            placeholder="Enter text to decrypt"
            value={decryptInput}
            onChange={(e) => setDecryptInput(e.target.value)}
          />
          <Button onClick={handleDecrypt}>Decrypt</Button>

          {decryptError && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{decryptError}</AlertDescription>
            </Alert>
          )}

          {decryptedText && (
            <Card className="bg-gray-100">
              <CardContent className="p-4">
                Decrypted: {decryptedText}
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CipherApp;
