import{_ as s,o as n,c as a,b as e}from"./anyfork.js";const t={},p=e(`<p>\u2003\u6536\u96C6\u4E00\u4E9BNodeJs\u4E2D\u7ECF\u5E38\u4F7F\u7528\u5230\u7684\u4E00\u4E9B\u5DE5\u5177\u7C7B\u6216\u8005\u65B9\u6CD5\uFF0C\u65B9\u4FBF\u4EE5\u540E\u4F7F\u7528\u65F6\u907F\u5751\u3002</p><h2 id="\u4E00\u3001js\u3001nodejs-\u659C\u6760-\u6216\u53CD\u659C\u6760-\u66FF\u6362\u6216\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001js\u3001nodejs-\u659C\u6760-\u6216\u53CD\u659C\u6760-\u66FF\u6362\u6216\u8F6C\u6362" aria-hidden="true">#</a> \u4E00\u3001JS\u3001NodeJs \u659C\u6760&quot;/&quot;\u6216\u53CD\u659C\u6760&quot;&quot;\u66FF\u6362\u6216\u8F6C\u6362</h2><p>\u2003JS\u3001NodeJs \u73AF\u5883\u4E0B\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>replace</code>\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u66FF\u6362\u6216\u8F6C\u6362\uFF0C\u4F46\u6709\u4E2A\u7F3A\u70B9\u53EA\u80FD\u66FF\u6362\u6216\u8F6C\u6362\u7B2C\u4E00\u4E2A\u76EE\u6807\u5B57\u7B26\uFF0CJS \u53EF\u4EE5\u901A\u8FC7<code>replaceAll</code>\u8FDB\u884C\u5168\u90E8\u66FF\u6362\uFF0CNodeJs \u73AF\u5883\u4E0B\u6CA1\u6709<code>replaceAll</code>\u65B9\u6CD5\u3002\u56E0\u6B64\u6700\u6709\u6548\u7684\u65B9\u6CD5\u5C31\u662F\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u66FF\u6362\u6216\u8F6C\u6362\u3002</p><p>1\u3001\u659C\u6760\u8F6C\u53CD\u659C\u6760\u3001\u659C\u6760\u66FF\u6362</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#---------- \u659C\u6760\u8F6C\u53CD\u659C\u6760 Slash to backslash --------</span>
<span class="token builtin class-name">let</span> slash <span class="token operator">=</span> <span class="token string">&#39;C:/Users/JasonSong/\u6210\u957F\u7684\u5C0F\u732A/NodeJs&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#\u65B9\u6CD51\uFF1A</span>
<span class="token builtin class-name">let</span> result <span class="token operator">=</span> slash.replace<span class="token punctuation">(</span>/<span class="token punctuation">\\</span>//g, <span class="token string">&#39;\\\\&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console.log<span class="token punctuation">(</span><span class="token string">&#39;[Option 1] slash: &#39;</span>, result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#\u65B9\u6CD52\uFF1A</span>
result <span class="token operator">=</span> String.raw<span class="token variable"><span class="token variable">\`</span>$<span class="token punctuation">{</span>slash<span class="token punctuation">}</span><span class="token variable">\`</span></span>.split<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>.join<span class="token punctuation">(</span><span class="token string">&#39;\\\\&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console.log<span class="token punctuation">(</span><span class="token string">&#39;[Option 2] slash: &#39;</span>, result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u53CD\u659C\u6760\u8F6C\u659C\u6760\u3001\u53CD\u659C\u6760\u66FF\u6362</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#---------- \u53CD\u659C\u6760\u8F6C\u659C\u6760 Backslash to slash --------</span>
<span class="token builtin class-name">let</span> backslash <span class="token operator">=</span> <span class="token string">&#39;C:\\\\Users\\\\JasonSong\\\\\u6210\u957F\u7684\u5C0F\u732A\\\\NodeJs&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#\u65B9\u6CD51\uFF1A</span>
result <span class="token operator">=</span> backslash.replace<span class="token punctuation">(</span>/<span class="token punctuation">\\</span><span class="token punctuation">\\</span>/g,<span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console.log<span class="token punctuation">(</span><span class="token string">&#39;[Option 1] backslash: &#39;</span>, result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#\u65B9\u6CD52\uFF1A</span>
result <span class="token operator">=</span> String.raw<span class="token variable"><span class="token variable">\`</span>$<span class="token punctuation">{</span>backslash<span class="token punctuation">}</span><span class="token variable">\`</span></span>.split<span class="token punctuation">(</span><span class="token string">&#39;\\\\&#39;</span><span class="token punctuation">)</span>.join<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console.log<span class="token punctuation">(</span><span class="token string">&#39;[Option 2] backslash: &#39;</span>, result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function l(c,i){return n(),a("div",null,o)}var r=s(t,[["render",l],["__file","tools.html.vue"]]);export{r as default};
