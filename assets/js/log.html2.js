const t=JSON.parse('{"key":"v-147a0632","path":"/posts/devops/nginx/log.html","title":"Nginx\u65E5\u5FD7\u914D\u7F6E\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"title":"Nginx\u65E5\u5FD7\u914D\u7F6E\u8BE6\u89E3","date":"2022-03-14T12:02:50.000Z","tag":["nginx"],"category":["nginx","\u8FD0\u7EF4"],"image":"https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202207201036989.jpg","summary":"\u2003Nginx \u65E5\u5FD7\u5BF9\u4E8E\u7EDF\u8BA1\u3001\u7CFB\u7EDF\u670D\u52A1\u6392\u9519\u5F88\u6709\u7528\u3002Nginx \u65E5\u5FD7\u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\uFF1Aaccess_log(\u8BBF\u95EE\u65E5\u5FD7)\u548C error_log(\u9519\u8BEF\u65E5\u5FD7)\u3002\u901A\u8FC7\u8BBF\u95EE\u65E5\u5FD7\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u7528\u6237\u7684 IP \u5730\u5740\u3001\u6D4F\u89C8\u5668\u7684\u4FE1\u606F\uFF0C\u8BF7\u6C42\u7684\u5904\u7406\u65F6\u95F4\u7B49\u4FE1\u606F\u3002\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u4E86\u8BBF\u95EE\u51FA\u9519\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5B9A\u4F4D\u9519\u8BEF\u7684\u539F\u56E0\u3002\u672C\u6587\u5C06\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B\u5982\u4F55\u914D\u7F6E Nginx \u65E5\u5FD7\u3002\\n","head":[["meta",{"property":"og:url","content":"https://quyuandong.github.io/my-blog-docs/posts/devops/nginx/log.html"}],["meta",{"property":"og:site_name","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"og:title","content":"Nginx\u65E5\u5FD7\u914D\u7F6E\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-07-19T09:37:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:published_time","content":"2022-03-14T12:02:50.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-19T09:37:54.000Z"}]]},"excerpt":"<p>\u2003Nginx \u65E5\u5FD7\u5BF9\u4E8E\u7EDF\u8BA1\u3001\u7CFB\u7EDF\u670D\u52A1\u6392\u9519\u5F88\u6709\u7528\u3002Nginx \u65E5\u5FD7\u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\uFF1Aaccess_log(\u8BBF\u95EE\u65E5\u5FD7)\u548C error_log(\u9519\u8BEF\u65E5\u5FD7)\u3002\u901A\u8FC7\u8BBF\u95EE\u65E5\u5FD7\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u7528\u6237\u7684 IP \u5730\u5740\u3001\u6D4F\u89C8\u5668\u7684\u4FE1\u606F\uFF0C\u8BF7\u6C42\u7684\u5904\u7406\u65F6\u95F4\u7B49\u4FE1\u606F\u3002\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u4E86\u8BBF\u95EE\u51FA\u9519\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5B9A\u4F4D\u9519\u8BEF\u7684\u539F\u56E0\u3002\u672C\u6587\u5C06\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B\u5982\u4F55\u914D\u7F6E Nginx \u65E5\u5FD7\u3002</p>\\n","headers":[{"level":2,"title":"\u8BBE\u7F6E access_log","slug":"\u8BBE\u7F6E-access-log","children":[{"level":3,"title":"\u4F7F\u7528 log_format \u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F","slug":"\u4F7F\u7528-log-format-\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F","children":[]}]},{"level":2,"title":"\u8BBE\u7F6E error_log","slug":"\u8BBE\u7F6E-error-log","children":[]},{"level":2,"title":"open_log_file_cache","slug":"open-log-file-cache","children":[]}],"git":{"updatedTime":1689759474000,"contributors":[{"name":"qyd","email":"1984602738@qq.com","commits":1}]},"filePathRelative":"posts/devops/nginx/log.md","readingTime":{"minutes":4.41,"words":1322},"copyright":"\u8457\u4F5C\u6743\u5F52\u65F6\u5149\u9759\u597D\u6240\u6709\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://quyuandong.github.io/my-blog-docs/my-blog-docs/posts/devops/nginx/log.html"}');export{t as data};