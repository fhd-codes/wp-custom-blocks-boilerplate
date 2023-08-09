Go to the plugins folder and write this command in the terminal

`npx @wordpress/create-block <block-name>`

Replace `<block-name>` with your block name. When you run this, your files will automatically be made 

- Install the following packages:

```
npm install @wordpress/block-editor
npm install @wordpress/blocks
npm install @wordpress/i18n

npm install @wordpress/eslint-plugin --save-dev
npm install @wordpress/prettier-config --save-dev
npm install @wordpress/scripts --save-dev
npm install @wordpress/stylelint-config --save-dev
npm install eslint-config-prettier --save-dev
npm install lint-staged --save-dev
npm install stylelint --save-dev
npm install husky --save-dev
```

- Now, initialize git by doing: **git init**
- Follow these steps to install husky properly https://github.com/typicode/husky
This will stop you from pushing the code to git repo if your code has js or css errors
- Once installed, go to .husky > pre-commit file and change the **npm test** to this:
***npx lint-staged***
- Now, when we commit our changes, it will check for any errors in the js or css file. If all is okay, the code will be committed. Otherwise, it willl give error.
