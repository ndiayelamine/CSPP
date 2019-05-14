-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generato il: Mar 18, 2017 alle 13:21
-- Versione del server: 5.6.35-log
-- Versione PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `msenegae_DbCspp`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `EVENTI`
--

CREATE TABLE IF NOT EXISTS `EVENTI` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `TIPO` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `MESSAGGIO` varchar(500) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `DATA_ORA` datetime NOT NULL,
  `NOME_UTENTE` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `TIMESTAMP_INS` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dump dei dati per la tabella `EVENTI`
--

INSERT INTO `EVENTI` (`ID`, `NOME`, `TIPO`, `MESSAGGIO`, `DATA_ORA`, `NOME_UTENTE`, `TIMESTAMP_INS`) VALUES
(1, 'Festa dell''indipendenza', 'anniversario', '57-esimo anniversario dell''indipendenza della nazione del Senegal', '2017-04-04 15:00:00', 'lamine.ndiaye', '2017-03-18 13:21:15');

-- --------------------------------------------------------

--
-- Struttura della tabella `MEMBRI`
--

CREATE TABLE IF NOT EXISTS `MEMBRI` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(50) NOT NULL,
  `COGNOME` varchar(50) NOT NULL,
  `TELEFONO` varchar(50) DEFAULT NULL,
  `NOME_UTENTE` varchar(50) NOT NULL,
  `PASSWORD_UTENTE` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `NOME_UTENTE` (`NOME_UTENTE`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dump dei dati per la tabella `MEMBRI`
--

INSERT INTO `MEMBRI` (`ID`, `NOME`, `COGNOME`, `TELEFONO`, `NOME_UTENTE`, `PASSWORD_UTENTE`) VALUES
(1, 'lamine', 'ndiaye', NULL, 'lamine.ndiaye', '01992'),
(2, 'mamadou', 'ndiaye', NULL, 'mamadou.ndiaye', 'cspp01'),
(3, 'fatyma', 'ndiaye', NULL, 'fatyma.ndiaye', 'cspp02'),
(4, 'abdou', 'ba', NULL, 'abdou.ba', 'cspp03'),
(5, 'ibrahima', 'diop', NULL, 'ibrahima.diop', 'cspp04'),
(6, 'asta', 'ndiaye', NULL, 'asta.ndiaye', 'cspp05'),
(7, 'aida', 'ndao', NULL, 'aida.ndao', 'cspp06'),
(8, 'djery', 'ndiaye', NULL, 'djery.ndiaye', 'cspp07'),
(9, 'cheikhouna', 'ndiaye', NULL, 'cheikhouna.ndiaye', 'cspp08'),
(10, 'abdourakhmane', 'diouf', NULL, 'abdourakhmane.diouf', 'cspp09');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
