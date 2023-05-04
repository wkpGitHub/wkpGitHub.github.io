import{o as e,d as t,e as s,a as p,b as n,f as o,g as c}from"./app.01cbbebb.js";const l=s("h2",{id:"custom-namespace",tabindex:"-1"},[n("Custom namespace "),s("span",{class:"vp-tag"},"2.2.0"),n(),s("a",{class:"header-anchor vp-link",href:"#custom-namespace","aria-hidden":"true"},"#")],-1),i={class:"tip custom-block"},u=s("p",{class:"custom-block-title"},"TIP",-1),r=n("We provide a example in "),d={href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},k=n("element-plus-vite-starter"),m=n(". Just check it."),g=o(`<p>Default namespace is <code>el</code>. In special cases, we may need to customize its namespace.</p><p>Since we use sass to write styles, if you want to customize all namespaces. We have to assume that you already use sass.</p><p>You must set <code>ElConfigProvider</code> and scss <code>$namespace</code> at the same time.</p><h3 id="set-elconfigprovider" tabindex="-1">Set <code>ElConfigProvider</code> <a class="header-anchor vp-link" href="#set-elconfigprovider" aria-hidden="true">#</a></h3><p>Use <code>ElConfigProvider</code> wrap your root component.</p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ep<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ... --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="set-scss-css-vars" tabindex="-1">Set Scss &amp; Css Vars <a class="header-anchor vp-link" href="#set-scss-css-vars" aria-hidden="true">#</a></h3><p>Create <code>styles/element/index.scss</code>:</p><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">// we can add this to custom namespace, default is &#39;el&#39;</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/mixins/config.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$namespace</span></span><span class="token punctuation">:</span> <span class="token string">&#39;ep&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre></div><p>Import <code>styles/element/index.scss</code> in <code>vite.config.ts</code>:</p><blockquote><p>The same is true for webpack, which needs to be set in <code>preprocessorOptions</code>.</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>That&#39;s all.</p>`,13),w='{"title":"Custom Namespace","description":"","frontmatter":{"title":"Custom Namespace","lang":"en-US"},"headers":[{"level":2,"title":"Custom namespace ^(2.2.0)","slug":"custom-namespace"},{"level":3,"title":"Set ElConfigProvider","slug":"set-elconfigprovider"},{"level":3,"title":"Set Scss & Css Vars","slug":"set-scss-css-vars"}],"relativePath":"en-US/guide/namespace.md","lastUpdated":1681045369000}',_={},C=Object.assign(_,{__name:"namespace",setup(h){return(v,f)=>{const a=c;return e(),t("div",null,[l,s("div",i,[u,s("p",null,[r,s("a",d,[k,p(a,{class:"link-icon"})]),m])]),g])}}});export{w as __pageData,C as default};
