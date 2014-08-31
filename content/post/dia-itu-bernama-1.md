---
draft: false
title: "Dia itu bernama ..."
description: "Aku pun mulai hanyut dalam alunan dia ..."
date : "2014-08-31"
categories:
  - "myself"
tags:
  - "development"
  - "golang"
  - "code"
---

![](http://i.imgur.com/CD1mb6j.jpg)

# Intro

Dia itu bernama... ya dia itu bernama Go (Go Programming atau Golang) bahasa pemograman yang diciptakan oleh Google. Bahasa pemrograman ini mirip seperti C (mohon dikoreksi). Go sendiri sudah kembangkan sejak tahun 2007 dan diperkenalkan ke publik tahun 2009 (dikutip dari Wikipedia). 

Sebenarnya sih saya ingin memberikan tutorial [installasi Go](http://golang.org/doc/install/source) di Ubuntu, ya walaupun sudah banyak yang membuat artikel tersebut , tapi menurut saya lebih baik terlambat daripada tidak sama sekali. Saya menggunakan Ubuntu x86_64 (64 bit) jadi sesuaikan dengan OS yang Anda pakai. Silahkan masuk ke halaman [ini](http://golang.org/dl/).

```
$ wget http://wordpress.org/latest.tar.gz -O - | tar -xz
```
Masuk ke direktori src dan silahkan _compile_ (lihat perintah di bawah ini)

```
$ cd go/src
$ ./all.bash
```
Proses _compile_ tidak terlalu lama , lebih baik ditunggu. Jika nanti muncul pesan seperti di bawah ini berarti proses _compile_ sudah berhasil.

```
ALL TESTS PASSED

---
Installed Go for linux/amd64 in /home/you/go.
Installed commands in /home/you/go/bin.
*** You need to add /home/you/go/bin to your $PATH. ***
```
# Setting $GOROOT dan $GOPATH

GOROOT itu seperti root (inti) dari Go itu sendiri (kompilasi dll).

GOPATH itu tempat untuk bekerja , jadi ketika kita menginstall paket dari go maka akan diletakkan di GOPATH.

saya asumsikan Anda melakukan installasi Go di ~/go atau /home/Anda/go. Untuk path saya letakkan di ~/go/path atau /home/Anda/go/path. Silahkan sesuaikan dengan keinginan Anda. Kemudian tambahkan kode berikut di .bashrc dan jangan lupa di reload .bashrc.

```
export GOROOT=$HOME/go
export PATH=$PATH:$GOROOT/bin
export GOPATH=$GOROOT/path

$ source .bashrc
```
Untuk melakukan pengecekan silahkan gunakan perintah di bawah ini
```
$ go version
go version go1.3.1 linux/amd64
```

Selesai tunggu artikel berikutnya :v