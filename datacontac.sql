-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Bulan Mei 2023 pada 12.41
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datacontac`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `contac`
--

CREATE TABLE `contac` (
  `id` int(11) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `nohp` varchar(20) NOT NULL,
  `wilayah` varchar(14) NOT NULL,
  `tangal_masuk` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `contac`
--

INSERT INTO `contac` (`id`, `nama`, `nohp`, `wilayah`, `tangal_masuk`) VALUES
(1, 'udin', '088809075832', 'lolipopelo', '2021-12-24'),
(7, 'kunil', '083253623', 'polokilop', '2021-12-24'),
(8, '<h2>okok</h2>', '09875434', 'polokilop', '2021-12-25'),
(9, 'surudin', '087625361', 'polokilop', '2021-12-23'),
(12, 'kojil', '088809075832', 'jL kaliko', '2021-12-26'),
(13, 'kuridon', '08876832334', 'jL kaliko', '2021-12-26'),
(15, 'kopil', '098576784324', 'depok', '2021-12-28'),
(16, 'lop', '076545623', 'lolipopelo', '2021-12-27'),
(17, 'jamali', '0871524345', 'depok', '2021-12-28'),
(18, 'lopor', '456788765432', 'depok', '2021-12-28'),
(19, 'kuridon', '08876832334', 'depok', '2021-12-28'),
(20, 'qwedg', '456788765432', 'lolipop', '2021-12-20'),
(21, 'dodol', '0456784323', 'hudel', '2021-12-31'),
(22, 'dodol', '0456784323', 'hudel', '2021-12-31'),
(23, 'lijko', '045665243452', 'lolipop', '2021-12-31'),
(24, 'pkjiijn', '054325367474', 'hyujkiol', '2021-12-31'),
(25, 'polki', '0876123487654', 'depok', '2021-12-28'),
(26, '987ertyu', '3456uu43234', 'ytrerhjkj', '2021-12-31'),
(27, 'JOPI', '08434523264', 'bandong', '2022-01-01'),
(28, 'oiu', '054432425', 'depok', '2022-01-01'),
(29, 'kuridon', '456788765432', '23456yu', '2022-01-01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_pengguna` int(11) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `lokasi` varchar(20) NOT NULL,
  `hak_akses` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_pengguna`, `nama`, `username`, `password`, `lokasi`, `hak_akses`) VALUES
(1, 'udin ', 'udin', 'udin26', 'bogor ', 'admin'),
(2, 'jamal', 'jamal77', 'jamal77', 'bogor', 'user'),
(4, 'ucup', 'ucu76', 'ucup76', 'bandong', 'user'),
(5, 'popi', 'popi77', 'popi77', 'popi', 'user'),
(6, 'nato', 'nato78', 'nato78', 'nato', 'user');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `contac`
--
ALTER TABLE `contac`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_pengguna`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `contac`
--
ALTER TABLE `contac`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_pengguna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
