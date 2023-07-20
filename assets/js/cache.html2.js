const e=JSON.parse('{"key":"v-324dfae9","path":"/posts/devops/nginx/cache.html","title":"Nginx Cache\u7F13\u5B58\u914D\u7F6E","lang":"zh-CN","frontmatter":{"title":"Nginx Cache\u7F13\u5B58\u914D\u7F6E","date":"2022-03-14T10:13:50.000Z","tag":["nginx"],"category":["nginx","\u8FD0\u7EF4"],"image":"https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201016051.jpg","summary":"\u2003Nginx\u4F5C\u4E3AWeb\u7F13\u5B58\u670D\u52A1\u5668\uFF0C\u5B83\u4ECB\u4E8E\u5BA2\u6237\u7AEF\u548C\u5E94\u7528\u670D\u52A1\u5668\u4E4B\u95F4\uFF0C\u5F53\u7528\u6237\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u4E00\u4E2AURL\u65F6\uFF0Cweb\u7F13\u5B58\u670D\u52A1\u5668\u4F1A\u53BB\u5E94\u7528\u670D\u52A1\u5668\u83B7\u53D6\u8981\u5C55\u793A\u7ED9\u7528\u6237\u7684\u5185\u5BB9\uFF0C\u5C06\u5185\u5BB9\u7F13\u5B58\u5230\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u5F53\u4E0B\u4E00\u6B21\u8BF7\u6C42\u5230\u6765\u65F6\uFF0C\u5982\u679C\u8BBF\u95EE\u7684\u662F\u540C\u4E00\u4E2AURL\uFF0Cweb\u7F13\u5B58\u670D\u52A1\u5668\u5C31\u4F1A\u76F4\u63A5\u5C06\u4E4B\u524D\u7F13\u5B58\u7684\u5185\u5BB9\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u800C\u4E0D\u662F\u5411\u5E94\u7528\u670D\u52A1\u5668\u518D\u6B21\u53D1\u9001\u8BF7\u6C42\u3002web\u7F13\u5B58\u964D\u4F4E\u4E86\u5E94\u7528\u670D\u52A1\u5668\u3001\u6570\u636E\u5E93\u7684\u8D1F\u8F7D\uFF0C\u51CF\u5C11\u4E86\u7F51\u7EDC\u5EF6\u8FDF\uFF0C\u63D0\u9AD8\u4E86\u7528\u6237\u8BBF\u95EE\u7684\u54CD\u5E94\u901F\u5EA6\uFF0C\u589E\u5F3A\u4E86\u7528\u6237\u7684\u4F53\u9A8C\u3002\\n","head":[["meta",{"property":"og:url","content":"https://quyuandong.github.io/my-blog-docs/posts/devops/nginx/cache.html"}],["meta",{"property":"og:site_name","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"og:title","content":"Nginx Cache\u7F13\u5B58\u914D\u7F6E"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-07-20T14:06:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:published_time","content":"2022-03-14T10:13:50.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-20T14:06:07.000Z"}]]},"excerpt":"<p>\u2003Nginx\u4F5C\u4E3AWeb\u7F13\u5B58\u670D\u52A1\u5668\uFF0C\u5B83\u4ECB\u4E8E\u5BA2\u6237\u7AEF\u548C\u5E94\u7528\u670D\u52A1\u5668\u4E4B\u95F4\uFF0C\u5F53\u7528\u6237\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u4E00\u4E2AURL\u65F6\uFF0Cweb\u7F13\u5B58\u670D\u52A1\u5668\u4F1A\u53BB\u5E94\u7528\u670D\u52A1\u5668\u83B7\u53D6\u8981\u5C55\u793A\u7ED9\u7528\u6237\u7684\u5185\u5BB9\uFF0C\u5C06\u5185\u5BB9\u7F13\u5B58\u5230\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u5F53\u4E0B\u4E00\u6B21\u8BF7\u6C42\u5230\u6765\u65F6\uFF0C\u5982\u679C\u8BBF\u95EE\u7684\u662F\u540C\u4E00\u4E2AURL\uFF0Cweb\u7F13\u5B58\u670D\u52A1\u5668\u5C31\u4F1A\u76F4\u63A5\u5C06\u4E4B\u524D\u7F13\u5B58\u7684\u5185\u5BB9\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u800C\u4E0D\u662F\u5411\u5E94\u7528\u670D\u52A1\u5668\u518D\u6B21\u53D1\u9001\u8BF7\u6C42\u3002web\u7F13\u5B58\u964D\u4F4E\u4E86\u5E94\u7528\u670D\u52A1\u5668\u3001\u6570\u636E\u5E93\u7684\u8D1F\u8F7D\uFF0C\u51CF\u5C11\u4E86\u7F51\u7EDC\u5EF6\u8FDF\uFF0C\u63D0\u9AD8\u4E86\u7528\u6237\u8BBF\u95EE\u7684\u54CD\u5E94\u901F\u5EA6\uFF0C\u589E\u5F3A\u4E86\u7528\u6237\u7684\u4F53\u9A8C\u3002</p>\\n","headers":[{"level":2,"title":"\u6D4F\u89C8\u5668\u7F13\u5B58\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F","slug":"\u6D4F\u89C8\u5668\u7F13\u5B58\u7684\u4F5C\u7528\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u7F13\u5B58\u7684\u8D44\u6E90\u6587\u4EF6\u5230\u4EC0\u4E48\u5730\u65B9\u53BB\u4E86\u5462\uFF1F","slug":"\u7F13\u5B58\u7684\u8D44\u6E90\u6587\u4EF6\u5230\u4EC0\u4E48\u5730\u65B9\u53BB\u4E86\u5462","children":[]},{"level":2,"title":"\u534F\u5546\u7F13\u5B58 Last-Modified/if-Modify-Since","slug":"\u534F\u5546\u7F13\u5B58-last-modified-if-modify-since","children":[]},{"level":2,"title":"\u534F\u5546\u7F13\u5B58 ETag/if-None-Match","slug":"\u534F\u5546\u7F13\u5B58-etag-if-none-match","children":[]},{"level":2,"title":"last-modified \u548C ETag \u4E4B\u95F4\u5BF9\u6BD4","slug":"last-modified-\u548C-etag-\u4E4B\u95F4\u5BF9\u6BD4","children":[]},{"level":2,"title":"\u7406\u89E3\u5F3A\u5236\u7F13\u5B58","slug":"\u7406\u89E3\u5F3A\u5236\u7F13\u5B58","children":[]},{"level":2,"title":"nginx \u7F13\u5B58\u914D\u7F6E","slug":"nginx-\u7F13\u5B58\u914D\u7F6E","children":[]},{"level":2,"title":"\u89E3\u51B3 nginx \u53CD\u5411\u4EE3\u7406\u7F13\u5B58\u4E0D\u8D77\u4F5C\u7528\u7684\u95EE\u9898","slug":"\u89E3\u51B3-nginx-\u53CD\u5411\u4EE3\u7406\u7F13\u5B58\u4E0D\u8D77\u4F5C\u7528\u7684\u95EE\u9898","children":[]}],"git":{"updatedTime":1689861967000,"contributors":[{"name":"Xuanrm","email":"917091164@qq.com","commits":1}]},"filePathRelative":"posts/devops/nginx/cache.md","readingTime":{"minutes":8.8,"words":2639},"copyright":"\u8457\u4F5C\u6743\u5F52\u65F6\u5149\u9759\u597D\u6240\u6709\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://quyuandong.github.io/my-blog-docs/my-blog-docs/posts/devops/nginx/cache.html"}');export{e as data};
