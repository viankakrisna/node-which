var t="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,n=require("path"),e=t?";":":",r=require("isexe"),i=function(t){return Object.assign(new Error("not found: "+t),{code:"ENOENT"})},o=function(n,r){var i=r.colon||e,o=n.match(/\//)||t&&n.match(/\\/)?[""]:(t?[process.cwd()]:[]).concat((r.path||process.env.PATH||"").split(i)),s=t?r.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",c=t?s.split(i):[""];return t&&-1!==n.indexOf(".")&&""!==c[0]&&c.unshift(""),{pathEnv:o,pathExt:c,pathExtExe:s}},s=function(t,e,s){"function"==typeof e&&(s=e,e={}),e||(e={});var c=o(t,e),u=c.pathEnv,a=c.pathExt,h=c.pathExtExe,l=[],p=function(r){return new Promise(function(o,s){if(r===u.length)return e.all&&l.length?o(l):s(i(t));var c=u[r],a=/^".*"$/.test(c)?c.slice(1,-1):c,h=n.join(a,t),p=!a&&/^\.[\\\/]/.test(t)?t.slice(0,2)+h:h;o(f(p,r,0))})},f=function(t,n,i){return new Promise(function(o,s){if(i===a.length)return o(p(n+1));var c=a[i];r(t+c,{pathExt:h},function(r,s){if(!r&&s){if(!e.all)return o(t+c);l.push(t+c)}return o(f(t,n,i+1))})})};return s?p(0).then(function(t){return s(null,t)},s):p(0)};module.exports=s,s.sync=function(t,e){for(var s=o(t,e=e||{}),c=s.pathEnv,u=s.pathExt,a=s.pathExtExe,h=[],l=0;l<c.length;l++)for(var p=c[l],f=/^".*"$/.test(p)?p.slice(1,-1):p,E=n.join(f,t),v=!f&&/^\.[\\\/]/.test(t)?t.slice(0,2)+E:E,x=0;x<u.length;x++){var g=v+u[x];try{if(r.sync(g,{pathExt:a})){if(!e.all)return g;h.push(g)}}catch(t){}}if(e.all&&h.length)return h;if(e.nothrow)return null;throw i(t)};
//# sourceMappingURL=which.module.js.map
