import{_ as s,o as a,c as n,b as e}from"./anyfork.js";const l={},o=e(`<p>\u2003Nginx \u65E5\u5FD7\u5BF9\u4E8E\u7EDF\u8BA1\u3001\u7CFB\u7EDF\u670D\u52A1\u6392\u9519\u5F88\u6709\u7528\u3002Nginx \u65E5\u5FD7\u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\uFF1Aaccess_log(\u8BBF\u95EE\u65E5\u5FD7)\u548C error_log(\u9519\u8BEF\u65E5\u5FD7)\u3002\u901A\u8FC7\u8BBF\u95EE\u65E5\u5FD7\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u7528\u6237\u7684 IP \u5730\u5740\u3001\u6D4F\u89C8\u5668\u7684\u4FE1\u606F\uFF0C\u8BF7\u6C42\u7684\u5904\u7406\u65F6\u95F4\u7B49\u4FE1\u606F\u3002\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u4E86\u8BBF\u95EE\u51FA\u9519\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5B9A\u4F4D\u9519\u8BEF\u7684\u539F\u56E0\u3002\u672C\u6587\u5C06\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B\u5982\u4F55\u914D\u7F6E Nginx \u65E5\u5FD7\u3002</p><h2 id="\u8BBE\u7F6E-access-log" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-access-log" aria-hidden="true">#</a> \u8BBE\u7F6E access_log</h2><p>\u2003\u8BBF\u95EE\u65E5\u5FD7\u4E3B\u8981\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u3002\u5BA2\u6237\u7AEF\u5411 Nginx \u670D\u52A1\u5668\u53D1\u8D77\u7684\u6BCF\u4E00\u6B21\u8BF7\u6C42\u90FD\u8BB0\u5F55\u5728\u8FD9\u91CC\u3002\u5BA2\u6237\u7AEF IP\uFF0C\u6D4F\u89C8\u5668\u4FE1\u606F\uFF0Creferer\uFF0C\u8BF7\u6C42\u5904\u7406\u65F6\u95F4\uFF0C\u8BF7\u6C42 URL \u7B49\u90FD\u53EF\u4EE5\u5728\u8BBF\u95EE\u65E5\u5FD7\u4E2D\u5F97\u5230\u3002\u5F53\u7136\u5177\u4F53\u8981\u8BB0\u5F55\u54EA\u4E9B\u4FE1\u606F\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 log_format \u6307\u4EE4\u5B9A\u4E49\u3002</p><p>\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u8BBF\u95EE\u65E5\u5FD7</span>
access_log path <span class="token punctuation">[</span>format <span class="token punctuation">[</span>buffer<span class="token operator">=</span>size<span class="token punctuation">]</span> <span class="token punctuation">[</span>gzip<span class="token punctuation">[</span><span class="token operator">=</span>level<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>flush<span class="token operator">=</span>time<span class="token punctuation">]</span> <span class="token punctuation">[</span>if<span class="token operator">=</span>condition<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment"># \u5173\u95ED\u8BBF\u95EE\u65E5\u5FD7</span>
access_log off<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>path \u6307\u5B9A\u65E5\u5FD7\u7684\u5B58\u653E\u4F4D\u7F6E\u3002</li><li>format \u6307\u5B9A\u65E5\u5FD7\u7684\u683C\u5F0F\u3002\u9ED8\u8BA4\u4F7F\u7528\u9884\u5B9A\u4E49\u7684 combined\u3002</li><li>buffer \u7528\u6765\u6307\u5B9A\u65E5\u5FD7\u5199\u5165\u65F6\u7684\u7F13\u5B58\u5927\u5C0F\u3002\u9ED8\u8BA4\u662F 64k\u3002</li><li>gzip \u65E5\u5FD7\u5199\u5165\u524D\u5148\u8FDB\u884C\u538B\u7F29\u3002\u538B\u7F29\u7387\u53EF\u4EE5\u6307\u5B9A\uFF0C\u4ECE 1 \u5230 9 \u6570\u503C\u8D8A\u5927\u538B\u7F29\u6BD4\u8D8A\u9AD8\uFF0C\u540C\u65F6\u538B\u7F29\u7684\u901F\u5EA6\u4E5F\u8D8A\u6162\u3002\u9ED8\u8BA4\u662F 1\u3002</li><li>flush \u8BBE\u7F6E\u7F13\u5B58\u7684\u6709\u6548\u65F6\u95F4\u3002\u5982\u679C\u8D85\u8FC7 flush \u6307\u5B9A\u7684\u65F6\u95F4\uFF0C\u7F13\u5B58\u4E2D\u7684\u5185\u5BB9\u5C06\u88AB\u6E05\u7A7A\u3002</li><li>if \u6761\u4EF6\u5224\u65AD\u3002\u5982\u679C\u6307\u5B9A\u7684\u6761\u4EF6\u8BA1\u7B97\u4E3A 0 \u6216\u7A7A\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u8BE5\u8BF7\u6C42\u4E0D\u4F1A\u5199\u5165\u65E5\u5FD7\u3002</li></ul><p>\u53E6\u5916\uFF0C\u8FD8\u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u503C off\u3002\u5982\u679C\u6307\u5B9A\u4E86\u8BE5\u503C\uFF0C\u5F53\u524D\u4F5C\u7528\u57DF\u4E0B\u7684\u6240\u6709\u7684\u8BF7\u6C42\u65E5\u5FD7\u90FD\u88AB\u5173\u95ED\u3002<br> \u4F5C\u7528\u57DF\uFF1A\u53EF\u4EE5\u5E94\u7528 access_log \u6307\u4EE4\u7684\u4F5C\u7528\u57DF\u5206\u522B\u6709 http\uFF0Cserver\uFF0Clocation\uFF0Climit_except\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u8FD9\u51E0\u4E2A\u4F5C\u7528\u57DF\u5916\u4F7F\u7528\u8BE5\u6307\u4EE4\uFF0CNginx \u4F1A\u62A5\u9519\u3002<br> \u57FA\u672C\u7528\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BE5\u4F8B\u5B50\u6307\u5B9A\u65E5\u5FD7\u7684\u5199\u5165\u8DEF\u5F84\u4E3A/var/logs/nginx-access.log\uFF0C\u65E5\u5FD7\u683C\u5F0F\u4F7F\u7528\u9ED8\u8BA4\u7684combined\u3002</span>
access_log /var/logs/nginx-access.log
<span class="token comment">#\u6216</span>
<span class="token comment">#\u8BE5\u4F8B\u5B50\u6307\u5B9A\u65E5\u5FD7\u7684\u5199\u5165\u8DEF\u5F84\u4E3A/var/logs/nginx-access.log\uFF0C\u65E5\u5FD7\u683C\u5F0F\u4F7F\u7528\u9ED8\u8BA4\u7684combined\uFF0C\u6307\u5B9A\u65E5\u5FD7\u7684\u7F13\u5B58\u5927\u5C0F\u4E3A32k\uFF0C\u65E5\u5FD7\u5199\u5165\u524D\u542F\u7528gzip\u8FDB\u884C\u538B\u7F29\uFF0C\u538B\u7F29\u6BD4\u4F7F\u7528\u9ED8\u8BA4\u503C1\uFF0C\u7F13\u5B58\u6570\u636E\u6709\u6548\u65F6\u95F4\u4E3A1\u5206\u949F\u3002</span>
access_log /var/logs/nginx-access.log <span class="token assign-left variable">buffer</span><span class="token operator">=</span>32k <span class="token function">gzip</span> <span class="token assign-left variable">flush</span><span class="token operator">=</span>1m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-log-format-\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-log-format-\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528 log_format \u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F</h3><p>Nginx \u9884\u5B9A\u4E49\u4E86\u540D\u4E3A combined \u65E5\u5FD7\u683C\u5F0F\uFF0C\u5982\u679C\u6CA1\u6709\u660E\u786E\u6307\u5B9A\u65E5\u5FD7\u683C\u5F0F\u9ED8\u8BA4\u4F7F\u7528\u8BE5\u683C\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>log_format combined <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &#39;</span>&#39;<span class="token string">&quot;<span class="token variable">$request</span>&quot;</span> <span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> <span class="token string">&#39;&#39;</span><span class="token string">&quot;<span class="token variable">$http_referer</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$http_user_agent</span>&quot;</span>&#39;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0D\u60F3\u4F7F\u7528 Nginx \u9884\u5B9A\u4E49\u7684\u683C\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7 log_format \u6307\u4EE4\u6765\u81EA\u5B9A\u4E49\uFF1A<code>log_format name [escape=default|json] string ...; </code></p><ul><li>name \u683C\u5F0F\u540D\u79F0\u3002\u5728 access_log \u6307\u4EE4\u4E2D\u5F15\u7528\u3002</li><li>escape \u8BBE\u7F6E\u53D8\u91CF\u4E2D\u7684\u5B57\u7B26\u7F16\u7801\u65B9\u5F0F\u662F json \u8FD8\u662F default\uFF0C\u9ED8\u8BA4\u662F default\u3002</li><li>string \u8981\u5B9A\u4E49\u7684\u65E5\u5FD7\u683C\u5F0F\u5185\u5BB9\u3002\u8BE5\u53C2\u6570\u53EF\u4EE5\u6709\u591A\u4E2A\u3002\u53C2\u6570\u4E2D\u53EF\u4EE5\u4F7F\u7528 Nginx \u53D8\u91CF\u3002</li></ul><p>\u4E0B\u9762\u6F14\u793A\u4E00\u4E0B\u81EA\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F\u7684\u4F7F\u7528:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>access_log /var/logs/nginx-access.log main
log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                  <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                  <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E-error-log" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-error-log" aria-hidden="true">#</a> \u8BBE\u7F6E error_log</h2><p>\u9519\u8BEF\u65E5\u5FD7\u5728 Nginx \u4E2D\u662F\u901A\u8FC7 error_log \u6307\u4EE4\u5B9E\u73B0\u7684\u3002\u8BE5\u6307\u4EE4\u8BB0\u5F55\u670D\u52A1\u5668\u548C\u8BF7\u6C42\u5904\u7406\u8FC7\u7A0B\u4E2D\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u914D\u7F6E\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6\u7684\u8DEF\u5F84\u548C\u65E5\u5FD7\u7EA7\u522B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>error_log <span class="token function">file</span> <span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">;</span>
Default:
error_log logs/error.log error<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u6307\u5B9A\u65E5\u5FD7\u7684\u5199\u5165\u4F4D\u7F6E\u3002</p><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u65E5\u5FD7\u7684\u7EA7\u522B\u3002level \u53EF\u4EE5\u662F debug, info, notice, warn, error, crit, alert,emerg \u4E2D\u7684\u4EFB\u610F\u503C\u3002\u53EF\u4EE5\u770B\u5230\u5176\u53D6\u503C\u8303\u56F4\u662F\u6309\u7D27\u6025\u7A0B\u5EA6\u4ECE\u4F4E\u5230\u9AD8\u6392\u5217\u7684\u3002\u53EA\u6709\u65E5\u5FD7\u7684\u9519\u8BEF\u7EA7\u522B\u7B49\u4E8E\u6216\u9AD8\u4E8E level \u6307\u5B9A\u7684\u503C\u624D\u4F1A\u5199\u5165\u9519\u8BEF\u65E5\u5FD7\u4E2D\u3002\u9ED8\u8BA4\u503C\u662F error\u3002</p><p>\u57FA\u672C\u7528\u6CD5\uFF1A<code>error_log /var/logs/nginx/nginx-error.log</code>\u3002\u5B83\u53EF\u4EE5\u914D\u7F6E\u5728\uFF1Amain\uFF0C http, mail, stream, server, location \u4F5C\u7528\u57DF\u3002\u4F8B\u5B50\u4E2D\u6307\u5B9A\u4E86\u9519\u8BEF\u65E5\u5FD7\u7684\u8DEF\u5F84\u4E3A\uFF1A/var/logs/nginx/nginx-error.log\uFF0C\u65E5\u5FD7\u7EA7\u522B\u4F7F\u7528\u9ED8\u8BA4\u7684 error</p><h2 id="open-log-file-cache" tabindex="-1"><a class="header-anchor" href="#open-log-file-cache" aria-hidden="true">#</a> open_log_file_cache</h2><p>\u6BCF\u4E00\u6761\u65E5\u5FD7\u8BB0\u5F55\u7684\u5199\u5165\u90FD\u662F\u5148\u6253\u5F00\u6587\u4EF6\u518D\u5199\u5165\u8BB0\u5F55\uFF0C\u7136\u540E\u5173\u95ED\u65E5\u5FD7\u6587\u4EF6\u3002\u5982\u679C\u4F60\u7684\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\u4E2D\u4F7F\u7528\u4E86\u53D8\u91CF\uFF0C\u5982 access_log /var/logs/$host/nginx-access.log\uFF0C\u4E3A\u63D0\u9AD8\u6027\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528 open_log_file_cache \u6307\u4EE4\u8BBE\u7F6E\u65E5\u5FD7\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u7F13\u5B58\u3002 \u8BED\u6CD5\uFF1A<code>open_log_file_cache max=N [inactive=time] [min_uses=N] [valid=time];</code></p><ul><li>max \u8BBE\u7F6E\u7F13\u5B58\u4E2D\u6700\u591A\u5BB9\u7EB3\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u91CF\uFF0C\u5982\u679C\u88AB\u5360\u6EE1\uFF0C\u91C7\u7528 LRU \u7B97\u6CD5\u5C06\u63CF\u8FF0\u7B26\u5173\u95ED\u3002</li><li>inactive \u8BBE\u7F6E\u7F13\u5B58\u5B58\u6D3B\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u662F 10s\u3002</li><li>min_uses \u5728 inactive \u65F6\u95F4\u6BB5\u5185\uFF0C\u65E5\u5FD7\u6587\u4EF6\u6700\u5C11\u4F7F\u7528\u51E0\u6B21\uFF0C\u8BE5\u65E5\u5FD7\u6587\u4EF6\u63CF\u8FF0\u7B26\u8BB0\u5165\u7F13\u5B58\uFF0C\u9ED8\u8BA4\u662F 1 \u6B21\u3002</li><li>valid\uFF1A\u8BBE\u7F6E\u591A\u4E45\u5BF9\u65E5\u5FD7\u6587\u4EF6\u540D\u8FDB\u884C\u68C0\u67E5\uFF0C\u770B\u662F\u5426\u53D1\u751F\u53D8\u5316\uFF0C\u9ED8\u8BA4\u662F 60s\u3002</li><li>off\uFF1A\u4E0D\u4F7F\u7528\u7F13\u5B58\u3002\u9ED8\u8BA4\u4E3A off\u3002</li></ul><p>\u57FA\u672C\u7528\u6CD5\uFF1A<code>open_log_file_cache max=1000 inactive=20s valid=1m min_uses=2;</code>\u3002\u5B83\u53EF\u4EE5\u914D\u7F6E\u5728 http\u3001server\u3001location \u4F5C\u7528\u57DF\u4E2D\u3002\u4F8B\u5B50\u4E2D\uFF0C\u8BBE\u7F6E\u7F13\u5B58\u6700\u591A\u7F13\u5B58 1000 \u4E2A\u65E5\u5FD7\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF0C20s \u5185\u5982\u679C\u7F13\u5B58\u4E2D\u7684\u65E5\u5FD7\u6587\u4EF6\u63CF\u8FF0\u7B26\u81F3\u5C11\u88AB\u88AB\u8BBF\u95EE 2 \u6B21\uFF0C\u624D\u4E0D\u4F1A\u88AB\u7F13\u5B58\u5173\u95ED\u3002\u6BCF\u9694 1 \u5206\u949F\u68C0\u67E5\u7F13\u5B58\u4E2D\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6587\u4EF6\u540D\u662F\u5426\u8FD8\u5B58\u5728\u3002</p>`,25),i=[o];function t(c,r){return a(),n("div",null,i)}var d=s(l,[["render",t],["__file","log.html.vue"]]);export{d as default};
