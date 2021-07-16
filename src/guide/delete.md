# 파일 진짜 삭제하기

## 남은 파일 정리하고 싶어요

```
git filter-branch --tree-filter 'rm -f <파일이름>' HEAD
git push -f
```
