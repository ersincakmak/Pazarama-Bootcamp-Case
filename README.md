# Pazarama Case

This project created for pazarama case. I also created my own backend. You can reach backend part of on [this](https://github.com/ersincakmak/pazarama-case-backend) link.

## Demo

[Demo Link](https://pazarama-case-ersincakmak.netlify.app/)

## Techs

- Axios
- Typescript
- React Router Dom v6
- Formik
- Yup
- ReduxJs/toolkit
- TailwindCSS
- MomentJS
- React Modal
- React Icons
- React Dropzone

## Installation

If you want to run this project on your local you need to create a .env file on root directory. After that you need to fill it like below.

```
REACT_APP_API_URL={{your api url}}/
```

After creation .env file you need to run this command step by step

```
npm install

npm run start
```

And finally you can reach this app on http://localhost:3000/

# Project Description

## Bitirme projesi

### Başvuru / ticket yönetim sistemi

#### Genel Açıklama

Uygulamamız herkese açık bir başvuru formunun son kullanıcı tarafından doldurulması ile başlıyor.
Formu dolduran kullanıcıya başvurusunu takip edebilecegi bir kod veriliyor. Kullanıcı başvuru durumu sayfasından bu kod ile başvurusunun çözülüp çözülemedigini kontrol edebiliyor.

Kullanıcı adı ve şifre ile girilebilen bir ekrandan da yetkili kullanıcılar gelen başvuruları görüntüleyebiliyor cevaplanmamış başvurulara cevap yazıp durumunu çözüldü / iptal edildi / bekliyor vb gibi güncelleyebiliyor. Gerekirse eski kayıtlara ulaşabiliyor.

#### Detaylı Açıklama

##### Routes / Paths

- /basvuru-olustur (default)

  - Public endpoint.
  - Başvuru formunu herhangi bir kullanıcının doldurmasına imkan verir.
  - Başvuru formunda [Ad, Soyad, Yaş, TC, Başvuru Nedeni, Adres Bilgisi, Fotograflar/Ekler, Gonder] butonu yer alır.

- /basvuru-basarili (Basvuru formu doldurulduktan sonra gelen sayfa)

  - Ekranda bir teşekkür mesajı yer alır ve kullanıcıya başvuru detayları ile birlikte başvuru kodu verilir.

- /basvuru-sorgula

  - Ekranda başvuru kodu girilebilen bir input ve sorgula butonu vardır.

- /basvuru/{basvuruNo}

  - Ekranda başvuru varsa bilgileri, son durumu ve verilen cevap(lar) yer alır.
  - Başvuru numarası hatalıysa 404(bulunamadı) mesajı çıkar.

- /admin

  - Ekranda kullanıcı giriş formu vardır. (Rahat test edebilmemiz için u:kodluyoruz, p:bootcamp109 bilgileri ile giriş yapabilmeliyim.)

- /admin/basvuru-listesi

  - Başarıli giriş sonrası bekleyen (çözülmemiş/cevaplanmamış) başvuruların listesi yer alır ve basit bilgiler sunar. (Başvuru yapan, tarih)
  - Başvuru listesinde her elemenda başvuruyu görüntüle butonu vardır.

- /admin/basvuru/{basvuruNo}
  - Başvurunun durumu güncellenebilir ve başvuruya cevap yazılabilir.
  - Burada yazılan cevap son kullanıci tarafından basvuru/{basvuruNo} kısmından görüntülenebilmelidir.

##### Gereklilikler

- React hooks
- Router (react-router/ reach router / etc)
- Redux (Context API'da kullanabilirsiniz)
- Form management library (react-hook-form / formik / etc)
- UI library kullanmamalisiniz.
- Validation library (yup, joi, etc)
- Tests (Unit test zorunlu)
- Uygulamanız kesinlikle bir servise deploy edilmiş olacak ve public link readme içinde yer alacak (netlify, vercel gibi)
- Open source
- Eslint
- Folder structure
- github commitlerinin gozukmesi gerekmekte. Lutfen bu konuya hassasiyet gosterelim,
  tum sayfalarin tek commitde bulunan repolardan uzak duralim. Puanlara buna gore yapilacaktir.

##### Dikkat edelim

- Tüm formlarda gerekli validasyonlar olsun.
- Back-end yazmak zorunda degilsiniz, back-end olarak firebase ya da mock bir api kullanabilirsiniz.
- Elinizden gelen en iyi şekilde seperation of concerns'e dikkat ederek yazın.
- Admin paneline u:kodluyoruz, p:bootcamp109 bilgileri ile giriş yapabilmeliyim.
- Mümkünse admin paneline bir menü ekleyelim (başvuru listesi, çıkıs gibi işlemleri kapsasın)

##### Bonus (Zorunlu degil, deneysel ozellikler)

- Typescript
- Service worker ile offline render destegi
- Mobil uyumlulu guzel bir tasarim
- Kullanilabilir UX
