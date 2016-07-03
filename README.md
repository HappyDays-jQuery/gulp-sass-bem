# gulp-sass-bem
this project run commands first.

```
npm install
```

# If you did not if install a gulp, node, npm

delete node & nodebrew
```
$ brew uninstall nodebrew
$ brew uninstall node
```

install nodebrew
[nodebrew](https://github.com/hokaccha/nodebrew "nodebrew official")

install node
```
nodebrew install-binary v6.2.2
nodebrew use v6.2.2
```

```
node -v
> v6.2.2
npm -v
> 3.9.5
```

install gulp
```
npm install gulp -g
```

# Gulp
start & watch *.html, *.scss

```
gulp
```

## task

Live Reload #include default task

```
gulp connect
```

HTML reload #include default task

```
gulp html
or
gulp watch-html
```

SCSS compile and minify css #include default task

```
gulp scss
or
gulp watch-scss
```

RUN Styleguide #include default task

```
gulp styleguide
```

# View Styleguide

```
open http://localhost:3000/
```

# View public

```
open http://localhost:8080/
```
