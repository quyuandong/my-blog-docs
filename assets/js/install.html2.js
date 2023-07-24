import{_ as r,V as o,o as d,c as i,a as e,v as s,Y as a,b as c}from"./anyfork.js";const l={},t=e("p",null,"\u2003Docker \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5E94\u7528\u5BB9\u5668\u5F15\u64CE\uFF0C\u8BA9\u5F00\u53D1\u8005\u53EF\u4EE5\u6253\u5305\u4ED6\u4EEC\u7684\u5E94\u7528\u4EE5\u53CA\u4F9D\u8D56\u5305\u5230\u4E00\u4E2A\u53EF\u79FB\u690D\u7684\u5BB9\u5668\u4E2D\uFF0C\u7136\u540E\u53D1\u5E03\u5230\u4EFB\u4F55\u6D41\u884C\u7684 Linux \u6216 Windows \u64CD\u4F5C\u7CFB\u7EDF\u7684\u673A\u5668\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u865A\u62DF\u5316\uFF0C\u5BB9\u5668\u662F\u5B8C\u5168\u4F7F\u7528\u6C99\u7BB1\u673A\u5236\uFF0C\u76F8\u4E92\u4E4B\u95F4\u4E0D\u4F1A\u6709\u4EFB\u4F55\u63A5\u53E3\u3002\u7B80\u5316\u914D\u7F6E,\u955C\u50CF\u5B89\u88C5\uFF0C\u5BB9\u5668\u7684\u521B\u5EFA\u975E\u5E38\u7684\u65B9\u4FBF\uFF0C\u540C\u65F6\u53EF\u4EE5\u5F39\u6027\u6269\u5BB9\u3002",-1),p={class:"custom-container warning"},u=e("p",{class:"custom-container-title"},"\u6E29\u99A8\u63D0\u793A",-1),k=e("code",null,"uname -a",-1),m=e("br",null,null,-1),v={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),b={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),_={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},f=c(`<h2 id="\u4E00\u3001docker-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001docker-\u5B89\u88C5" aria-hidden="true">#</a> \u4E00\u3001docker \u5B89\u88C5</h2><h3 id="_1\u3001\u5378\u8F7D\u65E7\u7684docker\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5378\u8F7D\u65E7\u7684docker\u5F15\u64CE" aria-hidden="true">#</a> 1\u3001\u5378\u8F7D\u65E7\u7684Docker\u5F15\u64CE</h3><p>\u5982\u679C centos \u4E0A\u4EE5\u524D\u5B89\u88C5\u8FC7\u65E7\u7248\u7684 docker,\u9700\u8981\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u5148\u5220\u9664\u65E7\u7684\u7248\u672C\uFF0C\u518D\u8FDB\u884C\u5B89\u88C5:<br> \u2460 \u5148\u5220\u9664\u4F9D\u8D56\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum remove docker-ce docker-cd-cli containerd.io
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> docker-client docker-client-latest docker-common<span class="token punctuation">\\</span>
docker-latest docker-latest-logrotate docker-logrotate docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2461 \u5220\u9664\u8D44\u6E90\u3002</p><p>\u4E3B\u673A\u4E0A\u7684\u6620\u50CF\u3001\u5BB9\u5668\u3001\u5377\u6216\u81EA\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6\u4E0D\u4F1A\u81EA\u52A8\u5220\u9664\uFF0C\u5FC5\u987B\u624B\u52A8\u5220\u9664\u4EFB\u4F55\u5DF2\u7F16\u8F91\u7684\u914D\u7F6E\u6587\u4EF6\u3002Docker \u9ED8\u8BA4\u5DE5\u4F5C\u8DEF\u5F84/var/lib/docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u3001\u4F7F\u7528\u5B58\u50A8\u5E93\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4F7F\u7528\u5B58\u50A8\u5E93\u5B89\u88C5docker" aria-hidden="true">#</a> 2\u3001\u4F7F\u7528\u5B58\u50A8\u5E93\u5B89\u88C5docker</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F7F\u7528 Docker \u7684\u5B58\u50A8\u5E93\u5E76\u5B89\u88C5\uFF0C\u4FBF\u4E8E\u5B89\u88C5\u548C\u5347\u7EA7\u4EFB\u52A1\uFF1B\u4E0B\u8F7D RPM \u5305\u5E76\u624B\u52A8\u5B89\u88C5\u5E76\u7BA1\u7406\uFF0C\u5B8C\u5168\u624B\u52A8\u5347\u7EA7\uFF1B</p></div><p>\u2460 \u5B89\u88C5\u5FC5\u8981\u7684\u7CFB\u7EDF\u5DE5\u5177</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2461 \u8BBE\u7F6E\u8F6F\u4EF6\u6E90\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\uFF0C\u5B89\u88C5docker\u901F\u5EA6\u5FEB</span>
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2462 \u66F4\u65B0\u5E76\u5B89\u88C5 docker-ce(ce \u793E\u533A\u7248\uFF0Cee \u4F01\u4E1A\u7248)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66F4\u65B0\u7D22\u5F15</span>
yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2463 \u5982\u9700\u6307\u5B9A docker \u5F15\u64CE\u7684\u7248\u672C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u83B7\u53D6\u53EF\u7528\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2464 \u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684 docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> docker-ce-<span class="token operator">&lt;</span>\u7248\u672C\u53F7<span class="token operator">&gt;</span> docker-ce-cli-<span class="token operator">&lt;</span>\u7248\u672C\u53F7<span class="token operator">&gt;</span> containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2465 \u542F\u52A8 docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2466 \u5F00\u673A\u81EA\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2467hello-world \u6D4B\u8BD5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD0\u884C\u5BB9\u5668</span>
<span class="token function">docker</span> run hello-world
<span class="token comment"># \u67E5\u770B\u955C\u50CF</span>
<span class="token function">docker</span> images

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001docker-\u5E38\u89C1\u4F7F\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001docker-\u5E38\u89C1\u4F7F\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u4E8C\u3001docker \u5E38\u89C1\u4F7F\u7528\u547D\u4EE4</h2>`,26),x={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),w={href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"},D=c("<p>1\u3001\u542F\u52A8docker\u5F15\u64CE\uFF1Asystemctl start docker</p><p>2\u3001docker\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8\uFF1Asystemctl enable docker</p><p>3\u3001docker\u7248\u672C\u4FE1\u606F\u67E5\u8BE2\uFF1Adocker version</p><p>4\u3001docker\u6240\u6709\u7684\u5BB9\u5668\u5B9E\u4F8B\uFF1Adocker ps -a</p><p>5\u3001docker\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u5B9E\u4F8B\uFF1Adocker ps</p><p>6\u3001docker\u505C\u6B62\u8FD0\u884C\u7684\u5BB9\u5668\u5B9E\u4F8B\uFF1Adocker stop \u5BB9\u5668ID/\u5BB9\u5668\u540D\u79F0</p><p>7\u3001docker\u5220\u9664\u505C\u6B62\u7684\u5BB9\u5668\u5B9E\u4F8B\uFF1Adocker rm \u5BB9\u5668ID/\u5BB9\u5668\u540D\u79F0</p><p>8\u3001docker\u5F3A\u5236\u5220\u9664\u8FD0\u884C\u7684\u5BB9\u5668\u5B9E\u4F8B\uFF1Adocker rm -f \u5BB9\u5668ID/\u5BB9\u5668\u540D\u79F0</p><p>9\u3001docker\u5220\u9664\u505C\u6B62\u7684\u5BB9\u5668\u5B9E\u4F8B\u955C\u50CF\uFF1Adocker rmi \u955C\u50CFID/\u955C\u50CF\u540D\u79F0</p><p>10\u3001docker\u5F3A\u5236\u5220\u9664\u955C\u50CF\uFF1Adocker rmi -f \u955C\u50CFID/\u955C\u50CF\u540D\u79F0</p><p>11\u3001docker\u5220\u9664\u6240\u7528\u5BB9\u5668: docker rm -f <code>docker ps -a -q</code></p><p>12\u3001docker\u5220\u9664\u6240\u6709\u955C\u50CF\uFF1Adocker rmi -f <code>docker images -q</code></p>",12);function I(V,N){const n=o("ExternalLinkIcon");return d(),i("div",null,[t,e("div",p,[u,e("p",null,[s("Docker \u8981\u6C42 CentOS7 \u7CFB\u7EDF\u7684\u5185\u6838\u7248\u672C\u5728 3.10 \u4EE5\u4E0A\uFF0C\u5426\u5219\u65E0\u6CD5\u5B89\u88C5 Docker\u3002\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u901A\u8FC7"),k,s("\u67E5\u770B\u81EA\u5DF1 centos \u5185\u6838\u7248\u672C\uFF0C\u5982\u679C\u4F4E\u4E8E 3.10\uFF0C\u9700\u8981\u91CD\u65B0\u5B89\u88C5 centos \u955C\u50CF\u3002\u4EE5\u4E0B\u662F docker \u76F8\u5173\u7F51\u5740\uFF1A"),m,s("docker \u5B98\u7F51\uFF1A"),e("a",v,[s("https://www.docker.com/"),a(n)]),h,s("docker \u6587\u6863\u5B98\u7F51\uFF1A"),e("a",b,[s("https://docs.docker.com/"),a(n)]),g,s("\u5B89\u88C5\u6587\u6863\uFF1A"),e("a",_,[s("https://docs.docker.com/engine/install/centos/"),a(n)])])]),f,e("div",x,[y,e("p",null,[s("docker \u5B98\u7F51\u547D\u4EE4\u53C2\u8003\u6587\u6863\uFF1A"),e("a",w,[s("https://docs.docker.com/engine/reference/builder/"),a(n)])])]),D])}var E=r(l,[["render",I],["__file","install.html.vue"]]);export{E as default};
