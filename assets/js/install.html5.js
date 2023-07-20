const e=JSON.parse('{"key":"v-4c41b060","path":"/posts/devops/docker/install.html","title":"Centos7\u5B89\u88C5Docker\u6B65\u9AA4","lang":"zh-CN","frontmatter":{"title":"Centos7\u5B89\u88C5Docker\u6B65\u9AA4","date":"2022-02-19T15:53:03.000Z","lang":"zh-CN","tag":["docker"],"category":["docker","\u8FD0\u7EF4"],"image":"https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202209041529112.jpg","summary":"\u2003Docker \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5E94\u7528\u5BB9\u5668\u5F15\u64CE\uFF0C\u8BA9\u5F00\u53D1\u8005\u53EF\u4EE5\u6253\u5305\u4ED6\u4EEC\u7684\u5E94\u7528\u4EE5\u53CA\u4F9D\u8D56\u5305\u5230\u4E00\u4E2A\u53EF\u79FB\u690D\u7684\u5BB9\u5668\u4E2D\uFF0C\u7136\u540E\u53D1\u5E03\u5230\u4EFB\u4F55\u6D41\u884C\u7684 Linux \u6216 Windows \u64CD\u4F5C\u7CFB\u7EDF\u7684\u673A\u5668\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u865A\u62DF\u5316\uFF0C\u5BB9\u5668\u662F\u5B8C\u5168\u4F7F\u7528\u6C99\u7BB1\u673A\u5236\uFF0C\u76F8\u4E92\u4E4B\u95F4\u4E0D\u4F1A\u6709\u4EFB\u4F55\u63A5\u53E3\u3002\u7B80\u5316\u914D\u7F6E,\u955C\u50CF\u5B89\u88C5\uFF0C\u5BB9\u5668\u7684\u521B\u5EFA\u975E\u5E38\u7684\u65B9\u4FBF\uFF0C\u540C\u65F6\u53EF\u4EE5\u5F39\u6027\u6269\u5BB9\u3002\\n","head":[["meta",{"property":"og:url","content":"https://quyuandong.github.io/my-blog-docs/posts/devops/docker/install.html"}],["meta",{"property":"og:site_name","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"og:title","content":"Centos7\u5B89\u88C5Docker\u6B65\u9AA4"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-07-20T09:32:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2022-02-19T15:53:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-20T09:32:33.000Z"}]]},"excerpt":"<p>\u2003Docker \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5E94\u7528\u5BB9\u5668\u5F15\u64CE\uFF0C\u8BA9\u5F00\u53D1\u8005\u53EF\u4EE5\u6253\u5305\u4ED6\u4EEC\u7684\u5E94\u7528\u4EE5\u53CA\u4F9D\u8D56\u5305\u5230\u4E00\u4E2A\u53EF\u79FB\u690D\u7684\u5BB9\u5668\u4E2D\uFF0C\u7136\u540E\u53D1\u5E03\u5230\u4EFB\u4F55\u6D41\u884C\u7684 Linux \u6216 Windows \u64CD\u4F5C\u7CFB\u7EDF\u7684\u673A\u5668\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u865A\u62DF\u5316\uFF0C\u5BB9\u5668\u662F\u5B8C\u5168\u4F7F\u7528\u6C99\u7BB1\u673A\u5236\uFF0C\u76F8\u4E92\u4E4B\u95F4\u4E0D\u4F1A\u6709\u4EFB\u4F55\u63A5\u53E3\u3002\u7B80\u5316\u914D\u7F6E,\u955C\u50CF\u5B89\u88C5\uFF0C\u5BB9\u5668\u7684\u521B\u5EFA\u975E\u5E38\u7684\u65B9\u4FBF\uFF0C\u540C\u65F6\u53EF\u4EE5\u5F39\u6027\u6269\u5BB9\u3002</p>\\n","headers":[{"level":2,"title":"\u4E00\u3001docker \u5B89\u88C5","slug":"\u4E00\u3001docker-\u5B89\u88C5","children":[{"level":3,"title":"1\u3001\u5378\u8F7D\u65E7\u7684Docker\u5F15\u64CE","slug":"_1\u3001\u5378\u8F7D\u65E7\u7684docker\u5F15\u64CE","children":[]},{"level":3,"title":"2\u3001\u4F7F\u7528\u5B58\u50A8\u5E93\u5B89\u88C5docker","slug":"_2\u3001\u4F7F\u7528\u5B58\u50A8\u5E93\u5B89\u88C5docker","children":[]}]},{"level":2,"title":"\u4E8C\u3001docker \u5E38\u89C1\u4F7F\u7528\u547D\u4EE4","slug":"\u4E8C\u3001docker-\u5E38\u89C1\u4F7F\u7528\u547D\u4EE4","children":[]}],"git":{"updatedTime":1689845553000,"contributors":[{"name":"qyd","email":"1984602738@qq.com","commits":1}]},"filePathRelative":"posts/devops/docker/install.md","readingTime":{"minutes":2.7,"words":809},"copyright":"\u8457\u4F5C\u6743\u5F52\u65F6\u5149\u9759\u597D\u6240\u6709\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://quyuandong.github.io/my-blog-docs/my-blog-docs/posts/devops/docker/install.html"}');export{e as data};