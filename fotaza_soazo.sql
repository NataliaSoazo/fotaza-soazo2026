-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2026 a las 22:27:23
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fotaza_soazo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comenta`
--

CREATE TABLE `comenta` (
  `id` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `idImagen` int(11) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comenta`
--

INSERT INTO `comenta` (`id`, `fecha`, `idImagen`, `texto`, `idUsuario`, `createdAt`, `updatedAt`) VALUES
(17, '2026-06-09 00:12:50', 9, 'Hola', 1, '2026-06-09 00:12:50', '2026-06-09 00:12:50'),
(18, '2026-06-09 00:13:09', 9, 'Hola', 1, '2026-06-09 00:13:09', '2026-06-09 00:13:09'),
(19, '2026-06-09 05:07:58', 4, 'Linda Presentación', 3, '2026-06-09 05:07:58', '2026-06-09 05:07:58'),
(20, '2026-06-09 05:08:59', 5, 'Linda foto', 3, '2026-06-09 05:08:59', '2026-06-09 05:08:59'),
(21, '2026-06-09 05:09:35', 6, 'Se ve muy borrosa', 3, '2026-06-09 05:09:35', '2026-06-09 05:09:35'),
(24, '2026-06-12 04:15:25', 242, 'Lindo Puna', 1, '2026-06-12 04:15:25', '2026-06-12 04:15:25'),
(25, '2026-06-12 04:37:33', 242, 'Hola', 1, '2026-06-12 04:37:33', '2026-06-12 04:37:33'),
(26, '2026-06-12 04:40:47', 258, 'Hola', 1, '2026-06-12 04:40:47', '2026-06-12 04:40:47'),
(27, '2026-06-12 04:41:03', 258, 'Hola', 1, '2026-06-12 04:41:03', '2026-06-12 04:41:03'),
(28, '2026-06-12 05:13:44', 259, 'Hola', 1, '2026-06-12 05:13:44', '2026-06-12 05:13:44'),
(29, '2026-06-12 05:15:16', 4, 'Hola ', 1, '2026-06-12 05:15:16', '2026-06-12 05:15:16'),
(30, '2026-06-12 05:16:19', 6, 'Hola', 1, '2026-06-12 05:16:19', '2026-06-12 05:16:19'),
(31, '2026-06-12 05:52:45', 242, 'Hola', 1, '2026-06-12 05:52:45', '2026-06-12 05:52:45'),
(32, '2026-06-12 05:55:24', 260, 'Me gusta', 1, '2026-06-12 05:55:24', '2026-06-12 05:55:24'),
(33, '2026-06-12 05:58:01', 240, 'Hola', 1, '2026-06-12 05:58:01', '2026-06-12 05:58:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `denuncias`
--

CREATE TABLE `denuncias` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idImagen` int(11) NOT NULL,
  `motivo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `denuncias`
--

INSERT INTO `denuncias` (`id`, `fecha`, `idImagen`, `motivo`, `descripcion`, `idUsuario`, `createdAt`, `updatedAt`) VALUES
(7, '2026-06-12', 6, 'Imagen fea', 'No respeta la calidad de las condiciones de la página', 1, '2026-06-12 05:17:06', '2026-06-12 05:17:06'),
(8, '2026-06-12', 240, 'Fea', 'fea', 1, '2026-06-12 05:58:27', '2026-06-12 05:58:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetapublicacions`
--

CREATE TABLE `etiquetapublicacions` (
  `id` int(11) NOT NULL,
  `idPublicacion` int(11) NOT NULL,
  `idEtiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `etiquetapublicacions`
--

INSERT INTO `etiquetapublicacions` (`id`, `idPublicacion`, `idEtiqueta`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 3, 4),
(5, 3, 5),
(6, 4, 6),
(7, 4, 7),
(18, 10, 8),
(19, 11, 8),
(20, 12, 8),
(21, 13, 8),
(22, 14, 8),
(23, 15, 8),
(24, 16, 8),
(25, 17, 8),
(26, 18, 8),
(27, 19, 8),
(164, 88, 9),
(165, 88, 8),
(166, 89, 8),
(170, 92, 14),
(171, 92, 10),
(176, 95, 15),
(177, 96, 16),
(178, 96, 17),
(179, 97, 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas`
--

CREATE TABLE `etiquetas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `createdBy` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `etiquetas`
--

INSERT INTO `etiquetas` (`id`, `nombre`, `createdBy`) VALUES
(1, 'turismo', NULL),
(2, 'sanluis', NULL),
(3, 'mundial2026', NULL),
(4, 'cantantes', NULL),
(5, 'singer', NULL),
(6, 'mundial', NULL),
(7, 'fixture', NULL),
(8, 'fauna', NULL),
(9, 'chile', NULL),
(10, 'argentina', NULL),
(14, 'flora', NULL),
(15, 'animales', NULL),
(16, 'uñas', NULL),
(17, 'estética', NULL),
(18, 'tecnologia', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL,
  `urlImagen` varchar(255) NOT NULL,
  `licencia` varchar(255) NOT NULL,
  `idPublicacion` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idImagen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `urlImagen`, `licencia`, `idPublicacion`, `idUsuario`, `createdAt`, `updatedAt`, `idImagen`) VALUES
(1, './uploads/potrero3.jpg', 'Copyright', 1, 1, '2026-06-02 00:24:00', '2026-06-02 00:24:00', NULL),
(2, './uploads/potrero2.jpg', 'Copyright', 1, 1, '2026-06-02 00:24:00', '2026-06-02 00:24:00', NULL),
(3, './uploads/potrero1.jpeg', 'Copyright', 1, 1, '2026-06-02 00:24:01', '2026-06-02 00:24:01', NULL),
(4, './uploads/mundial-2026.webp', 'Default', 2, 2, '2026-06-04 01:43:50', '2026-06-04 01:43:50', NULL),
(5, './uploads/mundial3.jpg', 'Default', 2, 2, '2026-06-04 01:43:50', '2026-06-04 01:43:50', NULL),
(6, './uploads/mundial1.jpeg', 'Default', 2, 2, '2026-06-04 01:43:51', '2026-06-04 01:43:51', NULL),
(7, './uploads/chino3.jpg', 'Default', 3, 3, '2026-06-04 02:30:27', '2026-06-04 02:30:27', NULL),
(8, './uploads/chino2.jpg', 'Default', 3, 3, '2026-06-04 02:30:27', '2026-06-04 02:30:27', NULL),
(9, './uploads/chino1.jpg', 'Default', 3, 3, '2026-06-04 02:30:27', '2026-06-04 02:30:27', NULL),
(25, './uploads/53208-chinchilla@2x.jpg', 'Copyright', 10, 1, '2026-06-09 20:41:07', '2026-06-09 20:41:07', NULL),
(239, './uploads/53208-chinchilla@2x.jpg', 'Copyright', 88, 5, '2026-06-10 19:51:01', '2026-06-10 19:51:01', NULL),
(240, './uploads/faunacgule3.jpg', 'Copyright', 88, 5, '2026-06-10 19:51:01', '2026-06-10 19:51:01', NULL),
(241, './uploads/faunaChile2.jpg', 'Copyright', 88, 5, '2026-06-10 19:51:02', '2026-06-10 19:51:02', NULL),
(242, './uploads/puma-fauna-argentina.jpg', 'Default', 89, 5, '2026-06-10 20:20:10', '2026-06-10 20:20:10', NULL),
(243, './uploads/faunaArgetina2.jpeg', 'Default', 89, 5, '2026-06-10 20:20:10', '2026-06-10 20:20:10', NULL),
(244, './uploads/fauna Argetina.jpeg', 'Default', 89, 5, '2026-06-10 20:20:10', '2026-06-10 20:20:10', NULL),
(245, './uploads/lengua-de-fuego.png', 'Copyright', 92, 1, '2026-06-12 01:04:11', '2026-06-12 01:04:11', NULL),
(246, './uploads/flora autoctona.jpeg', 'Copyright', 92, 1, '2026-06-12 01:04:11', '2026-06-12 01:04:11', NULL),
(256, './uploads/bizcacha.jpg', 'Copyright', 95, 1, '2026-06-12 04:39:45', '2026-06-12 04:39:45', NULL),
(257, './uploads/hornerito.jpg', 'Copyright', 95, 1, '2026-06-12 04:39:45', '2026-06-12 04:39:45', NULL),
(258, './uploads/venado.jpeg', 'Copyright', 95, 1, '2026-06-12 04:39:45', '2026-06-12 04:39:45', NULL),
(259, './uploads/dfd1441d94cb5dad83340a27a86fbbee.jpg', 'Copyright', 96, 1, '2026-06-12 05:13:08', '2026-06-12 05:13:08', NULL),
(260, './uploads/teclado.jpeg', 'Copyright', 97, 1, '2026-06-12 05:55:03', '2026-06-12 05:55:03', NULL),
(261, './uploads/pc.jpeg', 'Copyright', 97, 1, '2026-06-12 05:55:03', '2026-06-12 05:55:03', NULL),
(262, './uploads/dfd1441d94cb5dad83340a27a86fbbee.jpg', 'Copyright', 97, 1, '2026-06-12 05:55:04', '2026-06-12 05:55:04', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `copyright` tinyint(1) NOT NULL DEFAULT 0,
  `isClose` tinyint(1) DEFAULT NULL,
  `denunciada` tinyint(4) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `deletedBy` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `fecha`, `titulo`, `descripcion`, `copyright`, `isClose`, `denunciada`, `idUsuario`, `deletedBy`, `createdAt`, `updatedAt`) VALUES
(1, '2026-06-02 00:23:56', 'Potrero de los Funes', 'Paseando por Potrero', 1, NULL, 0, 1, NULL, '2026-06-02 00:23:56', '2026-06-02 00:23:56'),
(2, '2026-06-04 01:43:50', 'Mundial', 'fotos del mundial', 0, NULL, 1, 2, NULL, '2026-06-04 01:43:50', '2026-06-12 05:17:06'),
(3, '2026-06-04 02:30:27', 'Mi chino favorito', 'Me gusta...', 0, NULL, 0, 3, NULL, '2026-06-04 02:30:27', '2026-06-07 00:46:41'),
(4, '2026-06-07 22:45:05', 'Mundial', 'Les comparto fixture y otra info ', 1, 0, 0, 4, NULL, '2026-06-07 22:45:05', '2026-06-07 22:45:05'),
(10, '2026-06-09 20:41:07', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:41:07', '2026-06-09 20:41:07'),
(11, '2026-06-09 20:41:46', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:41:46', '2026-06-09 20:41:46'),
(12, '2026-06-09 20:43:10', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:43:10', '2026-06-09 20:43:10'),
(13, '2026-06-09 20:43:54', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:43:54', '2026-06-09 20:43:54'),
(14, '2026-06-09 20:44:54', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:44:54', '2026-06-09 20:44:54'),
(15, '2026-06-09 20:45:51', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:45:51', '2026-06-09 20:45:51'),
(16, '2026-06-09 20:46:58', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:46:58', '2026-06-09 20:46:58'),
(17, '2026-06-09 20:47:14', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:47:14', '2026-06-09 20:47:14'),
(18, '2026-06-09 20:48:26', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:48:26', '2026-06-09 20:48:26'),
(19, '2026-06-09 20:49:17', 'Fauna', 'fauna chilena', 1, 0, 0, 1, NULL, '2026-06-09 20:49:17', '2026-06-09 20:49:17'),
(88, '2026-06-10 19:51:00', 'Fauna Chilena', 'Viaje...', 1, 0, 1, 5, NULL, '2026-06-10 19:51:00', '2026-06-12 05:58:27'),
(89, '2026-06-10 20:20:10', 'Fauna Argentina', 'Un poquito de ...', 0, 0, 0, 5, NULL, '2026-06-10 20:20:10', '2026-06-10 20:20:10'),
(92, '2026-06-12 01:04:08', 'FLORA DE  ARGENTINA', 'Lengua de fuego y cactus argentino', 1, 0, 0, 1, NULL, '2026-06-12 01:04:08', '2026-06-12 01:04:08'),
(95, '2026-06-12 04:39:45', 'animales de san luis', 'animalitos', 1, 0, 0, 1, NULL, '2026-06-12 04:39:45', '2026-06-12 04:39:45'),
(96, '2026-06-12 05:13:07', 'uñas estéticas', '', 1, 0, 0, 1, NULL, '2026-06-12 05:13:07', '2026-06-12 05:13:07'),
(97, '2026-06-12 05:55:02', 'tecnología', '', 1, 0, 0, 1, NULL, '2026-06-12 05:55:02', '2026-06-12 05:55:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sigue`
--

CREATE TABLE `sigue` (
  `id` int(11) NOT NULL,
  `idSeguidor` int(11) NOT NULL,
  `idSeguido` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sigue`
--

INSERT INTO `sigue` (`id`, `idSeguidor`, `idSeguido`, `fecha`) VALUES
(2, 1, 3, '2026-06-09 03:58:36'),
(3, 3, 2, '2026-06-09 05:01:25'),
(5, 2, 5, '2026-06-10 20:26:30'),
(6, 4, 5, '2026-06-10 21:37:23'),
(11, 1, 2, '2026-06-12 05:14:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `nick` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tipoUsuario` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `urlAvatar` varchar(255) NOT NULL,
  `anulado` tinyint(1) NOT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `deletedBy` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `nick`, `password`, `tipoUsuario`, `telefono`, `mail`, `urlAvatar`, `anulado`, `createdBy`, `deletedBy`, `createdAt`, `updatedAt`) VALUES
(1, 'NATALIA', 'SOAZO', 'natysoazo', '$2b$10$5J8BX8z.H3Ma0aH6XvcweuVPRBcd9YdQe7fSULdEwQxSsjIi6Q5IK', 'Usuario', '2664340978', 'natysoazo@gmail.com', 'nadaporAhora', 0, NULL, NULL, '2026-06-02 00:22:43', '2026-06-02 00:22:43'),
(2, 'EDUARDO', 'SOSA', 'eduSosa', '$2b$10$hJVCuYCFKFos.pO9J59eEueaGXVfIBOsQCKbVXbZuw.ESsjJRwGfe', 'Usuario', '2663456734', 'edusosa@gmail.com', 'nadaporAhora', 0, NULL, NULL, '2026-06-04 01:42:29', '2026-06-04 01:42:29'),
(3, 'LILA', 'GATICA', 'lilaGatica', '$2b$10$uETiWWLdTq4zpdEydP7ZGOFb3L.iOCDgWEVEho4tIAoYb2kUHhvUe', 'Usuario', '2664349867', 'lilagat@gmail.com', 'nadaporAhora', 0, NULL, NULL, '2026-06-04 02:29:18', '2026-06-04 02:29:18'),
(4, 'GERÓNIMO', 'BAL', 'geroBal', '$2b$10$xCXctuD985O/xxYzZa35menvX523PLDNeXkyuP2nes6CWpCtxzCvO', 'Usuario', '2553463787', 'gerobal@gmail.com', 'nadaporAhora', 0, NULL, NULL, '2026-06-07 22:43:26', '2026-06-07 22:43:26'),
(5, 'DANA', 'TEJEDA', 'chilenaFotografa', '$2b$10$WuoJ/p0rIpSKBSYHAqGjjOfRFuEW37s1kZm554R05rQLI0s5jJevi', 'Usuario', '2664346745', 'danat@gmail.com', 'nadaporAhora', 0, NULL, NULL, '2026-06-09 20:20:39', '2026-06-09 20:20:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votos`
--

CREATE TABLE `votos` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idImagen` int(11) NOT NULL,
  `estrellas` int(11) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `votos`
--

INSERT INTO `votos` (`id`, `fecha`, `idImagen`, `estrellas`, `idUsuario`, `createdAt`, `updatedAt`) VALUES
(7, '2026-06-09', 4, 4, 3, '2026-06-09 05:08:07', '2026-06-09 05:08:07'),
(8, '2026-06-09', 5, 5, 3, '2026-06-09 05:09:11', '2026-06-09 05:09:11'),
(9, '2026-06-09', 6, 5, 1, '2026-06-09 19:51:34', '2026-06-09 19:51:34'),
(11, '2026-06-10', 242, 5, 1, '2026-06-10 20:24:02', '2026-06-10 20:24:02'),
(12, '2026-06-10', 242, 4, 2, '2026-06-10 20:26:38', '2026-06-10 20:26:38'),
(13, '2026-06-10', 242, 4, 3, '2026-06-10 20:27:32', '2026-06-10 20:27:32'),
(14, '2026-06-10', 242, 5, 4, '2026-06-10 21:37:18', '2026-06-10 21:37:18'),
(15, '2026-06-12', 4, 5, 1, '2026-06-12 05:15:26', '2026-06-12 05:15:26'),
(16, '2026-06-12', 240, 5, 1, '2026-06-12 05:58:08', '2026-06-12 05:58:08');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comenta`
--
ALTER TABLE `comenta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idImagen` (`idImagen`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `denuncias`
--
ALTER TABLE `denuncias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idImagen` (`idImagen`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `etiquetapublicacions`
--
ALTER TABLE `etiquetapublicacions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPublicacion` (`idPublicacion`),
  ADD KEY `idEtiqueta` (`idEtiqueta`);

--
-- Indices de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPublicacion` (`idPublicacion`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idImagen` (`idImagen`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `sigue`
--
ALTER TABLE `sigue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idSeguidor` (`idSeguidor`),
  ADD KEY `idSeguido` (`idSeguido`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nick` (`nick`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD UNIQUE KEY `nick_2` (`nick`),
  ADD UNIQUE KEY `telefono_2` (`telefono`),
  ADD UNIQUE KEY `mail_2` (`mail`),
  ADD UNIQUE KEY `nick_3` (`nick`),
  ADD UNIQUE KEY `telefono_3` (`telefono`),
  ADD UNIQUE KEY `mail_3` (`mail`),
  ADD UNIQUE KEY `nick_4` (`nick`),
  ADD UNIQUE KEY `telefono_4` (`telefono`),
  ADD UNIQUE KEY `mail_4` (`mail`),
  ADD UNIQUE KEY `nick_5` (`nick`),
  ADD UNIQUE KEY `telefono_5` (`telefono`),
  ADD UNIQUE KEY `mail_5` (`mail`),
  ADD UNIQUE KEY `nick_6` (`nick`),
  ADD UNIQUE KEY `telefono_6` (`telefono`),
  ADD UNIQUE KEY `mail_6` (`mail`),
  ADD UNIQUE KEY `nick_7` (`nick`),
  ADD UNIQUE KEY `telefono_7` (`telefono`),
  ADD UNIQUE KEY `mail_7` (`mail`),
  ADD UNIQUE KEY `nick_8` (`nick`),
  ADD UNIQUE KEY `telefono_8` (`telefono`),
  ADD UNIQUE KEY `mail_8` (`mail`),
  ADD UNIQUE KEY `nick_9` (`nick`),
  ADD UNIQUE KEY `telefono_9` (`telefono`),
  ADD UNIQUE KEY `mail_9` (`mail`),
  ADD UNIQUE KEY `nick_10` (`nick`),
  ADD UNIQUE KEY `telefono_10` (`telefono`),
  ADD UNIQUE KEY `mail_10` (`mail`);

--
-- Indices de la tabla `votos`
--
ALTER TABLE `votos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idImagen` (`idImagen`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comenta`
--
ALTER TABLE `comenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `denuncias`
--
ALTER TABLE `denuncias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `etiquetapublicacions`
--
ALTER TABLE `etiquetapublicacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=263;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT de la tabla `sigue`
--
ALTER TABLE `sigue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `votos`
--
ALTER TABLE `votos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comenta`
--
ALTER TABLE `comenta`
  ADD CONSTRAINT `comenta_ibfk_59` FOREIGN KEY (`idImagen`) REFERENCES `imagenes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comenta_ibfk_60` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `denuncias`
--
ALTER TABLE `denuncias`
  ADD CONSTRAINT `denuncias_ibfk_59` FOREIGN KEY (`idImagen`) REFERENCES `imagenes` (`id`),
  ADD CONSTRAINT `denuncias_ibfk_60` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `etiquetapublicacions`
--
ALTER TABLE `etiquetapublicacions`
  ADD CONSTRAINT `etiquetapublicacions_ibfk_59` FOREIGN KEY (`idPublicacion`) REFERENCES `publicaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `etiquetapublicacions_ibfk_60` FOREIGN KEY (`idEtiqueta`) REFERENCES `etiquetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_86` FOREIGN KEY (`idPublicacion`) REFERENCES `publicaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `imagenes_ibfk_87` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `imagenes_ibfk_88` FOREIGN KEY (`idImagen`) REFERENCES `comenta` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `publicaciones_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sigue`
--
ALTER TABLE `sigue`
  ADD CONSTRAINT `sigue_ibfk_1` FOREIGN KEY (`idSeguidor`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `sigue_ibfk_2` FOREIGN KEY (`idSeguido`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `votos`
--
ALTER TABLE `votos`
  ADD CONSTRAINT `votos_ibfk_59` FOREIGN KEY (`idImagen`) REFERENCES `imagenes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `votos_ibfk_60` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
