(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{482:function(t,s,a){t.exports=a.p+"assets/img/git-scm-windows.7dc29a8e.jpg"},483:function(t,s,a){t.exports=a.p+"assets/img/git-scm-download.1dbf1d5f.jpg"},484:function(t,s,a){t.exports=a.p+"assets/img/git-install.a8a222d1.png"},485:function(t,s,a){t.exports=a.p+"assets/img/git-complete.d8f0846a.png"},486:function(t,s,a){t.exports=a.p+"assets/img/windows-menu.21892e97.png"},487:function(t,s,a){t.exports=a.p+"assets/img/git-bash.3e0b881a.png"},541:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-설치"}},[t._v("#")]),t._v(" Git 설치")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("⚡️ 목표")]),t._v(" "),e("p",[t._v("Git 프로그램을 설치하고 기본 환경을 설정합니다.")])]),t._v(" "),e("h2",{attrs:{id:"macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" macOS")]),t._v(" "),e("p",[t._v("패키지 매니저(brew)를 이용하여 Git을 설치합니다.")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("homebrew"),e("OutboundLink")],1),t._v(" 패키지 매니저 설치")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("M1 mac")]),t._v(" "),e("p",[t._v("애플 실리콘 mac을 사용 중이라면, Rosetta(x86_64 가상화)로 터미널을 실행하거나 Homebrew 설치 후 스크립트를 실행해야 합니다.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mysetting.io/apps/mac-arm64",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rosetta 설정하기"),e("OutboundLink")],1),t._v(" "),e("Badge",{attrs:{text:"추천"}})],1),t._v(" "),e("li",[t._v("Rosetta 설정 없이 사용한다면 Homebrew 설치 후 다음 명령어를 입력")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('echo \'eval "$(/opt/homebrew/bin/brew shellenv)"\' >> /Users/<USER_ID>/.zprofile\neval "$(/opt/homebrew/bin/brew shellenv)"\n')])])])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Homebrew 설치")]),t._v("\n/bin/bash -c "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 설치 확인")]),t._v("\nbrew\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Git 설치")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Git 최초 설치")]),t._v("\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 이전에 설치했다면, 최신버전으로 업데이트")]),t._v("\nbrew upgrade "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 설치 확인")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Git 환경 설정")])]),t._v(" "),e("p",[t._v("사용자 정보를 설정하고 한글 파일 깨짐 현상을 방지합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Your Name을 변경해 주세요")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you@your-email.com을 변경해 주세요")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"you@your-email.com"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 자모 분리 현상 방지")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.precomposeunicode "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 한글 출력 오류 방지")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.quotepath "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),e("h2",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),e("p",[t._v("파일을 다운받아 설치합니다.")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 홈페이지"),e("OutboundLink")],1),t._v(" 접속")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(482),alt:"Git 공식 홈페이지"}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("code",[t._v("Download for Windows")]),t._v(" 버튼 클릭")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(483),alt:"Git 공식 홈페이지 다운로드"}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("파일 다운로드 후 설치 프로그램 실행")])]),t._v(" "),e("div",{staticClass:"image-450 no-radius"},[e("p",[e("img",{attrs:{src:a(484),alt:"Git 설치"}})])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("여러 옵션을 선택하는데, 기본값으로 "),e("code",[t._v("Next")]),t._v(" 선택 (여러 번 물어봄)")])]),t._v(" "),e("div",{staticClass:"image-450 no-radius"},[e("p",[e("img",{attrs:{src:a(485),alt:"Git 설치 완료"}})])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("설치 완료! 🎉")])]),t._v(" "),e("div",{staticClass:"image-200 no-radius"},[e("p",[e("img",{attrs:{src:a(486),alt:"윈도우 메뉴"}})])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Git 실행을 위해 바탕화면에서 오른쪽 버튼을 누르고 "),e("code",[t._v("Git Bash Here")]),t._v(" 선택")])]),t._v(" "),e("div",{staticClass:"image-450 no-radius"},[e("p",[e("img",{attrs:{src:a(487),alt:"Git Bash"}})])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 설치 확인")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Git Bash")]),t._v(" "),e("p",[t._v("git은 윈도우에 내장된 "),e("code",[t._v("cmd")]),t._v("가 아닌 "),e("code",[t._v("Git Bash")]),t._v("에서 실행합니다. 좀 더 이쁜 터미널을 원한다면 "),e("a",{attrs:{href:"https://cmder.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cmder"),e("OutboundLink")],1),t._v("를 설치해보세요.")])]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Git 환경 설정")])]),t._v(" "),e("p",[t._v("사용자 정보를 설정하고 한글 파일 깨짐 현상을 방지합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Your Name을 변경해 주세요")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you@your-email.com을 변경해 주세요")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"you@your-email.com"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 한글 출력 오류 방지")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.quotepath "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);