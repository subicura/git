---
description: 터미널 설정하기
image: /imgs/share.png
---

# 터미널 설정

::: tip ⚡️ 목표
쉘 프롬프트에 Git 상태를 추가하고 명령어 별칭<sub>alias</sub>을 설정합니다.
:::

<div style="text-align: center; margin-top: 15px">
  <img src="./imgs/terminal-setup/terminal-before.png" alt="terminal(before)" style="width: 640px; max-width: 100%" />
</div>

기존 터미널을 다음과 같이 변경합니다.

<div style="text-align: center; margin-top: 15px">
  <img src="./imgs/terminal-setup/terminal-after.png" alt="terminal(after)" style="width: 640px; max-width: 100%" />
</div>

차이점은 다음과 같습니다.

- 현재 브랜치 확인
- 현재 버전 상태 확인
- [Git 명령어 alias](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh) 적용

## macOS

1. zsh을 최신 버전으로 업데이트하고 [zsh-completions](https://github.com/zsh-users/zsh-completions) 설치

```sh
brew install zsh zsh-completions
```

2. oh-my-zsh 설치

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

> 더 멋지게 터미널을 꾸미고 싶다면 [본격 macOS에 개발 환경 구축하기](https://subicura.com/2017/11/22/mac-os-development-environment-setup.html)를 참고하세요.

## Windows

1. zsh 다운로드

[https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64](https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64)

```sh
# file download url
https://mirror.msys2.org/msys/x86_64/zsh-5.8-5-x86_64.pkg.tar.zst

# 32bit인 경우
https://mirror.msys2.org/msys/i686/zsh-5.8-5-i686.pkg.tar.zst
```

> `.zst` 확장자 압축을 풀기 위해 [Bandizip](http://www.bandisoft.com/bandizip/)을 설치합니다.

2. `C:\Program Files\Git`에 압축해제

반디집으로 `zsh-5.8-5-x86_64.pkg.tar.zst`를 압축해제 하면 `zsh-5.8-5-x86_64.pkg.tar` 파일이 생깁니다. 그럼 한번 더 압축을 해제합니다.

<div style="text-align: center; margin-top: 15px">
  <img src="./imgs/terminal-setup/windows-zsh.png" alt="zsh install" style="width: 600px; max-width: 100%" />
</div>

`Extract to "Archive-Name" folder under the selected folder` 옵션을 해제하고 Git 폴더를 선택한 다음, 압축을 해제합니다.

3. zsh 설정 및 oh-my-zsh 설치

```sh
# bash > zsh 변경
zsh
# install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

`~/.bashrc` 또는 `C:\Users\{id}\.bashrc` 파일 수정 (없으면 생성)

```sh
# Launch Zsh
if [ -t 1 ]; then
exec zsh
fi
```
