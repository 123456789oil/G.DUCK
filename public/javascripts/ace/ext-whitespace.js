ace.define("ace/ext/whitespace",["require","exports","module","ace/lib/lang"],function(e,t,n){"use strict";var r=e("../lib/lang");t.$detectIndentation=function(e,t){function c(e){var t=0;for(var r=e;r<n.length;r+=e)t+=n[r]||0;return t}var n=[],r=[],i=0,s=0,o=Math.min(e.length,1e3);for(var u=0;u<o;u++){var a=e[u];if(!/^\s*[^*+\-\s]/.test(a))continue;a[0]=="	"&&i++;var f=a.match(/^ */)[0].length;if(f&&a[f]!="	"){var l=f-s;l>0&&!(s%l)&&!(f%l)&&(r[l]=(r[l]||0)+1),n[f]=(n[f]||0)+1}s=f;while(u<o&&a[a.length-1]=="\\")a=e[u++]}var h=r.reduce(function(e,t){return e+t},0),p={score:0,length:0},d=0;for(var u=1;u<12;u++){var v=c(u);u==1?(d=v,v=n[1]?.9:.8,n.length||(v=0)):v/=d,r[u]&&(v+=r[u]/h),v>p.score&&(p={score:v,length:u})}if(p.score&&p.score>1.4)var m=p.length;if(i>d+1)return{ch:"	",length:m};if(d>i+1)return{ch:" ",length:m}},t.detectIndentation=function(e){var n=e.getLines(0,1e3),r=t.$detectIndentation(n)||{};return r.ch&&e.setUseSoftTabs(r.ch==" "),r.length&&e.setTabSize(r.length),r},t.trimTrailingSpace=function(e,t){var n=e.getDocument(),r=n.getAllLines(),i=t?-1:0;for(var s=0,o=r.length;s<o;s++){var u=r[s],a=u.search(/\s+$/);a>i&&n.removeInLine(s,a,u.length)}},t.convertIndentation=function(e,t,n){var i=e.getTabString()[0],s=e.getTabSize();n||(n=s),t||(t=i);var o=t=="	"?t:r.stringRepeat(t,n),u=e.doc,a=u.getAllLines(),f={},l={};for(var c=0,h=a.length;c<h;c++){var p=a[c],d=p.match(/^\s*/)[0];if(d){var v=e.$getStringScreenWidth(d)[0],m=Math.floor(v/s),g=v%s,y=f[m]||(f[m]=r.stringRepeat(o,m));y+=l[g]||(l[g]=r.stringRepeat(" ",g)),y!=d&&(u.removeInLine(c,0,d.length),u.insertInLine({row:c,column:0},y))}}e.setTabSize(n),e.setUseSoftTabs(t==" ")},t.$parseStringArg=function(e){var t={};/t/.test(e)?t.ch="	":/s/.test(e)&&(t.ch=" ");var n=e.match(/\d+/);return n&&(t.length=parseInt(n[0],10)),t},t.$parseArg=function(e){return e?typeof e=="string"?t.$parseStringArg(e):typeof e.text=="string"?t.$parseStringArg(e.text):e:{}},t.commands=[{name:"detectIndentation",exec:function(e){t.detectIndentation(e.session)}},{name:"trimTrailingSpace",exec:function(e){t.trimTrailingSpace(e.session)}},{name:"convertIndentation",exec:function(e,n){var r=t.$parseArg(n);t.convertIndentation(e.session,r.ch,r.length)}},{name:"setIndentation",exec:function(e,n){var r=t.$parseArg(n);r.length&&e.session.setTabSize(r.length),r.ch&&e.session.setUseSoftTabs(r.ch==" ")}}]});
                (function() {
                    ace.require(["ace/ext/whitespace"], function() {});
                })();
            