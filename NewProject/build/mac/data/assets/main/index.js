System.register("chunks:///_virtual/assetManagerIniter.ts",["cc"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.cclegacy,n=t.assetManager}],execute:function(){t("initAssetManager",(function(t){if(!i){const e=e=>{const n=e.output=e.input;for(let e=0;e<n.length;e++){const i=n[e];if(!i.url||!i.isNative)continue;let r=i.uuid;const s=r.split("@"),c=t.t(s[0])||s[0];s[0]=c,r=s.join("@");const o=i.uuid,u=i.url.replace(`${o.slice(0,2)}/${o}`,`${r.slice(0,2)}/${r}`),a=`[localization-editor]: url redirect item.url ${i.url} to ${u}`;{if(!i.config)return;const t=i.config.getAssetInfo(r);t&&!t.redirect&&(i.url=u,console.debug(a))}}};n.transformPipeline.append(e),i=!0}})),e._RF.push({},"8726d45kThEV4CY9LZpwniC","assetManagerIniter",void 0);let i=!1;e._RF.pop()}}}));

System.register("chunks:///_virtual/auto-config-intl-manager.ts",["cc","./assetManagerIniter.ts","./L10nManager.ts"],(function(){"use strict";var t,n,a;return{setters:[function(n){t=n.cclegacy},function(t){n=t.initAssetManager},function(t){a=t.default}],execute:async function(){t._RF.push({},"2f21bx4gAFNj6dct9qDHJHH","auto-config-intl-manager",void 0);await a.reloadResourceData()&&n(a),t._RF.pop()}}}));

