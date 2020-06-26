-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2020 a las 21:51:31
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

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
  `ci` int(8) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `celular` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`ci`, `nombre`, `correo`, `celular`) VALUES
(48765671, 'Romina Lopez', 'romi_lo@hotmail.com', '095876123'),
(49405770, 'Leandro Marontes', 'leorecord@hotmail.com', '096108896'),
(49405771, 'Martin Alvarez', 'martincho@gmail.com', '099876532'),
(49405772, 'Romina Martinez', 'roma_2000@gmail.com', '091234565'),
(49405774, 'Roberta Lopez', 'leorecords@hotmail.com', '095418762'),
(49875671, 'Facundo Fernandez', 'facu_fernan@outlook.com', '094876154'),
(487657871, 'Lalo Porte', 'laloporte@hotmail.com', '096876267');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` smallint(4) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `precio` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `descripcion`, `precio`) VALUES
(1, 'Laptop Acer 17\"', 280),
(2, 'Mouse Trust', 49),
(3, 'Teclado con Mousepad logitech ', 40),
(4, 'Monitor LCD Samsung 22\"', 120),
(5, 'Teclado Trust', 40),
(6, 'Televisor LCD Samsung 50\"', 350);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `id` smallint(4) NOT NULL,
  `id_producto` smallint(4) NOT NULL,
  `ci_cliente` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`id`, `id_producto`, `ci_cliente`) VALUES
(8, 3, 49405770),
(9, 4, 49405770),
(10, 5, 487657871);

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
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`,`id_producto`,`ci_cliente`),
  ADD KEY `stock_fk` (`id_producto`),
  ADD KEY `stock_fk_1` (`ci_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` smallint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `id` smallint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_fk` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `stock_fk_1` FOREIGN KEY (`ci_cliente`) REFERENCES `clientes` (`ci`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
