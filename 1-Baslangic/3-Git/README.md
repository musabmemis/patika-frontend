# GIT FIRST PROJECT


[reponun github linki](https://github.com/musabmemis/git-example)

## GIT Bash ile GIT Temel Komutları

```sh
git init
git status
git add index.html
git status
git rm --cached index.html
git status
git add index.html
git status
git commit
git config --global user.email "musabmemis@gmail.com"
git config --global user.name "musab memiş"
git commit
git commit -m "first commit"
git status
git diff
git commit -m "index.html değişti" # önce "git add" komutu çalıştırılmalı
git add scss/main.scss 
git status
git commit -m "scss eklendi" 
git add index.html
git commit -m "index.html değişti" 
git status # main scss ve index.html değiştirildikten sonra
git diff index.html  # sadece index.html deki değişiklikler
git diff # burda bütün değişiklikler
git add index.html
git add scss/main scss 
git commit -m "scss ve index değişti" # iki add yaptıktan sonra commit atıldı 
```

---

## VS Code içinde Terminal Kullanarak GIT Temel Komutları

```sh
git --version
git init
git add index.html 
git add scss/main.scss 
git status
git commit -m "index and scss changed again" 
git status
```

---

## VS Code içerisinde Terminal Kullanmadan GIT Temel Komutları

- vs code içinde version control system öğrenildi.

---

## .gitignore Dosyası Ne İşe Yarar? Nasıl Kullanırız?

- versiyonlamak istenilmeyenler
  - Paket yöneticisinden indirilen bağımlılıklar,
  - image ve video dosyalarınız(dosya boyutları çok fazla olabilir)
  - IDE eklentileri( örneğin .vscode)
  - Sadece kendi çalışma alanınızda olması gereken başkaları tarafından görülmemesi gereken dosyalarınız (veritabanınıza ilişkin konfigürasyonlar)
  - API anahtarları, kimlik bilgileri veya hassas bilgiler içeren dosyalar(.env)
  - Çalışma dizinizdeki geçici dosyalar
  - Log dosyaları
  - Yararsız sistem dosyaları (örneğin MacOS işletim sisteminin .DS_Store dosyası )
  - dist gibi oluşturulan dosyalar
  - Veya herhangi bir dosyanız da olabilir.

---

## GIT - Proje İçindeki Birden Fazla Dosyanın Versiyon Kontrol Sistemine Eklenebilmesi

```sh
git add . # bütün dosyaları ekleme 
git checkout loginform
git checkout main
git checkout musab
git merge musab # main brach ile birleştirme . branch leri birleştirme.
```

---

## GitHub'a Projemizin Eklenmesi ve Diğer Repo Hosting Web Platformları

```sh
###
git remote add origin https://github.com/musabmemis/git-example.git
git remote

###
echo "# git-example" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/musabmemis/git-example.git
git push -u origin main

###
git remote add origin https://github.com/musabmemis/git-example.git
git branch -M main
git push -u origin main
```

---

## Markdown Nedir ? Nasıl Kullanırız ?

# Başlık 1
## Başlık 2
### Başlık 3

- list 1
- list 2 [link bilgisi](loginForm.html)
- list 3 [link info](https://google.com)

* item 1
* item 2
* item 3

*italic* **bold** ***boldanditalic***

---

[commonmarkdown](https://commonmark.org)

[typora](https://typora.io)

![lorem ipsum](https://picsum.photos/200/300)

***

```python
print("hello world")
```

```javascript
console.log("hello world")
function helloworld() {
 console.log("hello world") 
}
```


| Ürünlerin Numaraları| Ürün Açıklaması| Ürünlerin Fiyatı|
| :--- | :---: | ---: |
| 1 | Açıklama | Fiyatı |


| boy | kilo | yaş |
| :--- | :--- | :--- |
| 1.82 | 85 | 65 | 

[musabın sitesi](https://anizm.net)