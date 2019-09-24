-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Set 24, 2019 alle 12:03
-- Versione del server: 5.6.45-log
-- Versione PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `msenegae_DbCspp`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `EVENTI`
--

CREATE TABLE `EVENTI` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `TIPO` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `MESSAGGIO` varchar(500) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `DATA_ORA` datetime NOT NULL,
  `NOME_UTENTE` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `TIMESTAMP_INS` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `EVENTI`
--

INSERT INTO `EVENTI` (`ID`, `NOME`, `TIPO`, `MESSAGGIO`, `DATA_ORA`, `NOME_UTENTE`, `TIMESTAMP_INS`) VALUES
(2, 'Festa dell\'istruzione, 4Â° Edizione', 'Festa', 'La Festa inizierÃ  alle 10:00 e finirÃ ', '2018-12-23 21:00:00', 'lamine.ndiaye', '2018-11-25 16:15:42');

-- --------------------------------------------------------

--
-- Struttura della tabella `MEMBRI`
--

CREATE TABLE `MEMBRI` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(50) NOT NULL,
  `COGNOME` varchar(50) NOT NULL,
  `TELEFONO` varchar(50) DEFAULT NULL,
  `NOME_UTENTE` varchar(50) NOT NULL,
  `PASSWORD` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `MEMBRI`
--

INSERT INTO `MEMBRI` (`ID`, `NOME`, `COGNOME`, `TELEFONO`, `NOME_UTENTE`, `PASSWORD`) VALUES
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

-- --------------------------------------------------------

--
-- Struttura della tabella `VIDEO`
--

CREATE TABLE `VIDEO` (
  `id` int(11) NOT NULL,
  `url_video` varchar(500) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `nome` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `descrizione` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `url_immagine` varchar(500) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `VIDEO`
--

INSERT INTO `VIDEO` (`id`, `url_video`, `nome`, `descrizione`, `url_immagine`) VALUES
(8, 'https://youtu.be/uxsTnvIYKOo', 'Festa dell\'Istruzione Parte 1', 'Festa dell\'Istruzione 2018', 'https://img.youtube.com/vi/uxsTnvIYKOo/0.jpg'),
(9, 'https://youtu.be/mf9LbUyaeOg', 'Festa dell\'Istruzione Parte 2', 'Festa dell\'Istruzione 2018', 'https://img.youtube.com/vi/mf9LbUyaeOg/0.jpg'),
(10, 'https://youtu.be/GHtv4v2FtD4', 'Festa dell\'Istruzione Parte 3', 'Festa dell\'Istruzione 2018', 'https://img.youtube.com/vi/GHtv4v2FtD4/0.jpg'),
(11, 'https://youtu.be/l7kFjFNL-fw', 'Dichiarazione nuovo presidente ', 'Dichiarazione nuovo presidente ', 'https://img.youtube.com/vi/l7kFjFNL-fw/0.jpg');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `EVENTI`
--
ALTER TABLE `EVENTI`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `MEMBRI`
--
ALTER TABLE `MEMBRI`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NOME_UTENTE` (`NOME_UTENTE`);

--
-- Indici per le tabelle `VIDEO`
--
ALTER TABLE `VIDEO`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `EVENTI`
--
ALTER TABLE `EVENTI`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `MEMBRI`
--
ALTER TABLE `MEMBRI`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `VIDEO`
--
ALTER TABLE `VIDEO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
