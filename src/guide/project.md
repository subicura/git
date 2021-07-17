---
description: Git/GitHub 안내서 - 실전 프로젝트
image: /imgs/share.png
---

# 실전 프로젝트

::: tip ⚡️ 목표
실전 프로젝트를 진행하면서 전체적인 사용법을 복습하고 빠진 부분을 확인합니다.
:::

`Hello`라는 다음과 같은 메시지를 출력하는 `Node.js` 애플리케이션을 만듭니다.

```
 ____________
< I love Git >
 ------------
        \   ^__^
         \  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

`Node.js`기반의 애플리케이션을 만들고 가상의 요구사항을 GitHub 이슈로 받고 GitHub Flow 방식으로 해결해 나가는 과정을 진행해 보겠습니다.

## gitignore

특정 디렉토리를 추적에서 제외하고 싶을 때 사용합니다.

```
node_modules
```

## git blame

이 파일의 이 줄을 누가 언제 수정했는지 확인할 때 사용합니다.

```
node_modules
lib/*
!lib/my.jar
```
