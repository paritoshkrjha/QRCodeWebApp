(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Bn,R,Vl,Tt,qo,Wl,Ks,Hl,Kt={},Bl=[],ph=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Qr=Array.isArray;function Ge(t,e){for(var n in e)t[n]=e[n];return t}function $l(t){var e=t.parentNode;e&&e.removeChild(t)}function Q(t,e,n){var r,s,i,o={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:o[i]=e[i];if(arguments.length>2&&(o.children=arguments.length>3?Bn.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)o[i]===void 0&&(o[i]=t.defaultProps[i]);return An(t,o,r,s,null)}function An(t,e,n,r,s){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Vl};return s==null&&R.vnode!=null&&R.vnode(i),i}function _h(){return{current:null}}function Oe(t){return t.children}function He(t,e){this.props=t,this.context=e}function xn(t,e){if(e==null)return t.__?xn(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?xn(t):null}function jl(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return jl(t)}}function Ys(t){(!t.__d&&(t.__d=!0)&&Tt.push(t)&&!br.__r++||qo!==R.debounceRendering)&&((qo=R.debounceRendering)||Wl)(br)}function br(){var t,e,n,r,s,i,o,a,l;for(Tt.sort(Ks);t=Tt.shift();)t.__d&&(e=Tt.length,r=void 0,s=void 0,i=void 0,a=(o=(n=t).__v).__e,(l=n.__P)&&(r=[],s=[],(i=Ge({},o)).__v=o.__v+1,Di(l,o,i,n.__n,l.ownerSVGElement!==void 0,o.__h!=null?[a]:null,r,a??xn(o),o.__h,s),Kl(r,o,s),o.__e!=a&&jl(o)),Tt.length>e&&Tt.sort(Ks));br.__r=0}function Gl(t,e,n,r,s,i,o,a,l,c,d){var u,h,_,p,v,D,O,S,k,H=0,N=r&&r.__k||Bl,le=N.length,re=le,ye=e.length;for(n.__k=[],u=0;u<ye;u++)(p=n.__k[u]=(p=e[u])==null||typeof p=="boolean"||typeof p=="function"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?An(null,p,null,null,p):Qr(p)?An(Oe,{children:p},null,null,null):p.__b>0?An(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null?(p.__=n,p.__b=n.__b+1,(S=mh(p,N,O=u+H,re))===-1?_=Kt:(_=N[S]||Kt,N[S]=void 0,re--),Di(t,p,_,s,i,o,a,l,c,d),v=p.__e,(h=p.ref)&&_.ref!=h&&(_.ref&&ki(_.ref,null,p),d.push(h,p.__c||v,p)),v!=null&&(D==null&&(D=v),(k=_===Kt||_.__v===null)?S==-1&&H--:S!==O&&(S===O+1?H++:S>O?re>ye-O?H+=S-O:H--:H=S<O&&S==O-1?S-O:0),O=u+H,typeof p.type!="function"||S===O&&_.__k!==p.__k?typeof p.type=="function"||S===O&&!k?p.__d!==void 0?(l=p.__d,p.__d=void 0):l=v.nextSibling:l=zl(t,v,l):l=ql(p,l,t),typeof n.type=="function"&&(n.__d=l))):(_=N[u])&&_.key==null&&_.__e&&(_.__e==l&&(l=xn(_)),Js(_,_,!1),N[u]=null);for(n.__e=D,u=le;u--;)N[u]!=null&&(typeof n.type=="function"&&N[u].__e!=null&&N[u].__e==n.__d&&(n.__d=N[u].__e.nextSibling),Js(N[u],N[u]))}function ql(t,e,n){for(var r,s=t.__k,i=0;s&&i<s.length;i++)(r=s[i])&&(r.__=t,e=typeof r.type=="function"?ql(r,e,n):zl(n,r.__e,e));return e}function Ye(t,e){return e=e||[],t==null||typeof t=="boolean"||(Qr(t)?t.some(function(n){Ye(n,e)}):e.push(t)),e}function zl(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function mh(t,e,n,r){var s=t.key,i=t.type,o=n-1,a=n+1,l=e[n];if(l===null||l&&s==l.key&&i===l.type)return n;if(r>(l!=null?1:0))for(;o>=0||a<e.length;){if(o>=0){if((l=e[o])&&s==l.key&&i===l.type)return o;o--}if(a<e.length){if((l=e[a])&&s==l.key&&i===l.type)return a;a++}}return-1}function gh(t,e,n,r,s){var i;for(i in n)i==="children"||i==="key"||i in e||wr(t,i,null,n[i],r);for(i in e)s&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||wr(t,i,e[i],n[i],r)}function zo(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ph.test(e)?n:n+"px"}function wr(t,e,n,r,s){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||zo(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||zo(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?Yo:Ko,i):t.removeEventListener(e,i?Yo:Ko,i);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Ko(t){return this.l[t.type+!1](R.event?R.event(t):t)}function Yo(t){return this.l[t.type+!0](R.event?R.event(t):t)}function Di(t,e,n,r,s,i,o,a,l,c){var d,u,h,_,p,v,D,O,S,k,H,N,le,re,ye,x=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=e.__e=n.__e,e.__h=null,i=[a]),(d=R.__b)&&d(e);e:if(typeof x=="function")try{if(O=e.props,S=(d=x.contextType)&&r[d.__c],k=d?S?S.props.value:d.__:r,n.__c?D=(u=e.__c=n.__c).__=u.__E:("prototype"in x&&x.prototype.render?e.__c=u=new x(O,k):(e.__c=u=new He(O,k),u.constructor=x,u.render=vh),S&&S.sub(u),u.props=O,u.state||(u.state={}),u.context=k,u.__n=r,h=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),x.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Ge({},u.__s)),Ge(u.__s,x.getDerivedStateFromProps(O,u.__s))),_=u.props,p=u.state,u.__v=e,h)x.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(x.getDerivedStateFromProps==null&&O!==_&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(O,k),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(O,u.__s,k)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(u.props=O,u.state=u.__s,u.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(J){J&&(J.__=e)}),H=0;H<u._sb.length;H++)u.__h.push(u._sb[H]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(O,u.__s,k),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(_,p,v)})}if(u.context=k,u.props=O,u.__P=t,u.__e=!1,N=R.__r,le=0,"prototype"in x&&x.prototype.render){for(u.state=u.__s,u.__d=!1,N&&N(e),d=u.render(u.props,u.state,u.context),re=0;re<u._sb.length;re++)u.__h.push(u._sb[re]);u._sb=[]}else do u.__d=!1,N&&N(e),d=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++le<25);u.state=u.__s,u.getChildContext!=null&&(r=Ge(Ge({},r),u.getChildContext())),h||u.getSnapshotBeforeUpdate==null||(v=u.getSnapshotBeforeUpdate(_,p)),Gl(t,Qr(ye=d!=null&&d.type===Oe&&d.key==null?d.props.children:d)?ye:[ye],e,n,r,s,i,o,a,l,c),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),D&&(u.__E=u.__=null)}catch(J){e.__v=null,(l||i!=null)&&(e.__e=a,e.__h=!!l,i[i.indexOf(a)]=null),R.__e(J,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=yh(n.__e,e,n,r,s,i,o,l,c);(d=R.diffed)&&d(e)}function Kl(t,e,n){for(var r=0;r<n.length;r++)ki(n[r],n[++r],n[++r]);R.__c&&R.__c(e,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(i){i.call(s)})}catch(i){R.__e(i,s.__v)}})}function yh(t,e,n,r,s,i,o,a,l){var c,d,u,h=n.props,_=e.props,p=e.type,v=0;if(p==="svg"&&(s=!0),i!=null){for(;v<i.length;v++)if((c=i[v])&&"setAttribute"in c==!!p&&(p?c.localName===p:c.nodeType===3)){t=c,i[v]=null;break}}if(t==null){if(p===null)return document.createTextNode(_);t=s?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,_.is&&_),i=null,a=!1}if(p===null)h===_||a&&t.data===_||(t.data=_);else{if(i=i&&Bn.call(t.childNodes),d=(h=n.props||Kt).dangerouslySetInnerHTML,u=_.dangerouslySetInnerHTML,!a){if(i!=null)for(h={},v=0;v<t.attributes.length;v++)h[t.attributes[v].name]=t.attributes[v].value;(u||d)&&(u&&(d&&u.__html==d.__html||u.__html===t.innerHTML)||(t.innerHTML=u&&u.__html||""))}if(gh(t,_,h,s,a),u)e.__k=[];else if(Gl(t,Qr(v=e.props.children)?v:[v],e,n,r,s&&p!=="foreignObject",i,o,i?i[0]:n.__k&&xn(n,0),a,l),i!=null)for(v=i.length;v--;)i[v]!=null&&$l(i[v]);a||("value"in _&&(v=_.value)!==void 0&&(v!==t.value||p==="progress"&&!v||p==="option"&&v!==h.value)&&wr(t,"value",v,h.value,!1),"checked"in _&&(v=_.checked)!==void 0&&v!==t.checked&&wr(t,"checked",v,h.checked,!1))}return t}function ki(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){R.__e(r,n)}}function Js(t,e,n){var r,s;if(R.unmount&&R.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||ki(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){R.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(s=0;s<r.length;s++)r[s]&&Js(r[s],e,n||typeof t.type!="function");n||t.__e==null||$l(t.__e),t.__=t.__e=t.__d=void 0}function vh(t,e,n){return this.constructor(t,n)}function tn(t,e,n){var r,s,i,o;R.__&&R.__(t,e),s=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],o=[],Di(e,t=(!r&&n||e).__k=Q(Oe,null,[t]),s||Kt,Kt,e.ownerSVGElement!==void 0,!r&&n?[n]:s?null:e.firstChild?Bn.call(e.childNodes):null,i,!r&&n?n:s?s.__e:e.firstChild,r,o),Kl(i,t,o)}function Yl(t,e){tn(t,e,Yl)}function Eh(t,e,n){var r,s,i,o,a=Ge({},t.props);for(i in t.type&&t.type.defaultProps&&(o=t.type.defaultProps),e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i]===void 0&&o!==void 0?o[i]:e[i];return arguments.length>2&&(a.children=arguments.length>3?Bn.call(arguments,2):n),An(t.type,a,r||t.key,s||t.ref,null)}function Ch(t,e){var n={__c:e="__cC"+Hl++,__:t,Consumer:function(r,s){return r.children(s)},Provider:function(r){var s,i;return this.getChildContext||(s=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&s.some(function(a){a.__e=!0,Ys(a)})},this.sub=function(o){s.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){s.splice(s.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Bn=Bl.slice,R={__e:function(t,e,n,r){for(var s,i,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(t)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,r||{}),o=s.__d),o)return s.__E=s}catch(a){t=a}throw t}},Vl=0,He.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Ge({},this.state),typeof t=="function"&&(t=t(Ge({},n),this.props)),t&&Ge(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ys(this))},He.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ys(this))},He.prototype.render=Oe,Tt=[],Wl=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ks=function(t,e){return t.__v.__b-e.__v.__b},br.__r=0,Hl=0;var yt,K,bs,Jo,nn=0,Jl=[],or=[],Qo=R.__b,Xo=R.__r,Zo=R.diffed,ea=R.__c,ta=R.unmount;function un(t,e){R.__h&&R.__h(K,t,nn||e),nn=0;var n=K.__H||(K.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:or}),n.__[t]}function ht(t){return nn=1,Ql(Zl,t)}function Ql(t,e,n){var r=un(yt++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Zl(void 0,e),function(a){var l=r.__N?r.__N[0]:r.__[0],c=r.t(l,a);l!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=K,!K.u)){var s=function(a,l,c){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(h){return h.__c});if(d.every(function(h){return!h.__N}))return!i||i.call(this,a,l,c);var u=!1;return d.forEach(function(h){if(h.__N){var _=h.__[0];h.__=h.__N,h.__N=void 0,_!==h.__[0]&&(u=!0)}}),!(!u&&r.__c.props===a)&&(!i||i.call(this,a,l,c))};K.u=!0;var i=K.shouldComponentUpdate,o=K.componentWillUpdate;K.componentWillUpdate=function(a,l,c){if(this.__e){var d=i;i=void 0,s(a,l,c),i=d}o&&o.call(this,a,l,c)},K.shouldComponentUpdate=s}return r.__N||r.__}function Xr(t,e){var n=un(yt++,3);!R.__s&&Mi(n.__H,e)&&(n.__=t,n.i=e,K.__H.__h.push(n))}function Zr(t,e){var n=un(yt++,4);!R.__s&&Mi(n.__H,e)&&(n.__=t,n.i=e,K.__h.push(n))}function Xl(t){return nn=5,xi(function(){return{current:t}},[])}function Sh(t,e,n){nn=6,Zr(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function xi(t,e){var n=un(yt++,7);return Mi(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Ir(t,e){return nn=8,xi(function(){return t},e)}function bh(t){var e=K.context[t.__c],n=un(yt++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(K)),e.props.value):t.__}function wh(t,e){R.useDebugValue&&R.useDebugValue(e?e(t):t)}function Ih(){var t=un(yt++,11);if(!t.__){for(var e=K.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Th(){for(var t;t=Jl.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ar),t.__H.__h.forEach(Qs),t.__H.__h=[]}catch(e){t.__H.__h=[],R.__e(e,t.__v)}}R.__b=function(t){K=null,Qo&&Qo(t)},R.__r=function(t){Xo&&Xo(t),yt=0;var e=(K=t.__c).__H;e&&(bs===K?(e.__h=[],K.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=or,n.__N=n.i=void 0})):(e.__h.forEach(ar),e.__h.forEach(Qs),e.__h=[],yt=0)),bs=K},R.diffed=function(t){Zo&&Zo(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Jl.push(e)!==1&&Jo===R.requestAnimationFrame||((Jo=R.requestAnimationFrame)||Rh)(Th)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==or&&(n.__=n.__V),n.i=void 0,n.__V=or})),bs=K=null},R.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ar),n.__h=n.__h.filter(function(r){return!r.__||Qs(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],R.__e(r,n.__v)}}),ea&&ea(t,e)},R.unmount=function(t){ta&&ta(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ar(r)}catch(s){e=s}}),n.__H=void 0,e&&R.__e(e,n.__v))};var na=typeof requestAnimationFrame=="function";function Rh(t){var e,n=function(){clearTimeout(r),na&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);na&&(e=requestAnimationFrame(n))}function ar(t){var e=K,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),K=e}function Qs(t){var e=K;t.__c=t.__(),K=e}function Mi(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Zl(t,e){return typeof e=="function"?e(t):e}function ec(t,e){for(var n in e)t[n]=e[n];return t}function Xs(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function ws(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function Zs(t){this.props=t}function tc(t,e){function n(s){var i=this.props.ref,o=i==s.ref;return!o&&i&&(i.call?i(null):i.current=null),e?!e(this.props,s)||!o:Xs(this.props,s)}function r(s){return this.shouldComponentUpdate=n,Q(t,s)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Zs.prototype=new He).isPureReactComponent=!0,Zs.prototype.shouldComponentUpdate=function(t,e){return Xs(this.props,t)||Xs(this.state,e)};var ra=R.__b;R.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),ra&&ra(t)};var Ah=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function nc(t){function e(n){var r=ec({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ah,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var sa=function(t,e){return t==null?null:Ye(Ye(t).map(e))},Ph={map:sa,forEach:sa,count:function(t){return t?Ye(t).length:0},only:function(t){var e=Ye(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:Ye},Oh=R.__e;R.__e=function(t,e,n,r){if(t.then){for(var s,i=e;i=i.__;)if((s=i.__c)&&s.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),s.__c(t,e)}Oh(t,e,n,r)};var ia=R.unmount;function rc(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=ec({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return rc(r,e,n)})),t}function sc(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return sc(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function lr(){this.__u=0,this.t=null,this.__b=null}function ic(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Nh(t){var e,n,r;function s(i){if(e||(e=t()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw e;return Q(n,i)}return s.displayName="Lazy",s.__f=!0,s}function Tn(){this.u=null,this.o=null}R.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),ia&&ia(t)},(lr.prototype=new He).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var s=ic(r.__v),i=!1,o=function(){i||(i=!0,n.__R=null,s?s(a):a())};n.__R=o;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=sc(c,c.__c.__P,c.__c.__O)}var d;for(r.setState({__a:r.__b=null});d=r.t.pop();)d.forceUpdate()}},l=e.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(o,o)},lr.prototype.componentWillUnmount=function(){this.t=[]},lr.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=rc(this.__b,n,r.__O=r.__P)}this.__b=null}var s=e.__a&&Q(Oe,null,t.fallback);return s&&(s.__h=null),[Q(Oe,null,e.__a?null:t.children),s]};var oa=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Dh(t){return this.getChildContext=function(){return t.context},t.children}function kh(t){var e=this,n=t.i;e.componentWillUnmount=function(){tn(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,s){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),tn(Q(Dh,{context:e.context},t.__v),e.l)}function xh(t,e){var n=Q(kh,{__v:t,i:e});return n.containerInfo=e,n}(Tn.prototype=new He).__a=function(t){var e=this,n=ic(e.__v),r=e.o.get(t);return r[0]++,function(s){var i=function(){e.props.revealOrder?(r.push(s),oa(e,t,r)):s()};n?n(i):i()}},Tn.prototype.render=function(t){this.u=null,this.o=new Map;var e=Ye(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},Tn.prototype.componentDidUpdate=Tn.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){oa(t,n,e)})};var oc=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Mh=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Lh=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Fh=/[A-Z0-9]/g,Uh=typeof document<"u",Vh=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function Wh(t,e,n){return e.__k==null&&(e.textContent=""),tn(t,e),typeof n=="function"&&n(),t?t.__c:null}function Hh(t,e,n){return Yl(t,e),typeof n=="function"&&n(),t?t.__c:null}He.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(He.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var aa=R.event;function Bh(){}function $h(){return this.cancelBubble}function jh(){return this.defaultPrevented}R.event=function(t){return aa&&(t=aa(t)),t.persist=Bh,t.isPropagationStopped=$h,t.isDefaultPrevented=jh,t.nativeEvent=t};var Li,Gh={enumerable:!1,configurable:!0,get:function(){return this.class}},la=R.vnode;R.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,s={};for(var i in n){var o=n[i];if(!(i==="value"&&"defaultValue"in n&&o==null||Uh&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var a=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&o===!0?o="":a==="ondoubleclick"?i="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||Vh(n.type)?a==="onfocus"?i="onfocusin":a==="onblur"?i="onfocusout":Lh.test(i)?i=a:r.indexOf("-")===-1&&Mh.test(i)?i=i.replace(Fh,"-$&").toLowerCase():o===null&&(o=void 0):a=i="oninput",a==="oninput"&&s[i=a]&&(i="oninputCapture"),s[i]=o}}r=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Ye(n.children).forEach(function(l){l.props.selected=s.value.indexOf(l.props.value)!=-1})),r=="select"&&s.defaultValue!=null&&(s.value=Ye(n.children).forEach(function(l){l.props.selected=s.multiple?s.defaultValue.indexOf(l.props.value)!=-1:s.defaultValue==l.props.value})),n.class&&!n.className?(s.class=n.class,Object.defineProperty(s,"className",Gh)):(n.className&&!n.class||n.class&&n.className)&&(s.class=s.className=n.className),e.props=s}(t),t.$$typeof=oc,la&&la(t)};var ca=R.__r;R.__r=function(t){ca&&ca(t),Li=t.__c};var ua=R.diffed;R.diffed=function(t){ua&&ua(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Li=null};var qh={ReactCurrentDispatcher:{current:{readContext:function(t){return Li.__n[t.__c].props.value}}}};function zh(t){return Q.bind(null,t)}function es(t){return!!t&&t.$$typeof===oc}function Kh(t){return es(t)&&t.type===Oe}function Yh(t){return es(t)?Eh.apply(null,arguments):t}function Jh(t){return!!t.__k&&(tn(null,t),!0)}function Qh(t){return t&&(t.base||t.nodeType===1&&t)||null}var Xh=function(t,e){return t(e)},Zh=function(t,e){return t(e)},ef=Oe;function ac(t){t()}function tf(t){return t}function nf(){return[!1,ac]}var rf=Zr,sf=es;function of(t,e){var n=e(),r=ht({h:{__:n,v:e}}),s=r[0].h,i=r[1];return Zr(function(){s.__=n,s.v=e,ws(s.__,e())||i({h:s})},[t,n,e]),Xr(function(){return ws(s.__,s.v())||i({h:s}),t(function(){ws(s.__,s.v())||i({h:s})})},[t]),n}var ne={useState:ht,useId:Ih,useReducer:Ql,useEffect:Xr,useLayoutEffect:Zr,useInsertionEffect:rf,useTransition:nf,useDeferredValue:tf,useSyncExternalStore:of,startTransition:ac,useRef:Xl,useImperativeHandle:Sh,useMemo:xi,useCallback:Ir,useContext:bh,useDebugValue:wh,version:"17.0.2",Children:Ph,render:Wh,hydrate:Hh,unmountComponentAtNode:Jh,createPortal:xh,createElement:Q,createContext:Ch,createFactory:zh,cloneElement:Yh,createRef:_h,Fragment:Oe,isValidElement:es,isElement:sf,isFragment:Kh,findDOMNode:Qh,Component:He,PureComponent:Zs,memo:tc,forwardRef:nc,flushSync:Zh,unstable_batchedUpdates:Xh,StrictMode:ef,Suspense:lr,SuspenseList:Tn,lazy:Nh,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:qh};let af={data:""},lf=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||af,cf=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,uf=/\/\*[^]*?\*\/|  +/g,da=/\n+/g,at=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?at(o,i):i+"{"+at(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=at(o,e?e.replace(/([^,])+/g,a=>i.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=at.p?at.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},$e={},lc=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+lc(t[n]);return e}return t},df=(t,e,n,r,s)=>{let i=lc(t),o=$e[i]||($e[i]=(l=>{let c=0,d=11;for(;c<l.length;)d=101*d+l.charCodeAt(c++)>>>0;return"go"+d})(i));if(!$e[o]){let l=i!==t?t:(c=>{let d,u,h=[{}];for(;d=cf.exec(c.replace(uf,""));)d[4]?h.shift():d[3]?(u=d[3].replace(da," ").trim(),h.unshift(h[0][u]=h[0][u]||{})):h[0][d[1]]=d[2].replace(da," ").trim();return h[0]})(t);$e[o]=at(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&$e.g?$e.g:null;return n&&($e.g=$e[o]),((l,c,d,u)=>{u?c.data=c.data.replace(u,l):c.data.indexOf(l)===-1&&(c.data=d?l+c.data:c.data+l)})($e[o],e,r,a),o},hf=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":at(a,""):a===!1?"":a}return r+s+(o??"")},"");function ts(t){let e=this||{},n=t.call?t(e.p):t;return df(n.unshift?n.raw?hf(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,lf(e.target),e.g,e.o,e.k)}let cc,ei,ti;ts.bind({g:1});let Xe=ts.bind({k:1});function ff(t,e,n,r){at.p=e,cc=t,ei=n,ti=r}function Et(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:ei&&ei()},a),n.o=/ *go\d+/.test(l),a.className=ts.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let c=t;return t[0]&&(c=a.as||t,delete a.as),ti&&c[0]&&ti(a),cc(c,a)}return e?e(s):s}}var pf=t=>typeof t=="function",Tr=(t,e)=>pf(t)?t(e):t,_f=(()=>{let t=0;return()=>(++t).toString()})(),uc=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),mf=20,cr=new Map,gf=1e3,ha=t=>{if(cr.has(t))return;let e=setTimeout(()=>{cr.delete(t),Ut({type:4,toastId:t})},gf);cr.set(t,e)},yf=t=>{let e=cr.get(t);e&&clearTimeout(e)},ni=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,mf)};case 1:return e.toast.id&&yf(e.toast.id),{...t,toasts:t.toasts.map(i=>i.id===e.toast.id?{...i,...e.toast}:i)};case 2:let{toast:n}=e;return t.toasts.find(i=>i.id===n.id)?ni(t,{type:1,toast:n}):ni(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?ha(r):t.toasts.forEach(i=>{ha(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===r||r===void 0?{...i,visible:!1}:i)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(i=>i.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+s}))}}},ur=[],dr={toasts:[],pausedAt:void 0},Ut=t=>{dr=ni(dr,t),ur.forEach(e=>{e(dr)})},vf={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ef=(t={})=>{let[e,n]=ht(dr);Xr(()=>(ur.push(n),()=>{let s=ur.indexOf(n);s>-1&&ur.splice(s,1)}),[e]);let r=e.toasts.map(s=>{var i,o;return{...t,...t[s.type],...s,duration:s.duration||((i=t[s.type])==null?void 0:i.duration)||(t==null?void 0:t.duration)||vf[s.type],style:{...t.style,...(o=t[s.type])==null?void 0:o.style,...s.style}}});return{...e,toasts:r}},Cf=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||_f()}),$n=t=>(e,n)=>{let r=Cf(e,t,n);return Ut({type:2,toast:r}),r.id},Ee=(t,e)=>$n("blank")(t,e);Ee.error=$n("error");Ee.success=$n("success");Ee.loading=$n("loading");Ee.custom=$n("custom");Ee.dismiss=t=>{Ut({type:3,toastId:t})};Ee.remove=t=>Ut({type:4,toastId:t});Ee.promise=(t,e,n)=>{let r=Ee.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(s=>(Ee.success(Tr(e.success,s),{id:r,...n,...n==null?void 0:n.success}),s)).catch(s=>{Ee.error(Tr(e.error,s),{id:r,...n,...n==null?void 0:n.error})}),t};var Sf=(t,e)=>{Ut({type:1,toast:{id:t,height:e}})},bf=()=>{Ut({type:5,time:Date.now()})},wf=t=>{let{toasts:e,pausedAt:n}=Ef(t);Xr(()=>{if(n)return;let i=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(i-a.createdAt);if(l<0){a.visible&&Ee.dismiss(a.id);return}return setTimeout(()=>Ee.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=Ir(()=>{n&&Ut({type:6,time:Date.now()})},[n]),s=Ir((i,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:c}=o||{},d=e.filter(_=>(_.position||c)===(i.position||c)&&_.height),u=d.findIndex(_=>_.id===i.id),h=d.filter((_,p)=>p<u&&_.visible).length;return d.filter(_=>_.visible).slice(...a?[h+1]:[0,h]).reduce((_,p)=>_+(p.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:Sf,startPause:bf,endPause:r,calculateOffset:s}}},If=Xe`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Tf=Xe`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Rf=Xe`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Af=Et("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${If} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Tf} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Rf} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pf=Xe`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Of=Et("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Pf} 1s linear infinite;
`,Nf=Xe`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Df=Xe`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,kf=Et("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Nf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Df} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,xf=Et("div")`
  position: absolute;
`,Mf=Et("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Lf=Xe`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ff=Et("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Lf} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Uf=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?Q(Ff,null,e):e:n==="blank"?null:Q(Mf,null,Q(Of,{...r}),n!=="loading"&&Q(xf,null,n==="error"?Q(Af,{...r}):Q(kf,{...r})))},Vf=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Wf=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Hf="0%{opacity:0;} 100%{opacity:1;}",Bf="0%{opacity:1;} 100%{opacity:0;}",$f=Et("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,jf=Et("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Gf=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=uc()?[Hf,Bf]:[Vf(n),Wf(n)];return{animation:e?`${Xe(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Xe(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},qf=tc(({toast:t,position:e,style:n,children:r})=>{let s=t.height?Gf(t.position||e||"top-center",t.visible):{opacity:0},i=Q(Uf,{toast:t}),o=Q(jf,{...t.ariaProps},Tr(t.message,t));return Q($f,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):Q(Oe,null,i,o))});ff(Q);var zf=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=Ir(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return Q("div",{ref:i,className:e,style:n},s)},Kf=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:uc()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},Yf=ts`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,nr=16,Jf=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,containerStyle:i,containerClassName:o})=>{let{toasts:a,handlers:l}=wf(n);return Q("div",{style:{position:"fixed",zIndex:9999,top:nr,left:nr,right:nr,bottom:nr,pointerEvents:"none",...i},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(c=>{let d=c.position||e,u=l.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),h=Kf(d,u);return Q(zf,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Yf:"",style:h},c.type==="custom"?Tr(c.message,c):s?s(c):Q(qf,{toast:c,position:d}))}))},jn=t=>t.type==="checkbox",Gt=t=>t instanceof Date,ve=t=>t==null;const dc=t=>typeof t=="object";var ae=t=>!ve(t)&&!Array.isArray(t)&&dc(t)&&!Gt(t),hc=t=>ae(t)&&t.target?jn(t.target)?t.target.checked:t.target.value:t,Qf=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,fc=(t,e)=>t.has(Qf(e)),Xf=t=>{const e=t.constructor&&t.constructor.prototype;return ae(e)&&e.hasOwnProperty("isPrototypeOf")},Fi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ue(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Fi&&(t instanceof Blob||t instanceof FileList))&&(n||ae(t)))if(e=n?[]:{},!n&&!Xf(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Ue(t[r]));else return t;return e}var Gn=t=>Array.isArray(t)?t.filter(Boolean):[],te=t=>t===void 0,b=(t,e,n)=>{if(!e||!ae(t))return n;const r=Gn(e.split(/[,[\].]+?/)).reduce((s,i)=>ve(s)?s:s[i],t);return te(r)||r===t?te(t[e])?n:t[e]:r};const Rr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},De={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},je={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Zf=ne.createContext(null),Ui=()=>ne.useContext(Zf);var pc=(t,e,n,r=!0)=>{const s={defaultValues:e._defaultValues};for(const i in t)Object.defineProperty(s,i,{get:()=>{const o=i;return e._proxyFormState[o]!==De.all&&(e._proxyFormState[o]=!r||De.all),n&&(n[o]=!0),t[o]}});return s},Re=t=>ae(t)&&!Object.keys(t).length,_c=(t,e,n,r)=>{n(t);const{name:s,...i}=t;return Re(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(o=>e[o]===(!r||De.all))},hr=t=>Array.isArray(t)?t:[t],mc=(t,e,n)=>n&&e?t===e:!t||!e||t===e||hr(t).some(r=>r&&(r.startsWith(e)||e.startsWith(r)));function Vi(t){const e=ne.useRef(t);e.current=t,ne.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}function ep(t){const e=Ui(),{control:n=e.control,disabled:r,name:s,exact:i}=t||{},[o,a]=ne.useState(n._formState),l=ne.useRef(!0),c=ne.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=ne.useRef(s);return d.current=s,Vi({disabled:r,next:u=>l.current&&mc(d.current,u.name,i)&&_c(u,c.current,n._updateFormState)&&a({...n._formState,...u}),subject:n._subjects.state}),ne.useEffect(()=>(l.current=!0,c.current.isValid&&n._updateValid(!0),()=>{l.current=!1}),[n]),pc(o,n,c.current,!1)}var Ve=t=>typeof t=="string",gc=(t,e,n,r,s)=>Ve(t)?(r&&e.watch.add(t),b(n,t,s)):Array.isArray(t)?t.map(i=>(r&&e.watch.add(i),b(n,i))):(r&&(e.watchAll=!0),n);function tp(t){const e=Ui(),{control:n=e.control,name:r,defaultValue:s,disabled:i,exact:o}=t||{},a=ne.useRef(r);a.current=r,Vi({disabled:i,subject:n._subjects.values,next:d=>{mc(a.current,d.name,o)&&c(Ue(gc(a.current,n._names,d.values||n._formValues,!1,s)))}});const[l,c]=ne.useState(n._getWatch(r,s));return ne.useEffect(()=>n._removeUnmounted()),l}var Wi=t=>/^\w*$/.test(t),yc=t=>Gn(t.replace(/["|']|\]/g,"").split(/\.|\[/));function G(t,e,n){let r=-1;const s=Wi(e)?[e]:yc(e),i=s.length,o=i-1;for(;++r<i;){const a=s[r];let l=n;if(r!==o){const c=t[a];l=ae(c)||Array.isArray(c)?c:isNaN(+s[r+1])?{}:[]}t[a]=l,t=t[a]}return t}function np(t){const e=Ui(),{name:n,control:r=e.control,shouldUnregister:s}=t,i=fc(r._names.array,n),o=tp({control:r,name:n,defaultValue:b(r._formValues,n,b(r._defaultValues,n,t.defaultValue)),exact:!0}),a=ep({control:r,name:n}),l=ne.useRef(r.register(n,{...t.rules,value:o}));return l.current=r.register(n,t.rules),ne.useEffect(()=>{const c=r._options.shouldUnregister||s,d=(u,h)=>{const _=b(r._fields,u);_&&(_._f.mount=h)};if(d(n,!0),c){const u=Ue(b(r._options.defaultValues,n));G(r._defaultValues,n,u),te(b(r._formValues,n))&&G(r._formValues,n,u)}return()=>{(i?c&&!r._state.action:c)?r.unregister(n):d(n,!1)}},[n,r,i,s]),{field:{name:n,value:o,onChange:ne.useCallback(c=>l.current.onChange({target:{value:hc(c),name:n},type:Rr.CHANGE}),[n]),onBlur:ne.useCallback(()=>l.current.onBlur({target:{value:b(r._formValues,n),name:n},type:Rr.BLUR}),[n,r]),ref:c=>{const d=b(r._fields,n);d&&c&&(d._f.ref={focus:()=>c.focus(),select:()=>c.select(),setCustomValidity:u=>c.setCustomValidity(u),reportValidity:()=>c.reportValidity()})}},formState:a,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!b(a.errors,n)},isDirty:{enumerable:!0,get:()=>!!b(a.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!b(a.touchedFields,n)},error:{enumerable:!0,get:()=>b(a.errors,n)}})}}const fa=t=>t.render(np(t));var rp=(t,e,n,r,s)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:s||!0}}:{};const ri=(t,e,n)=>{for(const r of n||Object.keys(t)){const s=b(t,r);if(s){const{_f:i,...o}=s;if(i&&e(i.name)){if(i.ref.focus){i.ref.focus();break}else if(i.refs&&i.refs[0].focus){i.refs[0].focus();break}}else ae(o)&&ri(o,e)}}};var pa=t=>({isOnSubmit:!t||t===De.onSubmit,isOnBlur:t===De.onBlur,isOnChange:t===De.onChange,isOnAll:t===De.all,isOnTouch:t===De.onTouched}),_a=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),sp=(t,e,n)=>{const r=Gn(b(t,n));return G(r,"root",e[n]),G(t,n,r),t},Yt=t=>typeof t=="boolean",Hi=t=>t.type==="file",ft=t=>typeof t=="function",Ar=t=>{if(!Fi)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},fr=t=>Ve(t),Bi=t=>t.type==="radio",Pr=t=>t instanceof RegExp;const ma={value:!1,isValid:!1},ga={value:!0,isValid:!0};var vc=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!te(t[0].attributes.value)?te(t[0].value)||t[0].value===""?ga:{value:t[0].value,isValid:!0}:ga:ma}return ma};const ya={isValid:!1,value:null};var Ec=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,ya):ya;function va(t,e,n="validate"){if(fr(t)||Array.isArray(t)&&t.every(fr)||Yt(t)&&!t)return{type:n,message:fr(t)?t:"",ref:e}}var $t=t=>ae(t)&&!Pr(t)?t:{value:t,message:""},Ea=async(t,e,n,r,s)=>{const{ref:i,refs:o,required:a,maxLength:l,minLength:c,min:d,max:u,pattern:h,validate:_,name:p,valueAsNumber:v,mount:D,disabled:O}=t._f,S=b(e,p);if(!D||O)return{};const k=o?o[0]:i,H=W=>{r&&k.reportValidity&&(k.setCustomValidity(Yt(W)?"":W||""),k.reportValidity())},N={},le=Bi(i),re=jn(i),ye=le||re,x=(v||Hi(i))&&te(i.value)&&te(S)||Ar(i)&&i.value===""||S===""||Array.isArray(S)&&!S.length,J=rp.bind(null,p,n,N),ce=(W,F,Z,Ce=je.maxLength,Te=je.minLength)=>{const Fe=W?F:Z;N[p]={type:W?Ce:Te,message:Fe,ref:i,...J(W?Ce:Te,Fe)}};if(s?!Array.isArray(S)||!S.length:a&&(!ye&&(x||ve(S))||Yt(S)&&!S||re&&!vc(o).isValid||le&&!Ec(o).isValid)){const{value:W,message:F}=fr(a)?{value:!!a,message:a}:$t(a);if(W&&(N[p]={type:je.required,message:F,ref:k,...J(je.required,F)},!n))return H(F),N}if(!x&&(!ve(d)||!ve(u))){let W,F;const Z=$t(u),Ce=$t(d);if(!ve(S)&&!isNaN(S)){const Te=i.valueAsNumber||S&&+S;ve(Z.value)||(W=Te>Z.value),ve(Ce.value)||(F=Te<Ce.value)}else{const Te=i.valueAsDate||new Date(S),Fe=vn=>new Date(new Date().toDateString()+" "+vn),bt=i.type=="time",yn=i.type=="week";Ve(Z.value)&&S&&(W=bt?Fe(S)>Fe(Z.value):yn?S>Z.value:Te>new Date(Z.value)),Ve(Ce.value)&&S&&(F=bt?Fe(S)<Fe(Ce.value):yn?S<Ce.value:Te<new Date(Ce.value))}if((W||F)&&(ce(!!W,Z.message,Ce.message,je.max,je.min),!n))return H(N[p].message),N}if((l||c)&&!x&&(Ve(S)||s&&Array.isArray(S))){const W=$t(l),F=$t(c),Z=!ve(W.value)&&S.length>+W.value,Ce=!ve(F.value)&&S.length<+F.value;if((Z||Ce)&&(ce(Z,W.message,F.message),!n))return H(N[p].message),N}if(h&&!x&&Ve(S)){const{value:W,message:F}=$t(h);if(Pr(W)&&!S.match(W)&&(N[p]={type:je.pattern,message:F,ref:i,...J(je.pattern,F)},!n))return H(F),N}if(_){if(ft(_)){const W=await _(S,e),F=va(W,k);if(F&&(N[p]={...F,...J(je.validate,F.message)},!n))return H(F.message),N}else if(ae(_)){let W={};for(const F in _){if(!Re(W)&&!n)break;const Z=va(await _[F](S,e),k,F);Z&&(W={...Z,...J(F,Z.message)},H(Z.message),n&&(N[p]=W))}if(!Re(W)&&(N[p]={ref:k,...W},!n))return N}}return H(!0),N};function ip(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=te(t)?r++:t[e[r++]];return t}function op(t){for(const e in t)if(t.hasOwnProperty(e)&&!te(t[e]))return!1;return!0}function he(t,e){const n=Array.isArray(e)?e:Wi(e)?[e]:yc(e),r=n.length===1?t:ip(t,n),s=n.length-1,i=n[s];return r&&delete r[i],s!==0&&(ae(r)&&Re(r)||Array.isArray(r)&&op(r))&&he(t,n.slice(0,-1)),t}function Is(){let t=[];return{get observers(){return t},next:s=>{for(const i of t)i.next&&i.next(s)},subscribe:s=>(t.push(s),{unsubscribe:()=>{t=t.filter(i=>i!==s)}}),unsubscribe:()=>{t=[]}}}var Or=t=>ve(t)||!dc(t);function Rt(t,e){if(Or(t)||Or(e))return t===e;if(Gt(t)&&Gt(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const s of n){const i=t[s];if(!r.includes(s))return!1;if(s!=="ref"){const o=e[s];if(Gt(i)&&Gt(o)||ae(i)&&ae(o)||Array.isArray(i)&&Array.isArray(o)?!Rt(i,o):i!==o)return!1}}return!0}var Cc=t=>t.type==="select-multiple",ap=t=>Bi(t)||jn(t),Ts=t=>Ar(t)&&t.isConnected,Sc=t=>{for(const e in t)if(ft(t[e]))return!0;return!1};function Nr(t,e={}){const n=Array.isArray(t);if(ae(t)||n)for(const r in t)Array.isArray(t[r])||ae(t[r])&&!Sc(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Nr(t[r],e[r])):ve(t[r])||(e[r]=!0);return e}function bc(t,e,n){const r=Array.isArray(t);if(ae(t)||r)for(const s in t)Array.isArray(t[s])||ae(t[s])&&!Sc(t[s])?te(e)||Or(n[s])?n[s]=Array.isArray(t[s])?Nr(t[s],[]):{...Nr(t[s])}:bc(t[s],ve(e)?{}:e[s],n[s]):n[s]=!Rt(t[s],e[s]);return n}var Rs=(t,e)=>bc(t,e,Nr(e)),wc=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>te(t)?t:e?t===""?NaN:t&&+t:n&&Ve(t)?new Date(t):r?r(t):t;function As(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Hi(e)?e.files:Bi(e)?Ec(t.refs).value:Cc(e)?[...e.selectedOptions].map(({value:n})=>n):jn(e)?vc(t.refs).value:wc(te(e.value)?t.ref.value:e.value,t)}var lp=(t,e,n,r)=>{const s={};for(const i of t){const o=b(e,i);o&&G(s,i,o._f)}return{criteriaMode:n,names:[...t],fields:s,shouldUseNativeValidation:r}},En=t=>te(t)?t:Pr(t)?t.source:ae(t)?Pr(t.value)?t.value.source:t.value:t,cp=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function Ca(t,e,n){const r=b(t,n);if(r||Wi(n))return{error:r,name:n};const s=n.split(".");for(;s.length;){const i=s.join("."),o=b(e,i),a=b(t,i);if(o&&!Array.isArray(o)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};s.pop()}return{name:n}}var up=(t,e,n,r,s)=>s.isOnAll?!1:!n&&s.isOnTouch?!(e||t):(n?r.isOnBlur:s.isOnBlur)?!t:(n?r.isOnChange:s.isOnChange)?t:!0,dp=(t,e)=>!Gn(b(t,e)).length&&he(t,e);const hp={mode:De.onSubmit,reValidateMode:De.onChange,shouldFocusError:!0};function fp(t={},e){let n={...hp,...t},r={submitCount:0,isDirty:!1,isLoading:ft(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},s={},i=ae(n.defaultValues)||ae(n.values)?Ue(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Ue(i),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,d=0;const u={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:Is(),array:Is(),state:Is()},_=t.resetOptions&&t.resetOptions.keepDirtyValues,p=pa(n.mode),v=pa(n.reValidateMode),D=n.criteriaMode===De.all,O=f=>m=>{clearTimeout(d),d=setTimeout(f,m)},S=async f=>{if(u.isValid||f){const m=n.resolver?Re((await x()).errors):await ce(s,!0);m!==r.isValid&&h.state.next({isValid:m})}},k=f=>u.isValidating&&h.state.next({isValidating:f}),H=(f,m=[],y,A,w=!0,E=!0)=>{if(A&&y){if(a.action=!0,E&&Array.isArray(b(s,f))){const P=y(b(s,f),A.argA,A.argB);w&&G(s,f,P)}if(E&&Array.isArray(b(r.errors,f))){const P=y(b(r.errors,f),A.argA,A.argB);w&&G(r.errors,f,P),dp(r.errors,f)}if(u.touchedFields&&E&&Array.isArray(b(r.touchedFields,f))){const P=y(b(r.touchedFields,f),A.argA,A.argB);w&&G(r.touchedFields,f,P)}u.dirtyFields&&(r.dirtyFields=Rs(i,o)),h.state.next({name:f,isDirty:F(f,m),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else G(o,f,m)},N=(f,m)=>{G(r.errors,f,m),h.state.next({errors:r.errors})},le=(f,m,y,A)=>{const w=b(s,f);if(w){const E=b(o,f,te(y)?b(i,f):y);te(E)||A&&A.defaultChecked||m?G(o,f,m?E:As(w._f)):Te(f,E),a.mount&&S()}},re=(f,m,y,A,w)=>{let E=!1,P=!1;const X={name:f};if(!y||A){u.isDirty&&(P=r.isDirty,r.isDirty=X.isDirty=F(),E=P!==X.isDirty);const ee=Rt(b(i,f),m);P=b(r.dirtyFields,f),ee?he(r.dirtyFields,f):G(r.dirtyFields,f,!0),X.dirtyFields=r.dirtyFields,E=E||u.dirtyFields&&P!==!ee}if(y){const ee=b(r.touchedFields,f);ee||(G(r.touchedFields,f,y),X.touchedFields=r.touchedFields,E=E||u.touchedFields&&ee!==y)}return E&&w&&h.state.next(X),E?X:{}},ye=(f,m,y,A)=>{const w=b(r.errors,f),E=u.isValid&&Yt(m)&&r.isValid!==m;if(t.delayError&&y?(c=O(()=>N(f,y)),c(t.delayError)):(clearTimeout(d),c=null,y?G(r.errors,f,y):he(r.errors,f)),(y?!Rt(w,y):w)||!Re(A)||E){const P={...A,...E&&Yt(m)?{isValid:m}:{},errors:r.errors,name:f};r={...r,...P},h.state.next(P)}k(!1)},x=async f=>n.resolver(o,n.context,lp(f||l.mount,s,n.criteriaMode,n.shouldUseNativeValidation)),J=async f=>{const{errors:m}=await x();if(f)for(const y of f){const A=b(m,y);A?G(r.errors,y,A):he(r.errors,y)}else r.errors=m;return m},ce=async(f,m,y={valid:!0})=>{for(const A in f){const w=f[A];if(w){const{_f:E,...P}=w;if(E){const X=l.array.has(E.name),ee=await Ea(w,o,D,n.shouldUseNativeValidation&&!m,X);if(ee[E.name]&&(y.valid=!1,m))break;!m&&(b(ee,E.name)?X?sp(r.errors,ee,E.name):G(r.errors,E.name,ee[E.name]):he(r.errors,E.name))}P&&await ce(P,m,y)}}return y.valid},W=()=>{for(const f of l.unMount){const m=b(s,f);m&&(m._f.refs?m._f.refs.every(y=>!Ts(y)):!Ts(m._f.ref))&&vs(f)}l.unMount=new Set},F=(f,m)=>(f&&m&&G(o,f,m),!Rt(Fo(),i)),Z=(f,m,y)=>gc(f,l,{...a.mount?o:te(m)?i:Ve(f)?{[f]:m}:m},y,m),Ce=f=>Gn(b(a.mount?o:i,f,t.shouldUnregister?b(i,f,[]):[])),Te=(f,m,y={})=>{const A=b(s,f);let w=m;if(A){const E=A._f;E&&(!E.disabled&&G(o,f,wc(m,E)),w=Ar(E.ref)&&ve(m)?"":m,Cc(E.ref)?[...E.ref.options].forEach(P=>P.selected=w.includes(P.value)):E.refs?jn(E.ref)?E.refs.length>1?E.refs.forEach(P=>(!P.defaultChecked||!P.disabled)&&(P.checked=Array.isArray(w)?!!w.find(X=>X===P.value):w===P.value)):E.refs[0]&&(E.refs[0].checked=!!w):E.refs.forEach(P=>P.checked=P.value===w):Hi(E.ref)?E.ref.value="":(E.ref.value=w,E.ref.type||h.values.next({name:f,values:{...o}})))}(y.shouldDirty||y.shouldTouch)&&re(f,w,y.shouldTouch,y.shouldDirty,!0),y.shouldValidate&&vn(f)},Fe=(f,m,y)=>{for(const A in m){const w=m[A],E=`${f}.${A}`,P=b(s,E);(l.array.has(f)||!Or(w)||P&&!P._f)&&!Gt(w)?Fe(E,w,y):Te(E,w,y)}},bt=(f,m,y={})=>{const A=b(s,f),w=l.array.has(f),E=Ue(m);G(o,f,E),w?(h.array.next({name:f,values:{...o}}),(u.isDirty||u.dirtyFields)&&y.shouldDirty&&h.state.next({name:f,dirtyFields:Rs(i,o),isDirty:F(f,E)})):A&&!A._f&&!ve(E)?Fe(f,E,y):Te(f,E,y),_a(f,l)&&h.state.next({...r}),h.values.next({name:f,values:{...o}}),!a.mount&&e()},yn=async f=>{const m=f.target;let y=m.name,A=!0;const w=b(s,y),E=()=>m.type?As(w._f):hc(f);if(w){let P,X;const ee=E(),Bt=f.type===Rr.BLUR||f.type===Rr.FOCUS_OUT,dh=!cp(w._f)&&!n.resolver&&!b(r.errors,y)&&!w._f.deps||up(Bt,b(r.touchedFields,y),r.isSubmitted,v,p),Cs=_a(y,l,Bt);G(o,y,ee),Bt?(w._f.onBlur&&w._f.onBlur(f),c&&c(0)):w._f.onChange&&w._f.onChange(f);const Ss=re(y,ee,Bt,!1),hh=!Re(Ss)||Cs;if(!Bt&&h.values.next({name:y,type:f.type,values:{...o}}),dh)return u.isValid&&S(),hh&&h.state.next({name:y,...Cs?{}:Ss});if(!Bt&&Cs&&h.state.next({...r}),k(!0),n.resolver){const{errors:jo}=await x([y]),fh=Ca(r.errors,s,y),Go=Ca(jo,s,fh.name||y);P=Go.error,y=Go.name,X=Re(jo)}else P=(await Ea(w,o,D,n.shouldUseNativeValidation))[y],A=isNaN(ee)||ee===b(o,y,ee),A&&(P?X=!1:u.isValid&&(X=await ce(s,!0)));A&&(w._f.deps&&vn(w._f.deps),ye(y,X,P,Ss))}},vn=async(f,m={})=>{let y,A;const w=hr(f);if(k(!0),n.resolver){const E=await J(te(f)?f:w);y=Re(E),A=f?!w.some(P=>b(E,P)):y}else f?(A=(await Promise.all(w.map(async E=>{const P=b(s,E);return await ce(P&&P._f?{[E]:P}:P)}))).every(Boolean),!(!A&&!r.isValid)&&S()):A=y=await ce(s);return h.state.next({...!Ve(f)||u.isValid&&y!==r.isValid?{}:{name:f},...n.resolver||!f?{isValid:y}:{},errors:r.errors,isValidating:!1}),m.shouldFocus&&!A&&ri(s,E=>E&&b(r.errors,E),f?w:l.mount),A},Fo=f=>{const m={...i,...a.mount?o:{}};return te(f)?m:Ve(f)?b(m,f):f.map(y=>b(m,y))},Uo=(f,m)=>({invalid:!!b((m||r).errors,f),isDirty:!!b((m||r).dirtyFields,f),isTouched:!!b((m||r).touchedFields,f),error:b((m||r).errors,f)}),lh=f=>{f&&hr(f).forEach(m=>he(r.errors,m)),h.state.next({errors:f?r.errors:{}})},Vo=(f,m,y)=>{const A=(b(s,f,{_f:{}})._f||{}).ref;G(r.errors,f,{...m,ref:A}),h.state.next({name:f,errors:r.errors,isValid:!1}),y&&y.shouldFocus&&A&&A.focus&&A.focus()},ch=(f,m)=>ft(f)?h.values.subscribe({next:y=>f(Z(void 0,m),y)}):Z(f,m,!0),vs=(f,m={})=>{for(const y of f?hr(f):l.mount)l.mount.delete(y),l.array.delete(y),m.keepValue||(he(s,y),he(o,y)),!m.keepError&&he(r.errors,y),!m.keepDirty&&he(r.dirtyFields,y),!m.keepTouched&&he(r.touchedFields,y),!n.shouldUnregister&&!m.keepDefaultValue&&he(i,y);h.values.next({values:{...o}}),h.state.next({...r,...m.keepDirty?{isDirty:F()}:{}}),!m.keepIsValid&&S()},Es=(f,m={})=>{let y=b(s,f);const A=Yt(m.disabled);return G(s,f,{...y||{},_f:{...y&&y._f?y._f:{ref:{name:f}},name:f,mount:!0,...m}}),l.mount.add(f),y?A&&G(o,f,m.disabled?void 0:b(o,f,As(y._f))):le(f,!0,m.value),{...A?{disabled:m.disabled}:{},...n.progressive?{required:!!m.required,min:En(m.min),max:En(m.max),minLength:En(m.minLength),maxLength:En(m.maxLength),pattern:En(m.pattern)}:{},name:f,onChange:yn,onBlur:yn,ref:w=>{if(w){Es(f,m),y=b(s,f);const E=te(w.value)&&w.querySelectorAll&&w.querySelectorAll("input,select,textarea")[0]||w,P=ap(E),X=y._f.refs||[];if(P?X.find(ee=>ee===E):E===y._f.ref)return;G(s,f,{_f:{...y._f,...P?{refs:[...X.filter(Ts),E,...Array.isArray(b(i,f))?[{}]:[]],ref:{type:E.type,name:f}}:{ref:E}}}),le(f,!1,void 0,E)}else y=b(s,f,{}),y._f&&(y._f.mount=!1),(n.shouldUnregister||m.shouldUnregister)&&!(fc(l.array,f)&&a.action)&&l.unMount.add(f)}}},Wo=()=>n.shouldFocusError&&ri(s,f=>f&&b(r.errors,f),l.mount),Ho=(f,m)=>async y=>{y&&(y.preventDefault&&y.preventDefault(),y.persist&&y.persist());let A=Ue(o);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:w,values:E}=await x();r.errors=w,A=E}else await ce(s);he(r.errors,"root"),Re(r.errors)?(h.state.next({errors:{}}),await f(A,y)):(m&&await m({...r.errors},y),Wo(),setTimeout(Wo)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Re(r.errors),submitCount:r.submitCount+1,errors:r.errors})},uh=(f,m={})=>{b(s,f)&&(te(m.defaultValue)?bt(f,b(i,f)):(bt(f,m.defaultValue),G(i,f,m.defaultValue)),m.keepTouched||he(r.touchedFields,f),m.keepDirty||(he(r.dirtyFields,f),r.isDirty=m.defaultValue?F(f,b(i,f)):F()),m.keepError||(he(r.errors,f),u.isValid&&S()),h.state.next({...r}))},Bo=(f,m={})=>{const y=f||i,A=Ue(y),w=f&&!Re(f)?A:i;if(m.keepDefaultValues||(i=y),!m.keepValues){if(m.keepDirtyValues||_)for(const E of l.mount)b(r.dirtyFields,E)?G(w,E,b(o,E)):bt(E,b(w,E));else{if(Fi&&te(f))for(const E of l.mount){const P=b(s,E);if(P&&P._f){const X=Array.isArray(P._f.refs)?P._f.refs[0]:P._f.ref;if(Ar(X)){const ee=X.closest("form");if(ee){ee.reset();break}}}}s={}}o=t.shouldUnregister?m.keepDefaultValues?Ue(i):{}:Ue(w),h.array.next({values:{...w}}),h.values.next({values:{...w}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!u.isValid||!!m.keepIsValid,a.watch=!!t.shouldUnregister,h.state.next({submitCount:m.keepSubmitCount?r.submitCount:0,isDirty:m.keepDirty?r.isDirty:!!(m.keepDefaultValues&&!Rt(f,i)),isSubmitted:m.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:m.keepDirtyValues?r.dirtyFields:m.keepDefaultValues&&f?Rs(i,f):{},touchedFields:m.keepTouched?r.touchedFields:{},errors:m.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},$o=(f,m)=>Bo(ft(f)?f(o):f,m);return{control:{register:Es,unregister:vs,getFieldState:Uo,handleSubmit:Ho,setError:Vo,_executeSchema:x,_getWatch:Z,_getDirty:F,_updateValid:S,_removeUnmounted:W,_updateFieldArray:H,_getFieldArray:Ce,_reset:Bo,_resetDefaultValues:()=>ft(n.defaultValues)&&n.defaultValues().then(f=>{$o(f,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:f=>{r={...r,...f}},_subjects:h,_proxyFormState:u,get _fields(){return s},get _formValues(){return o},get _state(){return a},set _state(f){a=f},get _defaultValues(){return i},get _names(){return l},set _names(f){l=f},get _formState(){return r},set _formState(f){r=f},get _options(){return n},set _options(f){n={...n,...f}}},trigger:vn,register:Es,handleSubmit:Ho,watch:ch,setValue:bt,getValues:Fo,reset:$o,resetField:uh,clearErrors:lh,unregister:vs,setError:Vo,setFocus:(f,m={})=>{const y=b(s,f),A=y&&y._f;if(A){const w=A.refs?A.refs[0]:A.ref;w.focus&&(w.focus(),m.shouldSelect&&w.select())}},getFieldState:Uo}}function si(t={}){const e=ne.useRef(),n=ne.useRef(),[r,s]=ne.useState({isDirty:!1,isValidating:!1,isLoading:ft(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ft(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...fp(t,()=>s(o=>({...o}))),formState:r});const i=e.current.control;return i._options=t,Vi({subject:i._subjects.state,next:o=>{_c(o,i._proxyFormState,i._updateFormState,!0)&&s({...i._formState})}}),ne.useEffect(()=>{t.values&&!Rt(t.values,n.current)?(i._reset(t.values,i._options.resetOptions),n.current=t.values):i._resetDefaultValues()},[t.values,i]),ne.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),e.current.formState=pc(r,i),e.current}function pp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ic={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],s=0;s<arguments.length;s++){var i=arguments[s];if(i){var o=typeof i;if(o==="string"||o==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&r.push(a)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var l in i)e.call(i,l)&&i[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Ic);var _p=Ic.exports;const $i=pp(_p);var mp=0;function I(t,e,n,r,s,i){var o,a,l={};for(a in e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--mp,__source:s,__self:i};if(typeof t=="function"&&(o=t.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return R.vnode&&R.vnode(c),c}const ii=nc(({label:t,error:e,name:n,disable:r,control:s="text",...i},o)=>{let a=null;switch(s){case"text":a=I("input",{name:n,ref:o,...i,className:$i("input input-bordered w-full max-w-xs bg-gray-50 border-2 border-gray-200 focus:border-gray-500 text-black autofill:bg-transparent",{"text-black disabled:bg-gray-50":r}),disabled:r});break;case"textarea":a=I("textarea",{name:n,ref:o,className:"textarea textarea-bordered  bg-gray-100 border-2 border-gray-200 focus:border-primary text-black max-h-40 resize-y",...i})}return I("div",{className:"form-control w-full",children:[I("label",{htmlFor:n,className:"label",children:I("span",{className:"label-text text-black text-base font-semibold",children:t})}),a,I("label",{className:"label",children:I("span",{className:"label-text-alt text-red-600 font-medium",children:e})})]})});function pr({variant:t,label:e,loading:n,disable:r,...s}){return I("button",{...s,className:$i("btn btn-primary w-full disabled:opacity-75 disabled:bg-accent disabled:text-white disabled:cursor-not-allowed",t),disabled:r,children:n?I("span",{className:"loading loading-spinner"}):e})}function gp({label:t,...e}){return I("div",{className:"form-control w-full",children:I("div",{className:"flex justify-between items-center",children:[I("label",{className:"label",children:I("span",{className:"label-text  text-gray-600 text-sm font-medium",children:t})}),I("input",{...e,type:"radio",name:"radio-1",className:"radio bg-gray-200 "})]})})}function Tc({props:t}){return I("ul",{className:"steps my-5",children:[I("li",{"data-content":"?",className:"step step-primary",children:"Basic Details"}),I("li",{"data-content":"!",className:"step step-primary ",children:"Contact Number"}),I("li",{"data-content":"✓",className:"step step-primary",children:"Validation"})]})}function Rc({children:t,className:e,...n}){return I("div",{...n,className:$i("w-full min-w-[280px] max-w-xl bg-white border-gray-200 shadow-xl rounded-2xl text-black pt-10 pb-8 px-6 flex flex-col items-center justify-center ",e),children:t})}function yp({setScreen:t,message:e}){var a,l;const{register:n,formState:r,handleSubmit:s,control:i}=si(),o=c=>{e.current=c,console.log("Inside User Auth",e.current),t("otp")};return I(Rc,{children:[I(Tc,{}),I("form",{className:" w-full",onSubmit:s(o),children:[I("span",{className:"block mb-2 px-2 font-heading font-semibold text-base required:true",children:"Select the reason:"}),I("div",{className:" mb-4 px-2 font-body",children:[I(fa,{name:"radioOptions",rules:{required:"Select atleast on option"},control:i,render:({field:c})=>I(Oe,{children:vp.map((d,u)=>I(gp,{onChange:h=>{c.onChange(h.target.value)},label:d.label,value:d.value},u))})}),I("span",{className:"label-text-alt text-red-600 font-medium",children:r.errors.radioOptions&&r.errors.radioOptions.message})]}),I(ii,{...n("desc",{required:"The Descripton can not be empty!",validate:c=>{}}),minLength:5,label:"Describe your concern.",type:"textarea",error:(l=(a=r.errors)==null?void 0:a.desc)==null?void 0:l.message,placeholder:"",control:"textarea"}),I("div",{className:"form-control mb-4",children:I("label",{className:"label cursor-pointer",children:[I("span",{className:"label-text font-medium text-black max-w-[200px]",children:"Would you like to request a callback from the owner?"}),I(fa,{name:"requestCall",control:i,defaultValue:!1,render:({field:c})=>I("input",{className:"checkbox bg-gray-200",type:"checkbox",...c})})]})}),I(pr,{type:"submit",label:"Proceed",variant:"btn-wide"})]})]})}const vp=[{label:"Car is being towed.",value:"Car is being towed."},{label:"The car is in no paking.",value:"The car is in no paking."},{label:"There is a baby or pet in car.",value:"There is a baby or pet in car."},{label:"Something went wrong with the car.",value:"Something went wrong with the car."},{label:"Other.",value:"Other."}];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw dn(e)},dn=function(t){return new Error("Firebase Database ("+Ac.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ep=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ji={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=i>>2,u=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[d],n[u],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ep(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||u==null)throw new Cp;const h=i<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),u!==64){const p=c<<6&192|u;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oc=function(t){const e=Pc(t);return ji.encodeByteArray(e,!0)},Dr=function(t){return Oc(t).replace(/\./g,"")},kr=function(t){try{return ji.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t){return Nc(void 0,t)}function Nc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bp(n)||(t[n]=Nc(t[n],e[n]));return t}function bp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=()=>wp().__FIREBASE_DEFAULTS__,Tp=()=>{if(typeof process>"u"||typeof{ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\parit\\AppData\\Roaming",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133313761318873355",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_6784_ZKCQWGDQTFCDCVHG",COLOR:"1",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-C7CTC5I",ComSpec:"C:\\Windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"C:\\Windows\\notepad.exe",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOME:"C:\\Users\\parit",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\parit",INIT_CWD:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen",LANG:"en_US.UTF-8",LOCALAPPDATA:"C:\\Users\\parit\\AppData\\Local",LOGONSERVER:"\\\\DESKTOP-C7CTC5I",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",NODE_EXE:"C:\\Program Files\\nodejs\\\\node.exe",NPM_CLI_JS:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_command:"run-script",npm_config_cache:"C:\\Users\\parit\\AppData\\Local\\npm-cache",npm_config_globalconfig:"C:\\Users\\parit\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_global_prefix:"C:\\Users\\parit\\AppData\\Roaming\\npm",npm_config_init_module:"C:\\Users\\parit\\.npm-init.js",npm_config_local_prefix:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen",npm_config_metrics_registry:"https://registry.npmjs.org/",npm_config_node_gyp:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_npm_version:"9.8.1",npm_config_prefix:"C:\\Users\\parit\\AppData\\Roaming\\npm",npm_config_userconfig:"C:\\Users\\parit\\.npmrc",npm_config_user_agent:"npm/9.8.1 node/v18.17.0 win32 x64 workspaces/false",npm_execpath:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"vite build",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen\\package.json",npm_package_name:"preact-helper-screen",npm_package_version:"0.0.0",NPM_PREFIX_NPM_CLI_JS:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",NUMBER_OF_PROCESSORS:"8",OneDrive:"C:\\Users\\parit\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen\\node_modules\\.bin;D:\\SixSenseMobility\\QRCodeProject\\node_modules\\.bin;D:\\SixSenseMobility\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Python311\\Scripts\\;C:\\Python311\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\starship\\bin\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Users\\parit\\AppData\\Local\\Pub\\Cache\\bin;C:\\Users\\parit\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\flutter\\bin;C:\\Users\\parit\\AppData\\Roaming\\npm;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 140 Stepping 1, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"8c01",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\parit\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",STARSHIP_SESSION_KEY:"q1ahlMYJkXixnOeu",STARSHIP_SHELL:"powershell",SystemDrive:"C:",SystemRoot:"C:\\Windows",TEMP:"C:\\Users\\parit\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.82.2",TMP:"C:\\Users\\parit\\AppData\\Local\\Temp",USERDOMAIN:"DESKTOP-C7CTC5I",USERDOMAIN_ROAMINGPROFILE:"DESKTOP-C7CTC5I",USERNAME:"parit",USERPROFILE:"C:\\Users\\parit",VIRTUAL_ENV_DISABLE_PROMPT:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-e1f0c2f29a-sock",VSCODE_INJECTION:"1",windir:"C:\\Windows",ZES_ENABLE_SYSMAN:"1"}>"u")return;const t={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\parit\\AppData\\Roaming",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133313761318873355",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_6784_ZKCQWGDQTFCDCVHG",COLOR:"1",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-C7CTC5I",ComSpec:"C:\\Windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"C:\\Windows\\notepad.exe",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOME:"C:\\Users\\parit",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\parit",INIT_CWD:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen",LANG:"en_US.UTF-8",LOCALAPPDATA:"C:\\Users\\parit\\AppData\\Local",LOGONSERVER:"\\\\DESKTOP-C7CTC5I",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",NODE_EXE:"C:\\Program Files\\nodejs\\\\node.exe",NPM_CLI_JS:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_command:"run-script",npm_config_cache:"C:\\Users\\parit\\AppData\\Local\\npm-cache",npm_config_globalconfig:"C:\\Users\\parit\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_global_prefix:"C:\\Users\\parit\\AppData\\Roaming\\npm",npm_config_init_module:"C:\\Users\\parit\\.npm-init.js",npm_config_local_prefix:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen",npm_config_metrics_registry:"https://registry.npmjs.org/",npm_config_node_gyp:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_npm_version:"9.8.1",npm_config_prefix:"C:\\Users\\parit\\AppData\\Roaming\\npm",npm_config_userconfig:"C:\\Users\\parit\\.npmrc",npm_config_user_agent:"npm/9.8.1 node/v18.17.0 win32 x64 workspaces/false",npm_execpath:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"vite build",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen\\package.json",npm_package_name:"preact-helper-screen",npm_package_version:"0.0.0",NPM_PREFIX_NPM_CLI_JS:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",NUMBER_OF_PROCESSORS:"8",OneDrive:"C:\\Users\\parit\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen\\node_modules\\.bin;D:\\SixSenseMobility\\QRCodeProject\\node_modules\\.bin;D:\\SixSenseMobility\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Python311\\Scripts\\;C:\\Python311\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\starship\\bin\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Users\\parit\\AppData\\Local\\Pub\\Cache\\bin;C:\\Users\\parit\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\flutter\\bin;C:\\Users\\parit\\AppData\\Roaming\\npm;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 140 Stepping 1, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"8c01",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\parit\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",STARSHIP_SESSION_KEY:"q1ahlMYJkXixnOeu",STARSHIP_SHELL:"powershell",SystemDrive:"C:",SystemRoot:"C:\\Windows",TEMP:"C:\\Users\\parit\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.82.2",TMP:"C:\\Users\\parit\\AppData\\Local\\Temp",USERDOMAIN:"DESKTOP-C7CTC5I",USERDOMAIN_ROAMINGPROFILE:"DESKTOP-C7CTC5I",USERNAME:"parit",USERPROFILE:"C:\\Users\\parit",VIRTUAL_ENV_DISABLE_PROMPT:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-e1f0c2f29a-sock",VSCODE_INJECTION:"1",windir:"C:\\Windows",ZES_ENABLE_SYSMAN:"1"}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kr(t[1]);return e&&JSON.parse(e)},Gi=()=>{try{return Ip()||Tp()||Rp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dc=t=>{var e,n;return(n=(e=Gi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ap=t=>{const e=Dc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kc=()=>{var t;return(t=Gi())===null||t===void 0?void 0:t.config},xc=t=>{var e;return(e=Gi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Dr(JSON.stringify(n)),Dr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Op(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Np(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lc(){return Ac.NODE_ADMIN===!0}function Dp(){try{return typeof indexedDB=="object"}catch{return!1}}function kp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xp,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Mp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,a,r)}}function Mp(t,e){return t.replace(Lp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Mn(kr(i[0])||""),n=Mn(kr(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Fp=function(t){const e=Fc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Up=function(t){const e=Fc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function oi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xr(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Sa(i)&&Sa(o)){if(!Mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Sa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^i&(o^a),d=1518500249):(c=i^o^a,d=1859775393):u<60?(c=i&o|a&(i|o),d=2400959708):(c=i^o^a,d=3395469782);const h=(s<<5|s>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Wp(t,e){const n=new Hp(t,e);return n.subscribe.bind(n)}class Hp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ps),s.error===void 0&&(s.error=Ps),s.complete===void 0&&(s.complete=Ps);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ps(){}function zi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rs=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ns;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qp(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wt){return this.instances.has(e)}getOptions(e=wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wt){return this.component?this.component.multipleInstances?e:wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gp(t){return t===wt?void 0:t}function qp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const Kp={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Yp=$.INFO,Jp={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Qp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Jp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ki{constructor(e){this.name=e,this._logLevel=Yp,this._logHandler=Qp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Xp=(t,e)=>e.some(n=>t instanceof n);let ba,wa;function Zp(){return ba||(ba=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e_(){return wa||(wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uc=new WeakMap,ai=new WeakMap,Vc=new WeakMap,Os=new WeakMap,Yi=new WeakMap;function t_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uc.set(n,t)}).catch(()=>{}),Yi.set(e,t),e}function n_(t){if(ai.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ai.set(t,e)}let li={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ai.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function r_(t){li=t(li)}function s_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ns(this),e,...n);return Vc.set(r,e.sort?e.sort():[e]),pt(r)}:e_().includes(t)?function(...e){return t.apply(Ns(this),e),pt(Uc.get(this))}:function(...e){return pt(t.apply(Ns(this),e))}}function i_(t){return typeof t=="function"?s_(t):(t instanceof IDBTransaction&&n_(t),Xp(t,Zp())?new Proxy(t,li):t)}function pt(t){if(t instanceof IDBRequest)return t_(t);if(Os.has(t))return Os.get(t);const e=i_(t);return e!==t&&(Os.set(t,e),Yi.set(e,t)),e}const Ns=t=>Yi.get(t);function o_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=pt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pt(o.result),l.oldVersion,l.newVersion,pt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const a_=["get","getKey","getAll","getAllKeys","count"],l_=["put","add","delete","clear"],Ds=new Map;function Ia(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ds.get(e))return Ds.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=l_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||a_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ds.set(e,i),i}r_(t=>({...t,get:(e,n,r)=>Ia(e,n)||t.get(e,n,r),has:(e,n)=>!!Ia(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function u_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ci="@firebase/app",Ta="0.9.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Ki("@firebase/app"),d_="@firebase/app-compat",h_="@firebase/analytics-compat",f_="@firebase/analytics",p_="@firebase/app-check-compat",__="@firebase/app-check",m_="@firebase/auth",g_="@firebase/auth-compat",y_="@firebase/database",v_="@firebase/database-compat",E_="@firebase/functions",C_="@firebase/functions-compat",S_="@firebase/installations",b_="@firebase/installations-compat",w_="@firebase/messaging",I_="@firebase/messaging-compat",T_="@firebase/performance",R_="@firebase/performance-compat",A_="@firebase/remote-config",P_="@firebase/remote-config-compat",O_="@firebase/storage",N_="@firebase/storage-compat",D_="@firebase/firestore",k_="@firebase/firestore-compat",x_="firebase",M_="10.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="[DEFAULT]",L_={[ci]:"fire-core",[d_]:"fire-core-compat",[f_]:"fire-analytics",[h_]:"fire-analytics-compat",[__]:"fire-app-check",[p_]:"fire-app-check-compat",[m_]:"fire-auth",[g_]:"fire-auth-compat",[y_]:"fire-rtdb",[v_]:"fire-rtdb-compat",[E_]:"fire-fn",[C_]:"fire-fn-compat",[S_]:"fire-iid",[b_]:"fire-iid-compat",[w_]:"fire-fcm",[I_]:"fire-fcm-compat",[T_]:"fire-perf",[R_]:"fire-perf-compat",[A_]:"fire-rc",[P_]:"fire-rc-compat",[O_]:"fire-gcs",[N_]:"fire-gcs-compat",[D_]:"fire-fst",[k_]:"fire-fst-compat","fire-js":"fire-js",[x_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map,di=new Map;function F_(t,e){try{t.container.addComponent(e)}catch(n){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(di.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;di.set(e,t);for(const n of Lr.values())F_(n,t);return!0}function Ji(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_t=new qn("app","Firebase",U_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=M_;function Wc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ui,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _t.create("bad-app-name",{appName:String(s)});if(n||(n=kc()),!n)throw _t.create("no-options");const i=Lr.get(s);if(i){if(Mr(n,i.options)&&Mr(r,i.config))return i;throw _t.create("duplicate-app",{appName:s})}const o=new zp(s);for(const l of di.values())o.addComponent(l);const a=new V_(n,r,o);return Lr.set(s,a),a}function Hc(t=ui){const e=Lr.get(t);if(!e&&t===ui&&kc())return Wc();if(!e)throw _t.create("no-app",{appName:t});return e}function mt(t,e,n){var r;let s=(r=L_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(a.join(" "));return}sn(new Dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="firebase-heartbeat-database",H_=1,Ln="firebase-heartbeat-store";let ks=null;function Bc(){return ks||(ks=o_(W_,H_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ln)}}}).catch(t=>{throw _t.create("idb-open",{originalErrorMessage:t.message})})),ks}async function B_(t){try{return await(await Bc()).transaction(Ln).objectStore(Ln).get($c(t))}catch(e){if(e instanceof Ct)kt.warn(e.message);else{const n=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(n.message)}}}async function Ra(t,e){try{const r=(await Bc()).transaction(Ln,"readwrite");await r.objectStore(Ln).put(e,$c(t)),await r.done}catch(n){if(n instanceof Ct)kt.warn(n.message);else{const r=_t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kt.warn(r.message)}}}function $c(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=1024,j_=30*24*60*60*1e3;class G_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Aa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=j_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Aa(),{heartbeatsToSend:n,unsentEntries:r}=q_(this._heartbeatsCache.heartbeats),s=Dr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Aa(){return new Date().toISOString().substring(0,10)}function q_(t,e=$_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dp()?kp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await B_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pa(t){return Dr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){sn(new Dt("platform-logger",e=>new c_(e),"PRIVATE")),sn(new Dt("heartbeat",e=>new G_(e),"PRIVATE")),mt(ci,Ta,t),mt(ci,Ta,"esm2017"),mt("fire-js","")}K_("");function Qi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){return t!==void 0&&t.getResponse!==void 0}function jc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y_=jc,Gc=new qn("auth","Firebase",jc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Ki("@firebase/auth");function J_(t,...e){Fr.logLevel<=$.WARN&&Fr.warn(`Auth (${hn}): ${t}`,...e)}function _r(t,...e){Fr.logLevel<=$.ERROR&&Fr.error(`Auth (${hn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,...e){throw Xi(t,...e)}function we(t,...e){return Xi(t,...e)}function Q_(t,e,n){const r=Object.assign(Object.assign({},Y_()),{[e]:n});return new qn("auth","Firebase",r).create(e,{appName:t.name})}function Xi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gc.create(t,...e)}function T(t,e,...n){if(!t)throw Xi(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _r(e),new Error(e)}function et(t,e){t||qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qc(){return Na()==="http:"||Na()==="https:"}function Na(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qc()||Op()||"connection"in navigator)?navigator.onLine:!0}function Z_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,et(n>e,"Short delay should be less than long delay!"),this.isMobile=qi()||Mc()}get(){return X_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e){et(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=new zn(3e4,6e4);function St(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function st(t,e,n,r,s={}){return Kc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vt(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zc.fetch()(Yc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Kc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},em),e);try{const s=new nm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Rn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Rn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Rn(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Q_(t,d,c);Ze(t,d)}}catch(s){if(s instanceof Ct)throw s;Ze(t,"network-request-failed",{message:String(s)})}}async function ss(t,e,n,r,s={}){const i=await st(t,e,n,r,s);return"mfaPendingCredential"in i&&Ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Zi(t.config,s):`${t.config.apiScheme}://${s}`}class nm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(we(this.auth,"network-request-failed")),tm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=we(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(t){return(await st(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e){return st(t,"POST","/v1/accounts:delete",e)}async function im(t,e){return st(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function om(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),s=eo(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pn(xs(s.auth_time)),issuedAtTime:Pn(xs(s.iat)),expirationTime:Pn(xs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xs(t){return Number(t)*1e3}function eo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const s=kr(n);return s?JSON.parse(s):(_r("Failed to decode base64 JWT payload"),null)}catch(s){return _r("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function am(t){const e=eo(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&lm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fn(t,im(n,{idToken:r}));T(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hm(i.providerUserInfo):[],a=dm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Jc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function um(t){const e=Ie(t);await Ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hm(t){return t.map(e=>{var{providerId:n}=e,r=Qi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(t,e){const n=await Kc(t,{},async()=>{const r=Vt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Yc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):am(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Un;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(T(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(T(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return om(this,e)}reload(){return um(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ur(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fn(this,sm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:k,emailVerified:H,isAnonymous:N,providerData:le,stsTokenManager:re}=n;T(k&&re,e,"internal-error");const ye=Un.fromJSON(this.name,re);T(typeof k=="string",e,"internal-error"),it(u,e.name),it(h,e.name),T(typeof H=="boolean",e,"internal-error"),T(typeof N=="boolean",e,"internal-error"),it(_,e.name),it(p,e.name),it(v,e.name),it(D,e.name),it(O,e.name),it(S,e.name);const x=new Ot({uid:k,auth:e,email:h,emailVerified:H,displayName:u,isAnonymous:N,photoURL:p,phoneNumber:_,tenantId:v,stsTokenManager:ye,createdAt:O,lastLoginAt:S});return le&&Array.isArray(le)&&(x.providerData=le.map(J=>Object.assign({},J))),D&&(x._redirectEventId=D),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Un;s.updateFromServerResponse(n);const i=new Ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ur(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Map;function ze(t){et(t instanceof Function,"Expected a class definition");let e=Da.get(t);return e?(et(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Da.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qc.type="NONE";const ka=Qc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mr(this.userKey,s.apiKey,i),this.fullPersistenceKey=mr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jt(ze(ka),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||ze(ka);const o=mr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Ot._fromJSON(e,d);c!==i&&(a=u),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jt(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Jt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nu(e))return"Blackberry";if(ru(e))return"Webos";if(to(e))return"Safari";if((e.includes("chrome/")||Zc(e))&&!e.includes("edge/"))return"Chrome";if(tu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xc(t=ge()){return/firefox\//i.test(t)}function to(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zc(t=ge()){return/crios\//i.test(t)}function eu(t=ge()){return/iemobile/i.test(t)}function tu(t=ge()){return/android/i.test(t)}function nu(t=ge()){return/blackberry/i.test(t)}function ru(t=ge()){return/webos/i.test(t)}function is(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pm(t=ge()){var e;return is(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _m(){return Np()&&document.documentMode===10}function su(t=ge()){return is(t)||tu(t)||ru(t)||nu(t)||/windows phone/i.test(t)||eu(t)}function mm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e=[]){let n;switch(t){case"Browser":n=xa(ge());break;case"Worker":n=`${xa(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(t,e={}){return st(t,"GET","/v2/passwordPolicy",St(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=6;class Em{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ma(this),this.idTokenSubscription=new Ma(this),this.beforeStateQueue=new gm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ur(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Z_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ie(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ym(this),n=new Em(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&J_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fn(t){return Ie(t)}class Ma{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wp(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ou(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=we("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Sm().appendChild(r)})}function au(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e){const n=Ji(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mr(i,e??{}))return s;Ze(s,"already-initialized")}return n.initialize({options:e})}function wm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Im(t,e,n){const r=fn(t);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=lu(e),{host:o,port:a}=Tm(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Rm()}function lu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tm(t){const e=lu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:La(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:La(o)}}}function La(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(t,e){return ss(t,"POST","/v1/accounts:signInWithIdp",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="http://localhost";class xt extends no{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qt(e,n)}buildRequest(){const e={requestUri:Am,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t,e){return st(t,"POST","/v1/accounts:sendVerificationCode",St(t,e))}async function Om(t,e){return ss(t,"POST","/v1/accounts:signInWithPhoneNumber",St(t,e))}async function Nm(t,e){const n=await ss(t,"POST","/v1/accounts:signInWithPhoneNumber",St(t,e));if(n.temporaryProof)throw Rn(t,"account-exists-with-different-credential",n);return n}const Dm={USER_NOT_FOUND:"user-not-found"};async function km(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ss(t,"POST","/v1/accounts:signInWithPhoneNumber",St(t,n),Dm)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends no{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new On({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new On({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Om(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Nm(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return km(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new On({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Kn{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Kn{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Kn{constructor(){super("twitter.com")}static credential(e,n){return xt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),o=Fa(r);return new on({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fa(r);return new on({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vr(e,n,r,s)}}function uu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vr._fromErrorAndOperation(t,i,e,r):i})}async function xm(t,e,n=!1){const r=await Fn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Fn(t,uu(r,s,e,t),n);T(i.idToken,r,"internal-error");const o=eo(i.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(t.uid===a,r,"user-mismatch"),on._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t,e,n=!1){const r="signIn",s=await uu(t,r,e),i=await on._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Lm(t,e){return du(fn(t),e)}function Fm(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function Um(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e){return st(t,"POST","/v2/accounts/mfaEnrollment:start",St(t,e))}const Wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wr,"1"),this.storage.removeItem(Wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){const t=ge();return to(t)||is(t)}const Hm=1e3,Bm=10;class fu extends hu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wm()&&mm(),this.fallbackToPolling=su(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_m()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fu.type="LOCAL";const $m=fu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends hu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pu.type="SESSION";const _u=pu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new os(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await jm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=ro("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function qm(t){se().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function zm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Km(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ym(){return so()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="firebaseLocalStorageDb",Jm=1,Hr="firebaseLocalStorage",gu="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(t,e){return t.transaction([Hr],e?"readwrite":"readonly").objectStore(Hr)}function Qm(){const t=indexedDB.deleteDatabase(mu);return new Yn(t).toPromise()}function fi(){const t=indexedDB.open(mu,Jm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hr,{keyPath:gu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hr)?e(r):(r.close(),await Qm(),e(await fi()))})})}async function Ua(t,e,n){const r=as(t,!0).put({[gu]:e,value:n});return new Yn(r).toPromise()}async function Xm(t,e){const n=as(t,!1).get(e),r=await new Yn(n).toPromise();return r===void 0?null:r.value}function Va(t,e){const n=as(t,!0).delete(e);return new Yn(n).toPromise()}const Zm=800,eg=3;class yu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return so()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(Ym()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zm(),!this.activeServiceWorker)return;this.sender=new Gm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Km()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fi();return await Ua(e,Wr,"1"),await Va(e,Wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ua(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Va(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=as(s,!1).getAll();return new Yn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yu.type="LOCAL";const tg=yu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){return st(t,"POST","/v2/accounts/mfaSignIn:start",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=500,sg=6e4,rr=1e12;class ig{constructor(e){this.auth=e,this.counter=rr,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new og(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||rr;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||rr;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||rr;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class og{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;T(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ag(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},sg)},rg))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ag(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=au("rcb"),lg=new zn(3e4,6e4),cg="https://www.google.com/recaptcha/api.js?";class ug{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=se().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return T(dg(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Oa(se().grecaptcha)?Promise.resolve(se().grecaptcha):new Promise((r,s)=>{const i=se().setTimeout(()=>{s(we(e,"network-request-failed"))},lg.get());se()[Ms]=()=>{se().clearTimeout(i),delete se()[Ms];const a=se().grecaptcha;if(!a||!Oa(a)){s(we(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const u=l(c,d);return this.counter++,u},this.hostLanguage=n,r(a)};const o=`${cg}?${Vt({onload:Ms,render:"explicit",hl:n})}`;ou(o).catch(()=>{clearTimeout(i),s(we(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=se().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function dg(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class hg{async load(e){return new ig(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="recaptcha",fg={theme:"light",type:"image"};class pg{constructor(e,n,r=Object.assign({},fg)){this.parameters=r,this.type=vu,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=fn(e),this.isInvisible=this.parameters.size==="invisible",T(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof n=="string"?document.getElementById(n):n;T(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hg:new ug,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=se()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(qc()&&!so(),this.auth,"internal-error"),await _g(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await rm(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function _g(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=On._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function gg(t,e,n){const r=fn(t),s=await yg(r,e,Ie(n));return new mg(s,i=>Lm(r,i))}async function yg(t,e,n){var r;const s=await n.verify();try{T(typeof s=="string",t,"argument-error"),T(n.type===vu,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return T(o.type==="enroll",t,"internal-error"),(await Vm(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{T(o.type==="signin",t,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return T(a,t,"missing-multi-factor-info"),(await ng(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Pm(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t,e){return e?ze(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends no{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Eg(t){return du(t.auth,new io(t),t.bypassAuthState)}function Cg(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Mm(n,new io(t),t.bypassAuthState)}async function Sg(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),xm(n,new io(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eg;case"linkViaPopup":case"linkViaRedirect":return Sg;case"reauthViaPopup":case"reauthViaRedirect":return Cg;default:Ze(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new zn(2e3,1e4);class qt extends Eu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bg.get())};e()}}qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="pendingRedirect",gr=new Map;class Ig extends Eu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gr.get(this.auth._key());if(!e){try{const r=await Tg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gr.set(this.auth._key(),e)}return this.bypassAuthState||gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tg(t,e){const n=Pg(e),r=Ag(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Rg(t,e){gr.set(t._key(),e)}function Ag(t){return ze(t._redirectPersistence)}function Pg(t){return mr(wg,t.config.apiKey,t.name)}async function Og(t,e,n=!1){const r=fn(t),s=vg(r,e),o=await new Ig(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=10*60*1e3;class Dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(we(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wa(e))}saveEventToCache(e){this.cachedEventUids.add(Wa(e)),this.lastProcessedEventTime=Date.now()}}function Wa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e={}){return st(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lg=/^https?/;async function Fg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xg(t);for(const n of e)try{if(Ug(n))return}catch{}Ze(t,"unauthorized-domain")}function Ug(t){const e=hi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Lg.test(n))return!1;if(Mg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new zn(3e4,6e4);function Ha(){const t=se().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wg(t){return new Promise((e,n)=>{var r,s,i;function o(){Ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ha(),n(we(t,"network-request-failed"))},timeout:Vg.get()})}if(!((s=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=se().gapi)===null||i===void 0)&&i.load)o();else{const a=au("iframefcb");return se()[a]=()=>{gapi.load?o():n(we(t,"network-request-failed"))},ou(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw yr=null,e})}let yr=null;function Hg(t){return yr=yr||Wg(t),yr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new zn(5e3,15e3),$g="__/auth/iframe",jg="emulator/auth/iframe",Gg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zg(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zi(e,jg):`https://${t.config.authDomain}/${$g}`,r={apiKey:e.apiKey,appName:t.name,v:hn},s=qg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vt(r).slice(1)}`}async function Kg(t){const e=await Hg(t),n=se().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:zg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=we(t,"network-request-failed"),a=se().setTimeout(()=>{i(o)},Bg.get());function l(){se().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jg=500,Qg=600,Xg="_blank",Zg="http://localhost";class Ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ey(t,e,n,r=Jg,s=Qg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Yg),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ge().toLowerCase();n&&(a=Zc(c)?Xg:n),Xc(c)&&(e=e||Zg,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[_,p])=>`${h}${_}=${p},`,"");if(pm(c)&&a!=="_self")return ty(e||"",a),new Ba(null);const u=window.open(e||"",a,d);T(u,t,"popup-blocked");try{u.focus()}catch{}return new Ba(u)}function ty(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="__/auth/handler",ry="emulator/auth/handler",sy=encodeURIComponent("fac");async function $a(t,e,n,r,s,i){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hn,eventId:s};if(e instanceof cu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(i||{}))o[d]=u}if(e instanceof Kn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${sy}=${encodeURIComponent(l)}`:"";return`${iy(t)}?${Vt(a).slice(1)}${c}`}function iy({config:t}){return t.emulator?Zi(t,ry):`https://${t.authDomain}/${ny}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="webStorageSupport";class oy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_u,this._completeRedirectFn=Og,this._overrideRedirectResult=Rg}async _openPopup(e,n,r,s){var i;et((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $a(e,n,r,hi(),s);return ey(e,o,ro())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $a(e,n,r,hi(),s);return qm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(et(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Kg(e),r=new Dg(e);return n.register("authEvent",s=>(T(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ls,{type:Ls},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ls];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return su()||to()||is()}}const ay=oy;var ja="@firebase/auth",Ga="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uy(t){sn(new Dt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iu(t)},c=new Cm(r,s,i,l);return wm(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sn(new Dt("auth-internal",e=>{const n=fn(e.getProvider("auth").getImmediate());return(r=>new ly(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(ja,Ga,cy(t)),mt(ja,Ga,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=5*60,hy=xc("authIdTokenMaxAge")||dy;let qa=null;const fy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hy)return;const s=n==null?void 0:n.token;qa!==s&&(qa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function py(t=Hc()){const e=Ji(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bm(t,{popupRedirectResolver:ay,persistence:[tg,$m,_u]}),r=xc("authTokenSyncURL");if(r){const i=fy(r);Um(n,i,()=>i(n.currentUser)),Fm(n,o=>i(o))}const s=Dc("auth");return s&&Im(n,`http://${s}`),n}uy("Browser");var _y="firebase",my="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(_y,my,"app");const za="@firebase/database",Ka="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su="";function gy(t){Su=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Mn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yy(e)}}catch{}return new vy},At=bu("localStorage"),pi=bu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Ki("@firebase/database"),Ey=function(){let t=1;return function(){return t++}}(),wu=function(t){const e=$p(t),n=new Vp;n.update(e);const r=n.digest();return ji.encodeByteArray(r)},Jn=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Jn.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Nt=null,Ya=!0;const Cy=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xt.logLevel=$.VERBOSE,Nt=Xt.log.bind(Xt),e&&pi.set("logging_enabled",!0)):typeof t=="function"?Nt=t:(Nt=null,pi.remove("logging_enabled"))},_e=function(...t){if(Ya===!0&&(Ya=!1,Nt===null&&pi.get("logging_enabled")===!0&&Cy(!0)),Nt){const e=Jn.apply(null,t);Nt(e)}},Qn=function(t){return function(...e){_e(t,...e)}},_i=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jn(...t);Xt.error(e)},tt=function(...t){const e=`FIREBASE FATAL ERROR: ${Jn(...t)}`;throw Xt.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+Jn(...t);Xt.warn(e)},Sy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},by=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},an="[MIN_NAME]",Mt="[MAX_NAME]",pn=function(t,e){if(t===e)return 0;if(t===an||e===Mt)return-1;if(e===an||t===Mt)return 1;{const n=Ja(t),r=Ja(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},wy=function(t,e){return t===e?0:t<e?-1:1},Cn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},oo=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=oo(t[e[r]]);return n+="}",n},Tu=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ru=function(t){C(!Iu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Iy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ty=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Ry=new RegExp("^-?(0*)\\d{1,10}$"),Ay=-2147483648,Py=2147483647,Ja=function(t){if(Ry.test(t)){const e=Number(t);if(e>=Ay&&e<=Py)return e}return null},_n=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},Oy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class Zt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="5",Au="v",Pu="s",Ou="r",Nu="f",Du=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ku="ls",xu="p",mi="ac",Mu="websocket",Lu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=At.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&At.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ky(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Uu(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Mu)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lu)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ky(t)&&(n.ns=t.namespace);const s=[];return Ne(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.counters_={}}incrementCounter(e,n=1){rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs={},Us={};function lo(t){const e=t.toString();return Fs[e]||(Fs[e]=new xy),Fs[e]}function My(t,e){const n=t.toString();return Us[n]||(Us[n]=e()),Us[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&_n(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="start",Fy="close",Uy="pLPCommand",Vy="pRTLPCB",Vu="id",Wu="pw",Hu="ser",Wy="cb",Hy="seg",By="ts",$y="d",jy="dframe",Bu=1870,$u=30,Gy=Bu-$u,qy=25e3,zy=3e4;class zt{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qn(e),this.stats_=lo(n),this.urlFn=l=>(this.appCheckToken&&(l[mi]=this.appCheckToken),Uu(n,Lu,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ly(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zy)),by(()=>{if(this.isClosed_)return;this.scriptTagHolder=new co((...i)=>{const[o,a,l,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qa)this.id=a,this.password=l;else if(o===Fy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Qa]="t",r[Hu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Wy]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Au]=ao,this.transportSessionId&&(r[Pu]=this.transportSessionId),this.lastSessionId&&(r[ku]=this.lastSessionId),this.applicationId&&(r[xu]=this.applicationId),this.appCheckToken&&(r[mi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Du.test(location.hostname)&&(r[Ou]=Nu);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zt.forceAllow_=!0}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){return zt.forceAllow_?!0:!zt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Iy()&&!Ty()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Oc(n),s=Tu(r,Gy);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[jy]="t",r[Vu]=e,r[Wu]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class co{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ey(),window[Uy+this.uniqueCallbackIdentifier]=e,window[Vy+this.uniqueCallbackIdentifier]=n,this.myIFrame=co.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_e("frame writing exception"),a.stack&&_e(a.stack),_e(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_e("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vu]=this.myID,e[Wu]=this.myPW,e[Hu]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$u+r.length<=Bu;){const o=this.pendingSegs.shift();r=r+"&"+Hy+s+"="+o.seg+"&"+By+s+"="+o.ts+"&"+$y+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(qy)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=16384,Yy=45e3;let Br=null;typeof MozWebSocket<"u"?Br=MozWebSocket:typeof WebSocket<"u"&&(Br=WebSocket);class ke{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qn(this.connId),this.stats_=lo(n),this.connURL=ke.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Au]=ao,typeof location<"u"&&location.hostname&&Du.test(location.hostname)&&(o[Ou]=Nu),n&&(o[Pu]=n),r&&(o[ku]=r),s&&(o[mi]=s),i&&(o[xu]=i),Uu(e,Mu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,At.set("previous_websocket_failure",!0);try{let r;Lc(),this.mySock=new Br(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Br!==null&&!ke.forceDisallow_}static previouslyFailed(){return At.isInMemoryStorage||At.get("previous_websocket_failure")===!0}markConnectionHealthy(){At.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Mn(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tu(n,Ky);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Yy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ke.responsesRequiredToBeHealthy=2;ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[zt,ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ke&&ke.isAvailable();let r=n&&!ke.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ke];else{const s=this.transports_=[];for(const i of Vn.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Vn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=6e4,Qy=5e3,Xy=10*1024,Zy=100*1024,Vs="t",Xa="d",ev="s",Za="r",tv="e",el="o",tl="a",nl="n",rl="p",nv="h";class rv{constructor(e,n,r,s,i,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qn("c:"+this.id+":"),this.transportManager_=new Vn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Nn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Zy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vs in e){const n=e[Vs];n===tl?this.upgradeIfSecondaryHealthy_():n===Za?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===el&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Cn("t",e),r=Cn("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Cn("t",e),r=Cn("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Cn(Vs,e);if(Xa in e){const r=e[Xa];if(n===nv){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===nl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ev?this.onConnectionShutdown_(r):n===Za?this.onReset_(r):n===tv?_i("Server Error: "+r):n===el?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_i("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ao!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Nn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(At.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Gu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $r}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=32,il=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new Y("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vt(t){return t.pieces_.length-t.pieceNum_}function z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function qu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sv(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ku(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Y(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Ae(z(t),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Yu(t,e){if(vt(t)!==vt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function xe(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(vt(t)>vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iv{constructor(e,n){this.errorPrefix_=n,this.parts_=zu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=rs(this.parts_[r]);Ju(this)}}function ov(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=rs(e),Ju(t)}function av(t){const e=t.parts_.pop();t.byteLength_-=rs(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ju(t){if(t.byteLength_>il)throw new Error(t.errorPrefix_+"has a key path longer than "+il+" bytes ("+t.byteLength_+").");if(t.parts_.length>sl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sl+") or object contains a cycle "+It(t))}function It(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Gu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new uo}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=1e3,lv=60*5*1e3,ol=30*1e3,cv=1.3,uv=3e4,dv="server_kill",al=3;class Je extends ju{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Je.nextPersistentConnectionId_++,this.log_=Qn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sn,this.maxReconnectDelay_=lv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$r.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(pe(i)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ns,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Je.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rt(e,"w")){const r=rn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Up(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ol)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fp(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_i("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uv&&(this.reconnectDelay_=Sn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Je.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?_e("getToken() completed but was canceled"):(_e("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new rv(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{be(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(dv)},i))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&be(u),l())}}}interrupt(e){_e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],oi(this.interruptReasons_)&&(this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>oo(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){_e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=al&&(this.reconnectDelay_=ol,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=al&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Su.replace(/\./g,"-")]=1,qi()?e["framework.cordova"]=1:Mc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$r.getInstance().currentlyOnline();return oi(this.interruptReasons_)&&e}}Je.nextPersistentConnectionId_=0;Je.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(an,e),s=new U(an,n);return this.compare(r,s)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;class Qu extends ls{static get __EMPTY_NODE(){return sr}static set __EMPTY_NODE(e){sr=e}compare(e,n){return pn(e.name,n.name)}isDefinedOn(e){throw dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Mt,sr)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,sr)}toString(){return".key"}}const en=new Qu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class de{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??de.RED,this.left=s??Se.EMPTY_NODE,this.right=i??Se.EMPTY_NODE}copy(e,n,r,s,i){return new de(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}de.RED=!0;de.BLACK=!1;class hv{copy(e,n,r,s,i){return this}insert(e,n,r){return new de(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Se{constructor(e,n=Se.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Se(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,de.BLACK,null,null))}remove(e){return new Se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,de.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ir(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ir(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ir(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ir(this.root_,null,this.comparator_,!0,e)}}Se.EMPTY_NODE=new hv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e){return pn(t.name,e.name)}function ho(t,e){return pn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;function pv(t){gi=t}const Xu=function(t){return typeof t=="number"?"number:"+Ru(t):"string:"+t},Zu=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rt(e,".sv"),"Priority must be a string or number.")}else C(t===gi||t.isEmpty(),"priority of unexpected type.");C(t===gi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll;class ue{constructor(e,n=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zu(this.priorityNode_)}static set __childrenNodeConstructor(e){ll=e}static get __childrenNodeConstructor(){return ll}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:M(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ru(this.value_):e+=this.value_,this.lazyHash_=wu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=ue.VALUE_TYPE_ORDER.indexOf(n),i=ue.VALUE_TYPE_ORDER.indexOf(r);return C(s>=0,"Unknown leaf type: "+n),C(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed,td;function _v(t){ed=t}function mv(t){td=t}class gv extends ls{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?pn(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Mt,new ue("[PRIORITY-POST]",td))}makePost(e,n){const r=ed(e);return new U(n,new ue("[PRIORITY-POST]",r))}toString(){return".priority"}}const me=new gv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=Math.log(2);class vv{constructor(e){const n=i=>parseInt(Math.log(i)/yv,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jr=function(t,e,n,r){t.sort(e);const s=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new de(h,u.node,de.BLACK,null,null);{const _=parseInt(d/2,10)+l,p=s(l,_),v=s(_+1,c);return u=t[_],h=n?n(u):u,new de(h,u.node,de.BLACK,p,v)}},i=function(l){let c=null,d=null,u=t.length;const h=function(p,v){const D=u-p,O=u;u-=p;const S=s(D+1,O),k=t[D],H=n?n(k):k;_(new de(H,k.node,v,null,S))},_=function(p){c?(c.left=p,c=p):(d=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),D=Math.pow(2,l.count-(p+1));v?h(D,de.BLACK):(h(D,de.BLACK),h(D,de.RED))}return d},o=new vv(t.length),a=i(o);return new Se(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;const jt={};class Ke{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(jt&&me,"ChildrenNode.ts has not been loaded"),Ws=Ws||new Ke({".priority":jt},{".priority":me}),Ws}get(e){const n=rn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Se?n:null}hasIndex(e){return rt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==en,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(U.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=jr(r,e.getCompare()):a=jt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Ke(d,c)}addToIndexes(e,n){const r=xr(this.indexes_,(s,i)=>{const o=rn(this.indexSet_,i);if(C(o,"Missing index implementation for "+i),s===jt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),jr(a,o.getCompare())}else return jt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new Ke(r,this.indexSet_)}removeFromIndexes(e,n){const r=xr(this.indexes_,s=>{if(s===jt)return s;{const i=n.get(e.name);return i?s.remove(new U(e.name,i)):s}});return new Ke(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Zu(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bn||(bn=new B(new Se(ho),null,Ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bn:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?bn:this.priorityNode_;return new B(s,o,i)}}updateChild(e,n){const r=M(e);if(r===null)return n;{C(M(e)!==".priority"||vt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(z(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(me,(o,a)=>{n[o]=a.val(e),r++,i&&B.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xu(this.getPriority().val())+":"),this.forEachChild(me,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":wu(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new U(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,U.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xn?-1:0}withIndex(e){if(e===en||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===en||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(me),s=n.getIterator(me);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===en?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ev extends B{constructor(){super(new Se(ho),B.EMPTY_NODE,Ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Xn=new Ev;Object.defineProperties(U,{MIN:{value:new U(an,B.EMPTY_NODE)},MAX:{value:new U(Mt,Xn)}});Qu.__EMPTY_NODE=B.EMPTY_NODE;ue.__childrenNodeConstructor=B;pv(Xn);mv(Xn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=!0;function fe(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ue(n,fe(e))}if(!(t instanceof Array)&&Cv){const n=[];let r=!1;if(Ne(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=fe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return B.EMPTY_NODE;const i=jr(n,fv,o=>o.name,ho);if(r){const o=jr(n,me.getCompare());return new B(i,fe(e),new Ke({".priority":o},{".priority":me}))}else return new B(i,fe(e),Ke.Default)}else{let n=B.EMPTY_NODE;return Ne(t,(r,s)=>{if(rt(t,r)&&r.substring(0,1)!=="."){const i=fe(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(fe(e))}}_v(fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv extends ls{constructor(e){super(),this.indexPath_=e,C(!L(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?pn(e.name,n.name):i}makePost(e,n){const r=fe(e),s=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,s)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Xn);return new U(Mt,e)}toString(){return zu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends ls{compare(e,n){const r=e.node.compareTo(n.node);return r===0?pn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=fe(e);return new U(n,r)}toString(){return".value"}}const wv=new bv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){return{type:"value",snapshotNode:t}}function Tv(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rv(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Av(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:an}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new fo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ul(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===wv?n="$value":t.index_===en?n="$key":(C(t.index_ instanceof Sv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends ju{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Qn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Gr.getListenId_(e,r),a={};this.listens_[o]=a;const l=ul(e._queryParams);this.restRequest_(i+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(i,u,!1,r),rn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const r=Gr.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ul(e._queryParams),r=e._path.toString(),s=new ns;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vt(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Mn(a.responseText)}catch{be("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(){return{value:null,children:new Map}}function nd(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,qr());const s=t.children.get(r);e=z(e),nd(s,e,n)}}function yi(t,e,n){t.value!==null?n(e,t.value):Ov(t,(r,s)=>{const i=new Y(e.toString()+"/"+r);yi(s,i,n)})}function Ov(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=10*1e3,Dv=30*1e3,kv=5*60*1e3;class xv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Nv(e);const r=hl+(Dv-hl)*Math.random();Nn(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(s,i)=>{i>0&&rt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Nn(this.reportStats_.bind(this),Math.floor(Math.random()*2*kv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(We||(We={}));function rd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function id(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=We.ACK_USER_WRITE,this.source=rd()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new zr(j(),n,this.revert)}}else return C(M(this.path)===e,"operationForChild called for unrelated child."),new zr(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=We.OVERWRITE}operationForChild(e){return L(this.path)?new Lt(this.source,j(),this.snap.getImmediateChild(e)):new Lt(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=We.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new Lt(this.source,j(),n.value):new Wn(this.source,j(),n)}else return C(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Mv(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Av(o.childName,o.snapshotNode))}),wn(t,s,"child_removed",e,r,n),wn(t,s,"child_added",e,r,n),wn(t,s,"child_moved",i,r,n),wn(t,s,"child_changed",e,r,n),wn(t,s,"value",e,r,n),s}function wn(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Fv(t,a,l)),o.forEach(a=>{const l=Lv(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Lv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Fv(t,e,n){if(e.childName==null||n.childName==null)throw dn("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),s=new U(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e){return{eventCache:t,serverCache:e}}function Dn(t,e,n,r){return od(new po(e,n,r),t.serverCache)}function ad(t,e,n,r){return od(t.eventCache,new po(e,n,r))}function vi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ft(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs;const Uv=()=>(Hs||(Hs=new Se(wy)),Hs);class q{constructor(e,n=Uv()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Ne(e,(r,s)=>{n=n.set(new Y(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(L(e))return null;{const r=M(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(z(e),n);return i!=null?{path:oe(new Y(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(z(e)):new q(null)}}set(e,n){if(L(e))return new q(n,this.children);{const r=M(e),i=(this.children.get(r)||new q(null)).set(z(e),n),o=this.children.insert(r,i);return new q(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const s=r.remove(z(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new q(null):new q(this.value,i)}else return this}}get(e){if(L(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(z(e)):null}}setTree(e,n){if(L(e))return n;{const r=M(e),i=(this.children.get(r)||new q(null)).setTree(z(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new q(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(oe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(L(e))return null;{const i=M(e),o=this.children.get(i);return o?o.findOnPath_(z(e),oe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,r){if(L(e))return this;{this.value&&r(n,this.value);const s=M(e),i=this.children.get(s);return i?i.foreachOnPath_(z(e),oe(n,s),r):new q(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.writeTree_=e}static empty(){return new Le(new q(null))}}function kn(t,e,n){if(L(e))return new Le(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Ae(s,e);return i=i.updateChild(o,n),new Le(t.writeTree_.set(s,i))}else{const s=new q(n),i=t.writeTree_.setTree(e,s);return new Le(i)}}}function fl(t,e,n){let r=t;return Ne(n,(s,i)=>{r=kn(r,oe(e,s),i)}),r}function pl(t,e){if(L(e))return Le.empty();{const n=t.writeTree_.setTree(e,new q(null));return new Le(n)}}function Ei(t,e){return Wt(t,e)!=null}function Wt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function _l(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(r,s)=>{e.push(new U(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new U(r,s.value))}),e}function gt(t,e){if(L(e))return t;{const n=Wt(t,e);return n!=null?new Le(new q(n)):new Le(t.writeTree_.subtree(e))}}function Ci(t){return t.writeTree_.isEmpty()}function ln(t,e){return ld(j(),t.writeTree_,e)}function ld(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(C(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=ld(oe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(oe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t,e){return pd(e,t)}function Vv(t,e,n,r,s){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=kn(t.visibleWrites,e,n)),t.lastWriteId=r}function Wv(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Hv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Bv(a,r.path)?s=!1:xe(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return $v(t),!0;if(r.snap)t.visibleWrites=pl(t.visibleWrites,r.path);else{const a=r.children;Ne(a,l=>{t.visibleWrites=pl(t.visibleWrites,oe(r.path,l))})}return!0}else return!1}function Bv(t,e){if(t.snap)return xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&xe(oe(t.path,n),e))return!0;return!1}function $v(t){t.visibleWrites=ud(t.allWrites,jv,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jv(t){return t.visible}function ud(t,e,n){let r=Le.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)xe(n,o)?(a=Ae(n,o),r=kn(r,a,i.snap)):xe(o,n)&&(a=Ae(o,n),r=kn(r,j(),i.snap.getChild(a)));else if(i.children){if(xe(n,o))a=Ae(n,o),r=fl(r,a,i.children);else if(xe(o,n))if(a=Ae(o,n),L(a))r=fl(r,j(),i.children);else{const l=rn(i.children,M(a));if(l){const c=l.getChild(z(a));r=kn(r,j(),c)}}}else throw dn("WriteRecord should have .snap or .children")}}return r}function dd(t,e,n,r,s){if(!r&&!s){const i=Wt(t.visibleWrites,e);if(i!=null)return i;{const o=gt(t.visibleWrites,e);if(Ci(o))return n;if(n==null&&!Ei(o,j()))return null;{const a=n||B.EMPTY_NODE;return ln(o,a)}}}else{const i=gt(t.visibleWrites,e);if(!s&&Ci(i))return n;if(!s&&n==null&&!Ei(i,j()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(xe(c.path,e)||xe(e,c.path))},a=ud(t.allWrites,o,e),l=n||B.EMPTY_NODE;return ln(a,l)}}}function Gv(t,e,n){let r=B.EMPTY_NODE;const s=Wt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(me,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=gt(t.visibleWrites,e);return n.forEachChild(me,(o,a)=>{const l=ln(gt(i,new Y(o)),a);r=r.updateImmediateChild(o,l)}),_l(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=gt(t.visibleWrites,e);return _l(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qv(t,e,n,r,s){C(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=oe(e,n);if(Ei(t.visibleWrites,i))return null;{const o=gt(t.visibleWrites,i);return Ci(o)?s.getChild(n):ln(o,s.getChild(n))}}function zv(t,e,n,r){const s=oe(e,n),i=Wt(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=gt(t.visibleWrites,s);return ln(o,r.getNode().getImmediateChild(n))}else return null}function Kv(t,e){return Wt(t.visibleWrites,e)}function Yv(t,e,n,r,s,i,o){let a;const l=gt(t.visibleWrites,e),c=Wt(l,j());if(c!=null)a=c;else if(n!=null)a=ln(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<s;)u(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function Jv(){return{visibleWrites:Le.empty(),allWrites:[],lastWriteId:-1}}function Si(t,e,n,r){return dd(t.writeTree,t.treePath,e,n,r)}function hd(t,e){return Gv(t.writeTree,t.treePath,e)}function ml(t,e,n,r){return qv(t.writeTree,t.treePath,e,n,r)}function Kr(t,e){return Kv(t.writeTree,oe(t.treePath,e))}function Qv(t,e,n,r,s,i){return Yv(t.writeTree,t.treePath,e,n,r,s,i)}function _o(t,e,n){return zv(t.writeTree,t.treePath,e,n)}function fd(t,e){return pd(oe(t.treePath,e),t.writeTree)}function pd(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,cl(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Rv(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Tv(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,cl(r,e.snapshotNode,s.oldSnap));else throw dn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const _d=new Zv;class mo{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new po(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _o(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ft(this.viewCache_),i=Qv(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function eE(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tE(t,e,n,r,s){const i=new Xv;let o,a;if(n.type===We.OVERWRITE){const c=n;c.source.fromUser?o=bi(t,e,c.path,c.snap,r,s,i):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=Yr(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===We.MERGE){const c=n;c.source.fromUser?o=rE(t,e,c.path,c.children,r,s,i):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=wi(t,e,c.path,c.children,r,s,a,i))}else if(n.type===We.ACK_USER_WRITE){const c=n;c.revert?o=oE(t,e,c.path,r,s,i):o=sE(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===We.LISTEN_COMPLETE)o=iE(t,e,n.path,r,i);else throw dn("Unknown operation type: "+n.type);const l=i.getChanges();return nE(e,o,l),{viewCache:o,changes:l}}function nE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=vi(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Iv(vi(e)))}}function md(t,e,n,r,s,i){const o=e.eventCache;if(Kr(r,n)!=null)return e;{let a,l;if(L(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ft(e),d=c instanceof B?c:B.EMPTY_NODE,u=hd(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const c=Si(r,Ft(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=M(n);if(c===".priority"){C(vt(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=ml(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=z(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ml(r,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=_o(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,s,i):a=o.getNode()}}return Dn(e,a,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Yr(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),_,null)}else{const _=M(n);if(!l.isCompleteForPath(n)&&vt(n)>1)return e;const p=z(n),D=l.getNode().getImmediateChild(_).updateChild(p,r);_===".priority"?c=d.updatePriority(l.getNode(),D):c=d.updateChild(l.getNode(),_,D,p,_d,null)}const u=ad(e,c,l.isFullyInitialized()||L(n),d.filtersNodes()),h=new mo(s,u,i);return md(t,u,n,s,h,a)}function bi(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const d=new mo(s,e,i);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Dn(e,c,!0,t.filter.filtersNodes());else{const u=M(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Dn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=z(n),_=a.getNode().getImmediateChild(u);let p;if(L(h))p=r;else{const v=d.getCompleteChild(u);v!=null?qu(h)===".priority"&&v.getChild(Ku(h)).isEmpty()?p=v:p=v.updateChild(h,r):p=B.EMPTY_NODE}if(_.equals(p))l=e;else{const v=t.filter.updateChild(a.getNode(),u,p,h,d,o);l=Dn(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function gl(t,e){return t.eventCache.isCompleteForChild(e)}function rE(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const d=oe(n,l);gl(e,M(d))&&(a=bi(t,a,d,c,s,i,o))}),r.foreach((l,c)=>{const d=oe(n,l);gl(e,M(d))||(a=bi(t,a,d,c,s,i,o))}),a}function yl(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function wi(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;L(n)?c=r:c=new q(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),p=yl(t,_,h);l=Yr(t,l,new Y(u),p,s,i,o,a)}}),c.children.inorderTraversal((u,h)=>{const _=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!_){const p=e.serverCache.getNode().getImmediateChild(u),v=yl(t,p,h);l=Yr(t,l,new Y(u),v,s,i,o,a)}}),l}function sE(t,e,n,r,s,i,o){if(Kr(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(L(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yr(t,e,n,l.getNode().getChild(n),s,i,a,o);if(L(n)){let c=new q(null);return l.getNode().forEachChild(en,(d,u)=>{c=c.set(new Y(d),u)}),wi(t,e,n,c,s,i,a,o)}else return e}else{let c=new q(null);return r.foreach((d,u)=>{const h=oe(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),wi(t,e,n,c,s,i,a,o)}}function iE(t,e,n,r,s){const i=e.serverCache,o=ad(e,i.getNode(),i.isFullyInitialized()||L(n),i.isFiltered());return md(t,o,n,r,_d,s)}function oE(t,e,n,r,s,i){let o;if(Kr(r,n)!=null)return e;{const a=new mo(r,e,s),l=e.eventCache.getNode();let c;if(L(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Si(r,Ft(e));else{const u=e.serverCache.getNode();C(u instanceof B,"serverChildren would be complete if leaf node"),d=hd(r,u)}d=d,c=t.filter.updateFullNode(l,d,i)}else{const d=M(n);let u=_o(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,z(n),a,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,B.EMPTY_NODE,z(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Si(r,Ft(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Kr(r,j())!=null,Dn(e,c,o,t.filter.filtersNodes())}}function aE(t,e){const n=Ft(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function vl(t,e,n,r){e.type===We.MERGE&&e.source.queryId!==null&&(C(Ft(t.viewCache_),"We should always have a full cache before handling merges"),C(vi(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=tE(t.processor_,s,e,n,r);return eE(t.processor_,i.viewCache),C(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,lE(t,i.changes,i.viewCache.eventCache.getNode(),null)}function lE(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return Mv(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;function cE(t){C(!El,"__referenceConstructor has already been defined"),El=t}function go(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return C(i!=null,"SyncTree gave us an op for an invalid query."),vl(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(vl(o,e,n,r));return i}}function yo(t,e){let n=null;for(const r of t.views.values())n=n||aE(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;function uE(t){C(!Cl,"__referenceConstructor has already been defined"),Cl=t}class Sl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=Jv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gd(t,e,n,r,s){return Vv(t.pendingWriteTree_,e,n,r,s),s?us(t,new Lt(rd(),e,n)):[]}function Pt(t,e,n=!1){const r=Wv(t.pendingWriteTree_,e);if(Hv(t.pendingWriteTree_,e)){let i=new q(null);return r.snap!=null?i=i.set(j(),!0):Ne(r.children,o=>{i=i.set(new Y(o),!0)}),us(t,new zr(r.path,i,n))}else return[]}function cs(t,e,n){return us(t,new Lt(sd(),e,n))}function dE(t,e,n){const r=q.fromObject(n);return us(t,new Wn(sd(),e,r))}function hE(t,e,n,r){const s=Ed(t,r);if(s!=null){const i=Cd(s),o=i.path,a=i.queryId,l=Ae(o,e),c=new Lt(id(a),l,n);return Sd(t,o,c)}else return[]}function fE(t,e,n,r){const s=Ed(t,r);if(s){const i=Cd(s),o=i.path,a=i.queryId,l=Ae(o,e),c=q.fromObject(n),d=new Wn(id(a),l,c);return Sd(t,o,d)}else return[]}function vo(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ae(o,e),c=yo(a,l);if(c)return c});return dd(s,e,i,n,!0)}function us(t,e){return yd(e,t.syncPointTree_,null,cd(t.pendingWriteTree_,j()))}function yd(t,e,n,r){if(L(t.path))return vd(t,e,n,r);{const s=e.get(j());n==null&&s!=null&&(n=yo(s,j()));let i=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=fd(r,o);i=i.concat(yd(a,l,c,d))}return s&&(i=i.concat(go(s,t,r,n))),i}}function vd(t,e,n,r){const s=e.get(j());n==null&&s!=null&&(n=yo(s,j()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=fd(r,o),d=t.operationForChild(o);d&&(i=i.concat(vd(d,a,l,c)))}),s&&(i=i.concat(go(s,t,r,n))),i}function Ed(t,e){return t.tagToQueryMap.get(e)}function Cd(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function Sd(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const s=cd(t.pendingWriteTree_,e);return go(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Eo(n)}node(){return this.node_}}class Co{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new Co(this.syncTree_,n)}node(){return vo(this.syncTree_,this.path_)}}const pE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bl=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _E(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mE(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_E=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},mE=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const s=e.node();if(C(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},gE=function(t,e,n,r){return So(e,new Co(n,t),r)},bd=function(t,e,n){return So(t,new Eo(e),n)};function So(t,e,n){const r=t.getPriority().val(),s=bl(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=bl(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ue(a,fe(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ue(s))),o.forEachChild(me,(a,l)=>{const c=So(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function wo(t,e){let n=e instanceof Y?e:new Y(e),r=t,s=M(n);for(;s!==null;){const i=rn(r.node.children,s)||{children:{},childCount:0};r=new bo(s,r,i),n=z(n),s=M(n)}return r}function mn(t){return t.node.value}function wd(t,e){t.node.value=e,Ii(t)}function Id(t){return t.node.childCount>0}function yE(t){return mn(t)===void 0&&!Id(t)}function ds(t,e){Ne(t.node.children,(n,r)=>{e(new bo(n,t,r))})}function Td(t,e,n,r){n&&!r&&e(t),ds(t,s=>{Td(s,e,!0,r)}),n&&r&&e(t)}function vE(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Zn(t){return new Y(t.parent===null?t.name:Zn(t.parent)+"/"+t.name)}function Ii(t){t.parent!==null&&EE(t.parent,t.name,t)}function EE(t,e,n){const r=yE(n),s=rt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Ii(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ii(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=/[\[\].#$\/\u0000-\u001F\u007F]/,SE=/[\[\].#$\u0000-\u001F\u007F]/,Bs=10*1024*1024,Rd=function(t){return typeof t=="string"&&t.length!==0&&!CE.test(t)},Ad=function(t){return typeof t=="string"&&t.length!==0&&!SE.test(t)},bE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ad(t)},Pd=function(t,e,n,r){r&&e===void 0||Io(zi(t,"value"),e,n)},Io=function(t,e,n){const r=n instanceof Y?new iv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+It(r));if(typeof e=="function")throw new Error(t+"contains a function "+It(r)+" with contents = "+e.toString());if(Iu(e))throw new Error(t+"contains "+e.toString()+" "+It(r));if(typeof e=="string"&&e.length>Bs/3&&rs(e)>Bs)throw new Error(t+"contains a string greater than "+Bs+" utf8 bytes "+It(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ne(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Rd(o)))throw new Error(t+" contains an invalid key ("+o+") "+It(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ov(r,o),Io(t,a,r),av(r)}),s&&i)throw new Error(t+' contains ".value" child '+It(r)+" in addition to actual children.")}},Od=function(t,e,n,r){if(!(r&&n===void 0)&&!Ad(n))throw new Error(zi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Od(t,e,n,r)},Nd=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},IE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bE(n))throw new Error(zi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dd(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Yu(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function nt(t,e,n){Dd(t,n),RE(t,r=>xe(r,e)||xe(e,r))}function RE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(AE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Nt&&_e("event: "+n.toString()),_n(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="repo_interrupt",OE=25;class NE{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qr(),this.transactionQueueTree_=new bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DE(t,e,n){if(t.stats_=lo(t.repoInfo_),t.forceRestClient_||Oy())t.server_=new Gr(t.repoInfo_,(r,s,i,o)=>{wl(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Il(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Je(t.repoInfo_,e,(r,s,i,o)=>{wl(t,r,s,i,o)},r=>{Il(t,r)},r=>{kE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=My(t.repoInfo_,()=>new xv(t.stats_,t.server_)),t.infoData_=new Pv,t.infoSyncTree_=new Sl({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=cs(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ro(t,"connected",!1),t.serverSyncTree_=new Sl({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);nt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function kd(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function To(t){return pE({timestamp:kd(t)})}function wl(t,e,n,r,s){t.dataUpdateCount++;const i=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=xr(n,c=>fe(c));o=fE(t.serverSyncTree_,i,l,s)}else{const l=fe(n);o=hE(t.serverSyncTree_,i,l,s)}else if(r){const l=xr(n,c=>fe(c));o=dE(t.serverSyncTree_,i,l)}else{const l=fe(n);o=cs(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=hs(t,i)),nt(t.eventQueue_,a,o)}function Il(t,e){Ro(t,"connected",e),e===!1&&ME(t)}function kE(t,e){Ne(e,(n,r)=>{Ro(t,n,r)})}function Ro(t,e,n){const r=new Y("/.info/"+e),s=fe(n);t.infoData_.updateSnapshot(r,s);const i=cs(t.infoSyncTree_,r,s);nt(t.eventQueue_,r,i)}function xd(t){return t.nextWriteId_++}function xE(t,e,n,r,s){Ao(t,"set",{path:e.toString(),value:n,priority:r});const i=To(t),o=fe(n,r),a=vo(t.serverSyncTree_,e),l=bd(o,a,i),c=xd(t),d=gd(t.serverSyncTree_,e,l,c,!0);Dd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const p=h==="ok";p||be("set at "+e+" failed: "+h);const v=Pt(t.serverSyncTree_,c,!p);nt(t.eventQueue_,e,v),FE(t,s,h,_)});const u=Vd(t,e);hs(t,u),nt(t.eventQueue_,u,[])}function ME(t){Ao(t,"onDisconnectEvents");const e=To(t),n=qr();yi(t.onDisconnect_,j(),(s,i)=>{const o=gE(s,i,t.serverSyncTree_,e);nd(n,s,o)});let r=[];yi(n,j(),(s,i)=>{r=r.concat(cs(t.serverSyncTree_,s,i));const o=Vd(t,s);hs(t,o)}),t.onDisconnect_=qr(),nt(t.eventQueue_,j(),r)}function LE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PE)}function Ao(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_e(n,...e)}function FE(t,e,n,r){e&&_n(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Md(t,e,n){return vo(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Po(t,e=t.transactionQueueTree_){if(e||fs(t,e),mn(e)){const n=Fd(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&UE(t,Zn(e),n)}else Id(e)&&ds(e,n=>{Po(t,n)})}function UE(t,e,n){const r=n.map(c=>c.currentWriteId),s=Md(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Ae(e,d.path);i=i.updateChild(u,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ao(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Pt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();fs(t,wo(t.transactionQueueTree_,e)),Po(t,t.transactionQueueTree_),nt(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)_n(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{be("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}hs(t,e)}},o)}function hs(t,e){const n=Ld(t,e),r=Zn(n),s=Fd(t,n);return VE(t,s,r),r}function VE(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ae(n,l.path);let d=!1,u;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,s=s.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OE)d=!0,u="maxretry",s=s.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Md(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){Io("transaction failed: Data returned ",_,l.path);let p=fe(_);typeof _=="object"&&_!=null&&rt(_,".priority")||(p=p.updatePriority(h.getPriority()));const D=l.currentWriteId,O=To(t),S=bd(p,h,O);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=S,l.currentWriteId=xd(t),o.splice(o.indexOf(D),1),s=s.concat(gd(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(Pt(t.serverSyncTree_,D,!0))}else d=!0,u="nodata",s=s.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0))}nt(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}fs(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)_n(r[a]);Po(t,t.transactionQueueTree_)}function Ld(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&mn(r)===void 0;)r=wo(r,n),e=z(e),n=M(e);return r}function Fd(t,e){const n=[];return Ud(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Ud(t,e,n){const r=mn(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ds(e,s=>{Ud(t,s,n)})}function fs(t,e){const n=mn(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,wd(e,n.length>0?n:void 0)}ds(e,r=>{fs(t,r)})}function Vd(t,e){const n=Zn(Ld(t,e)),r=wo(t.transactionQueueTree_,e);return vE(r,s=>{$s(t,s)}),$s(t,r),Td(r,s=>{$s(t,s)}),n}function $s(t,e){const n=mn(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Pt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?wd(e,void 0):n.length=i+1,nt(t.eventQueue_,Zn(e),s);for(let o=0;o<r.length;o++)_n(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function HE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tl=function(t,e){const n=BE(t),r=n.namespace;n.domain==="firebase.com"&&tt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&tt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Sy();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Fu(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Y(n.pathString)}},BE=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(s=WE(t.substring(d,u)));const h=HE(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in h&&(i=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",$E=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Rl.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Rl.charAt(e[s]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return L(this._path)?null:qu(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=dl(this._queryParams),n=oo(e);return n==="{}"?"default":n}get _queryObject(){return dl(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof Oo))return!1;const n=this._repo===e._repo,r=Yu(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+sv(this._path)}}class Ht extends Oo{constructor(e,n){super(e,n,new fo,!1)}get parent(){const e=Ku(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function jE(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?Ti(t._root,e):t._root}function Ti(t,e){return t=Ie(t),M(t._path)===null?wE("child","path",e,!1):Od("child","path",e,!1),new Ht(t._repo,oe(t._path,e))}function GE(t,e){t=Ie(t),Nd("push",t._path),Pd("push",e,t._path,!0);const n=kd(t._repo),r=$E(n),s=Ti(t,r),i=Ti(t,r);let o;return e!=null?o=Wd(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Wd(t,e){t=Ie(t),Nd("set",t._path),Pd("set",e,t._path,!1);const n=new ns;return xE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}cE(Ht);uE(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="FIREBASE_DATABASE_EMULATOR_HOST",Ri={};let zE=!1;function KE(t,e,n,r){t.repoInfo_=new Fu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function YE(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||tt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_e("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Tl(i,s),a=o.repoInfo,l,c;typeof process<"u"&&{ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\parit\\AppData\\Roaming",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133313761318873355",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_6784_ZKCQWGDQTFCDCVHG",COLOR:"1",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-C7CTC5I",ComSpec:"C:\\Windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"C:\\Windows\\notepad.exe",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOME:"C:\\Users\\parit",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\parit",INIT_CWD:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen",LANG:"en_US.UTF-8",LOCALAPPDATA:"C:\\Users\\parit\\AppData\\Local",LOGONSERVER:"\\\\DESKTOP-C7CTC5I",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",NODE_EXE:"C:\\Program Files\\nodejs\\\\node.exe",NPM_CLI_JS:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_command:"run-script",npm_config_cache:"C:\\Users\\parit\\AppData\\Local\\npm-cache",npm_config_globalconfig:"C:\\Users\\parit\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_global_prefix:"C:\\Users\\parit\\AppData\\Roaming\\npm",npm_config_init_module:"C:\\Users\\parit\\.npm-init.js",npm_config_local_prefix:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen",npm_config_metrics_registry:"https://registry.npmjs.org/",npm_config_node_gyp:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_npm_version:"9.8.1",npm_config_prefix:"C:\\Users\\parit\\AppData\\Roaming\\npm",npm_config_userconfig:"C:\\Users\\parit\\.npmrc",npm_config_user_agent:"npm/9.8.1 node/v18.17.0 win32 x64 workspaces/false",npm_execpath:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"vite build",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen\\package.json",npm_package_name:"preact-helper-screen",npm_package_version:"0.0.0",NPM_PREFIX_NPM_CLI_JS:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",NUMBER_OF_PROCESSORS:"8",OneDrive:"C:\\Users\\parit\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen\\node_modules\\.bin;D:\\SixSenseMobility\\QRCodeProject\\node_modules\\.bin;D:\\SixSenseMobility\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Python311\\Scripts\\;C:\\Python311\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\starship\\bin\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Users\\parit\\AppData\\Local\\Pub\\Cache\\bin;C:\\Users\\parit\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\flutter\\bin;C:\\Users\\parit\\AppData\\Roaming\\npm;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 140 Stepping 1, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"8c01",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\parit\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",STARSHIP_SESSION_KEY:"q1ahlMYJkXixnOeu",STARSHIP_SHELL:"powershell",SystemDrive:"C:",SystemRoot:"C:\\Windows",TEMP:"C:\\Users\\parit\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.82.2",TMP:"C:\\Users\\parit\\AppData\\Local\\Temp",USERDOMAIN:"DESKTOP-C7CTC5I",USERDOMAIN_ROAMINGPROFILE:"DESKTOP-C7CTC5I",USERNAME:"parit",USERPROFILE:"C:\\Users\\parit",VIRTUAL_ENV_DISABLE_PROMPT:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-e1f0c2f29a-sock",VSCODE_INJECTION:"1",windir:"C:\\Windows",ZES_ENABLE_SYSMAN:"1"}&&(c={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\parit\\AppData\\Roaming",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"133313761318873355",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_6784_ZKCQWGDQTFCDCVHG",COLOR:"1",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-C7CTC5I",ComSpec:"C:\\Windows\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"C:\\Windows\\notepad.exe",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOME:"C:\\Users\\parit",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\parit",INIT_CWD:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen",LANG:"en_US.UTF-8",LOCALAPPDATA:"C:\\Users\\parit\\AppData\\Local",LOGONSERVER:"\\\\DESKTOP-C7CTC5I",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",NODE_EXE:"C:\\Program Files\\nodejs\\\\node.exe",NPM_CLI_JS:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_command:"run-script",npm_config_cache:"C:\\Users\\parit\\AppData\\Local\\npm-cache",npm_config_globalconfig:"C:\\Users\\parit\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_global_prefix:"C:\\Users\\parit\\AppData\\Roaming\\npm",npm_config_init_module:"C:\\Users\\parit\\.npm-init.js",npm_config_local_prefix:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen",npm_config_metrics_registry:"https://registry.npmjs.org/",npm_config_node_gyp:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_npm_version:"9.8.1",npm_config_prefix:"C:\\Users\\parit\\AppData\\Roaming\\npm",npm_config_userconfig:"C:\\Users\\parit\\.npmrc",npm_config_user_agent:"npm/9.8.1 node/v18.17.0 win32 x64 workspaces/false",npm_execpath:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"vite build",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen\\package.json",npm_package_name:"preact-helper-screen",npm_package_version:"0.0.0",NPM_PREFIX_NPM_CLI_JS:"C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",NUMBER_OF_PROCESSORS:"8",OneDrive:"C:\\Users\\parit\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"D:\\SixSenseMobility\\QRCodeProject\\preact-helper-screen\\node_modules\\.bin;D:\\SixSenseMobility\\QRCodeProject\\node_modules\\.bin;D:\\SixSenseMobility\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Users\\parit\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Python311\\Scripts\\;C:\\Python311\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\starship\\bin\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Users\\parit\\AppData\\Local\\Pub\\Cache\\bin;C:\\Users\\parit\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\flutter\\bin;C:\\Users\\parit\\AppData\\Roaming\\npm;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 140 Stepping 1, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"8c01",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\parit\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",STARSHIP_SESSION_KEY:"q1ahlMYJkXixnOeu",STARSHIP_SHELL:"powershell",SystemDrive:"C:",SystemRoot:"C:\\Windows",TEMP:"C:\\Users\\parit\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.82.2",TMP:"C:\\Users\\parit\\AppData\\Local\\Temp",USERDOMAIN:"DESKTOP-C7CTC5I",USERDOMAIN_ROAMINGPROFILE:"DESKTOP-C7CTC5I",USERNAME:"parit",USERPROFILE:"C:\\Users\\parit",VIRTUAL_ENV_DISABLE_PROMPT:"1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\parit\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-e1f0c2f29a-sock",VSCODE_INJECTION:"1",windir:"C:\\Windows",ZES_ENABLE_SYSMAN:"1"}[qE]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Tl(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const d=s&&l?new Zt(Zt.OWNER):new Dy(t.name,t.options,e);IE("Invalid Firebase Database URL",o),L(o.path)||tt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=QE(a,t,d,new Ny(t.name,n));return new XE(u,t)}function JE(t,e){const n=Ri[e];(!n||n[t.key]!==t)&&tt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LE(t),delete n[t.key]}function QE(t,e,n,r){let s=Ri[e.name];s||(s={},Ri[e.name]=s);let i=s[t.toURLString()];return i&&tt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new NE(t,zE,n,r),s[t.toURLString()]=i,i}class XE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tt("Cannot call "+e+" on a deleted database.")}}function ZE(t=Hc(),e){const n=Ji(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ap("database");r&&eC(n,...r)}return n}function eC(t,e,n,r={}){t=Ie(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&tt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&tt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Zt(Zt.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Pp(r.mockUserToken,t.app.options.projectId);i=new Zt(o)}KE(s,e,n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){gy(hn),sn(new Dt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return YE(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),mt(za,Ka,t),mt(za,Ka,"esm2017")}Je.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Je.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tC();const nC={apiKey:"AIzaSyAUzeV6KB4xwCoFfeGabjz5bMUvdXJ_qoY",authDomain:"otp-auth-48162.firebaseapp.com",projectId:"otp-auth-48162",storageBucket:"otp-auth-48162.appspot.com",messagingSenderId:"1039176332601",appId:"1:1039176332601:web:7a5c1062ac224418f7e4e8",measurementId:"G-FNXRHHTP1N",databaseURL:"https://otp-auth-48162-default-rtdb.firebaseio.com"},Hd=Wc(nC),Al=py(Hd),rC=ZE(Hd);function Bd(t,e){return function(){return t.apply(e,arguments)}}const{toString:sC}=Object.prototype,{getPrototypeOf:No}=Object,ps=(t=>e=>{const n=sC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Be=t=>(t=t.toLowerCase(),e=>ps(e)===t),_s=t=>e=>typeof e===t,{isArray:gn}=Array,Hn=_s("undefined");function iC(t){return t!==null&&!Hn(t)&&t.constructor!==null&&!Hn(t.constructor)&&Pe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const $d=Be("ArrayBuffer");function oC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&$d(t.buffer),e}const aC=_s("string"),Pe=_s("function"),jd=_s("number"),ms=t=>t!==null&&typeof t=="object",lC=t=>t===!0||t===!1,vr=t=>{if(ps(t)!=="object")return!1;const e=No(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},cC=Be("Date"),uC=Be("File"),dC=Be("Blob"),hC=Be("FileList"),fC=t=>ms(t)&&Pe(t.pipe),pC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Pe(t.append)&&((e=ps(t))==="formdata"||e==="object"&&Pe(t.toString)&&t.toString()==="[object FormData]"))},_C=Be("URLSearchParams"),mC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function er(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),gn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Gd(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const qd=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),zd=t=>!Hn(t)&&t!==qd;function Ai(){const{caseless:t}=zd(this)&&this||{},e={},n=(r,s)=>{const i=t&&Gd(e,s)||s;vr(e[i])&&vr(r)?e[i]=Ai(e[i],r):vr(r)?e[i]=Ai({},r):gn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&er(arguments[r],n);return e}const gC=(t,e,n,{allOwnKeys:r}={})=>(er(e,(s,i)=>{n&&Pe(s)?t[i]=Bd(s,n):t[i]=s},{allOwnKeys:r}),t),yC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),vC=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},EC=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&No(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},CC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},SC=t=>{if(!t)return null;if(gn(t))return t;let e=t.length;if(!jd(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},bC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&No(Uint8Array)),wC=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},IC=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},TC=Be("HTMLFormElement"),RC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Pl=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),AC=Be("RegExp"),Kd=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};er(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},PC=t=>{Kd(t,(e,n)=>{if(Pe(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Pe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},OC=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return gn(t)?r(t):r(String(t).split(e)),n},NC=()=>{},DC=(t,e)=>(t=+t,Number.isFinite(t)?t:e),js="abcdefghijklmnopqrstuvwxyz",Ol="0123456789",Yd={DIGIT:Ol,ALPHA:js,ALPHA_DIGIT:js+js.toUpperCase()+Ol},kC=(t=16,e=Yd.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function xC(t){return!!(t&&Pe(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const MC=t=>{const e=new Array(10),n=(r,s)=>{if(ms(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=gn(r)?[]:{};return er(r,(o,a)=>{const l=n(o,s+1);!Hn(l)&&(i[a]=l)}),e[s]=void 0,i}}return r};return n(t,0)},LC=Be("AsyncFunction"),FC=t=>t&&(ms(t)||Pe(t))&&Pe(t.then)&&Pe(t.catch),g={isArray:gn,isArrayBuffer:$d,isBuffer:iC,isFormData:pC,isArrayBufferView:oC,isString:aC,isNumber:jd,isBoolean:lC,isObject:ms,isPlainObject:vr,isUndefined:Hn,isDate:cC,isFile:uC,isBlob:dC,isRegExp:AC,isFunction:Pe,isStream:fC,isURLSearchParams:_C,isTypedArray:bC,isFileList:hC,forEach:er,merge:Ai,extend:gC,trim:mC,stripBOM:yC,inherits:vC,toFlatObject:EC,kindOf:ps,kindOfTest:Be,endsWith:CC,toArray:SC,forEachEntry:wC,matchAll:IC,isHTMLForm:TC,hasOwnProperty:Pl,hasOwnProp:Pl,reduceDescriptors:Kd,freezeMethods:PC,toObjectSet:OC,toCamelCase:RC,noop:NC,toFiniteNumber:DC,findKey:Gd,global:qd,isContextDefined:zd,ALPHABET:Yd,generateString:kC,isSpecCompliantForm:xC,toJSONObject:MC,isAsyncFn:LC,isThenable:FC};function V(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}g.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:g.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Jd=V.prototype,Qd={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Qd[t]={value:t}});Object.defineProperties(V,Qd);Object.defineProperty(Jd,"isAxiosError",{value:!0});V.from=(t,e,n,r,s,i)=>{const o=Object.create(Jd);return g.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),V.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const UC=null;function Pi(t){return g.isPlainObject(t)||g.isArray(t)}function Xd(t){return g.endsWith(t,"[]")?t.slice(0,-2):t}function Nl(t,e,n){return t?t.concat(e).map(function(s,i){return s=Xd(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function VC(t){return g.isArray(t)&&!t.some(Pi)}const WC=g.toFlatObject(g,{},null,function(e){return/^is[A-Z]/.test(e)});function gs(t,e,n){if(!g.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=g.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,D){return!g.isUndefined(D[v])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&g.isSpecCompliantForm(e);if(!g.isFunction(s))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(g.isDate(p))return p.toISOString();if(!l&&g.isBlob(p))throw new V("Blob is not supported. Use a Buffer instead.");return g.isArrayBuffer(p)||g.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,v,D){let O=p;if(p&&!D&&typeof p=="object"){if(g.endsWith(v,"{}"))v=r?v:v.slice(0,-2),p=JSON.stringify(p);else if(g.isArray(p)&&VC(p)||(g.isFileList(p)||g.endsWith(v,"[]"))&&(O=g.toArray(p)))return v=Xd(v),O.forEach(function(k,H){!(g.isUndefined(k)||k===null)&&e.append(o===!0?Nl([v],H,i):o===null?v:v+"[]",c(k))}),!1}return Pi(p)?!0:(e.append(Nl(D,v,i),c(p)),!1)}const u=[],h=Object.assign(WC,{defaultVisitor:d,convertValue:c,isVisitable:Pi});function _(p,v){if(!g.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+v.join("."));u.push(p),g.forEach(p,function(O,S){(!(g.isUndefined(O)||O===null)&&s.call(e,O,g.isString(S)?S.trim():S,v,h))===!0&&_(O,v?v.concat(S):[S])}),u.pop()}}if(!g.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Dl(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Do(t,e){this._pairs=[],t&&gs(t,this,e)}const Zd=Do.prototype;Zd.append=function(e,n){this._pairs.push([e,n])};Zd.toString=function(e){const n=e?function(r){return e.call(this,r,Dl)}:Dl;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function HC(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eh(t,e,n){if(!e)return t;const r=n&&n.encode||HC,s=n&&n.serialize;let i;if(s?i=s(e,n):i=g.isURLSearchParams(e)?e.toString():new Do(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class BC{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){g.forEach(this.handlers,function(r){r!==null&&e(r)})}}const kl=BC,th={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$C=typeof URLSearchParams<"u"?URLSearchParams:Do,jC=typeof FormData<"u"?FormData:null,GC=typeof Blob<"u"?Blob:null,qC=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),zC=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Me={isBrowser:!0,classes:{URLSearchParams:$C,FormData:jC,Blob:GC},isStandardBrowserEnv:qC,isStandardBrowserWebWorkerEnv:zC,protocols:["http","https","file","blob","url","data"]};function KC(t,e){return gs(t,new Me.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Me.isNode&&g.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function YC(t){return g.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function JC(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function nh(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&g.isArray(s)?s.length:o,l?(g.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!g.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&g.isArray(s[o])&&(s[o]=JC(s[o])),!a)}if(g.isFormData(t)&&g.isFunction(t.entries)){const n={};return g.forEachEntry(t,(r,s)=>{e(YC(r),s,n,0)}),n}return null}function QC(t,e,n){if(g.isString(t))try{return(e||JSON.parse)(t),g.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ko={transitional:th,adapter:Me.isNode?"http":"xhr",transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=g.isObject(e);if(i&&g.isHTMLForm(e)&&(e=new FormData(e)),g.isFormData(e))return s&&s?JSON.stringify(nh(e)):e;if(g.isArrayBuffer(e)||g.isBuffer(e)||g.isStream(e)||g.isFile(e)||g.isBlob(e))return e;if(g.isArrayBufferView(e))return e.buffer;if(g.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return KC(e,this.formSerializer).toString();if((a=g.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return gs(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),QC(e)):e}],transformResponse:[function(e){const n=this.transitional||ko.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&g.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?V.from(a,V.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Me.classes.FormData,Blob:Me.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};g.forEach(["delete","get","head","post","put","patch"],t=>{ko.headers[t]={}});const xo=ko,XC=g.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ZC=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&XC[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},xl=Symbol("internals");function In(t){return t&&String(t).trim().toLowerCase()}function Er(t){return t===!1||t==null?t:g.isArray(t)?t.map(Er):String(t)}function eS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const tS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Gs(t,e,n,r,s){if(g.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!g.isString(e)){if(g.isString(r))return e.indexOf(r)!==-1;if(g.isRegExp(r))return r.test(e)}}function nS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function rS(t,e){const n=g.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ys{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,l,c){const d=In(l);if(!d)throw new Error("header name must be a non-empty string");const u=g.findKey(s,d);(!u||s[u]===void 0||c===!0||c===void 0&&s[u]!==!1)&&(s[u||l]=Er(a))}const o=(a,l)=>g.forEach(a,(c,d)=>i(c,d,l));return g.isPlainObject(e)||e instanceof this.constructor?o(e,n):g.isString(e)&&(e=e.trim())&&!tS(e)?o(ZC(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=In(e),e){const r=g.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return eS(s);if(g.isFunction(n))return n.call(this,s,r);if(g.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=In(e),e){const r=g.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Gs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=In(o),o){const a=g.findKey(r,o);a&&(!n||Gs(r,r[a],a,n))&&(delete r[a],s=!0)}}return g.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Gs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return g.forEach(this,(s,i)=>{const o=g.findKey(r,i);if(o){n[o]=Er(s),delete n[i];return}const a=e?nS(i):String(i).trim();a!==i&&delete n[i],n[a]=Er(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return g.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&g.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[xl]=this[xl]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=In(o);r[a]||(rS(s,o),r[a]=!0)}return g.isArray(e)?e.forEach(i):i(e),this}}ys.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);g.reduceDescriptors(ys.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});g.freezeMethods(ys);const Qe=ys;function qs(t,e){const n=this||xo,r=e||n,s=Qe.from(r.headers);let i=r.data;return g.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function rh(t){return!!(t&&t.__CANCEL__)}function tr(t,e,n){V.call(this,t??"canceled",V.ERR_CANCELED,e,n),this.name="CanceledError"}g.inherits(tr,V,{__CANCEL__:!0});function sS(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const iS=Me.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const l=[];l.push(n+"="+encodeURIComponent(r)),g.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),g.isString(i)&&l.push("path="+i),g.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function oS(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function aS(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function sh(t,e){return t&&!oS(e)?aS(t,e):e}const lS=Me.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=g.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function cS(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function uS(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=r[i];o||(o=c),n[s]=l,r[s]=c;let u=i,h=0;for(;u!==s;)h+=n[u++],u=u%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),c-o<e)return;const _=d&&c-d;return _?Math.round(h*1e3/_):void 0}}function Ml(t,e){let n=0;const r=uS(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,l=r(a),c=i<=o;n=i;const d={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-i)/l:void 0,event:s};d[e?"download":"upload"]=!0,t(d)}}const dS=typeof XMLHttpRequest<"u",hS=dS&&function(t){return new Promise(function(n,r){let s=t.data;const i=Qe.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}g.isFormData(s)&&(Me.isStandardBrowserEnv||Me.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const _=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(_+":"+p))}const d=sh(t.baseURL,t.url);c.open(t.method.toUpperCase(),eh(d,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function u(){if(!c)return;const _=Qe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:_,config:t,request:c};sS(function(O){n(O),l()},function(O){r(O),l()},v),c=null}if("onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(u)},c.onabort=function(){c&&(r(new V("Request aborted",V.ECONNABORTED,t,c)),c=null)},c.onerror=function(){r(new V("Network Error",V.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||th;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),r(new V(p,v.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,t,c)),c=null},Me.isStandardBrowserEnv){const _=(t.withCredentials||lS(d))&&t.xsrfCookieName&&iS.read(t.xsrfCookieName);_&&i.set(t.xsrfHeaderName,_)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&g.forEach(i.toJSON(),function(p,v){c.setRequestHeader(v,p)}),g.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&o!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",Ml(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ml(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=_=>{c&&(r(!_||_.type?new tr(null,t,c):_),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const h=cS(d);if(h&&Me.protocols.indexOf(h)===-1){r(new V("Unsupported protocol "+h+":",V.ERR_BAD_REQUEST,t));return}c.send(s||null)})},Cr={http:UC,xhr:hS};g.forEach(Cr,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ih={getAdapter:t=>{t=g.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let s=0;s<e&&(n=t[s],!(r=g.isString(n)?Cr[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new V(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(g.hasOwnProp(Cr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!g.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Cr};function zs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new tr(null,t)}function Ll(t){return zs(t),t.headers=Qe.from(t.headers),t.data=qs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ih.getAdapter(t.adapter||xo.adapter)(t).then(function(r){return zs(t),r.data=qs.call(t,t.transformResponse,r),r.headers=Qe.from(r.headers),r},function(r){return rh(r)||(zs(t),r&&r.response&&(r.response.data=qs.call(t,t.transformResponse,r.response),r.response.headers=Qe.from(r.response.headers))),Promise.reject(r)})}const Fl=t=>t instanceof Qe?t.toJSON():t;function cn(t,e){e=e||{};const n={};function r(c,d,u){return g.isPlainObject(c)&&g.isPlainObject(d)?g.merge.call({caseless:u},c,d):g.isPlainObject(d)?g.merge({},d):g.isArray(d)?d.slice():d}function s(c,d,u){if(g.isUndefined(d)){if(!g.isUndefined(c))return r(void 0,c,u)}else return r(c,d,u)}function i(c,d){if(!g.isUndefined(d))return r(void 0,d)}function o(c,d){if(g.isUndefined(d)){if(!g.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,u){if(u in e)return r(c,d);if(u in t)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>s(Fl(c),Fl(d),!0)};return g.forEach(Object.keys(Object.assign({},t,e)),function(d){const u=l[d]||s,h=u(t[d],e[d],d);g.isUndefined(h)&&u!==a||(n[d]=h)}),n}const oh="1.5.0",Mo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Mo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ul={};Mo.transitional=function(e,n,r){function s(i,o){return"[Axios v"+oh+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new V(s(o," has been removed"+(n?" in "+n:"")),V.ERR_DEPRECATED);return n&&!Ul[o]&&(Ul[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function fS(t,e,n){if(typeof t!="object")throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new V("option "+i+" must be "+l,V.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new V("Unknown option "+i,V.ERR_BAD_OPTION)}}const Oi={assertOptions:fS,validators:Mo},ot=Oi.validators;class Jr{constructor(e){this.defaults=e,this.interceptors={request:new kl,response:new kl}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=cn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Oi.assertOptions(r,{silentJSONParsing:ot.transitional(ot.boolean),forcedJSONParsing:ot.transitional(ot.boolean),clarifyTimeoutError:ot.transitional(ot.boolean)},!1),s!=null&&(g.isFunction(s)?n.paramsSerializer={serialize:s}:Oi.assertOptions(s,{encode:ot.function,serialize:ot.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&g.merge(i.common,i[n.method]);i&&g.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=Qe.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let d,u=0,h;if(!l){const p=[Ll.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,c),h=p.length,d=Promise.resolve(n);u<h;)d=d.then(p[u++],p[u++]);return d}h=a.length;let _=n;for(u=0;u<h;){const p=a[u++],v=a[u++];try{_=p(_)}catch(D){v.call(this,D);break}}try{d=Ll.call(this,_)}catch(p){return Promise.reject(p)}for(u=0,h=c.length;u<h;)d=d.then(c[u++],c[u++]);return d}getUri(e){e=cn(this.defaults,e);const n=sh(e.baseURL,e.url);return eh(n,e.params,e.paramsSerializer)}}g.forEach(["delete","get","head","options"],function(e){Jr.prototype[e]=function(n,r){return this.request(cn(r||{},{method:e,url:n,data:(r||{}).data}))}});g.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(cn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Jr.prototype[e]=n(),Jr.prototype[e+"Form"]=n(!0)});const Sr=Jr;class Lo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new tr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Lo(function(s){e=s}),cancel:e}}}const pS=Lo;function _S(t){return function(n){return t.apply(null,n)}}function mS(t){return g.isObject(t)&&t.isAxiosError===!0}const Ni={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ni).forEach(([t,e])=>{Ni[e]=t});const gS=Ni;function ah(t){const e=new Sr(t),n=Bd(Sr.prototype.request,e);return g.extend(n,Sr.prototype,e,{allOwnKeys:!0}),g.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return ah(cn(t,s))},n}const ie=ah(xo);ie.Axios=Sr;ie.CanceledError=tr;ie.CancelToken=pS;ie.isCancel=rh;ie.VERSION=oh;ie.toFormData=gs;ie.AxiosError=V;ie.Cancel=ie.CanceledError;ie.all=function(e){return Promise.all(e)};ie.spread=_S;ie.isAxiosError=mS;ie.mergeConfig=cn;ie.AxiosHeaders=Qe;ie.formToJSON=t=>nh(g.isHTMLForm(t)?new FormData(t):t);ie.getAdapter=ih.getAdapter;ie.HttpStatusCode=gS;ie.default=ie;const yS=ie;function vS({token:t,payload:e}){return yS.post("https://qr-fcm.onrender.com/send-notification",{token:t,payload:{title:e.radioOptions,body:e.desc}})}async function ES(t){let e=t.key;const n=jE(rC,`messages/${e}`),r=GE(n);try{await Wd(r,t),await vS({payload:t,token:"ddhHWP68RruhKy4vZvSbpK:APA91bHDOPLvMq_vNAkpwS8QTQdQ-66pUvMPgNT8trDB_z-FHse7KKnKbAivqQFMPE2BNltwkqxvnLS7LFR17bWpusCkRvcmgx0v3qKRH8B29524MccrXEOOYcVEdJTV-j5UdjE4NIeB"})}catch(s){throw new Error(s)}}const CS="/assets/correct-80ef6878.png",SS=({message:t})=>{var N,le,re,ye;const{register:e,formState:n,handleSubmit:r,watch:s}=si(),{register:i,formState:o,handleSubmit:a,watch:l}=si(),[c,d]=ht(!1),[u,h]=ht(!1),[_,p]=ht(null),[v,D]=ht("contact");async function O(x){h(!0);const J=new pg(Al,"recaptcha-container",{callback:()=>{d(!0)}});J.render();try{const ce=await gg(Al,x,J);return p(ce),ce}catch(ce){return console.log(ce),null}}const S=async x=>{const J="+91"+x.contact,ce=new Date;t.current={...t.current,contactValue:J,key:"0FK3vlS0WFOmvQ9KiuviNfHDBTj1",viewed:"false",timeStamp:ce},console.log(t.current);try{await O(J),Ee.success("OTP sent successfully"),d(!1),D("otp")}catch(W){d(!1),console.log("The error is",W)}},k=async x=>{d(!0);const J=x.otp;try{await _.confirm(J),Ee.success("OTP successfully verified"),d(!1),await ES(t.current),D("successful")}catch(ce){Ee.error("Invalid OTP. Try again."),console.log(ce)}},H=()=>{D("contact")};return I(Rc,{children:[v!="successful"&&I(Tc,{}),v=="contact"&&I("form",{onSubmit:r(S),children:[I(ii,{...e("contact",{required:"Phone number can not be empty",validate:x=>/^(?!0{10}$)[1-9][0-9]{9}$/.test(x)||"Given number is invalid"}),maxLength:10,label:"Contact Number",type:"tel",error:(le=(N=n.errors)==null?void 0:N.contact)==null?void 0:le.message,placeholder:"Enter you contact number"}),I("div",{id:"recaptcha-container",className:"mb-2"}),I(pr,{type:"submit",label:"Get OTP",loading:c,variant:"btn-wide",disable:u}),u==!0&&I("label",{className:" label-text-alt text-black text-center font-medium",children:" *The form will auto submit as soon recaptcha is verified"})]}),v=="otp"&&I("form",{onSubmit:a(k),children:[I(ii,{...i("otp",{required:"Please enter the otp",validate:x=>/^\d{6}$/.test(x)||"The OTP must conatain 6 digits"}),maxLength:6,label:"Enter OTP",error:(ye=(re=o.errors)==null?void 0:re.otp)==null?void 0:ye.message,placeholder:"Enter 6-digit otp"}),I("div",{className:"flex flex-col gap-5",children:[I(pr,{type:"submit",label:"Verify",loading:c,variant:"btn-wide",disabled:!1}),I(pr,{label:"Edit Phone Number",onClick:H,variant:"btn-wide btn-outline text-black"})]})]}),v=="successful"&&I("div",{className:"flex justify-center items-center flex-col gap-5",children:[I("img",{height:50,width:50,src:CS}),I("div",{className:"text-center",children:[I("p",{children:"You have been verified!"}),I("p",{children:"The message has been sent to the owner."}),I("p",{children:"You might receive acknowledgement via sms or callback."})]})]})]})},bS=()=>I(Oe,{children:I("p",{className:" text-center text-3xl text-black font-bold pt-6 mb-6 sm:mb-12",children:"XYZ"})});function wS(){const[t,e]=ht("userform"),n=Xl({});return I("div",{className:" min-h-screen bg-[#f5f5f5] flex  justify-center items-center px-5 py-5",children:[I("div",{className:"h-max bg-[#f5f5f5] flex flex-col justify-center items-center sm:p-20",children:[I(bS,{}),t=="userform"&&I(yp,{setScreen:e,message:n}),t=="otp"&&I(SS,{setScreen:e,message:n})]}),I(Jf,{})]})}tn(I(wS,{}),document.getElementById("app"));
