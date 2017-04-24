# William Hill Technical Test - Javascript UI/BDD

### Setup
First clone the project, then navigate to the project root

```sh
$ git clone https://github.com/Philyorkshire/wh-tech-test
$ cd wh-tech-test
```

I have setup a CMD file in the project to simplify the setup. This will run npm install and also add chromedriver to the PATH if you do not already have it set on your machine

```sh
$ setup.cmd
```

### Run Tests

Mobile configuration

```sh
$ gulp cucumber-mobile
```

Desktop configuration

```sh
$ gulp cucumber-desktop
```
