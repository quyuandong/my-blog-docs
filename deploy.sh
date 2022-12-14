#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "正在添加文件..."
git add .

# 添加提交的消息
echo -n "正在提交备注...，请填写备注（可空）"
read remarks
if [ ! -n "$remarks" ]
then
	remarks="常规提交"
fi

# 本地提交
git commit -m "$remarks"
echo "正在开始提交代码至gitHub与gitee..."

# 远程提交
git push --rebase -f git@github.com:quyuandong/my-blog-docs.git origin master
git push --rebase -f git@gitee.com:qyd_9/my-blog-docs.git origin master

echo "代码提交完成！开始打包"

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd dist

git init
echo "正在添加文件..."

git add .

# 打包进行提交
git commit -m "打包提交-$remarks"
echo "正在开始发布代码..."

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:quyuandong/my-blog-docs.git master:gh-pages
git push -f git@gitee.com:qyd_9/my-blog-docs.git master:gh-pages

echo "代码发布完成！"

cd -
