const users = [];

const register = (req, res) => {
  const { name, email, password } = req.body;

  if (users.find((u) => u.email === email)) {
    return res.status(409).json({ error: "User already exists" });
  }

  users.push({ name, email, password });
  console.log("Usuario registrado:", { name, email, password });
  res.status(201).json({ message: "User registered successfully" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", name: user.name });
};

module.exports = { register, login };
