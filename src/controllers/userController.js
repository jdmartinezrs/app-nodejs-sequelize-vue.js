// userController.js
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Usar la clave secreta desde las variables de entorno
const SECRET_KEY = process.env.JWT_SECRET;

const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async registerUser(req, res) {
    try {
      const { firstName, lastName, email, password, teamId } = req.body;

      // Crear nuevo usuario con la contraseña encriptada
      const newUser = await userService.createUser({ firstName, lastName, email, password, teamId });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      console.log('Attempting login with:', { email, password });

      // Buscar el usuario por su correo electrónico
      const user = await userService.getUserByEmail(email);
      console.log('User found:', {
        exists: !!user,
        userData: user ? {
          id: user.id,
          email: user.email,
          passwordHash: user.password
        } : null
      });

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Comparar la contraseña proporcionada con la almacenada
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Password validation:', {
        provided: password,
        isValid: isPasswordValid
      });

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
      }

      // Generar un token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        SECRET_KEY, // Usar la variable de entorno que ya configuramos
        { expiresIn: '1h' }
      );

      res.json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: error.message });
    }
  },

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const result = await userService.deleteUser(req.params.id);
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
