---
outline: deep
---

# Installation

## Prerequisites

Regardless of what platform you are on, you will need a TeX distribution to compile your documents. Below we will give our recommendation for Windows, MacOS and Linux.

### Windows

For windows we recommend MiKTeX, you can download the installer for the latest version [here](https://miktex.org/download).

### MacOS

For MacOS we recommend MacTeX, it can be downloaded [here](https://www.tug.org/mactex/mactex-download.html).

### Linux

For Linux, we recommend TeX Live, there are many ways to install TeX Live depending on your Linux distribution. Below we list how to install TeX Live on some common Linux distributions.

#### Arch based distributions

```sh
$ pacman -S texlive
```

#### Debian based distributions

```sh
$ apt-get install texlive
```

Alternatively, you can follow the guide [here](https://www.tug.org/texlive/quickinstall.html) to install it on any Linux system.

## Optional

### Tectonic

Tectonic is a new self-contained LaTeX engine, meaning it comes with everything you need to compile your documents. Texitor supports Tectonic assuming you have it downloaded and added to your path environment variable. You can download and install Tectonic [here](https://tectonic-typesetting.github.io/en-US/install.html).

### Latexmk

Latexmk is included with the recommend TeX distributions we listed however it is required that you have a perl environment to use it. Perl comes with just about every Linux distribution and MacOS. On Windows, we recommend [Strawberry Perl](https://strawberryperl.com/).

## Download Texitor

You can download Texitor [here](https://texitor-app.netlify.app/).
