---
description: Git/GitHub 안내서를 소개합니다.
image: /imgs/share.png
---

# 시작하기

<div class="image-200" style="padding: 50px 0">

![Git](./imgs/intro/Git-Logo-2Color.png)

</div>

[Git](https://git-scm.com/)은 리누스 토발즈<sub>Linus Torvalds</sub>가 2005년에 ~~2주 만에~~ 만든 분산 버전 관리 시스템(DVCS)<sub>Distributed version control systems</sub>입니다. 수많은 회사에서 수많은 소스가 Git으로 관리되고 개발자라면 반드시 알아야 하는 기술 중 하나입니다.

## Git의 특징

Git의 기본 기능은 **이력 관리**입니다. 많은 프로그램이 `Ctrl` + `Z` (undo)와 `Ctrl` + `Y` (redo)를 제공하는데, Git은 전체 소스 파일을 대상으로 해당 기능을 제공하고, 협업에 필요한 다양한 기능을 가지고 있습니다.

:::tip 속성 용어 설명
Git에서 사용하는 다양한 용어는 하나하나 실습하면서 소개할 예정이지만, 자주 사용하는 키워드를 우선 소개합니다.

- `repository` 또는 `repo`: 저장소 / Git으로 버전 관리하는 디렉토리를 의미
- `local repository`: 로컬 저장소 / 작업자의 개발 환경(PC)에 설정된 Git 저장소
- `remote repository`: 원격 저장소 / GitHub 등 외부 서버에 설정된 Git 저장소
- `commit`: 커밋 / 특정 상태를 기록한 것, 즉 버전을 의미
- `branch`: 브랜치 / 한국어로 번역하면 가지치기 또는 갈래라고 하는데 또 다른 작업공간을 의미
- `merge`: 머지 / 한국어로 병합 또는 합치기라고 하는데 특정 브랜치에서 작업한 내용을 또 다른 브랜치에 적용하는 것을 의미
  :::

### Branching and Merging

<div class="image-450">

![Branching and Merging](./imgs/intro/branches.png)

</div>

일반적으로 `Ctrl` + `Z` 기능은 너무 단순해서 하나의 작업 이력을 관리하긴 좋지만, A안, B안, C안 처럼 여러 가지 작업을 관리하기는 어렵습니다. Git은 브랜치<sub>branch</sub>기능을 제공하여 동시에 여러 작업을 진행하고 합치고 충돌을 해결할 수 있습니다.

많은 회사에서 새 기능을 만들거나 버그를 수정할 때 브랜치를 만들고 코드 리뷰 후 메인 브랜치에 머지<sub>merge</sub>하는 방식을 사용합니다.

### Small and Fast

Git은 ~~초초~~ 빠릅니다. C로 만들었고 분산 버전 관리 시스템이기 때문에 평소에 서버와 통신할 필요가 없고 대부분의 작업이 로컬에서 이루어집니다.

### Distributed

Git은 분산 버전 관리 시스템이고 로컬에 원격 저장소의 모든 데이터를 복제하기 때문에 사실상 개발자 수만큼 백업이 되어 있습니다. 필요하면 원격 저장소를 여러 개 만들 수 있고 다양한 작업방식을 도입할 수 있습니다. 진정한 분산 관리형 시스템입니다.

### Data Assurance

Git은 데이터 무결성을 보장합니다. 모든 파일과 커밋은 체크섬 검사를 하고, 특정 히스토리를 변경하면 해당 커밋 ID와 그 이후 모든 항목의 커밋 ID가 변경됩니다. 따라서 특정 커밋은 ID만 알면 변경되지 않았음을 확신할 수 있습니다. 너무 당연한 이야기 같지만 많은 버전 관리 시스템이 이러한 무결성을 제공하지 않습니다.

### Staging Area

<div class="image-350">

![Staging Area](./imgs/intro/index1.png)

</div>

다른 버전 관리 시스템과 달리, Git은 커밋 이전에 `스테이징`<sub>staging area</sub> 또는 `인덱스`<sub>index</sub>라 불리는 상태를 가집니다. 이 상태에서 커밋 내역을 검토하고 특정 파일만 먼저 커밋하고 일부 파일은 나중에 커밋할 수도 있습니다. ~~장점이자 Git을 복잡하게 하는 단점이기도..~~

### Free and Open Source

Git은 오픈 소스 라이선스인 [GNU General Public License version 2.0](https://opensource.org/licenses/GPL-2.0)를 가지고 모든 사용자에게 무료로 제공됩니다. 만세! 🙌

## Git의 단점

앞에서 장점을 주로 설명했는데, 단점도 알아야겠죠? ~~공평하게~~

Git은 기존 버전 관리 시스템보다 덜 직관적이고 배우기가 어렵습니다. ~~이제는 추억속의~~ SVN은 업데이트하고 커밋만 알면 얼추 작업할 수 있었는데 Git은 스테이징, 커밋, 푸시, 풀을 알아야 하고 브랜치도 적극적으로 쓰다 보니 훨씬 복잡합니다.

<div class="image-350">

![Tortoise SVN](./imgs/intro/tortoisesvn_logo.svg)

</div>

[TortoiseSVN](https://tortoisesvn.net/)처럼 초보자가 사용하기 쉬운 GUI 도구가 없고, 기본적으로 CLI를 많이 사용하기 때문에 진입장벽이 높습니다. Git은 알면 알수록 복잡하고 개발자마다 사용하는 명령어도 다르고 사용하는 프로그램도 제각각입니다. 쉽게 익힐 수 있는 정석적인 학습이 어려운 것 편입니다.

## 가이드 안내

본 가이드는 실무에서 많이 사용하는 명령어만 콕 집어, Git을 처음 접하는 분도 부담 없이 익힐 수 있도록 구성했습니다. Git의 내부 동작 방식, 상세한 사용법, 고급기능은 [ProGit](https://git-scm.com/book/ko/v2)이라는 공식 서적이 있기 때문에 여기선 다루지 않습니다. 대신, 다른 문서에선 볼 수 없는 특징이 있습니다.

- **핵심 기능만 소개** - Git은 강력하지만, 처음부터 모든 걸 익히는 것은 불가능합니다. 자주 사용하는 기능을 우선 소개하고 사용 빈도가 낮은 기능은 별도 문제 메뉴에서 소개합니다.
- **시작은 터미널 설정부터** - Git을 설치하고 [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)을 이용하여 쉘 프롬프트와 Git 명령어 별칭<sub>alias</sub>을 설정합니다. 미리미리 손에 익을 수 있도록 가이드에서도 별칭을 적극적으로 소개합니다.
- **CLI + GUI를 동시에** - CLI를 기본으로 Visual Studio Code/Sourcetree 사용법을 소개하고 3가지 방법을 비교하여 가장 효율적인 방법을 알아봅니다.
- **최신 명령어 소개** - `git checkout` 사용법과 함께 최근 추가된 `git switch`, `git restore` 명령어를 소개합니다.
- **실전 프로젝트 소개** - 실전과 유사한 프로젝트를 진행하면서 알아야 할 내용을 한 번 더 확인합니다.
- **macOS + Windows** - macOS와 Windows를 동시에 다룹니다. linux는 왜 안다루냐고요? ~~이미 linux 쓰는 당신이 챔피언..~~

## 준비

먼저, [실습환경을 준비](../prepare)합니다.

- [Git 설치](../prepare/git-setup)
- [GitHub 가입](../prepare/github-setup)
- [터미널 설정](../prepare/terminal-setup)
- [Visual Studio Code 설치](../prepare/vscode-setup)
- [Sourcetree 설치](../prepare/sourcetree-setup)

설치가 다 끝났으면, 하나씩 따라 해 봅시다~

## 학습 구성

1. [기본 명령어](./basic) - 저장소 생성부터 기본적인 이력 관리 방법을 알아봅니다.
2. [작업 분기](./branch) - 동시에 여러 작업을 진행하고 합치고 충돌을 해결하는 방법을 알아봅니다.
3. [GitHub 공유](./github) - 원격 저장소와 연동 후 GitHub Flow를 이용하여 소스를 수정합니다.
4. [실전 프로젝트](./project) - 실전 프로젝트를 진행하면서 전체적인 사용법을 복습하고 빠진 부분을 확인합니다.
5. [커밋 정리](./commit) - 팀원에서 칭찬받는 방법! 커밋 메시지와 히스토리를 더 보기 좋게 정리하는 방법을 알아봅니다.

> 정확한 전달을 위해 가급적 영어를 그대로 사용합니다.  
> 예를 들어 merge는 병합 대신 머지, branch는 가지치기 대신 브랜치, push는 서버 업로드 대신 푸시와 같이 사용합니다.
