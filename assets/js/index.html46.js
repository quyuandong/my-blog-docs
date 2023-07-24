const e=JSON.parse('{"key":"v-614bc111","path":"/posts/devops/redis/","title":"Redis \u591A\u79CD\u5B89\u88C5\u65B9\u5F0F","lang":"zh-CN","frontmatter":{"title":"Redis \u591A\u79CD\u5B89\u88C5\u65B9\u5F0F","date":"2022-04-22T15:53:03.000Z","tag":["Redis"],"category":["\u8FD0\u7EF4"],"image":"https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202204221600458.jpg","sticky":6,"summary":"\u2003Redis(Remote Dictionary Server)\uFF0C\u5373\u8FDC\u7A0B\u5B57\u5178\u670D\u52A1\uFF0C\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u4F7F\u7528 ANSI C \u8BED\u8A00\u7F16\u5199\u3001\u652F\u6301\u7F51\u7EDC\u3001\u53EF\u57FA\u4E8E\u5185\u5B58\u4EA6\u53EF\u6301\u4E45\u5316\u7684\u65E5\u5FD7\u578B\u3001Key-Value \u6570\u636E\u5E93\uFF0C\u5E76\u63D0\u4F9B\u591A\u79CD\u8BED\u8A00\u7684 API\u3002redis \u7684\u5B98\u7F51\u5730\u5740\uFF0C\u975E\u5E38\u597D\u8BB0\uFF0C\u662F redis.io\u3002(\u57DF\u540D\u540E\u7F00 io \u5C5E\u4E8E\u56FD\u5BB6\u57DF\u540D\uFF0C\u662F british Indian Ocean territory\uFF0C\u5373\u82F1\u5C5E\u5370\u5EA6\u6D0B\u9886\u5730\uFF09\uFF0CVmware \u5728\u8D44\u52A9\u7740 redis \u9879\u76EE\u7684\u5F00\u53D1\u548C\u7EF4\u62A4\u3002\\n","head":[["meta",{"property":"og:url","content":"https://quyuandong.github.io/my-blog-docs/posts/devops/redis/"}],["meta",{"property":"og:site_name","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"og:title","content":"Redis \u591A\u79CD\u5B89\u88C5\u65B9\u5F0F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-07-24T09:10:19.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2022-04-22T15:53:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T09:10:19.000Z"}]]},"excerpt":"<p>\u2003Redis(Remote Dictionary Server)\uFF0C\u5373\u8FDC\u7A0B\u5B57\u5178\u670D\u52A1\uFF0C\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u4F7F\u7528 ANSI C \u8BED\u8A00\u7F16\u5199\u3001\u652F\u6301\u7F51\u7EDC\u3001\u53EF\u57FA\u4E8E\u5185\u5B58\u4EA6\u53EF\u6301\u4E45\u5316\u7684\u65E5\u5FD7\u578B\u3001Key-Value \u6570\u636E\u5E93\uFF0C\u5E76\u63D0\u4F9B\u591A\u79CD\u8BED\u8A00\u7684 API\u3002redis \u7684\u5B98\u7F51\u5730\u5740\uFF0C\u975E\u5E38\u597D\u8BB0\uFF0C\u662F redis.io\u3002(\u57DF\u540D\u540E\u7F00 io \u5C5E\u4E8E\u56FD\u5BB6\u57DF\u540D\uFF0C\u662F british Indian Ocean territory\uFF0C\u5373\u82F1\u5C5E\u5370\u5EA6\u6D0B\u9886\u5730\uFF09\uFF0CVmware \u5728\u8D44\u52A9\u7740 redis \u9879\u76EE\u7684\u5F00\u53D1\u548C\u7EF4\u62A4\u3002</p>\\n","headers":[{"level":2,"title":"\u4E00\u3001Redis \u7B80\u4ECB","slug":"\u4E00\u3001redis-\u7B80\u4ECB","children":[]},{"level":2,"title":"\u4E8C\u3001Redis \u5B89\u88C5","slug":"\u4E8C\u3001redis-\u5B89\u88C5","children":[{"level":3,"title":"1\u3001Yum \u65B9\u5F0F\u5B89\u88C5 Redis","slug":"_1\u3001yum-\u65B9\u5F0F\u5B89\u88C5-redis","children":[]},{"level":3,"title":"2\u3001\u6E90\u7801\u65B9\u5F0F\u5B89\u88C5 Redis","slug":"_2\u3001\u6E90\u7801\u65B9\u5F0F\u5B89\u88C5-redis","children":[]}]},{"level":2,"title":"\u4E09\u3001Redis \u76F8\u5173\u914D\u7F6E","slug":"\u4E09\u3001redis-\u76F8\u5173\u914D\u7F6E","children":[]},{"level":2,"title":"\u56DB\u3001Redis \u76F8\u5173\u547D\u4EE4","slug":"\u56DB\u3001redis-\u76F8\u5173\u547D\u4EE4","children":[]}],"git":{"updatedTime":1690189819000,"contributors":[{"name":"qyd","email":"1984602738@qq.com","commits":1}]},"filePathRelative":"posts/devops/redis/README.md","readingTime":{"minutes":7.56,"words":2269},"copyright":"\u8457\u4F5C\u6743\u5F52\u65F6\u5149\u9759\u597D\u6240\u6709\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://qyd_9.gitee.io/my-blog-docs/my-blog-docs/posts/devops/redis/"}');export{e as data};