System.register("chunks:///_virtual/ICUComponent.ts",["cc"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"7a9702ZfUJLAYlcof0GxBG1","ICUComponent",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/ICUOptions.ts",["cc"],(function(){"use strict";var t;return{setters:[function(c){t=c.cclegacy}],execute:function(){t._RF.push({},"dc153GItvdCNIAlIBY8vQ+M","ICUOptions",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/ICUType.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){var i;t._RF.push({},"e5dc4ljkiFFpI9LqK8hBCPl","ICUType",void 0),function(e){e[e.DateTime=0]="DateTime",e[e.Number=1]="Number",e[e.List=2]="List",e[e.RelativeTime=3]="RelativeTime"}(i||(i={}));e("default",i);t._RF.pop()}}}));

System.register("chunks:///_virtual/ILanguagesJsonInfo.ts",["cc"],(function(){"use strict";var n;return{setters:[function(s){n=s.cclegacy}],execute:function(){n._RF.push({},"ad0d41s8+1HwoRiXLm6pqLm","ILanguagesJsonInfo",void 0),n._RF.pop()}}}));

System.register("chunks:///_virtual/Intl.DateTimeFormat.ts",["cc","./index.mjs_cjs=&original=3.js"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy},null],execute:function(){t._RF.push({},"e9a80PQf4NCbrGHbRyqeR3G","Intl.DateTimeFormat",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/Intl.DisplayNames.ts",["cc","./index.mjs_cjs=&original=4.js"],(function(){"use strict";var s;return{setters:[function(e){s=e.cclegacy},null],execute:function(){s._RF.push({},"495ec/lnidLPqBI3w1n2h8h","Intl.DisplayNames",void 0),s._RF.pop()}}}));

System.register("chunks:///_virtual/Intl.getCanonicalLocales.ts",["cc","./index.mjs_cjs=&original=8.js"],(function(){"use strict";var c;return{setters:[function(n){c=n.cclegacy},null],execute:function(){c._RF.push({},"306c9DmZBpG34ODB+R39JuR","Intl.getCanonicalLocales",void 0),c._RF.pop()}}}));

System.register("chunks:///_virtual/Intl.ListFormat.ts",["cc","./index.mjs_cjs=&original=6.js"],(function(){"use strict";var t;return{setters:[function(n){t=n.cclegacy},null],execute:function(){t._RF.push({},"9ff49wVjnVE45VcPTH0LXg9","Intl.ListFormat",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/Intl.Locale.ts",["cc","./index.mjs_cjs=&original=2.js"],(function(){"use strict";var t;return{setters:[function(c){t=c.cclegacy},null],execute:function(){t._RF.push({},"3d4a4AB7Y5BMbJFtrWAQGdx","Intl.Locale",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/Intl.NumberFormat.ts",["cc","./index.mjs_cjs=&original=5.js"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy},null],execute:function(){t._RF.push({},"60bb84o6j5F7oMUkRzgHciw","Intl.NumberFormat",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/Intl.PluralRules.ts",["cc","./index.mjs_cjs=&original=.js"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy},null],execute:function(){t._RF.push({},"c9594RdIOFIPIqnCMoH103U","Intl.PluralRules",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/Intl.RelativeTimeFormat.ts",["cc","./index.mjs_cjs=&original=7.js"],(function(){"use strict";var t;return{setters:[function(e){t=e.cclegacy},null],execute:function(){t._RF.push({},"1d313uE1QFD14FzQxUULCXT","Intl.RelativeTimeFormat",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/L10nComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./env"],(function(e){"use strict";var t,n,r,o,i,s;return{setters:[function(e){t=e.applyDecoratedDescriptor},function(e){n=e.cclegacy,r=e.Label,o=e._decorator,i=e.Component},function(e){s=e.EDITOR}],execute:function(){var l,a,p,c,u,d,g;n._RF.push({},"64a56e3cKhJIYlOsrVQprpv","L10nComponent",void 0);const{ccclass:h,property:b,disallowMultiple:v,requireComponent:y,menu:m}=o;e("default",(l=h("L10nComponent"),a=y(r),p=v(),c=m("hidden:LocalizationEditor"),u=b({readonly:!0}),l(d=a(d=p(d=c((t((g=class extends i{constructor(){super(),this.label=void 0}get string(){var e;return(null==(e=this.label)?void 0:e.string)||""}onLoad(){this.label=this.node.getComponent(r)}start(){this.render()}render(){}preview(e){if(this.label&&s){const t=this.label.string;this.label._string=e,this.label.updateRenderData(!0),cce.Engine.repaintInEditMode(),this.label._string=t}}}).prototype,"string",[u],Object.getOwnPropertyDescriptor(g.prototype,"string"),g.prototype),d=g))||d)||d)||d)||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/L10nLabel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./L10nManager.ts","./L10nComponent.ts"],(function(t){"use strict";var e,o,n,r,i,s,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.initializerDefineProperty},function(t){n=t.cclegacy,r=t.CCInteger,i=t._decorator},function(t){s=t.default},function(t){c=t.default}],execute:function(){var u,p,a,l,y,d,b,f,h,L,_;n._RF.push({},"30d83qzRfZHLYMFn4KA9PG4","L10nLabel",void 0);const{ccclass:g,property:k,executeInEditMode:v,menu:m}=i;t("default",(u=g("L10nLabel"),p=v(!0),a=m("LocalizationEditor"),l=k({visible:!1}),y=k({visible:!0}),d=k({visible:!1}),b=k({type:r,visible:!0}),u(f=p(f=a((L=e((h=class extends c{constructor(...t){super(...t),o(this,"_key",L,this),o(this,"_count",_,this)}set key(t){this._key=t,this.render()}get key(){return this._key}set count(t){this._count=t,this.render()}get count(){return this._count}onLoad(){"function"==typeof super.onLoad&&super.onLoad()}render(){const t=s.t(this._key,{count:this._count});void 0!==this.label&&void 0!==t&&(this.label.string=t)}}).prototype,"_key",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),e(h.prototype,"key",[y],Object.getOwnPropertyDescriptor(h.prototype,"key"),h.prototype),_=e(h.prototype,"_count",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),e(h.prototype,"count",[b],Object.getOwnPropertyDescriptor(h.prototype,"count"),h.prototype),f=h))||f)||f)||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/L10nListenEvent.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){var t;n._RF.push({},"34153BqzJ9LR4lhJDevpA4f","L10nListenEvent",void 0),function(e){e.languageChanged="languageChanged",e.onMissingKey="missingKey"}(t||(t={}));e("default",t);n._RF.pop()}}}));

System.register("chunks:///_virtual/L10nManager.ts",["cc","./i18next.js","./ResourceDataManager.ts","./localization-global.ts"],(function(t){"use strict";var e,n,l,a,i,o;return{setters:[function(t){e=t.cclegacy,n=t.game},function(t){l=t.createInstance},function(t){a=t.default},function(t){i=t.pluginName,o=t.mainName}],execute:function(){e._RF.push({},"2856a7GSV9Fbb53nOimJ33J","L10nManager",void 0);class s{constructor(){this._intl=void 0,this._options={}}createIntl(){if(!a.resourceList)return;this._intl=l();let t=null;try{t=localStorage.getItem(this._options.localStorageLanguageKey??s.LOCAL_STORAGE_LANGUAGE_KEY)}catch(t){}const e=t??a.resourceList.defaultLanguage,n={lng:e,fallbackLng:this._options.fallbackLanguage??a.resourceList.fallbackLanguage??e,resources:{...a.resourceBundle},initImmediate:!1,load:"currentOnly",preload:a.resourceList.languages};this._intl.init(n)}config(t){for(const[e,n]of Object.entries(t))n&&(this._options=n);this.createIntl()}async reloadResourceData(){var t;return await a.readResourceList(),a.resourceList?(console.log("loaded translate language list:",a.resourceList),await a.readResourceBundle(),null!=(t=a.resourceList)&&t.defaultLanguage?(console.log("loaded translate language data:",a.resourceBundle),this.config({}),!0):(console.log(`[${i}] not found translate language data, skip init l10n`),!1)):(console.log(`[${i}] not found translate language list, skip init l10n`),!1)}async changeLanguage(t){t?(console.log(`[${i}] will change language to`,t),this._intl?(await this._intl.changeLanguage(t),localStorage.setItem(s.LOCAL_STORAGE_LANGUAGE_KEY,t),console.log(`[${i}] game will restart`),n.restart()):console.log(`[${i}] language data not load, please confirm whether the language data is included in the build`)):console.warn(`[${i}] invalid language tag`)}addResourceBundle(t){var e,n,l,i;((null==(e=this._intl)?void 0:e.isInitialized)||this.createIntl(),null!=(n=this._intl)&&n.hasResourceBundle(t,s.DEFAULT_NAMESPACE))&&(null==(i=this._intl)||i.removeResourceBundle(t,s.DEFAULT_NAMESPACE));const o=a.resourceBundle[t][s.DEFAULT_NAMESPACE];null==(l=this._intl)||l.addResourceBundle(t,s.DEFAULT_NAMESPACE,o,!0,!0)}t(t,e){var n;return(null==(n=this._intl)?void 0:n.isInitialized)?this._intl.t(t,e):t}tn(t,e){var n,l;if(!(null==(n=this._intl)?void 0:n.isInitialized))return t.toString();const a={};Object.assign(a,e);for(const t of Object.keys(a))("string"==typeof a[t]&&0===a[t].length||"number"==typeof a[t]&&0===a[t])&&delete a[t];return new Intl.NumberFormat(null==(l=this._intl)?void 0:l.language,a).format(t)}td(t,e){var n,l;if(!(null==(n=this._intl)?void 0:n.isInitialized))return t.toString();const a={};Object.assign(a,e);for(const t of Object.keys(a))"string"==typeof a[t]&&0===a[t].length&&delete a[t];return new Intl.DateTimeFormat(null==(l=this._intl)?void 0:l.language,a).format(t)}tt(t,e,n){var l,a;if(!(null==(l=this._intl)?void 0:l.isInitialized))return t.toString();const i={};Object.assign(i,n);for(const t of Object.keys(i))"string"==typeof i[t]&&0===i[t].length&&delete i[t];return new Intl.RelativeTimeFormat(null==(a=this._intl)?void 0:a.language,i).format(t,e)}tl(t){var e,n;return(null==(e=this._intl)?void 0:e.isInitialized)?new Intl.ListFormat(null==(n=this._intl)?void 0:n.language).format(t):t.toString()}exists(t){var e;return(null==(e=this._intl)?void 0:e.exists(t))??!1}get currentLanguage(){var t;return(null==(t=this._intl)?void 0:t.language)??""}get languages(){var t;return(null==(t=a.resourceList)?void 0:t.languages)??[]}direction(t){return(t?new Intl.Locale(t):new Intl.Locale(this._intl.language)).textInfo().direction}on(t,e){var n;null==(n=this._intl)||n.on(t,e)}off(t,e){var n;null==(n=this._intl)||n.off(t,e)}getResourceBundle(t){var e;return null==(e=this._intl)?void 0:e.getResourceBundle(t,s.DEFAULT_NAMESPACE)}}t("L10nManager",s),s.LOCAL_STORAGE_LANGUAGE_KEY=`${o}/language`,s.DEFAULT_NAMESPACE="translation",s.l10n=new s;t("default",s.l10n);e._RF.pop()}}}));

System.register("chunks:///_virtual/L10nOptions.ts",["cc"],(function(){"use strict";var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"b4618IbsRtLLbRp2dQrE3EI","L10nOptions",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/localization-global.ts",["cc"],(function(t){"use strict";var a;return{setters:[function(t){a=t.cclegacy}],execute:function(){a._RF.push({},"02d9etKgNBGqLPpvU7RX29o","localization-global",void 0);t("pluginName","Localization Editor"),t("mainName","localization-editor"),t("runtimeBundleName","l10n"),t("runtimeDataPath","languages");a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./ICUComponent.ts","./L10nComponent.ts","./L10nLabel.ts","./ICUOptions.ts","./ICUType.ts","./ILanguagesJsonInfo.ts","./L10nListenEvent.ts","./L10nManager.ts","./L10nOptions.ts","./ResourceDataManager.ts","./assetManagerIniter.ts","./auto-config-intl-manager.ts","./localization-global.ts","./Intl.DateTimeFormat.ts","./Intl.DisplayNames.ts","./Intl.ListFormat.ts","./Intl.Locale.ts","./Intl.NumberFormat.ts","./Intl.PluralRules.ts","./Intl.RelativeTimeFormat.ts","./Intl.getCanonicalLocales.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ResourceDataManager.ts",["cc","./localization-global.ts"],(function(a){"use strict";var e,n,s,t,u,o,r,l;return{setters:[function(a){e=a.cclegacy,n=a.assetManager,s=a.settings,t=a.Settings},function(a){u=a.runtimeBundleName,o=a.pluginName,r=a.runtimeDataPath,l=a.mainName}],execute:function(){e._RF.push({},"0a95a0kirtJnJnMnZWSRaFn","ResourceDataManager",void 0);class i{constructor(){this.resourceList=void 0,this.resourceBundle={},this._languagesJsonInfo=void 0}async languagesJsonInfo(){if(!this._languagesJsonInfo){const a=await new Promise((a=>{n.loadBundle(u,((e,n)=>{e?(console.warn(`[${o}] not found resources bundle，skip load ${r}`),a(void 0)):n.load(r,((e,n)=>{a(e?void 0:n)}))}))}));if(null==a||!a.json)return;this._languagesJsonInfo=a.json}return this._languagesJsonInfo}async readResourceList(){{const a=await this.languagesJsonInfo();a&&a.languages&&(this.resourceList={defaultLanguage:a.defaultLanguage,fallbackLanguage:a.fallbackLanguage,languages:a.languages.map((a=>a.locale))})}}async readResourceBundle(a){var e,n;return null==(e=await this.languagesJsonInfo())||null==(n=e.languages)||n.forEach((a=>{this.resourceBundle[a.locale]=a.data})),this.resourceBundle}async loadAny(a){return(await Editor.Message.request(l,"get-resource-data",[a]))[0]}async checkBundle(a){const e=s.querySettings(t.Category.ASSETS,"preloadBundles");return!!(null==e?void 0:e.find((e=>e.bundle===a)))}}a("ResourceDataManager",i),i.instance=new i;a("default",i.instance);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});