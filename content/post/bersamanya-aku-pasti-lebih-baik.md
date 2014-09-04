---
draft: false
title: "Bersamanya Aku Pasti ..."
description: "Bersamamu aku merasa ..."
date : "2014-09-04"
categories:
  - "myself"
tags:
  - "development"
  - "vagrant"
  - "code"
---

## Berkenal dengan Vagrant! - Bagian I

<center>
	![](http://i.imgur.com/9xWmn1L.png "Vagrant")
</center>

Wut, apa lagi ini :v ... kawkakwakw ... Yap vagrant , ane sudah mengenal lebih kurang beberapa tahun belakang ini. Vagrant menurut yang saya kutip dari [sini](https://docs.vagrantup.com/v2/why-vagrant/) adalah  sebuah program yang memanfaatkan teknologi Mesin Virtual (VirtualBOX, VMWare, AWS dll) yang memungkinkan kita untuk membuat lingkungan development software secara portable, mudah di duplikasi, konsisten, sehingga proses pengembangan lebih fleksibel. Vagrant ini sendiri merupakan Open-Source software bisa di lihat di [github](https://github.com/mitchellh/vagrant)

##  Keuntungan menggunakan Vagrant

Well bicara keuntungan , menurut saya banyak juga untungnya menggunakan vagrant ketika membuat suastu sistem (web development). 

Karena proyek kita dijalankan dalam lingkungan virtual yang sama persis atau identik dengan lingkungan saat kita melakukkan development, ini artinya apapun sistem operasi teman atau anggota tim kita, asalkan mereka memiliki VM dan Vagrant terinstall, maka proyek bisa jalan dengan baik.

Bahkan untuk designer yang tidak mengetahui cara menghidupkan server misalnya, hanya dengan satu buah command, maka mesin virtual akan hidup dan projek kita langsung aktif di dalamnya.

Karena sifatnya yang portable, ini artinya lingkungan virtual proyek yang kita kerjakan dengan mudah di transfer atau di copy ke PC/laptop lain dengan catatan sudah terinstal VM dan Vagrant juga disana. Dan ketika dijalankan maka hasilnya akan sama.

## Cara Kerja Vagrant

Dibalik semua keuntungan yang bisa kita peroleh menggunakkan Vagrant, pada dasarnya prinsip kerjanya cukup sederhana.

Hal pertama yang dilakukan adalah memilih Sistem Operasi, OS apa yang akan kita pasang di VM tersebut, misalkan kita pakai Ubuntu server. Ini juga menyangkut konsistensi, misalkan aplikasi web kita nantinya akan di hosting pada Ubuntu server, maka sekalian kita developnya di Ubuntu server juga. Bisa dilihat [daftar](http://www.vagrantbox.es/) OS apa saja yang ada.

Vagrant bekerja memanfaatkan Mesin Virtual  (misalnya VirtualBox atau VMWare), melalui vagrant kita bisa mengaktifkan VM tersebut, dan setelah mesin tersebut aktif kita bisa perintahkan Vagrant untuk menginstall semua program-program pendukung untuk menjalankan projek dengan sempurna dan menyimpan semua konfigurasi VM melalui Vagrant.

Ketika akan di duplikasi dan didistribusikan ke anggota team, apapun OS yang mereka gunakan untuk bekerja, maka ketika diaktifkan dengan Vagrant maka VM akan menjalankan Ubuntu server juga, dengan segala konfigurasi yang sama seperti kita set sebelumnya.

Well sampai di sini dulu , sampai berjumpa di postingan yang lain :p