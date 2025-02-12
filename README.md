# 🔐 Encryption & Decryption App (ASE Project)

This is a **Next.js 15** single-page application that allows users to **encrypt and decrypt text** using different cipher algorithms. The project follows **Object-Oriented Programming (OOP) principles** and implements the **Strategy Pattern** for flexible encryption selection.

---

## 📜 Features

✅ Select an encryption algorithm.  
✅ Enter a string and encrypt it.  
✅ Enter an encrypted string and decrypt it back.  
✅ Supports multiple cipher algorithms.  
✅ Built using **ShadCN UI** for a clean UI.  
✅ Follows the **Strategy Pattern** for algorithm selection.

---

## 🛠 Technologies Used

- **Next.js 15** (React Framework)
- **TypeScript** (Static Typing)
- **ShadCN UI** (UI Components)
- **OOP Principles** (Encapsulation, Polymorphism)
- **Strategy Pattern** (For flexible encryption selection)

---

## 🔑 Supported Encryption Algorithms

The app supports the following encryption techniques:

1️⃣ **Caesar Cipher** – Shifts letters forward in the alphabet.  
2️⃣ **ROT13 Cipher** – A special case of Caesar Cipher with a fixed shift of 13.  
3️⃣ **Atbash Cipher** – Reverses the alphabet (A ↔ Z, B ↔ Y).  
4️⃣ **Base64 Encoding** – Encodes text into Base64 format.

---

## 🎯 Software Design Approach: Strategy Pattern

This project implements the **Strategy Pattern**, which allows dynamic selection of encryption algorithms.

### 📌 Why Strategy Pattern?

- Each cipher follows a similar structure (`encrypt` and `decrypt` methods).
- Users can switch between algorithms dynamically.
- The main encryption logic is **decoupled** from the UI.

### 📁 Class Structure (OOP Approach)

- `CipherContext` → Manages encryption/decryption using a selected algorithm.
- `CipherStrategy` → Interface defining `encrypt` and `decrypt` methods.
- `CaesarCipher`, `ROT13Cipher`, `AtbashCipher`, `Base64Cipher` → Implement the `CipherStrategy` interface.

---

## 📌 UML Diagrams

### 1️⃣ Class Diagram

> _Illustrates the structure of encryption classes and relationships._  
> _project root/uml_diagrams/class._

### 2️⃣ Sequence Diagram

> _Shows the flow of encryption & decryption in the app._  
> _project root/uml_diagrams/sequence._

---

## 🚀 How to Run the Project

1️⃣ Clone the repository:

```bash
git clone https://github.com/your-username/encryption-app.git
cd encryption-app
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the development server:

```bash
npm run dev
```

4️⃣ Open the app in your browser:

```bash
http://localhost:3000
```
