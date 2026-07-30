-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-07-2026 a las 20:09:16
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
-- Estructura de tabla para la tabla `colecciones`
--

CREATE TABLE `colecciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colecciones`
--

INSERT INTO `colecciones` (`id`, `nombre`, `idUsuario`) VALUES
(1, 'Favoritos', 1),
(2, 'Favoritos', 2),
(3, 'Favoritos', 3),
(4, 'Favoritos', 4),
(5, 'Favoritos', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comenta`
--

CREATE TABLE `comenta` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
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
(1, '2026-07-30 00:11:34', 1, 'Interesante...', 2, '2026-07-30 00:11:34', '2026-07-30 00:11:34'),
(2, '2026-07-30 16:37:33', 2, 'Lindo', 4, '2026-07-30 16:37:33', '2026-07-30 16:37:33'),
(3, '2026-07-30 16:38:19', 4, 'Lindo', 4, '2026-07-30 16:38:19', '2026-07-30 16:38:19'),
(4, '2026-07-30 16:39:09', 6, 'Para qmis peques', 4, '2026-07-30 16:39:09', '2026-07-30 16:39:09'),
(5, '2026-07-30 16:39:55', 11, 'Donde es??', 4, '2026-07-30 16:39:55', '2026-07-30 16:39:55'),
(6, '2026-07-30 16:40:52', 20, 'LLama, guanaco o Vicuña?', 4, '2026-07-30 16:40:52', '2026-07-30 16:40:52'),
(7, '2026-07-30 17:07:54', 12, 'bonito', 1, '2026-07-30 17:07:54', '2026-07-30 17:07:54'),
(8, '2026-07-30 17:11:33', 2, 'Re lindo!', 2, '2026-07-30 17:11:33', '2026-07-30 17:11:33'),
(9, '2026-07-30 17:12:47', 3, 'excelente', 2, '2026-07-30 17:12:47', '2026-07-30 17:12:47'),
(10, '2026-07-30 17:13:53', 5, 'rr', 2, '2026-07-30 17:13:53', '2026-07-30 17:13:53'),
(11, '2026-07-30 17:14:33', 8, 'Se ve muy clarita', 2, '2026-07-30 17:14:33', '2026-07-30 17:14:33'),
(12, '2026-07-30 17:15:42', 21, 'Cuales son las concesionarias que lo tienen??', 3, '2026-07-30 17:15:42', '2026-07-30 17:15:42'),
(13, '2026-07-30 17:16:07', 22, 'execelente', 3, '2026-07-30 17:16:07', '2026-07-30 17:16:07'),
(14, '2026-07-30 17:17:30', 2, 'Lindos colores', 3, '2026-07-30 17:17:30', '2026-07-30 17:17:30'),
(15, '2026-07-30 17:18:02', 18, 'Me gustó mucho tomar esta foto.\r\n', 3, '2026-07-30 17:18:02', '2026-07-30 17:18:02');

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
(1, '2026-07-30', 1, 'x', 'x', 2, '2026-07-30 03:48:33', '2026-07-30 03:48:33'),
(2, '2026-07-30', 2, 'x', 'x', 4, '2026-07-30 16:38:05', '2026-07-30 16:38:05'),
(3, '2026-07-30', 4, 'x', 'x', 4, '2026-07-30 16:38:30', '2026-07-30 16:38:30'),
(4, '2026-07-30', 6, 'x', 'x', 4, '2026-07-30 16:39:23', '2026-07-30 16:39:23'),
(5, '2026-07-30', 11, 'x', 'x', 4, '2026-07-30 16:40:02', '2026-07-30 16:40:02'),
(6, '2026-07-30', 12, 'x', 'x', 1, '2026-07-30 17:08:09', '2026-07-30 17:08:09'),
(7, '2026-07-30', 6, 'x', 'x', 2, '2026-07-30 17:10:29', '2026-07-30 17:10:29'),
(8, '2026-07-30', 4, 'x', 'x', 2, '2026-07-30 17:10:55', '2026-07-30 17:10:55'),
(9, '2026-07-30', 2, 'x', 'x', 2, '2026-07-30 17:11:09', '2026-07-30 17:11:09'),
(10, '2026-07-30', 4, 'x', 'x', 3, '2026-07-30 17:16:23', '2026-07-30 17:16:23'),
(11, '2026-07-30', 6, 'x', 'x', 3, '2026-07-30 17:16:40', '2026-07-30 17:16:40'),
(12, '2026-07-30', 2, 'x', 'x', 3, '2026-07-30 17:16:56', '2026-07-30 17:16:56');

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
(2, 2, 2),
(3, 3, 3),
(4, 3, 4),
(5, 4, 3),
(6, 4, 4),
(9, 6, 5),
(10, 6, 6),
(11, 7, 7),
(12, 8, 8),
(13, 9, 9),
(14, 9, 10);

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
(1, 'moda', NULL),
(2, 'niñas', NULL),
(3, 'chile', NULL),
(4, 'paseo', NULL),
(5, 'argentina', NULL),
(6, 'fauna', NULL),
(7, 'autos', NULL),
(8, 'flora', NULL),
(9, 'cultura', NULL),
(10, 'oriente', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `idColeccion` int(11) NOT NULL,
  `idPublicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `urlImagen`, `licencia`, `idPublicacion`, `idUsuario`, `createdAt`, `updatedAt`) VALUES
