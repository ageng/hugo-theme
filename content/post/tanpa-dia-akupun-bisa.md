---
draft: false
title: "Tanpa Dia Akupun Bisa"
description: "Aku pasti bisa, walupun tanpa dia ..."
date : "2014-09-03"
categories:
  - "myself"
tags:
  - "development"
  - "nodejs"
  - "code"
---
## nodejs tanpa sudo?

<center>
![](https://nodeblog.files.wordpress.com/2011/07/nodejs.png "NodeJS")
</center>

Well, sebenernya udah banyak yang posting mengenai itu, tapi apa salahnya kalau ane repost versi ane sendiri :v
Yang harus dibutuhkan adalah NodeJS yang udah ke install ya, kalau belum ya install dulu. Ada banyak cara installasi NodeJS. Nah ane anggep sudah terinstall NodeJS. Langsung aje ye, masuk ke terminal terus ketikan perintah di bawah ini :

```
$ mkdir .npm
$ npm config set prefix ~/.npm
```
setelah itu masukkan juga script di bawah ini di .bashrc atau yang sejenisnya :p
```
export PATH=$HOME/.npm/bin:$PATH
```
Jika sudah silahkan di reload .bashrc Anda. Caranya begini 
```
$ source .bashrc
```
Jika sudah semua, mari kita coba install salah satu Node Package Manager , ane pilih [forever](https://www.npmjs.org/search?q=forever). Ane pakai prefix [-g](https://www.npmjs.org/doc/cli/npm-install.html) untuk installasi secara [global](https://www.npmjs.org/doc/cli/npm-install.html), jadi bisa di akses via console. Tapi ingat gak semua Node Package itu support model global itu ya :p .
```
$ npm install -g forever
```
Jika sudah selesai, mari kita check
```
$ which forever
/home/Anda/.npm/bin/forever
$ forever -h
help:    usage: forever [action] [options] SCRIPT [script-options]
help:    
help:    Monitors the script specified in the current process or as a daemon
help:    
help:    actions:
```
Well itu cara yang ane pakai buat install Node Package Manager tanpa menggunakan sudo :p

Sampai berjumpa di postingan yang lain :p
