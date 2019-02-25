# 自动化测试框架

[TOC]

## 1.  概述

> 本项目为 gemini 自动化测试项目,用于视觉回归测试

## 2. 项目结构&命名规范

```shell
├── README.MD							# README
├── gemini                              # 文件夹存放baseline的img	
├── gemini-reports                      # 存放报告		                             
├── tests								# 测试用例文件夹
│   └── test-js                         # 测试用例文件
└── .gemini.js                          # Configuring
```


### 2.1 基本语法介绍
#### 2.1.1 Writing Gemini tests
```shell
# gemini.suite测试套，setCaptureElements设置截图的元素（可用css查询），capture截图操作（第二个入参可跟回调函数，执行指定操作）
gemini.suite('button', function(suite) {
    suite
        .setUrl('/path/to/page')
        .setCaptureElements('.button')
        .before(function(actions, find) {
            this.button = find('.buttons');
        })
        .capture('plain')
        .capture('hovered', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find) {
            actions.mouseDown(this.button);
        })
        .capture('clicked', function(actions, find) {
            actions.mouseUp(this.button);
        });
});
```
[参考url](https://github.com/gemini-testing/gemini/blob/master/doc/tests.md)

#### 2.1.2 Available actions
回调函数中可以执行的操作

[参考url](https://github.com/gemini-testing/gemini/blob/master/doc/tests.md#available-actions)

## 3. Gemini 安装

### 3.1 安装Gemini

```shell
执行：
npm install -g gemini
npm install -g selenium-standalone
selenium-standalone install
npm install html-reporter
```


### 3.2 设置Configuration文件

Put the .gemini.js file in the root of your project:
```shell
module.exports = {
    rootUrl: 'http://yandex.com',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',

    system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                path: 'gemini-reports',
                defaultView: 'all',
                baseHost: 'test.com'
            }
        }
    },
    browsers: {
        chrome: {
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
```
[参考url](https://github.com/gemini-testing/gemini/blob/master/doc/config.md)

### 3.3 用例执行

```bash
# 更新基线图片
gemini update [paths to test suites]
# 执行用例
gemini test --html-reporter-path gemini-reports/ run_suit.js
```
[参考url](https://github.com/gemini-testing/gemini/blob/master/doc/commands.md)

## 4. Gemini 插件
Gemini 支持插件。 可以选择[已存在的插件](https://www.npmjs.com/search?q=keywords:gemini-plugin) 或者自己写插件。 通过配置 .gemini.js文件使用插件:
```shell
system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                path: 'gemini-reports',
                defaultView: 'all',
                baseHost: 'test.com'
            }
        }
    },
```
