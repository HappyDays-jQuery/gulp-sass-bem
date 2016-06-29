# gulp-sass-bem

```shell
npm install
```
# BEMが出来た経緯
- Fast-to-develop, long-lived projects
素早い開発と、長期間に渡るプロジェクトのメンテナンス
- Team scalability
チームのスケーラビリティ
- Code reuse
コードの再利用性

# MindMEMding

```css
.block {}
.block__element {}
.block--modifier {}
```
```css
.site-search {} /* Block */
.site-search__field {} /* Element */
.site-search--full {} /* Modifier */
```
```css
.person {}
.person__hand {}
.person--female {}
.person--female__hand {}
.person__hand--left {}
```
```html
<form class="site-search  site-search--full">
    <input type="text" class="site-search__field">
    <input type="Submit" value ="Search" class="site-search__button">
</form>
```
```css
.media {}
.media__img {}
.media__img--rev {}
.media__body {}
```
```html
<div class="media">
    <img src="logo.png" alt="Foo Corp logo" class="img-rev">
    <div class="body">
        <h3 class="alpha">Welcome to Foo Corp</h3>
        <p class="lede">Foo Corp is the best, seriously!</p>
    </div>
</div>
```
```html
<div class="media">
    <img src="logo.png" alt="Foo Corp logo" class="media__img--rev">
    <div class="media__body">
        <h3 class="alpha">Welcome to Foo Corp</h3>
        <p class="lede">Foo Corp is the best, seriously!</p>
    </div>
</div>
```
