// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Clave secreta para firmar los tokens (asegúrate de usar variables de entorno en producción)
const SECRET_KEY = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Verificar que el encabezado de autorización esté presente y contenga el token
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Acceso no autorizado, token requerido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verificar el token
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Añadir la información del usuario al objeto req
    next(); // Continuar con la siguiente función
  } catch (error) {
    res.status(403).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = authMiddleware;
