import{_ as v}from"./chunks/contributors.92a02115.js";import{r as c,o as f,d as b,e as n,a,w as o,b as s,f as l,u as e,m as i,y as k,G as d,ag as y,B as g,g as q}from"./app.01cbbebb.js";const w=n("h1",{id:"icon",tabindex:"-1"},[s("Icon "),n("a",{class:"header-anchor vp-link",href:"#icon","aria-hidden":"true"},"#")],-1),x=n("p",null,"Element Plus provides a set of common icons.",-1),I=n("h2",{id:"icon-usage",tabindex:"-1"},[s("Icon Usage "),n("a",{class:"header-anchor vp-link",href:"#icon-usage","aria-hidden":"true"},"#")],-1),S=s("If you want to "),T=n("strong",null,"use directly",-1),A=s(" like the example, you need to "),C={href:"https://v3.vuejs.org/guide/component-registration.html#global-registration",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},E=s("globally register"),V=s(" the components before using it."),P=s("If you want to see all available SVG icons please check "),D={href:"https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},N=s("@element-plus/icons-vue@1.x"),z={href:"https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},U=s("@element-plus/icons-vue@latest"),R=s(" and the source "),j={href:"https://github.com/element-plus/element-plus-icons",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},G=s("element-plus-icons"),B=s(" out or "),L=n("a",{href:"#icon-collection",class:"vp-link"},"Icon Collection",-1),Y=l(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor vp-link" href="#installation" aria-hidden="true">#</a></h2><h3 id="using-packaging-manager" tabindex="-1">Using packaging manager <a class="header-anchor vp-link" href="#using-packaging-manager" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token comment"># Choose a package manager you like.</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons-vue
<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons-vue
<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> @element-plus/icons-vue
</code></pre></div><h3 id="register-all-icons" tabindex="-1">Register All Icons <a class="header-anchor vp-link" href="#register-all-icons" aria-hidden="true">#</a></h3><p>You need import all icons from <code>@element-plus/icons-vue</code> and register them globally.</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>

<span class="token comment">// if you&#39;re using CDN, please remove this line.</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),M=s("You can also refer to "),H={href:"https://codepen.io/sxzz/pen/xxpvdrg",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},O=s("this template"),W=s("."),$=n("h3",{id:"import-in-browser",tabindex:"-1"},[s("Import in Browser "),n("a",{class:"header-anchor vp-link",href:"#import-in-browser","aria-hidden":"true"},"#")],-1),F=n("p",null,[s("Import Element Plus Icons through browser HTML tags directly, and use global variable "),n("code",null,"ElementPlusIconsVue"),s(".")],-1),J=s("According to different CDN providers, there are different introduction methods. Here we use "),K={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Q=s("unpkg"),X=s(" and "),Z={href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},nn=s("jsDelivr"),sn=s(" as example. You can also use other CDN providers."),an=l(`<h4 id="unpkg" tabindex="-1">unpkg <a class="header-anchor vp-link" href="#unpkg" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor vp-link" href="#jsdelivr" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),tn={class:"tip custom-block"},en=n("p",{class:"custom-block-title"},"TIP",-1),on=s("We recommend using CDN to import Element Plus users to lock the version on the link address, so as not to be affected by incompatible updates when Element Plus is upgraded in the future. Please check "),pn={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ln=s("unpkg.com"),cn=s(" for the method to lock the version."),un=n("h3",{id:"auto-import",tabindex:"-1"},[s("Auto Import "),n("a",{class:"header-anchor vp-link",href:"#auto-import","aria-hidden":"true"},"#")],-1),rn=s("Use "),kn={href:"https://github.com/antfu/unplugin-icons",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},dn=s("unplugin-icons"),gn=s(" and "),hn={href:"https://github.com/antfu/unplugin-auto-import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_n=s("unplugin-auto-import"),mn=s(" to automatically import any icon collections from iconify. You can refer to "),vn={href:"https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},fn=s("this template"),bn=s("."),yn=n("h2",{id:"simple-usage",tabindex:"-1"},[s("Simple Usage "),n("a",{class:"header-anchor vp-link",href:"#simple-usage","aria-hidden":"true"},"#")],-1),qn={class:"warning custom-block"},wn=n("p",{class:"custom-block-title"},"WARNING",-1),xn=s("Because HTML standard has already defined a tag named "),In={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Sn=s("menu"),Tn=s(", so you need to use an alias in order to render the icon, if you register "),An=n("code",null,"Menu",-1),Cn=s(" directly it will not work."),En=l(`<div class="language-vue"><pre><code><span class="token comment">&lt;!-- Use el-icon to provide attributes to SVG icon --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Or use it independently without derive attributes from parent --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),Vn=l(`<h2 id="combined-with-el-icon" tabindex="-1">Combined with el-icon <a class="header-anchor vp-link" href="#combined-with-el-icon" aria-hidden="true">#</a></h2><p><code>el-icon</code> provides extra attributes for raw SVG icon, for more detail, please read to the end.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),Pn=n("p",null,[s(" with extra class "),n("b",null,"is-loading"),s(", your icon is able to rotate 360 deg in 2 seconds, you can also override this ")],-1),Dn={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},Nn=n("span",{style:{"vertical-align":"middle"}}," Search ",-1),zn=l(`<h2 id="using-svg-icon-directly" tabindex="-1">Using SVG icon directly <a class="header-anchor vp-link" href="#using-svg-icon-directly" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Since svg icons do not carry any attributes by default --&gt;</span>
    <span class="token comment">&lt;!-- You need to provide attributes directly --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),Un={style:{"font-size":"20px"}},Rn=n("h2",{id:"icon-collection",tabindex:"-1"},[s("Icon Collection "),n("a",{class:"header-anchor vp-link",href:"#icon-collection","aria-hidden":"true"},"#")],-1),jn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[n("strong",null,"You can use SVG icon in any version"),s(" as long as you install it")]),n("p",null,[n("strong",null,"You can click the icon to copy it")])],-1),Gn=n("h2",{id:"api",tabindex:"-1"},[s("API "),n("a",{class:"header-anchor vp-link",href:"#api","aria-hidden":"true"},"#")],-1),Bn=n("h3",{id:"attributes",tabindex:"-1"},[s("Attributes "),n("a",{class:"header-anchor vp-link",href:"#attributes","aria-hidden":"true"},"#")],-1),Ln={class:"vp-table"},Yn=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Description"),n("th",null,"Type"),n("th",null,"Default")])],-1),Mn=n("td",null,"color",-1),Hn=n("td",null,"SVG tag's fill attribute",-1),On=n("td",null,"inherit from color",-1),Wn=n("td",null,"size",-1),$n=n("td",null,"SVG icon size, size x size",-1),Fn=s(" / "),Jn=n("td",null,"inherit from font size",-1),Kn=l('<h3 id="slots" tabindex="-1">Slots <a class="header-anchor vp-link" href="#slots" aria-hidden="true">#</a></h3><div class="vp-table"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>customize default content</td></tr></tbody></table></div><h2 id="source" tabindex="-1">Source <a class="header-anchor vp-link" href="#source" aria-hidden="true">#</a></h2>',3),Qn={href:"https://github.com/element-plus/element-plus/tree/dev/packages/components/icon",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Xn=s("Component"),Zn=s(" \u2022 "),ns={href:"https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/icon.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ss=s("Docs"),as=n("h2",{id:"contributors",tabindex:"-1"},[s("Contributors "),n("a",{class:"header-anchor vp-link",href:"#contributors","aria-hidden":"true"},"#")],-1),is='{"title":"Icon","description":"","frontmatter":{"title":"Icon","lang":"en-US"},"headers":[{"level":2,"title":"Icon Usage","slug":"icon-usage"},{"level":2,"title":"Installation","slug":"installation"},{"level":3,"title":"Using packaging manager","slug":"using-packaging-manager"},{"level":3,"title":"Register All Icons","slug":"register-all-icons"},{"level":3,"title":"Import in Browser","slug":"import-in-browser"},{"level":3,"title":"Auto Import","slug":"auto-import"},{"level":2,"title":"Simple Usage","slug":"simple-usage"},{"level":2,"title":"Combined with el-icon","slug":"combined-with-el-icon"},{"level":2,"title":"Using SVG icon directly","slug":"using-svg-icon-directly"},{"level":2,"title":"Icon Collection","slug":"icon-collection"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Slots","slug":"slots"},{"level":2,"title":"Source","slug":"source"},{"level":2,"title":"Contributors","slug":"contributors"}],"relativePath":"en-US/component/icon.md","lastUpdated":1669034690000}',ts={},us=Object.assign(ts,{__name:"icon",setup(es){return(os,ps)=>{const t=q,p=c("ElIcon"),u=c("ElRow"),h=c("ElButton"),_=c("IconList"),r=c("api-typing"),m=v;return f(),b("div",null,[w,x,I,n("ul",null,[n("li",null,[n("p",null,[S,T,A,n("a",C,[E,a(t,{class:"link-icon"})]),V])]),n("li",null,[n("p",null,[P,n("a",D,[N,a(t,{class:"link-icon"})]),n("a",z,[U,a(t,{class:"link-icon"})]),R,n("a",j,[G,a(t,{class:"link-icon"})]),B,L])])]),Y,n("p",null,[M,n("a",H,[O,a(t,{class:"link-icon"})]),W]),$,F,n("p",null,[J,n("a",K,[Q,a(t,{class:"link-icon"})]),X,n("a",Z,[nn,a(t,{class:"link-icon"})]),sn]),an,n("div",tn,[en,n("p",null,[on,n("a",pn,[ln,a(t,{class:"link-icon"})]),cn])]),un,n("p",null,[rn,n("a",kn,[dn,a(t,{class:"link-icon"})]),gn,n("a",hn,[_n,a(t,{class:"link-icon"})]),mn,n("a",vn,[fn,a(t,{class:"link-icon"})]),bn]),yn,n("div",qn,[wn,n("p",null,[xn,n("a",In,[Sn,a(t,{class:"link-icon"})]),Tn,An,Cn])]),En,a(u,null,{default:o(()=>[n("div",null,[a(p,{size:30},{default:o(()=>[a(e(i))]),_:1}),a(e(i))])]),_:1}),Vn,a(u,null,{default:o(()=>[Pn,n("div",Dn,[a(p,{size:20},{default:o(()=>[a(e(i))]),_:1}),a(p,{color:"#409EFC",class:"no-inherit"},{default:o(()=>[a(e(k))]),_:1}),a(p,null,{default:o(()=>[a(e(d))]),_:1}),a(p,{class:"is-loading"},{default:o(()=>[a(e(y))]),_:1}),a(h,{type:"primary"},{default:o(()=>[a(p,{style:{"vertical-align":"middle",color:"#fff"}},{default:o(()=>[a(e(g))]),_:1}),Nn]),_:1})])]),_:1}),zn,a(u,null,{default:o(()=>[n("div",Un,[a(e(i),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(k),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(d),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(g),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),_:1}),Rn,jn,a(_),Gn,Bn,n("div",Ln,[n("table",null,[Yn,n("tbody",null,[n("tr",null,[Mn,Hn,n("td",null,[a(r,{type:"string",details:""})]),On]),n("tr",null,[Wn,$n,n("td",null,[a(r,{type:"number",details:""}),Fn,a(r,{type:"string",details:""})]),Jn])])])]),Kn,n("p",null,[n("a",Qn,[Xn,a(t,{class:"link-icon"})]),Zn,n("a",ns,[ss,a(t,{class:"link-icon"})])]),as,a(m,{id:"icon"})])}}});export{is as __pageData,us as default};
