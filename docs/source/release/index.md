layout: release
title: Release
---

## 2016-08-08, Version 2.11.2, @suqian.yf

### Notable Change

* **feature**
  * Proxy 和 Service 基类增加 className 的 getter 和 setter
* **fix**
  * 修复 X-Powered-By，X-Server-Id headers 在异常响应中丢失的 bug
  * 不要懒加载 messenger

### Commits

  * [[`9fb0b79`](http://gitlab.alibaba-inc.com/egg/egg/commit/9fb0b79da3f495a947fa1f6aab2769745137c45e)] - test: agent restart 测试需要主动等到 agent 重启成功 (苏千 <<suqian.yf@alipay.com>>)
  * [[`5545da2`](http://gitlab.alibaba-inc.com/egg/egg/commit/5545da2ec3c341606e6b4cc2f0098debae2297bf)] - test: fix coverage threshold (苏千 <<suqian.yf@alipay.com>>)
  * [[`0c23a64`](http://gitlab.alibaba-inc.com/egg/egg/commit/0c23a64bb99aafc635652b4087b9f5a2edfea08d)] - test: 修复 messager 不稳定测试用例 (苏千 <<suqian.yf@alipay.com>>)
  * [[`62b326a`](http://gitlab.alibaba-inc.com/egg/egg/commit/62b326ac302795dce8e0ca9b4689436784e20bc1)] - fix: 确保 X-Powered-By，X-Server-Id 头输出 (苏千 <<suqian.yf@alipay.com>>)
  * [[`dbff75a`](http://gitlab.alibaba-inc.com/egg/egg/commit/dbff75aa19a24b9b3b5ab1c866936e3f07f15282)] - test: add className get/set test (tangyao <<tangyao@alibaba-inc.com>>)
  * [[`d5a84f4`](http://gitlab.alibaba-inc.com/egg/egg/commit/d5a84f4e286c5dbccba4ab0a892570b21208a993)] - feat: 增加 get set className (tangyao <<tangyao@alibaba-inc.com>>)
  * [[`864ccba`](http://gitlab.alibaba-inc.com/egg/egg/commit/864ccba2655a442bf4d0c5f3167524b47daf0d49)] - fix(messenger): 不要懒加载 messenger (不四 <<busi.hyy@alibaba-inc.com>>)

## 2016-07-12, Version 2.11.1, @busi.hyy

### Notable Change

* **fix**
  * 修复 addSingleton 未配置 client 和 clients 时的 bug

### Commits

  * [[`f9dee62`](http://gitlab.alibaba-inc.com/egg/egg/commit/f9dee62be29f8bebb005cebf43c7d08ca791ed25)] - fix(singleton): 修复 addSingleton 没有 client/clients 配置时的逻辑(不四 <<busi.hyy@alibaba-inc.com>>)
  * [[`e2d91af`](http://gitlab.alibaba-inc.com/egg/egg/commit/e2d91af26fc2c84dd546186e35fd301ffcd4645e)] - style: 根据 eslint-config-egg@3 整改代码格式 (贯高 <<guangao@alipay.com>>)


## 2016-07-12, Version 2.11.0, @busi.hyy

### Notable Change

* **feature**
  * local 环境输出到终端的日志级别调整
    * 默认 logger 的 consoleLevel 为 INFO
    * 默认 coreLogger 的 consoleLevel 为 WARN
  * app, agent 新增 addSingleton 方法，用于创建通用的单例对象

### Commits

* [[`b717c4b`](http://gitlab.alibaba-inc.com/egg/egg/commit/b717c4bf51ce235fdd8ce82f9b2a898ede94dfda)] - feat: 调整 local 环境的 consoleLevel (不四 <<busi.hyy@alibaba-inc.com>>)
* [[`674c8cd`](http://gitlab.alibaba-inc.com/egg/egg/commit/674c8cd37800d30e27cc812da2ed75f1ba9caf2e)] - doc: 增加 singleton 的文档 (不四 <<busi.hyy@alibaba-inc.com>>)
* [[`7334e86`](http://gitlab.alibaba-inc.com/egg/egg/commit/7334e86f3fd979e23cc4caba2edd326e7d81eb44)] - feat: 增加 addSingleton 方法, agent 增加 instrument 方法 (不四 <<busi.hyy@alibaba-inc.com>>)
* [[`18c7de1`](http://gitlab.alibaba-inc.com/egg/egg/commit/18c7de12fd0e94cfbfb9688868fc1c05110ebc1a)] - test: 增加 debug level 的 logger 测试用例 (苏千 <<suqian.yf@alipay.com>>)


## 2016-06-15, Version 2.10.0, @busi.hyy

### Notable Change

* **feature**
  * onerror 插件升级到 2.0
    * 非 local 环境的 html 请求出现 400 的时候跳转到错误页
    * 跳转到错误页时会带上 `real_status=422` 的 query 标明真实的响应状态码
    * 支持 `config.onerror.appErrorFilter` 来过滤错误日志或者自定义错误日志记录

### Commits

* [[`ecefa57`](http://gitlab.alibaba-inc.com/egg/egg/commit/ecefa57062d50bd16a8538e2ba2d0ad79a13911c)] - deps: egg-onerror@2 (不四 <<busi.hyy@alibaba-inc.com>>)

## 2016-06-13, Version 2.9.0, @busi.hyy

### Notable Change

* **feature**
  * messenger 新增 `sendToApp` 和 `sendToAgent` 方法，可以指定发送消息给所有的 app 和 agent 进程

### Commits

* [[`c5ab68e`](http://gitlab.alibaba-inc.com/egg/egg/commit/c5ab68e295ccdae608c9fde6edcdcb938645aab4)] - docs(doc): 快速入门中增加插件 编写及发布 方法 (Hans Chan <<hanchai.chc@alibaba-inc.com>>)
* [[`c3de43b`](http://gitlab.alibaba-inc.com/egg/egg/commit/c3de43ba0c067a315d64f0258ed5ede2369e3db5)] - feat: messenger 添加 sendToApp 和 sendToAgent 方法 (不四 <<busi.hyy@alibaba-inc.com>>)

## 2016-06-06, Version 2.8.0, @busi.hyy

### Notable Change

* **refactor**
  * egg-schedule 升级到 2.0，优化自定义插件体验

### Commits

* [[`57907d6`](http://gitlab.alibaba-inc.com/egg/egg/commit/57907d6444780f6030137210d8a12722dffe9b7f)]
   - deps: egg-schedule@2 (不四 <<busi.hyy@alibaba-inc.com>>)

## 2016-06-03, Version 2.7.0, @guangao

### Notable Changes

 * **feature**
   * 新增 schedule 插件
   * 新增处理 Agent 未捕获异常
 * **fix**
   * 修复 agent-start 未通知 app worker 的问题

### Commits

* [[`ec600be`](http://gitlab.alibaba-inc.com/egg/egg/commit/ec600be0ef82500e6cb9ff2924f912c73eeecb3f)] - feat: Agent 遇到未捕获异常不会使进程挂掉 (贯高 <<guangao@alipay.com>>)
* [[`3a60942`](http://gitlab.alibaba-inc.com/egg/egg/commit/3a60942d345b4e6364e125cde9ea0bb97e22144b)] - fix: 修复 agent-start 未通知 app worker 的问题 (贯高 <<guangao@alipay.com>>)
* [[`76280c5`](http://gitlab.alibaba-inc.com/egg/egg/commit/76280c5f98296b4947dba4b9a4a2013773cbb478)] - feat: 增加 schedule 插件 (不四 <<busi.hyy@alibaba-inc.com>>)

## 2016-05-31, Version 2.6.0, @busi.hyy

### Notable Changes

 * **feature**
   * 新增 `app.createAnonymousContext()` 方法，支持自定义 request 创建一个匿名上下文，同时 deprecate `app.nonUserContext`

### Commits

* [[`163527e`](http://gitlab.alibaba-inc.com/egg/egg/commit/163527e46c29c0b5593a7a063d40fb48d67abb4b)] - feat: depd app.nonUserContext (不四 <<busi.hyy@alibaba-inc.com>>)
* [[`83be057`](http://gitlab.alibaba-inc.com/egg/egg/commit/83be057eb2e41cd8242ef641766384c314a3f099)] - test: add node 6 (苏千 <<suqian.yf@alipay.com>>)
* [[`82ccb47`](http://gitlab.alibaba-inc.com/egg/egg/commit/82ccb47035ffb7a7ebf93e860245bbec2fd05285)] - feat: app 通过 createAnonymousContext 创建一个自定义参数的 ctx (苏千 <<suqian.yf@alipay.com>>)
* [[`aefb95a`](http://gitlab.alibaba-inc.com/egg/egg/commit/aefb95a45aa1ac66488ced3fb143c879aebd15b0)] - docs: add view plugin docs for dev (天猪 <<liuyong.ly3@alibaba-inc.com>>)
* [[`f62bf60`](http://gitlab.alibaba-inc.com/egg/egg/commit/f62bf60ac8d90d637b947408ac41c82dd926b520)] - refactor: app.curl 直接返回一个 promise (贯高 <<guangao@alipay.com>>)
* [[`153d6b7`](http://gitlab.alibaba-inc.com/egg/egg/commit/153d6b794f522ede844583f207a6dfe89c988dbc)] - chore: 更新 puml (贯高 <<guangao@alipay.com>>)

## 2016-05-17, Version 2.5.1, @guangao

### Notable Changes

* **fix**
  * 修复 agentClient 同步调用导致 app Client 未监听的问题

### Commits

* [[`44e375f`](http://gitlab.alibaba-inc.com/egg/egg/commit/44e375f770053294281199775bb53766488c5f88)] - fix: 修复 agent client 同步调用导致 app client 未监听的问题 (贯高 <<guangao@alipay.com>>)

## 2016-05-13, Version 2.5.0, @guangao

### Notable Changes

* **feature**
  * 删除 BaseProxy 的 `_baseInvoke` 方法，保持通用性

### Commits

* [[`eabca22`](http://gitlab.alibaba-inc.com/egg/egg/commit/eabca220a4195968b397b8c23a614169f8909e26)] - refact: remove Proxy._baseInvoke (tangyao <<tangyao@taobao.com>>)

## 2016-05-12, Version 2.4.1, @guangao

### Notable Changes

* **fix**
  * 修复 BaseProxy 的 invoke 方法被覆盖的问题

### Commits

* [[`5aa9e04`](http://gitlab.alibaba-inc.com/egg/egg/commit/5aa9e04ab021bb244a9535cc8914e3b31dc9723a)] - fix: `invoke` -> `_baseInvoke` (tangyao <<tangyao@taobao.com>>)

## 2016-05-11, Version 2.4.0, @guangao

### Notable Changes

* **feature**
  * 将依赖修改成 ^

### Commits

* [[`1f75b37`](http://gitlab.alibaba-inc.com/egg/egg/commit/1f75b37cad22116063c4e9227f36e26deca3bb2d)] - chore: 将依赖修改成 ^ (贯高 <<guangao@alipay.com>>)

## 2016-05-09, Version 2.3.0, @guangao

### Notable Changes

* **feature**
  * BaseProxy 添加 invork 方法
  * app.close 之前触发 close 事件
  * deleteCookie 可传入 opts 参数
* **doc**
  * 添加 semver 文档

### Commits

* [[`4de14df`](http://gitlab.alibaba-inc.com/egg/egg/commit/4de14dfb54c1cb8a9a386ebec1a64819f8f897c6)] - refact: base proxy (tangyao <<tangyao@taobao.com>>)
* [[`d59c727`](http://gitlab.alibaba-inc.com/egg/egg/commit/d59c7277c14f9e885440f1e5289d161d99c390cc)] - doc: add semver doc (余化 <<shuai.shao@alipay.com>>)
* [[`dc01fe7`](http://gitlab.alibaba-inc.com/egg/egg/commit/dc01fe7015717c30e5c84b60c9816c87b5ed5c40)] - feat: emit close before actually quitting (余化 <<shuai.shao@alipay.com>>)
* [[`721aeed`](http://gitlab.alibaba-inc.com/egg/egg/commit/721aeed06a7cb4138e67841d1dd87308592cc453)] - fix: deleteCookie方法删除cookie时，需传入opts参数 (润支 <<linlin.rll@alipay.com>>)

## 2016-04-11, Version 2.2.0, @suqian.yf

### Notable Changes

* **feature**
  * app, agent, messenger 支持 `close()` 功能，自动清除各种事件监听

### Commits

* [[`4717505`](http://gitlab.alibaba-inc.com/egg/egg/commit/4717505c95bfadd46b57a028180bc41d1f1c8aa1)] - feat: application 和 agent 添加 close 支持 (不四 <<busi.hyy@alibaba-inc.com>>)
* [[`fb6f3f4`](http://gitlab.alibaba-inc.com/egg/egg/commit/fb6f3f4e77d01d1c1d983541926ae18fba2374d7)] - test: fix agent logerator test case (不四 <<busi.hyy@alibaba-inc.com>>)
* [[`9bee6ad`](http://gitlab.alibaba-inc.com/egg/egg/commit/9bee6adf68ec84831c9b003a3d8f89b937109396)] - clean: 清理不必要的 process 事件监听 (不四 <<busi.hyy@alibaba-inc.com>>)
* [[`b2762e8`](http://gitlab.alibaba-inc.com/egg/egg/commit/b2762e800a7523b246feb3cb68363afa74270bfc)] - refactor: unhandledRejection 监听支持被 remove (不四 <<busi.hyy@alibaba-inc.com>>)
* [[`e08fbf0`](http://gitlab.alibaba-inc.com/egg/egg/commit/e08fbf020912963a7a9d577b72afa4149ee60eec)] - feat: messenger 支持关闭 (不四 <<busi.hyy@alibaba-inc.com>>)

## 2016-04-08, Version 2.1.1, @busi.hyy

### Notable Changes

* **fix**
  * 确保 agent 只有在实例化之后才不退出

### Commits

* [[`45c35d7`](http://gitlab.alibaba-inc.com/egg/egg/commit/45c35d7c28754c1ff6eeffebf770aeb29f8c2b1d)] - test: add test case for require agent (不四 <<busi.hyy@alipay.com>>)
* [[`b8fd41c`](http://gitlab.alibaba-inc.com/egg/egg/commit/b8fd41cd9f0634038421c2ff3e70bc74196ddbd7)] - fix: 确保只有在实例化 agent 之后才不退出 (不四 <<busi.hyy@alipay.com>>)

## 2016-04-07, Version 2.1.0, @guangao

### Notable Changes

* **feature**
  * messenger 添加 sendRandom 方法，可随机发送到某个 app worker
  * 废弃 app.coreVersion 和 app.config.core.name
* **fix**
  * 修复 agent 没有事件循环自动退出的问题
  * 修复 Node5 下 router 方法覆盖 acl 的问题，只保留几个方法
  * 修复发送指定进程未接收的问题
* **dependencies**
  * egg-development: debug 模式下不 reload worker
* **doc**
  * [测试文档](http://egg.alibaba-inc.com/app_dev/test.html)

### Commits

  * [[`e07645a`](http://gitlab.alibaba-inc.com/egg/egg/commit/e07645a15516ea1bac3b801532faa3308ffcc24c)] - chore(deps): 更新依赖 (贯高 <<guangao@alipay.com>>)
  * [[`a2923b2`](http://gitlab.alibaba-inc.com/egg/egg/commit/a2923b29f56f47dccf2fc15235652fcedbd5f818)] - test: 添加 config.core 测试 (贯高 <<guangao@alipay.com>>)
  * [[`17d8d90`](http://gitlab.alibaba-inc.com/egg/egg/commit/17d8d90a2d916f24b7d9c7f24cced7f6b5fd870b)] - feat(messenger): 添加 sendRandom 可随机发送到一个 app worker (贯高 <<guangao@alipay.com>>)
  * [[`5c68b6a`](http://gitlab.alibaba-inc.com/egg/egg/commit/5c68b6a8ccf8d553a8d177d2b6f7cc5df05863be)] - feat: depd coreVersion (贯高 <<guangao@alipay.com>>)
  * [[`4f05c94`](http://gitlab.alibaba-inc.com/egg/egg/commit/4f05c94f719f58bf74f83ba7ff57f3910d71d981)] - fix: 修复 agent 没有事件循环自动退出的问题 (贯高 <<guangao@alipay.com>>)
  * [[`8d94fa9`](http://gitlab.alibaba-inc.com/egg/egg/commit/8d94fa9971964730059b030bc73eb4128917fbd7)] - test: use @ali/ci to auto create .gitlab-ci.yml (苏千 <<suqian.yf@alipay.com>>)
  * [[`0e04754`](http://gitlab.alibaba-inc.com/egg/egg/commit/0e047546584e1b88be1b67d97919e4c4f4024d96)] - fix: http method (啸生 <<xiaosheng.lj@alibaba-inc.com>>)
  * [[`2bad00d`](http://gitlab.alibaba-inc.com/egg/egg/commit/2bad00da9395a9db45517236bc46c605e5ca885d)] - doc(test): 更新测试部分文档，添加 mm.restore 说明 (贯高 <<guangao@alipay.com>>)
  * [[`636e634`](http://gitlab.alibaba-inc.com/egg/egg/commit/636e6346dd18c36d97a3c6e890ae389bdc86af63)] - doc: 添加 里程碑分支 (贯高 <<guangao@alipay.com>>)
  * [[`686de76`](http://gitlab.alibaba-inc.com/egg/egg/commit/686de7659d1fb8eb11b35c155968a27ceeb32adc)] - doc: 添加测试文档 (贯高 <<guangao@alipay.com>>)
  * [[`a35758e`](http://gitlab.alibaba-inc.com/egg/egg/commit/a35758e4c21e059fcd71c087148566bebaf55f7e)] - chore: 将 next 切换到 master (贯高 <<guangao@alipay.com>>)
  * [[`2f8d7dc`](http://gitlab.alibaba-inc.com/egg/egg/commit/2f8d7dcd07c7e8bc7455b66775808f3a4c54fcc3)] - test: 去除 loader 错误用例 (贯高 <<guangao@alipay.com>>)

## 2016-03-31, Version 2.0.0, @guangao

### Notable Changes

* **break** 查看[升级说明](http://egg.alibaba-inc.com/changelog/2.0.0.html)
  * logger 配置从 stdoutLevel 修改为 consoleLevel。
  * View 修改成 ctx 级别，并移除内置的 view 插件
  * 去除 locals 插件，功能移到 egg core 中实现
  * 去除 egg.symbol，使用全局 Symbol
* **feature**
  * 抽出 egg-cluster，保持多进程模式独立 [#306](http://gitlab.alibaba-inc.com/egg/egg/issues/306)
  * 抽出 egg-logger，通过一个 Logger 来实现，减少各种日志的差异性 [#135](http://gitlab.alibaba-inc.com/egg/egg/issues/135)
    * 修复 customLogger 重定向错误的问题
    * 修复 agent 重定向错误的问题
    * 合并 app 和 agent 打日志的差异性
  * messenger 发送消息时同时触发 emit，保证同进程和跨进程的一致性。
  * config.js 可读取 appConfig
  * 启动时生成的 run/config.json 分为 app/agent，并增加 plugin 信息
  * cookie 增加 signed 选项
* **improve**
  * 将所有插件迁移到单独库
* **fix**
  * 修复 app 未监听 unhandledRejection 的问题
  * 当用户没有选择文件点击上传时，不再报错。
* **dependencies**
  * @ali/mm 升级到 5.x。
  * 升级到 `eslint@2`，将 `eslint-config-egg` 升级到 2.x

### Commits

  * feat(logger): deprecate config.logger.stdoutLevel
  * chore: add coffeepay
  * feat: 将 graceful 移到 Application 中
  * chore: 添加插件依赖图
  * chore: 内部模块使用 ^
  * test: 添加 reload-worker 的测试用例
  * feat: 抽出 egg-cluster 多进程模型
  * feat: 支持全局 Symbol 模式
  * chore: better notfound message
  * refact: change way of deprecating beforeStart to support async loading
  * feat: 移除对mm.app时启动agent来mock app的方式
  * test: fix tests
  * deps: 升级依赖
  * deps: egg-loader@2.2.0
  * test: add dumpConfig testcase
  * feat: dump app.plugins
  * doc(cookie): add cookie doc
  * refactor: 使用 @ali/egg-cookies
  * chore: 升级 egg-loader@2.1.0
  * chore: 升级 eslint2
  * fix:修复没有写权限场景下的报错退出问题
  * feat: local 环境启动成功后还是打印日志到终端
  * feat: master 的 consoleLogger 级别改成 INFO，默认还是 WARN
  * refactor: 优化终端日志
  * feat: 重构日志，将逻辑移到 egg-logger 中
  * test: 去除无用代码，提高覆盖率
  * docs: remove special char at quickstart
  * docs: improve quickstart
  * feat(messenger): sendTo 时也会通知当前进程
  * feat: messenger 调用 send 时同时 emit
  * feat: 去除 app.beforeStart
  * docs: 只 build branch 分支
  * docs: quickstart add hacker news style
  * docs: quickstart
  * test: 优化 nvm 使用方式
  * fix: 修复 acceptJSON 和 logger prod level
  * test: 使用 npminstall 加速模块安装
  * refactor(util): 去除没有用到的代码
  * refactor(view): 去除 view 插件
  * refactor: view 插件独立维护
  * test: 使用包含 tnpm 的 cise 标准镜像
  * refactor: multipart 插件独立维护
  * refactor: userrole&userservice 独立插件维护
  * refactor: egg-static 移到单独的插件
  * fix: 修复 logUnhandledRejection 不存在
  * refactor: egg-session 移到单独的插件
  * fix: 修复 app 未监听 unhandledRejection 的问题
  * refactor(validate): validate 移到单独的插件
  * refactor: egg-logrotater 移到单独的插件
  * refactor: egg-rest 移到单独的插件
  * chore: 修复 cise task id
  * refactor(onerror): 将 onerror 移到独立插件
  * test: 优化 logger 用例，并将 coverage 默认为 true
  * test: 去除无用代码，提高覆盖率
  * test: 简化 utils 的写法
  * chore(locals): 增加更详细的使用方法
  * fix: 不用 for in
  * deps: 升级依赖
  * test: 添加 assign 的 benchmark
  * refactor: locals 去除 Object.assign
  * feat: locals 获取时才计算
  * refactor: locals 从插件中移除
  * refactor: 将 egg-i18n 移除到单独插件
  * refactor: 将 egg-development 移除到单独插件
  * fix(multipart): 当用户没有选择文件点击上传时，不再报错。用户需要判断 stream.filename 是否存在
  * chore: 更新文档多分支
  * refactor(view): [BREAK_CHANGE] new way to implements view plugin
  * chore: 去除 tnpm 的环境变量
  * fix: 修复 baseDir 变量问题
  * chore: 使用 tnpm  集成包

## 2016-03-18, Version 2.0.0-rc.1, @guangao

### Commits

  * feat: 将 graceful 移到 Application 中
  * chore: 添加插件依赖图
  * chore: 内部模块使用 ^
  * test: 添加 reload-worker 的测试用例
  * feat: 抽出 egg-cluster 多进程模型
  * feat: 支持全局 Symbol 模式
  * chore: better notfound message

## 2016-03-14, Version 2.0.0-beta.3, @busi.hyy

### Commits

  * deps(@ali/mm): use @ali/mm@5 and fix tests
  * refact: change way of deprecating beforeStart to support async loading
  * feat: 移除对mm.app时启动agent来mock app的方式
  * deps: 升级依赖
  * deps: egg-loader@2.2.0
  * feat: dump app.plugins
  * refactor: 使用 @ali/egg-cookies

## 2016-03-07, Version 2.0.0-beta.2, @guangao

### Commits

  * chore: 升级 egg-loader@2.1.0
  * chore: 升级 eslint2
  * fix:修复没有写权限场景下的报错退出问题
  * feat: local 环境启动成功后还是打印日志到终端
  * feat: master 的 consoleLogger 级别改成 INFO，默认还是 WARN
  * refactor: 优化终端日志
  * feat: 重构日志，将逻辑移到 egg-logger 中
  * test: 去除无用代码，提高覆盖率
  * docs: remove special char at quickstart
  * docs: improve quickstart
  * feat(messenger): sendTo 时也会通知当前进程
  * feat: messenger 调用 send 时同时 emit
  * feat: 去除 app.beforeStart
  * docs: 只 build branch 分支
  * docs: quickstart add hacker news style
  * docs: quickstart
  * test: 优化 nvm 使用方式

## 2016-02-23, Version 2.0.0-beta1, @busi.hyy

### Commits

  * fix: 修复 acceptJSON 和 logger prod level
  * test: 使用 npminstall 加速模块安装
  * refactor(util): 去除没有用到的代码
  * refactor(view): 去除 view 插件
  * refactor: view 插件独立维护
  * test: 使用包含 tnpm 的 cise 标准镜像
  * refactor: multipart 插件独立维护
  * refactor: userrole&userservice 独立插件维护
  * refactor: egg-static 移到单独的插件
  * fix: 修复 logUnhandledRejection 不存在
  * refactor: egg-session 移到单独的插件
  * fix: 修复 app 未监听 unhandledRejection 的问题
  * refactor(validate): validate 移到单独的插件
  * refactor: egg-logrotater 移到单独的插件
  * refactor: egg-rest 移到单独的插件
  * chore: 修复 cise task id
  * refactor(onerror): 将 onerror 移到独立插件
  * test: 优化 logger 用例，并将 coverage 默认为 true
  * test: 去除无用代码，提高覆盖率
  * test: 简化 utils 的写法
  * chore(locals): 增加更详细的使用方法
  * fix: 不用 for in
  * deps: 升级依赖
  * test: 添加 assign 的 benchmark
  * refactor: locals 去除 Object.assign
  * feat: locals 获取时才计算
  * refactor: locals 从插件中移除
  * refactor: 将 egg-i18n 移除到单独插件
  * refactor: 将 egg-development 移除到单独插件
  * fix(multipart): 当用户没有选择文件点击上传时，不再报错。用户需要判断 stream.filename 是否存在
  * chore: 更新文档多分支
  * refactor(view): [BREAK_CHANGE] new way to implements view plugin
  * chore: 去除 tnpm 的环境变量
  * fix: 修复 baseDir 变量问题
  * chore: 使用 tnpm  集成包


## 2016-01-22, Version 1.1.0, @busi.hyy

### Notable Changes

* **feature**
  * `Agent` 和 `Application` 基于同一个基类，抹平 API 差异。
  * 重构 View 插件，让 renderView 成为正式 API。
  * egg 启动 http 服务时在 `app` 上触发 `"server"` 事件传递创建的 http server。
  * 优化 logger：
    * 精简本地开发时的日志输出。
    * 服务器环境启动时将所有日志打印到 stdout。
    * `onerror` 记录非 500 的错误。
* **fix**
  * 修复了一系列 bug。
* **dependence**
  * 升级到 `koa-router@5`。
  *
* **doc**
  * 将文档放到项目中维护并基于 gitbook [发布](http://egg.alibaba-inc.com/)。
  * 基于 jsdoc 生成项目的 API 文档。

### Commits

  * chore: 使用 gitbook 生成文档
  * doc: 去除多余文档
  * fix: 不修改 process.title
  * test: 使用mm@4
  * feat: egg 启动时触发 app 的 'server' 事件
  * chore: 修正版本管理和发布管理
  * feat: 在服务启动前把所有的日志都打印一份到 stdout
  * chore: 迁移到 site.alibaba.net
  * chore: 升级 egg-loader
  * fix: validate should return nth but throw error
  * feat: 将 Agent 和 Application 共用的 API 合并
  * doc: 添加 api 文档链接
  * chore: 添加命令同步 alidemo
  * refactor: 去除多余代码
  * doc: 继续优化 jsdoc
  * chore(package): 升级 egg-api-doc
  * doc: 优化 jsdoc
  * chore: 依赖 egg-api-doc
  * fix: 修复 master process.send 不存在的情况
  * fix(test): valid-jsdoc
  * chore: 增加 egg logo 切图
  * deps: 更新依赖
  * test: 修复因 mm 不兼容出错的用例
  * refact(rest): reimplementation because of ctx.route missing in koa-router5
  * fix: instrument 应该暴露在 app 下
  * docs(egg):update docs tree
  * chore: start 1.1
  * chore: npm publish 开发中的版本，总是设置 next tag
  * feat(router): use koa-router@5, patch it to work with egg
  * fix(siteFile): fix typo
  * fix: onerror 应该打印非 500 的错误
  * feat: 当 app/gent worker 出错通过 message 告知上层
  * fix(sitefile): use hasOwnProperty in case of ctx.path equal prototype, etc
  * feat: public 目录变更不重启
  * test: 修复 session id 正则判断
  * refactor(logger): 本地开发环境不精简 logger 输出
  * deps(egg-security): upgrade egg-security 1.1.0
  * refactor: 重构 logrotater
  * feature: allow legacy plugins to use `messager`
  * bug: fix typo messager -> messenger
  * test(view): fix view test
  * test: 去除多余日志
  * refactor(plugin/view): 让 renderView 成为正式 API
  * feat(development): 过滤 /public/ 目录
  * deps: humanize-bytes 替代 bytes
  * fix: 重构 onerror
  * refactor(development): 去除 static 中间件支持

1.0.22 / 2015-12-24
==================

  * fix: session 插件不应该关注是否需要清空自己

1.0.21 / 2015-12-24
==================

  * fix(userservice): 不自动设置 userId
  * feat(proxyview): add proxyview plugin

1.0.20 / 2015-12-23
==================

  * feat(development): 支持配置 watchDirs 和 ignoreDirs
  * refactor: 扩展放到 app/extend 目录
  * deps: 使用 autod 管理依赖
  * refactor: 去除 chair-utils 的依赖
  * test(watcher): add basic test
  * refactor: 用 class 重构 messenger
  * test: 删除 alipay 相关的 watcher 测试用例
  * fix: chair -> egg
  * fix: 优化 utils

1.0.19 / 2015-12-22
==================

  * fix: state 代理 locals

1.0.18 / 2015-12-22
==================

  * refactor: egg-agent.log 也放到 app.root/logs/appname 下
  * fix: tracelog 日志切割不应该由 loggerRotater 来处理

1.0.17 / 2015-12-21
==================

  * deps: update koa-locales to 1.4.3

1.0.16 / 2015-12-19
==================

  * test: 继续删除多余的日志输出和 eggPlugin 不存在提示
  * test: 隐藏多余的 error stack 到 stdout
  * chore: upgrade jar2proxy & proxy-args-convertor
  * test: 修复 watcher 的用例，原来配置的优先级有问题

1.0.15 / 2015-12-17
==================

 * fix: remove unused config.view.requireCache
 * test: fix view test logic
 * refactor(view): 默认 view 使用 application 设置
 * deps: 升级 egg-loader
 * fix: 允许同时监听 100 个 hsf 服务

1.0.14 / 2015-12-16
==================

  * test: 修复 tair 测试用例

1.0.13 / 2015-12-16
===================

  * fix(plugin:view) backward-compatible

1.0.12 / 2015-12-15
===================

  * refactor(view): view 初始化移回 app, 并做缓存 && 提供默认的 nunjucks_view
  * refactor(view): 移除不必要的测试用例, 修复转码用例
  * refactor(view): base_view实例化移到context中
  * refactor(plugin:view): 临时兼容view插件
  * refactor(plugin:view): init view
  * refactor(plugin:locals): inject helper/ctx/request
  * perf(messenger): 减少不必要的ipc
  * test(app_worker):增加app worker中invoke reponse返回错误的opaque测试用例
  * fix(onerror): unittest 环境返回 json 错误和 local 一致
  * fix: 修复 view 不存在时的 bug
  * refact(userrole): use ctx.roleFailureHandler, so that other middleware can customize easily
  * refact: remove ctx.escape, use ctx.helper.escape introduced by security plugin instead
  * fix(app_worker):invoke不存在时获取invoke相关属性导致进程挂掉

1.0.11 / 2015-12-12
==================

 * fix(development): 当某个文件发生改变时会触发3次rename事件

1.0.10 / 2015-12-10
==================

  * refact: change key name of ctx.userId stored in session to eggUserId_
  * refact(userservice,session): use ctx.userId, deprecate ctx.usersessionId

1.0.9 / 2015-12-09
==================

 * feat: 抽取urllib模块，统一记录日志
 * fix(cookies): 如果 hostname 是 localhost 就不要设置 cookie domain
 * fix: remove unused session related utils

1.0.8 / 2015-12-08
==================

 * fix: 增加缺少的插件 eggPlugin 配置
 * chore: 去除无用依赖
 * feat(loader): 抽出 egg-loader 模块
 * reflect(plugin-loader): 开启插件，自动将依赖的插件也开启了
 * feat: add config.view.watch
 * fix(ready): 修复未添加 ready timeout 的日志
 * feat: 允许配置 config.protocolHeaders 忽略不被信任的 header
 * test: cookies 测试用例覆盖到 100%
 * test: i18n 单元测试增加 domain
 * refactor(cookies): 重新实现适合 koa 的 cookies 模块
 * fix(context): 自动根据前缀反向代理的http header 自动判断当前请求 protocol
 * refactor: remove ssl key
 * fix(view): revert config
 * feat: auto inject csrf and nonce. egg/egg#116

1.0.7 / 2015-12-03
==================

 * fix(view): 修改 _renderThunk 的 this 指向

1.0.6 / 2015-12-02
==================

 * feat: improve mm.app agent-worker mechanism
 * refactor(loader): 去除 egg 内部插件的 plugin.js，使用 eggPlugin 替换
 * feat(loader): 增加插件名的约定
 * refactor(loader): 统一通过 loader 获取 pkg
 * deps: use egg-logger
 * fix(loader): 修复 isCore 的兼容性，用 isPlugin 替代
 * fix(userrole): userrole 不依赖于 userservice
 * deps(plugin): session->userservice(weak deps), userole->userservice
 * feat(plugin:view): add renderView & exports nunjucks
 * fix(plugin): session 依赖 userservice
 * feat: mm.app() deal with agent.js correctly now
 * refact(plugin): move plugin configs to plugin.js in plugin dir
 * deps(egg-watcher): use egg-watcher
 * test(session): 修复 session 被关闭的测试用例
 * fix(plugin): userserivce 插件依赖 session 插件
 * feat(loader): loader.allPlugins 暴露所有 plugin

1.0.5 / 2015-11-26
==================

 * test(static): add test for 404
 * fix: 完善 static 的配置
 * feat(static): 支持开发环境自动加载
 * deps(egg-security): use egg-security@1.0.0
 * fix: 修复 koa 的引用

1.0.4 / 2015-11-25
==================

 * fix(loader): AntxLoader 在 unittest 环境不应该合并 local 配置
 * fix router 在新版本无需添加 HEAD 的问题,增加测试用例
 * refactor(loader): 优化 ConfigLoader 使用统一加载逻辑
 * bugfix: 模板变量错误

1.0.3 / 2015-11-25
==================

 * refactor(loader): 新增 frameworkPaths，eggPaths 保持原来的含义
 * refactor(loader): 提高插件的优先级
 * feat: rename services/middlewares/controllers
 * feat: export validation
 * test: midway 的 egg demo 完善
 * deps(jar2proxy): use ali/jar2proxy instead of alipay/jar2proxy
 * refact(view): patch shtml sjs surl helper in view plugin and remove filter support
 * feat(middleware): change middlewares -> middleware
 * doc: 更新 customEgg 和 eggPath 的区别
 * doc: 添加框架开发文档

1.0.2 / 2015-11-23
==================

 * fix: 不修改 master title
 * doc: 添加后续计划
 * feat(loader): Agent 也支持 eggPath
 * refactor(cluster): master 进程的 title 只在原 title 前加 egg master
 * doc: release note 1.0.0
 * doc: 将所有 @since 替换成 1.0.0
 * refactor(loader): 简化 getAppname 的逻辑，只从 package.json 获取
 * doc(loader): 添加 loadEggPaths 的文档
 * feat(logrotater):finish logrotater logic
 * doc(jsonp): fix jsonp config doc
 * feat: 标准化基于 egg 的框架开发规范

1.0.1 / 2015-11-20
==================

 * deps(egg-cors): use egg-cors@2.0.0 #94
 * fix(plugin:onerror): hide error info in production
 * fix(test): 当指定 env 时做合并而不是覆盖

1.0.0 / 2015-11-20
==================

  * reflect(agent): AppWorkerClient 优化
  * feat(AgentWorkerClient): 支持 invoke generatorFunction
  * refact: worker client `_subscribe` 方法可以传字符串

1.0.0-beta.9 / 2015-11-19
==================

 * feat(pluginLoader): 将缺失的插件被谁依赖打印出来
 * deps: 将 glob 移到 devDependencies
 * feat(serverEnv): 去除 serverEnv 的命令行参数，已经没有使用场景
 * test(loader): 增加加载 config/serverEnv 的测试
 * doc(loader): 更新 loader 注释
 * feat(loader): 去除 server.conf

1.0.0-beta.8 / 2015-11-18
==================

 * doc: 更新文档
 * reflect: 修改 formatkey 的逻辑
 * reflect: 优化 agent
 * feat(core:middleware): 增加默认中间件 site-file 替换 favicion 中间件
 * feat(userrole): 通过 userrole 插件实现 role
 * refactor: logger 通过 env 判断是否精简
 * refactor(onerror): 去除 `NODE_ENV` 环境变量依赖
 * refactor(antx): prod env 不强制要求 antxpath
 * refactor(loader): 去除 type 配置，由上层框架封装
 * feat(userservice): 增加 userservice 插件
 * refactor(session): 重构 session，支持 session store 为 tair
 * doc: 更新 agent 的文档
 * refactor(loader): 将所有目录改成单数
 * refactor(loader): 抽出 logrotater 插件，去除 agent 内置插件
 * refactor(loader): 合并 ControllerLoader 到 BaseLoader
 * refactor(loader): 将 RouterLoader 合并到 BaseLoader
 * refactor(loader): 将 loadApp 合并到 BaseLoader
 * refactor(loader): loadFiles => loadFile 只加载一个文件
 * refactor(loader): 合并 loadExtend 到一个文件，并拆分多个方法
 * refactor(loader): 去除 loader 的配置，其实不需要进行配置
 * refactor(loader): 提取 loadDirs 方法
 * refactor(loader): 将 loadHelper 合并到 loadExtend
 * refactor(loader): 将所有方法挂载到 BaseLoader 上
 * deps: 去除未引用的依赖
 * refactor(jsonp): 放到 extends/context.js 实现

1.0.0-beta.7 / 2015-11-16
==================

 * style: 优化代码风格
 * deps: use @ali/egg-security instead of @ali/security
 * doc(agent): 将 #48 中文中的约定放到 docs 下

1.0.0-beta.6 / 2015-11-15
==================

 * reflect: 重构 monitor 为 agent
 * refactor(antx): session.secure 读取自己的配置
 * test(antx): 修复测试用例
 * refactor(antx): 去除 core 的 antx 配置
 * refactor(helper): 去除 helper.shtml，放到 egg-security
 * refactor(middlewares:notfound): remove antx config
 * refactor(plugins:watcher): remove antx
 * refactor(antx): session remove antx
 * refactor(antx): remove onerror antx config
 * refactor(antx): remove i18n antx
 * refactor(antx): 将 static 插件的 antx 移除
 * fix(plugin:depd): remove deprecate warning at state setter, to avoid warning at createContext. Relate to: #52 !12
 * refactor: 框架名可配置
 * refactor: 删除一些老的 chair 的 api
 * feat(core:loader): update loading dep to support class, related to #22
 * feat(plugin:locals): deprecate `this.state`, #32
 * feat(refactor): replace object-assign to Object.assign
 * chore: 使用统一的 eslintrc 配置

1.0.0-beta.5 / 2015-11-10
==================

 * fix(plugin:static): change maxage -> maxAge
 * fix(plugin:static): move assert to middleware, to support custom config at config.js
 * test: fix mm startMaster api
 * chore: de-duplicate code
 * refactor(loader): load_service 的 config 参数都放到 config.js 配置
 * test: 增加 load services，proxy 的单元测试
 * feat: loading 支持默认首字母小写
 * test: view 修改后 2s 再重新请求
 * feat: jsonp callback 可配置

1.0.0-beta.4 / 2015-11-04
==================

 * test: remove node 4 test env
 * feat: 基于 nunjucks 实现一个只包含 render 的 view 内置插件
 * feat: 增加 `ctx.instrument(event, action)`

1.0.0-beta.3 / 2015-11-04
==================

 * fix: chair/chair#1295 处理异常的代码异常时程序卡住
 * refactor(loader): 不会变化的数据不需要使用 getter
 * refactor(loader): load server.conf 逻辑全部放到 chair-utils
 * fix: load monitor 应该先 load core 的

1.0.0-beta.2 / 2015-11-03
==================

 * feat: 删除 pagemock 和 jsonview 插件

1.0.0-beta.1 / 2015-11-02
==================

 * 从 chair 中抽出 core，玻璃 ali 相关服务的插件
