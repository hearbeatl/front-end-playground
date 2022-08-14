(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{626:function(t,_,v){"use strict";v.r(_);var s=v(69),e=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("像在线文档这样大型的项目，不管是从功能职责方面，还是从代码维护方面，分层和分模块都是必然的趋势。而网络层作为与服务端直接连接的一层，有多少是我们可以做到更好的呢？")]),t._v(" "),v("h1",{attrs:{id:"认识网络层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#认识网络层"}},[t._v("#")]),t._v(" 认识网络层")]),t._v(" "),v("p",[t._v("首先，涉及多人在线协作的场景，从用户交互到服务端存储都会特别复杂。对于前端来说，从后台获取的数据到展示，分别需要经过网络层、数据层和渲染层。除此之外，多人在线同样涉及房间管理等，简单来说，我们大致可以这么进行分层（图1）：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/tencent-doc-network_0.png",alt:"图1"}})]),t._v(" "),v("h2",{attrs:{id:"网络层职责"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层职责"}},[t._v("#")]),t._v(" 网络层职责")]),t._v(" "),v("p",[t._v("一般来说，网络层无非就是做一些与服务端通信的工作，例如发起请求、异常处理、自动重试、登录态续期等。如果说，除了 HTTP 请求，可能还涉及 socket、长连接、请求数据缓存等各种功能。")]),t._v(" "),v("p",[t._v("在多人协作的场景下，为了保证用户体验，一般会采用 OT 算法来进行冲突处理。而为了保证每次的用户操作都可以按照正确的时序来更新，我们会维护一个自增的版本号，每次有新的修改，都会更新版本号。因此，在这样的场景下，网络层的职责大概包括：")]),t._v(" "),v("ul",[v("li",[t._v("校验数据合法性")]),t._v(" "),v("li",[t._v("本地数据准确的提交给后台（涉及队列和版本控制）")]),t._v(" "),v("li",[t._v("协同数据正确处理后分发给数据层（涉及冲突处理）")])]),t._v(" "),v("p",[t._v("我们能看到，与网络层有交接的主要包括服务端和数据层。")]),t._v(" "),v("p",[t._v("那么，我们可以考虑将网络层拆分模块：\n"),v("strong",[t._v("1. 连接层：管理与服务端的连接（Socket、长连接等）。")]),t._v(" "),v("strong",[t._v("2. 接入层：管理数据版本、冲突处理、与数据层的连接等。")])]),t._v(" "),v("p",[t._v("这样，我们的分层结构调整为图2：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/tencent-doc-network_1.jpg",alt:"图2"}})]),t._v(" "),v("h2",{attrs:{id:"网络层设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层设计"}},[t._v("#")]),t._v(" 网络层设计")]),t._v(" "),v("p",[t._v("既然对网络层进行了模块的拆分，那么相关的设计我们也来分模块进行吧。")]),t._v(" "),v("h3",{attrs:{id:"连接层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连接层"}},[t._v("#")]),t._v(" 连接层")]),t._v(" "),v("p",[t._v("连接层作为直接与服务端连接的一层，需要包括以下能力（图3）：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("多种通信方式支持")]),t._v("（长连接、socket、短连接、SSE等）")]),t._v(" "),v("li",[v("strong",[t._v("房间管理")]),t._v("（心跳管理、用户管理、消息管理）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/tencent-doc-network_2.png",alt:"图3"}})]),t._v(" "),v("p",[v("strong",[t._v("1. 多种通信方式支持。")])]),t._v(" "),v("p",[t._v("前后端通信方式有很多种，常见的包括 HTTP 短轮询（pollinf）、Websocket、HTTP 长轮询（long-polling）、SSE（Server-Sent Events）等。")]),t._v(" "),v("p",[t._v("我们也能看到，不同的在线文档团队选用的通信方式并不一致。例如谷歌文档上行数据使用 Ajax、下行数据使用 HTTP 长轮询推送；石墨文档上行数据使用 Ajax、下行数据使用 SSE 推送；金山文档、飞书文档、腾讯文档则都使用了 Websocket 传输。")]),t._v(" "),v("p",[t._v("而每种通信方式都有各自的优缺点，包括兼容性、资源消耗、实时性等，也有可能跟业务团队自身的后台架构有关系。因此我们在设计连接层的时候，考虑接口拓展性，应该预留对各种方式的支持。")]),t._v(" "),v("p",[v("strong",[t._v("2. 房间管理。")])]),t._v(" "),v("p",[t._v("由于多人协同的需要，相比普通的 Web 页面，还多了房间和用户的管理。在同一个文档中的用户，可视作在同一个房间。除了能看到哪些人在同一个房间以外，我们能收到相互之间的消息，在文档的场景中，用户的每一个操作，都可以作为是一个消息。")]),t._v(" "),v("p",[t._v("但文档和一般的房间聊天不一样的地方在于，用户的操作内容可能会很大，例如用户复制粘贴了一个10W、20W的表格内容，这样的消息显然无法一次性传输完。在这种情况下，除了考虑像 Websocket 这种需要自行进行数据压缩（HTTP 本身支持压缩）以外，我们还需要实现自己的分片逻辑。当涉及数据分片之后，紧接而来的还有如何分片、分片数据丢失的一些情况处理。")]),t._v(" "),v("p",[t._v("这样，我们的连接层则演化成图4的架构：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/tencent-doc-network_3.jpg",alt:"图4"}})]),t._v(" "),v("h2",{attrs:{id:"接入层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接入层"}},[t._v("#")]),t._v(" 接入层")]),t._v(" "),v("p",[t._v("接入层主要负责与业务比较相关的一些内容，例如协同数据的版本管理、冲突处理、用户操作的任务队列。我们可以从接收和发送两个方向来进行拆分（图5）：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("接收数据")]),t._v("（服务端 -> 数据层）：管理来自服务端的数据")]),t._v(" "),v("li",[v("strong",[t._v("发送数据")]),t._v("（数据层 -> 服务端）：管理需要提交给服务端的数据")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/tencent-doc-network_4.png",alt:"图5"}})]),t._v(" "),v("p",[t._v("接入层的职责主要包括两个部分：\n"),v("strong",[t._v("1. 维护数据任务队列。")])]),t._v(" "),v("ul",[v("li",[t._v("用户操作数据正常进入队列")]),t._v(" "),v("li",[t._v("队列任务正常提交到接入层")]),t._v(" "),v("li",[t._v("队列任务提交异常后进行重试")]),t._v(" "),v("li",[t._v("队列任务确认提交成功后移除")])]),t._v(" "),v("p",[v("strong",[t._v("2. 数据版本有序递增。")])]),t._v(" "),v("ul",[v("li",[t._v("协同数据版本更新")]),t._v(" "),v("li",[t._v("丢失数据版本补拉")]),t._v(" "),v("li",[t._v("提交数据版本递增")])]),t._v(" "),v("p",[t._v("也就是说，来自数据层的数据，将会添加到任务队列中。任务队列中的数据在提交数据之前，需要检查本地的版本和服务端的版本是否一致，如果有版本缺失的话，则要先从服务端拉取缺失的版本，确认本地版本最新后，则可以提交到服务端。")]),t._v(" "),v("p",[t._v("而来自服务端的数据，则需要先和任务队列中的数据进行冲突处理。冲突处理完成之后，则会同步到数据层。")]),t._v(" "),v("p",[t._v("这里面其实还有更多的细节，包括队列中任务的状态、任务的合并、数据版本的合并、版本断层的处理、重试失败的处理，队列中任务与协同消息的冲突处理、撤销重做的反向冲突处理，甚至还可能涉及断网离线的操作、本地缓存的任务队列、离线数据与在线数据的同步等等。本文我们就不继续讨论这些细节，还是回归到整体的设计上。")]),t._v(" "),v("p",[t._v("到这，我们的网络层架构大概出来了：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/tencent-doc-network_5.png",alt:"图6"}})]),t._v(" "),v("h1",{attrs:{id:"结束语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),v("p",[t._v("相比其他常见前端项目，在线文档光是网络层的设计都要复杂很多。而网络层只是其中一小部分，我们还有数据层、渲染层、各个组件和 feature 模块，依赖管理、通信管理、流程控制、性能优化等各种功能模块，每一个都有特别多的挑战。对于前端来说，能参与这样一个项目也是一件很幸福的事情了。")])])}),[],!1,null,null,null);_.default=e.exports}}]);