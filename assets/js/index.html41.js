const t=JSON.parse('{"key":"v-6ac7f8fa","path":"/posts/interview/","title":"Node\u591A\u79CD\u5B89\u88C5\u65B9\u5F0F","lang":"zh-CN","frontmatter":{"title":"Node\u591A\u79CD\u5B89\u88C5\u65B9\u5F0F","date":"2022-04-07T11:56:16.000Z","tag":["Node"],"category":["Node"],"image":"https://cdn.staticaly.com/gh/AnyFork/blog-images/main/markdown/202204071154296.jpg","sticky":5,"summary":"\u2003Node.js \u53D1\u5E03\u4E8E 2009 \u5E74 5 \u6708\uFF0C\u7531 Ryan Dahl \u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u57FA\u4E8E Chrome V8 \u5F15\u64CE\u7684 JavaScript \u8FD0\u884C\u73AF\u5883\uFF0C\u4F7F\u7528\u4E86\u4E00\u4E2A\u4E8B\u4EF6\u9A71\u52A8\u3001\u975E\u963B\u585E\u5F0F I/O \u6A21\u578B\uFF0C\u8BA9 JavaScript \u8FD0\u884C\u5728\u670D\u52A1\u7AEF\u7684\u5F00\u53D1\u5E73\u53F0\uFF0CJavaScript \u6210\u4E3A\u4E0E PHP\u3001Python\u3001Perl\u3001Ruby \u7B49\u670D\u52A1\u7AEF\u8BED\u8A00\u5E73\u8D77\u5E73\u5750\u7684\u811A\u672C\u8BED\u8A00\u3002Node.js \u5BF9\u4E00\u4E9B\u7279\u6B8A\u7528\u4F8B\u8FDB\u884C\u4F18\u5316\uFF0C\u63D0\u4F9B\u66FF\u4EE3\u7684 API\uFF0C\u4F7F\u5F97 V8 \u5728\u975E\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C\u5F97\u66F4\u597D\uFF0CV8 \u5F15\u64CE\u6267\u884C Javascript \u7684\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u6027\u80FD\u975E\u5E38\u597D\uFF0C\u57FA\u4E8E Chrome JavaScript \u8FD0\u884C\u65F6\u5EFA\u7ACB\u7684\u5E73\u53F0\uFF0C \u7528\u4E8E\u65B9\u4FBF\u5730\u642D\u5EFA\u54CD\u5E94\u901F\u5EA6\u5FEB\u3001\u6613\u4E8E\u6269\u5C55\u7684\u7F51\u7EDC\u5E94\u7528\u3002\\n","head":[["meta",{"property":"og:url","content":"https://quyuandong.github.io/posts/interview/"}],["meta",{"property":"og:site_name","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"og:title","content":"Node\u591A\u79CD\u5B89\u88C5\u65B9\u5F0F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-07-24T08:50:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u65F6\u5149\u9759\u597D"}],["meta",{"property":"article:tag","content":"Node"}],["meta",{"property":"article:published_time","content":"2022-04-07T11:56:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T08:50:01.000Z"}]]},"excerpt":"<p>\u2003Node.js \u53D1\u5E03\u4E8E 2009 \u5E74 5 \u6708\uFF0C\u7531 Ryan Dahl \u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u57FA\u4E8E Chrome V8 \u5F15\u64CE\u7684 JavaScript \u8FD0\u884C\u73AF\u5883\uFF0C\u4F7F\u7528\u4E86\u4E00\u4E2A\u4E8B\u4EF6\u9A71\u52A8\u3001\u975E\u963B\u585E\u5F0F I/O \u6A21\u578B\uFF0C\u8BA9 JavaScript \u8FD0\u884C\u5728\u670D\u52A1\u7AEF\u7684\u5F00\u53D1\u5E73\u53F0\uFF0CJavaScript \u6210\u4E3A\u4E0E PHP\u3001Python\u3001Perl\u3001Ruby \u7B49\u670D\u52A1\u7AEF\u8BED\u8A00\u5E73\u8D77\u5E73\u5750\u7684\u811A\u672C\u8BED\u8A00\u3002Node.js \u5BF9\u4E00\u4E9B\u7279\u6B8A\u7528\u4F8B\u8FDB\u884C\u4F18\u5316\uFF0C\u63D0\u4F9B\u66FF\u4EE3\u7684 API\uFF0C\u4F7F\u5F97 V8 \u5728\u975E\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C\u5F97\u66F4\u597D\uFF0CV8 \u5F15\u64CE\u6267\u884C Javascript \u7684\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u6027\u80FD\u975E\u5E38\u597D\uFF0C\u57FA\u4E8E Chrome JavaScript \u8FD0\u884C\u65F6\u5EFA\u7ACB\u7684\u5E73\u53F0\uFF0C \u7528\u4E8E\u65B9\u4FBF\u5730\u642D\u5EFA\u54CD\u5E94\u901F\u5EA6\u5FEB\u3001\u6613\u4E8E\u6269\u5C55\u7684\u7F51\u7EDC\u5E94\u7528\u3002</p>\\n","headers":[],"git":{"updatedTime":1690188601000,"contributors":[{"name":"qyd","email":"1984602738@qq.com","commits":1}]},"filePathRelative":"posts/interview/README.md","readingTime":{"minutes":0.66,"words":198},"copyright":"\u8457\u4F5C\u6743\u5F52\u65F6\u5149\u9759\u597D\u6240\u6709\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://qyd_9.gitee.io/my-blog-docs/posts/interview/"}');export{t as data};