(1, './uploads/moda5.jpeg', 'Default', 1, 1, '2026-07-29 23:57:31', '2026-07-29 23:57:31'),
(2, './uploads/moda4.jpg', 'Default', 1, 1, '2026-07-29 23:57:31', '2026-07-29 23:57:31'),
(3, './uploads/moda3.jpeg', 'Default', 1, 1, '2026-07-29 23:57:31', '2026-07-29 23:57:31'),
(4, './uploads/moda2.jpeg', 'Default', 1, 1, '2026-07-29 23:57:31', '2026-07-29 23:57:31'),
(5, './uploads/WhatsApp Image 2026-07-06 at 19.10.20.jpeg', 'Copyright', 2, 1, '2026-07-30 00:02:04', '2026-07-30 00:02:04'),
(6, './uploads/WhatsApp Image 2026-07-06 at 19.10.19 (1).jpeg', 'Copyright', 2, 1, '2026-07-30 00:02:04', '2026-07-30 00:02:04'),
(7, './uploads/WhatsApp Image 2026-07-06 at 19.10.18.jpeg', 'Copyright', 2, 1, '2026-07-30 00:02:04', '2026-07-30 00:02:04'),
(8, './uploads/WhatsApp Image 2026-07-06 at 19.06.29.jpeg', 'Copyright', 2, 1, '2026-07-30 00:02:04', '2026-07-30 00:02:04'),
(9, './uploads/53208-chinchilla@2x.jpg', 'Copyright', 3, 3, '2026-07-30 16:22:44', '2026-07-30 16:22:44'),
(10, './uploads/faunacgule3.jpg', 'Copyright', 3, 3, '2026-07-30 16:22:44', '2026-07-30 16:22:44'),
(11, './uploads/faunaChile2.jpg', 'Copyright', 3, 3, '2026-07-30 16:22:44', '2026-07-30 16:22:44'),
(12, './uploads/53208-chinchilla@2x.jpg', 'Default', 4, 3, '2026-07-30 16:24:16', '2026-07-30 16:24:16'),
(13, './uploads/faunacgule3.jpg', 'Default', 4, 3, '2026-07-30 16:24:16', '2026-07-30 16:24:16'),
(14, './uploads/faunaChile2.jpg', 'Default', 4, 3, '2026-07-30 16:24:16', '2026-07-30 16:24:16'),
(18, './uploads/puma-fauna-argentina (1).jpg', 'Copyright', 6, 3, '2026-07-30 16:31:48', '2026-07-30 16:31:48'),
(19, './uploads/faunaArgetina2.jpeg', 'Copyright', 6, 3, '2026-07-30 16:31:48', '2026-07-30 16:31:48'),
(20, './uploads/fauna Argetina.jpeg', 'Copyright', 6, 3, '2026-07-30 16:31:48', '2026-07-30 16:31:48'),
(21, './uploads/autos2026-3.jpeg', 'Default', 7, 4, '2026-07-30 16:34:53', '2026-07-30 16:34:53'),
(22, './uploads/autos2026-2.jpeg', 'Default', 7, 4, '2026-07-30 16:34:53', '2026-07-30 16:34:53'),
(23, './uploads/autos2026.jpeg', 'Default', 7, 4, '2026-07-30 16:34:53', '2026-07-30 16:34:53'),
(24, './uploads/lengua-de-fuego.png', 'Default', 8, 4, '2026-07-30 16:36:30', '2026-07-30 16:36:30'),
(25, './uploads/flora autoctona.jpeg', 'Default', 8, 4, '2026-07-30 16:36:30', '2026-07-30 16:36:30'),
(26, './uploads/chino3.jpg', 'Default', 9, 5, '2026-07-30 16:43:29', '2026-07-30 16:43:29'),
(27, './uploads/chino2.jpg', 'Default', 9, 5, '2026-07-30 16:43:29', '2026-07-30 16:43:29'),
(28, './uploads/chino1.jpg', 'Default', 9, 5, '2026-07-30 16:43:29', '2026-07-30 16:43:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `intereses`
--

CREATE TABLE `intereses` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `idImagen` int(11) NOT NULL,
  `usuarioInteresado` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `intereses`
--

INSERT INTO `intereses` (`id`, `fecha`, `idImagen`, `usuarioInteresado`, `createdAt`, `updatedAt`) VALUES
(1, '2026-07-30 00:15:56', 6, 2, '2026-07-30 00:15:56', '2026-07-30 00:15:56'),
(2, '2026-07-30 16:39:16', 6, 4, '2026-07-30 16:39:16', '2026-07-30 16:39:16'),
(3, '2026-07-30 16:39:44', 11, 4, '2026-07-30 16:39:44', '2026-07-30 16:39:44'),
(4, '2026-07-30 16:41:00', 20, 4, '2026-07-30 16:41:00', '2026-07-30 16:41:00'),
(5, '2026-07-30 17:09:24', 20, 1, '2026-07-30 17:09:24', '2026-07-30 17:09:24'),
(6, '2026-07-30 17:13:41', 5, 2, '2026-07-30 17:13:41', '2026-07-30 17:13:41'),
(7, '2026-07-30 17:14:18', 8, 2, '2026-07-30 17:14:18', '2026-07-30 17:14:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE `notificaciones` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idUsuarioReceptor` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `mensaje` varchar(255) NOT NULL,
  `URL` varchar(255) NOT NULL,
  `leido` tinyint(1) NOT NULL,
  `idUsuarioEmisor` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `notificaciones`
--

INSERT INTO `notificaciones` (`id`, `fecha`, `idUsuarioReceptor`, `tipo`, `mensaje`, `URL`, `leido`, `idUsuarioEmisor`, `createdAt`, `updatedAt`) VALUES
(1, '2026-07-29', 1, 'Seguimiento', 'eduSosa Ha comenzado a seguirte ', '/verPerfil2', 1, 2, '2026-07-30 00:11:06', '2026-07-30 17:01:05'),
(2, '2026-07-29', 1, 'Comentario', 'eduSosa ha comentado tu imagen', '/imagen/1', 0, 2, '2026-07-30 00:11:34', '2026-07-30 00:11:34'),
(3, '2026-07-29', 1, 'Voto', 'eduSosa Ha valorado tu imagen', '/imagen/6', 1, 2, '2026-07-30 00:15:46', '2026-07-30 17:01:43'),
(4, '2026-07-29', 1, 'Me Interesa', 'eduSosa desea adquirir tu imagen ', '/imagen/6', 0, 2, '2026-07-30 00:15:56', '2026-07-30 00:15:56'),
(5, '2026-07-30', 1, 'Seguimiento', 'lilaGatica Ha comenzado a seguirte ', '/verPerfil3', 1, 3, '2026-07-30 16:29:08', '2026-07-30 17:00:59'),
(6, '2026-07-30', 1, 'Comentario', 'geroBal ha comentado tu imagen', '/imagen/2', 1, 4, '2026-07-30 16:37:33', '2026-07-30 17:00:42'),
(7, '2026-07-30', 1, 'Voto', 'geroBal Ha valorado tu imagen', '/imagen/2', 1, 4, '2026-07-30 16:37:53', '2026-07-30 17:01:54'),
(8, '2026-07-30', 1, 'Comentario', 'geroBal ha comentado tu imagen', '/imagen/4', 1, 4, '2026-07-30 16:38:19', '2026-07-30 17:01:14'),
(9, '2026-07-30', 1, 'Voto', 'geroBal Ha valorado tu imagen', '/imagen/4', 0, 4, '2026-07-30 16:38:24', '2026-07-30 16:38:24'),
(10, '2026-07-30', 1, 'Comentario', 'geroBal ha comentado tu imagen', '/imagen/6', 1, 4, '2026-07-30 16:39:09', '2026-07-30 17:01:10'),
(11, '2026-07-30', 1, 'Voto', 'geroBal Ha valorado tu imagen', '/imagen/6', 1, 4, '2026-07-30 16:39:13', '2026-07-30 17:09:47'),
(12, '2026-07-30', 1, 'Me Interesa', 'geroBal desea adquirir tu imagen ', '/imagen/6', 1, 4, '2026-07-30 16:39:16', '2026-07-30 17:01:47'),
(13, '2026-07-30', 3, 'Me Interesa', 'geroBal desea adquirir tu imagen ', '/imagen/11', 0, 4, '2026-07-30 16:39:45', '2026-07-30 16:39:45'),
(14, '2026-07-30', 3, 'Comentario', 'geroBal ha comentado tu imagen', '/imagen/11', 0, 4, '2026-07-30 16:39:55', '2026-07-30 16:39:55'),
(15, '2026-07-30', 3, 'Comentario', 'geroBal ha comentado tu imagen', '/imagen/20', 0, 4, '2026-07-30 16:40:52', '2026-07-30 16:40:52'),
(16, '2026-07-30', 3, 'Voto', 'geroBal Ha valorado tu imagen', '/imagen/20', 0, 4, '2026-07-30 16:40:57', '2026-07-30 16:40:57'),
(17, '2026-07-30', 3, 'Me Interesa', 'geroBal desea adquirir tu imagen ', '/imagen/20', 0, 4, '2026-07-30 16:41:00', '2026-07-30 16:41:00'),
(18, '2026-07-30', 3, 'Comentario', 'natysoazo ha comentado tu imagen', '/imagen/12', 0, 1, '2026-07-30 17:07:54', '2026-07-30 17:07:54'),
(19, '2026-07-30', 3, 'Voto', 'natysoazo Ha valorado tu imagen', '/imagen/12', 0, 1, '2026-07-30 17:08:01', '2026-07-30 17:08:01'),
(20, '2026-07-30', 3, 'Seguimiento', 'natysoazo Ha comenzado a seguirte ', '/verPerfil1', 0, 1, '2026-07-30 17:08:34', '2026-07-30 17:08:34'),
(21, '2026-07-30', 3, 'Voto', 'natysoazo Ha valorado tu imagen', '/imagen/20', 0, 1, '2026-07-30 17:09:21', '2026-07-30 17:09:21'),
(22, '2026-07-30', 3, 'Me Interesa', 'natysoazo desea adquirir tu imagen ', '/imagen/20', 0, 1, '2026-07-30 17:09:24', '2026-07-30 17:09:24'),
(23, '2026-07-30', 1, 'Comentario', 'eduSosa ha comentado tu imagen', '/imagen/2', 0, 2, '2026-07-30 17:11:33', '2026-07-30 17:11:33'),
(24, '2026-07-30', 1, 'Comentario', 'eduSosa ha comentado tu imagen', '/imagen/3', 0, 2, '2026-07-30 17:12:47', '2026-07-30 17:12:47'),
(25, '2026-07-30', 1, 'Voto', 'eduSosa Ha valorado tu imagen', '/imagen/3', 0, 2, '2026-07-30 17:12:52', '2026-07-30 17:12:52'),
(26, '2026-07-30', 1, 'Voto', 'eduSosa Ha valorado tu imagen', '/imagen/4', 0, 2, '2026-07-30 17:13:11', '2026-07-30 17:13:11'),
(27, '2026-07-30', 1, 'Me Interesa', 'eduSosa desea adquirir tu imagen ', '/imagen/5', 0, 2, '2026-07-30 17:13:41', '2026-07-30 17:13:41'),
(28, '2026-07-30', 1, 'Comentario', 'eduSosa ha comentado tu imagen', '/imagen/5', 0, 2, '2026-07-30 17:13:53', '2026-07-30 17:13:53'),
(29, '2026-07-30', 1, 'Me Interesa', 'eduSosa desea adquirir tu imagen ', '/imagen/8', 0, 2, '2026-07-30 17:14:18', '2026-07-30 17:14:18'),
(30, '2026-07-30', 1, 'Voto', 'eduSosa Ha valorado tu imagen', '/imagen/8', 0, 2, '2026-07-30 17:14:25', '2026-07-30 17:14:25'),
(31, '2026-07-30', 1, 'Comentario', 'eduSosa ha comentado tu imagen', '/imagen/8', 0, 2, '2026-07-30 17:14:33', '2026-07-30 17:14:33'),
(32, '2026-07-30', 4, 'Voto', 'lilaGatica Ha valorado tu imagen', '/imagen/21', 0, 3, '2026-07-30 17:15:18', '2026-07-30 17:15:18'),
(33, '2026-07-30', 4, 'Comentario', 'lilaGatica ha comentado tu imagen', '/imagen/21', 0, 3, '2026-07-30 17:15:42', '2026-07-30 17:15:42'),
(34, '2026-07-30', 4, 'Voto', 'lilaGatica Ha valorado tu imagen', '/imagen/22', 0, 3, '2026-07-30 17:16:00', '2026-07-30 17:16:00'),
(35, '2026-07-30', 4, 'Comentario', 'lilaGatica ha comentado tu imagen', '/imagen/22', 0, 3, '2026-07-30 17:16:07', '2026-07-30 17:16:07'),
(36, '2026-07-30', 1, 'Comentario', 'lilaGatica ha comentado tu imagen', '/imagen/2', 0, 3, '2026-07-30 17:17:30', '2026-07-30 17:17:30'),
(37, '2026-07-30', 3, 'Comentario', 'lilaGatica ha comentado tu imagen', '/imagen/18', 0, 3, '2026-07-30 17:18:02', '2026-07-30 17:18:02');

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
  `isClose` tinyint(1) DEFAULT 0,
  `bajada` tinyint(1) DEFAULT 0,
  `idUsuario` int(11) DEFAULT NULL,
  `deletedBy` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `fecha`, `titulo`, `descripcion`, `copyright`, `isClose`, `bajada`, `idUsuario`, `deletedBy`, `createdAt`, `updatedAt`) VALUES
(1, '2026-07-29 23:57:31', 'moda 2026', 'moda de la temporada', 0, 0, 1, 1, NULL, '2026-07-29 23:57:31', '2026-07-29 23:57:31'),
(2, '2026-07-30 00:01:58', 'infatiles', 'imagenes para posteos infantiles', 1, 0, 0, 1, NULL, '2026-07-30 00:01:58', '2026-07-30 00:01:58'),
(3, '2026-07-30 16:22:43', 'chile', 'fauna de chile', 1, 0, 0, 3, NULL, '2026-07-30 16:22:43', '2026-07-30 16:22:43'),
(4, '2026-07-30 16:24:16', 'fauna chile', 'xx', 0, 0, 0, 3, NULL, '2026-07-30 16:24:16', '2026-07-30 16:24:16'),
(6, '2026-07-30 16:31:48', 'fauna argentina', 'xx', 1, 0, 0, 3, NULL, '2026-07-30 16:31:48', '2026-07-30 16:31:48'),
(7, '2026-07-30 16:34:53', 'autos 2026', 'las novedades...', 0, 0, 0, 4, NULL, '2026-07-30 16:34:53', '2026-07-30 16:34:53'),
(8, '2026-07-30 16:36:30', 'fauna autóctona argentina', 'aseando por las provincias...', 0, 0, 0, 4, NULL, '2026-07-30 16:36:30', '2026-07-30 16:36:30'),
(9, '2026-07-30 16:43:29', 'orientales famosos', 'xx', 0, 0, 0, 5, NULL, '2026-07-30 16:43:29', '2026-07-30 16:43:29');

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
(1, 2, 1, '2026-07-30 00:11:06'),
(2, 3, 1, '2026-07-30 16:29:08'),
(3, 1, 3, '2026-07-30 17:08:34');

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
(1, 'NATALIA ', 'SOAZO', 'natysoazo', '$2b$10$M0Y17k1ozmp12K2y9C.9WOQQqLb2UmKBsLMSE2fF3r8xqWbVYLoNW', 'Validador', '2665342567', 'natysoazo@gmail.com', 'nadaporAhora', 0, NULL, NULL, '2026-07-29 23:48:34', '2026-07-29 23:48:34'),
(2, 'EDUARDO', 'SOSA', 'eduSosa', '$2b$10$iB32fY0FYaDjWpxgNWa9OOXLwT8uiNoDkwNtZweq23FSewvPQ4cR.', 'Usuario', '276483997', 'edusosa@gmail.com', 'nadaporAhora', 0, NULL, NULL, '2026-07-30 00:04:07', '2026-07-30 00:04:07'),
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
(1, '2026-07-29', 6, 5, 2, '2026-07-30 00:15:46', '2026-07-30 00:15:46'),
(2, '2026-07-30', 2, 4, 4, '2026-07-30 16:37:53', '2026-07-30 16:37:53'),
(3, '2026-07-30', 4, 5, 4, '2026-07-30 16:38:24', '2026-07-30 16:38:24'),
(4, '2026-07-30', 6, 5, 4, '2026-07-30 16:39:13', '2026-07-30 16:39:13'),
(5, '2026-07-30', 20, 5, 4, '2026-07-30 16:40:57', '2026-07-30 16:40:57'),
(6, '2026-07-30', 12, 5, 1, '2026-07-30 17:08:01', '2026-07-30 17:08:01'),
(7, '2026-07-30', 20, 5, 1, '2026-07-30 17:09:21', '2026-07-30 17:09:21'),
(8, '2026-07-30', 3, 5, 2, '2026-07-30 17:12:52', '2026-07-30 17:12:52'),
(9, '2026-07-30', 4, 5, 2, '2026-07-30 17:13:11', '2026-07-30 17:13:11'),
(10, '2026-07-30', 8, 4, 2, '2026-07-30 17:14:25', '2026-07-30 17:14:25'),
(11, '2026-07-30', 21, 3, 3, '2026-07-30 17:15:18', '2026-07-30 17:15:18'),
(12, '2026-07-30', 22, 4, 3, '2026-07-30 17:16:00', '2026-07-30 17:16:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `colecciones`
--
ALTER TABLE `colecciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

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
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `favoritos_id_coleccion_id_publicacion` (`idColeccion`,`idPublicacion`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPublicacion` (`idPublicacion`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `intereses`
--
ALTER TABLE `intereses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idImagen` (`idImagen`),
  ADD KEY `usuarioInteresado` (`usuarioInteresado`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuarioReceptor` (`idUsuarioReceptor`),
  ADD KEY `idUsuarioEmisor` (`idUsuarioEmisor`);

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
  ADD UNIQUE KEY `mail` (`mail`);

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
-- AUTO_INCREMENT de la tabla `colecciones`
--
ALTER TABLE `colecciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `comenta`
--
ALTER TABLE `comenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `denuncias`
--
ALTER TABLE `denuncias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `etiquetapublicacions`
--
ALTER TABLE `etiquetapublicacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `intereses`
--
ALTER TABLE `intereses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `sigue`
--
ALTER TABLE `sigue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `votos`
--
ALTER TABLE `votos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `colecciones`
--
ALTER TABLE `colecciones`
  ADD CONSTRAINT `colecciones_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `comenta`
--
ALTER TABLE `comenta`
  ADD CONSTRAINT `comenta_ibfk_1` FOREIGN KEY (`idImagen`) REFERENCES `imagenes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comenta_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `denuncias`
--
ALTER TABLE `denuncias`
  ADD CONSTRAINT `denuncias_ibfk_1` FOREIGN KEY (`idImagen`) REFERENCES `imagenes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `denuncias_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `etiquetapublicacions`
--
ALTER TABLE `etiquetapublicacions`
  ADD CONSTRAINT `etiquetapublicacions_ibfk_1` FOREIGN KEY (`idPublicacion`) REFERENCES `publicaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `etiquetapublicacions_ibfk_2` FOREIGN KEY (`idEtiqueta`) REFERENCES `etiquetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`idColeccion`) REFERENCES `colecciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`idPublicacion`) REFERENCES `publicaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `imagenes_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `intereses`
--
ALTER TABLE `intereses`
  ADD CONSTRAINT `intereses_ibfk_1` FOREIGN KEY (`idImagen`) REFERENCES `imagenes` (`id`),
  ADD CONSTRAINT `intereses_ibfk_2` FOREIGN KEY (`usuarioInteresado`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD CONSTRAINT `notificaciones_ibfk_1` FOREIGN KEY (`idUsuarioReceptor`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `notificaciones_ibfk_2` FOREIGN KEY (`idUsuarioEmisor`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

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
  ADD CONSTRAINT `votos_ibfk_1` FOREIGN KEY (`idImagen`) REFERENCES `imagenes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `votos_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
