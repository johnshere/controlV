# ControlV

> 基于 vue 全家桶技术，使用 vue-cli 搭建，而后改造；参考了公司 touch2.0。

> 改造目的：

> &emsp;&emsp;首先，致力于实现多版本发布，控制不同版本在项目中兼容，实现开发、测试、发布多个版本；而后，兼容多个项目同时开发

> &emsp;&emsp;已经同步到 GitHub：https://github.com/johnshere/controlV

## Build Setup

```bash
# install yarn
npm install -g yarn

# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

## 优化方向

### 优化目标：

> 1、测试数据使用  
> 2、JSBridge 封装  
> &emsp;&emsp;与运行环境交互的接口封装，如：沃受理、微信、浏览器  
>  3、数据传递  
> &emsp;&emsp;需要多模块交互的数据使用 store，不要用 sessionStorage  
> &emsp;&emsp;同步提交数据，不要出现异步、回调方法  
> 4、多入口打包
> 5、npm 私服搭建  
> &emsp;&emsp;可使用公司的，如：miso 的  
> 6、UI 约定目录结构  
> 7、省份区分  
> &emsp;&emsp;省份发布，打包需要不同  
> 8、vue 的 mint-ui 学习  
> &emsp;&emsp;准备使用，但是也可以使用其他第三方  
> 9、调整发布目录
> 10、适应屏幕宽度  
> &emsp;&emsp;样式设置不允许出现 px，全部使用 rem  
> &emsp;&emsp;根据具体情况区分  
> 11、axios 完善  
> 12、工程配置文件  
> &emsp;&emsp;省份区分在这里配置  
> 13、常量库  
> &emsp;&emsp;维护一个根据省份继承的常量库  
> 14、样式主题控制  
> &emsp;&emsp;主题文件和样式单独设置  
> &emsp;&emsp;建议主题只做首屏几个页面  
> 15、图片 hash  
> 16、国际化  
> 17、多单页融合打包为一个单页（自由组合）

### 已完成：

> 2、JSBridge 封装 --已完成  
> &emsp;&emsp;与运行环境交互的接口封装，如：沃受理、微信、浏览器  
> 3、数据传递 --已完成  
> &emsp;&emsp;需要多模块交互的数据使用 store，不要用 sessionStorage  
> &emsp;&emsp;同步提交数据，不要出现异步、回调方法  
> 4、多入口打包 --已完成  
> 6、UI 约定目录结构 --已协商  
> 7、省份区分 --放入工程配置文件中  
> &emsp;&emsp;省份发布，打包需要不同  
> 9、调整发布目录 --已完成  
> 11、axios 完善 --已完成  
> 12、工程配置文件 --已完成  
> &emsp;&emsp;省份区分在这里配置  
> 13、常量库 --已完成  
> &emsp;&emsp;维护一个根据省份继承的常量库  
> 15、图片 hash --已完成（框架自带）  
> 16、国际化 --已完成

### 待处理：

> 1、测试数据使用 --暂时搁置  
> 5、npm 私服搭建 --暂时搁置  
> &emsp;&emsp;可使用公司的，如：miso 的  
> 8、vue 的 mint-ui 学习  
> 10、适应屏幕宽度  
> &emsp;&emsp;样式设置不允许出现 px，全部使用 rem  
> &emsp;&emsp;根据具体情况区分  
> 14、样式主题控制 --需要 UI 控制  
> 17、多单页融合打包为一个单页（自由组合）
