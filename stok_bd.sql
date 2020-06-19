-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2020 a las 21:36:03
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_ibec`
--
CREATE DATABASE IF NOT EXISTS `prueba_ibec` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `prueba_ibec`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `ci` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`ci`, `nombre`) VALUES
(49405771, 'Martin Alvez'),
(49405772, 'Romina Martinez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idproducto` smallint(10) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `precio` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idproducto`, `descripcion`, `precio`) VALUES
(1, 'Laptop Acer', 350),
(2, 'Mouse Trust', 49),
(3, 'Teclado con Mousepad logitech ', 40),
(4, 'Monitor LCD Samsung 22\"', 120);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `id_producto` smallint(10) NOT NULL,
  `ci_cliente` int(11) NOT NULL,
  `cantidad` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`id_producto`, `ci_cliente`, `cantidad`) VALUES
(1, 49405771, 4),
(2, 49405771, 3),
(3, 49405772, 10),
(4, 49405772, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tel_clientes`
--

CREATE TABLE `tel_clientes` (
  `ci_cliente` int(11) NOT NULL,
  `num_telefono` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`ci`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproducto`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_producto`,`ci_cliente`),
  ADD KEY `stock_fk` (`ci_cliente`);

--
-- Indices de la tabla `tel_clientes`
--
ALTER TABLE `tel_clientes`
  ADD PRIMARY KEY (`ci_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idproducto` smallint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_fk` FOREIGN KEY (`ci_cliente`) REFERENCES `clientes` (`ci`),
  ADD CONSTRAINT `stock_fk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`idproducto`);

--
-- Filtros para la tabla `tel_clientes`
--
ALTER TABLE `tel_clientes`
  ADD CONSTRAINT `tel_clientes_fk` FOREIGN KEY (`ci_cliente`) REFERENCES `clientes` (`ci`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
