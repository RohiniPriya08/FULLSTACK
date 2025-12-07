/* ===== Global Styles ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  background: linear-gradient(135deg, #4f46e5, #6d28d9);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

/* ===== Form Container ===== */
.container {
  width: 420px;
  background: #ffffff;
  padding: 28px 32px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== Titles ===== */
.container h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #4f46e5;
  font-weight: 700;
}

/* ===== Input Fields ===== */
input,
select {
  width: 100%;
  padding: 12px;
  margin: 10px 0 18px;
  border-radius: 8px;
  border: 1.5px solid #d1d5db;
  font-size: 15px;
  transition: 0.25s ease;
}

input:focus,
select:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 5px rgba(79, 70, 229, 0.4);
}

/* ===== Submit Button ===== */
button {
  width: 100%;
  padding: 12px;
  background: #4f46e5;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.25s ease;
}

button:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

/* ===== Success Message ===== */
.success-message {
  margin-top: 15px;
  padding: 12px;
  background: #d1fae5;
  color: #065f46;
  border-left: 5px solid #10b981;
  border-radius: 6px;
  font-size: 15px;
  animation: slideIn 0.4s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
