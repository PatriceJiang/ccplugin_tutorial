System.register("chunks:///_virtual/assetManagerIniter.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, assetManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }],
    execute: function () {
      exports('initAssetManager', initAssetManager);

      cclegacy._RF.push({}, "8726d45kThEV4CY9LZpwniC", "assetManagerIniter", undefined);

      let initialized = false;

      function initAssetManager(intl) {
        if (!initialized) {
          const redirectTask = task => {
            const input = task.output = task.input;

            for (let i = 0; i < input.length; i++) {
              const item = input[i];

              if (!item.url || !item.isNative) {
                continue;
              }

              let newUUID = item.uuid;
              const arr = newUUID.split('@');
              const translatedUUID = intl.t(arr[0]) || arr[0];
              arr[0] = translatedUUID;
              newUUID = arr.join('@');
              const oldUUID = item.uuid;
              const newURL = item.url.replace(`${oldUUID.slice(0, 2)}/${oldUUID}`, `${newUUID.slice(0, 2)}/${newUUID}`);
              const redirectLog = `[localization-editor]: url redirect item.url ${item.url} to ${newURL}`;
              {
                if (!item.config) {
                  return;
                }

                const newAsset = item.config.getAssetInfo(newUUID);

                if (newAsset && !newAsset.redirect) {
                  item.url = newURL;
                  console.debug(redirectLog);
                }
              }
            }

            return;
          };

          assetManager.transformPipeline.append(redirectTask);
          initialized = true;
        }
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/auto-config-intl-manager.ts", ['cc', './assetManagerIniter.ts', './L10nManager.ts'], function () {
  'use strict';

  var cclegacy, initAssetManager, l10n;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      initAssetManager = module.initAssetManager;
    }, function (module) {
      l10n = module.default;
    }],
    execute: async function () {
      cclegacy._RF.push({}, "2f21bx4gAFNj6dct9qDHJHH", "auto-config-intl-manager", undefined);

      const loadResult = await l10n['reloadResourceData']();

      if (loadResult) {
        initAssetManager(l10n);
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ICUComponent.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7a9702ZfUJLAYlcof0GxBG1", "ICUComponent", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ICUOptions.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dc153GItvdCNIAlIBY8vQ+M", "ICUOptions", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ICUType.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e5dc4ljkiFFpI9LqK8hBCPl", "ICUType", undefined);
      /**
       * Intl formatting
       */


      var ICUType;

      (function (ICUType) {
        ICUType[ICUType["DateTime"] = 0] = "DateTime";
        ICUType[ICUType["Number"] = 1] = "Number";
        ICUType[ICUType["List"] = 2] = "List";
        ICUType[ICUType["RelativeTime"] = 3] = "RelativeTime";
      })(ICUType || (ICUType = {}));

      var ICUType$1 = exports('default', ICUType);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ILanguagesJsonInfo.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ad0d41s8+1HwoRiXLm6pqLm", "ILanguagesJsonInfo", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Intl.DateTimeFormat.ts", ['cc', './index.mjs_cjs=&original=2.js'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "e9a80PQf4NCbrGHbRyqeR3G", "Intl.DateTimeFormat", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Intl.DisplayNames.ts", ['cc', './index.mjs_cjs=&original=.js'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "495ec/lnidLPqBI3w1n2h8h", "Intl.DisplayNames", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Intl.getCanonicalLocales.ts", ['cc', './index.mjs_cjs=&original=6.js'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "306c9DmZBpG34ODB+R39JuR", "Intl.getCanonicalLocales", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Intl.ListFormat.ts", ['cc', './index.mjs_cjs=&original=8.js'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "9ff49wVjnVE45VcPTH0LXg9", "Intl.ListFormat", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Intl.Locale.ts", ['cc', './index.mjs_cjs=&original=3.js'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "3d4a4AB7Y5BMbJFtrWAQGdx", "Intl.Locale", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Intl.NumberFormat.ts", ['cc', './index.mjs_cjs=&original=4.js'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "60bb84o6j5F7oMUkRzgHciw", "Intl.NumberFormat", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Intl.PluralRules.ts", ['cc', './index.mjs_cjs=&original=5.js'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "c9594RdIOFIPIqnCMoH103U", "Intl.PluralRules", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Intl.RelativeTimeFormat.ts", ['cc', './index.mjs_cjs=&original=7.js'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "1d313uE1QFD14FzQxUULCXT", "Intl.RelativeTimeFormat", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/L10nComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, cclegacy, Label, _decorator, Component, EDITOR;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      EDITOR = module.EDITOR;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

      cclegacy._RF.push({}, "64a56e3cKhJIYlOsrVQprpv", "L10nComponent", undefined);

      const {
        ccclass,
        property,
        disallowMultiple,
        requireComponent,
        menu
      } = _decorator;
      let L10nComponent = exports('default', (_dec = ccclass('L10nComponent'), _dec2 = requireComponent(Label), _dec3 = disallowMultiple(), _dec4 = menu('hidden:LocalizationEditor'), _dec5 = property({
        readonly: true
      }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = class L10nComponent extends Component {
        constructor() {
          super();
          this.label = undefined;
        }

        get string() {
          var _this$label;

          return ((_this$label = this.label) == null ? void 0 : _this$label.string) || '';
        }

        onLoad() {
          this.label = this.node.getComponent(Label);
        }

        start() {
          this.render();
        }

        render() {}

        preview(value) {
          if (this.label && EDITOR) {
            const originalString = this.label.string; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            this.label._string = value;
            this.label.updateRenderData(true); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            cce.Engine.repaintInEditMode(); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            this.label._string = originalString;
          }
        }

      }, _applyDecoratedDescriptor(_class2.prototype, "string", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "string"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/L10nLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './L10nManager.ts', './L10nComponent.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, CCInteger, _decorator, l10n, L10nComponent;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      CCInteger = module.CCInteger;
      _decorator = module._decorator;
    }, function (module) {
      l10n = module.default;
    }, function (module) {
      L10nComponent = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "30d83qzRfZHLYMFn4KA9PG4", "L10nLabel", undefined);

      const {
        ccclass,
        property,
        executeInEditMode,
        menu
      } = _decorator;
      let L10nLabel = exports('default', (_dec = ccclass('L10nLabel'), _dec2 = executeInEditMode(true), _dec3 = menu('LocalizationEditor'), _dec4 = property({
        visible: false
      }), _dec5 = property({
        visible: true
      }), _dec6 = property({
        visible: false
      }), _dec7 = property({
        type: CCInteger,
        visible: true
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class L10nLabel extends L10nComponent {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_key", _descriptor, this);

          _initializerDefineProperty(this, "_count", _descriptor2, this);
        }

        set key(value) {
          this._key = value;
          this.render();
        }

        get key() {
          return this._key;
        }

        set count(value) {
          this._count = value;
          this.render();
        }

        get count() {
          return this._count;
        }

        onLoad() {
          if (typeof super.onLoad === 'function') {
            super.onLoad();
          }
        }

        render() {
          const translatedString = l10n.t(this._key, {
            count: this._count
          });

          if (typeof this.label === 'undefined' || typeof translatedString === 'undefined') {
            return;
          }

          {
            this.label.string = translatedString;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_key", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "key", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "key"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_count", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "count", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "count"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/L10nListenEvent.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34153BqzJ9LR4lhJDevpA4f", "L10nListenEvent", undefined);

      var L10nListenEvent;

      (function (L10nListenEvent) {
        L10nListenEvent["languageChanged"] = "languageChanged";
        L10nListenEvent["onMissingKey"] = "missingKey";
      })(L10nListenEvent || (L10nListenEvent = {}));

      var L10nListenEvent$1 = exports('default', L10nListenEvent);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/L10nManager.ts", ['cc', './i18next.js', './ResourceDataManager.ts', './localization-global.ts'], function (exports) {
  'use strict';

  var cclegacy, game, createInstance, resourceDataManager, pluginName, mainName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
    }, function (module) {
      createInstance = module.createInstance;
    }, function (module) {
      resourceDataManager = module.default;
    }, function (module) {
      pluginName = module.pluginName;
      mainName = module.mainName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2856a7GSV9Fbb53nOimJ33J", "L10nManager", undefined);

      class L10nManager {
        /**
         * @zh
         * i18n 实例
         * @en
         * i18next instance
         */
        constructor() {
          this._intl = undefined;
          this._options = {};
        }

        createIntl() {
          if (!resourceDataManager.resourceList) return;
          this._intl = createInstance();
          let localStorageLanguage = null;

          try {
            localStorageLanguage = localStorage.getItem(this._options.localStorageLanguageKey ?? L10nManager.LOCAL_STORAGE_LANGUAGE_KEY);
          } catch (e) {
            /* eslint-disable-next-line no-empty */
          }

          const language = localStorageLanguage ?? resourceDataManager.resourceList.defaultLanguage;
          const i18nextOptions = {
            lng: language,
            fallbackLng: this._options.fallbackLanguage ?? resourceDataManager.resourceList.fallbackLanguage ?? language,
            resources: { ...resourceDataManager.resourceBundle
            },
            initImmediate: false,
            load: 'currentOnly',
            preload: resourceDataManager.resourceList.languages
          };
          void this._intl.init(i18nextOptions);
        }
        /** 初始化 i18next */


        config(options) {
          for (const [key, value] of Object.entries(options)) {
            if (value) {
              this._options = value;
            }
          }

          this.createIntl();
        }

        async reloadResourceData() {
          var _resourceDataManager$;

          await resourceDataManager.readResourceList();

          if (!resourceDataManager.resourceList) {
            console.log(`[${pluginName}] not found translate language list, skip init l10n`);
            return false;
          }

          console.log('loaded translate language list:', resourceDataManager.resourceList);
          await resourceDataManager.readResourceBundle();

          if (!((_resourceDataManager$ = resourceDataManager.resourceList) != null && _resourceDataManager$.defaultLanguage)) {
            console.log(`[${pluginName}] not found translate language data, skip init l10n`);
            return false;
          }

          console.log('loaded translate language data:', resourceDataManager.resourceBundle);
          this.config({});
          return true;
        }

        async changeLanguage(language) {
          if (!language) {
            console.warn(`[${pluginName}] invalid language tag`);
            return;
          }

          console.log(`[${pluginName}] will change language to`, language);

          if (this._intl) {
            await this._intl.changeLanguage(language);
            {
              localStorage.setItem(L10nManager.LOCAL_STORAGE_LANGUAGE_KEY, language);
              console.log(`[${pluginName}] game will restart`);
              game.restart();
            }
          } else {
            console.log(`[${pluginName}] language data not load, please confirm whether the language data is included in the build`);
          }
        }

        addResourceBundle(language) {
          var _this$_intl, _this$_intl2, _this$_intl4;

          if (!(((_this$_intl = this._intl) == null ? void 0 : _this$_intl.isInitialized) ?? false)) {
            this.createIntl();
          }

          if ((_this$_intl2 = this._intl) != null && _this$_intl2.hasResourceBundle(language, L10nManager.DEFAULT_NAMESPACE)) {
            var _this$_intl3;

            (_this$_intl3 = this._intl) == null ? void 0 : _this$_intl3.removeResourceBundle(language, L10nManager.DEFAULT_NAMESPACE);
          }

          const resourceItem = resourceDataManager.resourceBundle[language][L10nManager.DEFAULT_NAMESPACE];
          (_this$_intl4 = this._intl) == null ? void 0 : _this$_intl4.addResourceBundle(language, L10nManager.DEFAULT_NAMESPACE, resourceItem, true, true);
        }

        t(key, options) {
          var _this$_intl5;

          if (!(((_this$_intl5 = this._intl) == null ? void 0 : _this$_intl5.isInitialized) ?? false)) return key;
          return this._intl.t(key, options);
        }
        /**
         * 实验性功能暂不开放
         * 数字类ICU
         */


        tn(value, options) {
          var _this$_intl6, _this$_intl7;

          if (!(((_this$_intl6 = this._intl) == null ? void 0 : _this$_intl6.isInitialized) ?? false)) return value.toString();
          const cloneOptions = {};
          Object.assign(cloneOptions, options);

          for (const key of Object.keys(cloneOptions)) {
            if (typeof cloneOptions[key] === 'string' && cloneOptions[key].length === 0) {
              delete cloneOptions[key];
            } else if (typeof cloneOptions[key] === 'number' && cloneOptions[key] === 0) {
              delete cloneOptions[key];
            }
          }

          return new Intl.NumberFormat((_this$_intl7 = this._intl) == null ? void 0 : _this$_intl7.language, cloneOptions).format(value);
        }
        /**
         * 实验性功能暂不开放
         * 日期/时刻类ICU
         */


        td(date, options) {
          var _this$_intl8, _this$_intl9;

          if (!(((_this$_intl8 = this._intl) == null ? void 0 : _this$_intl8.isInitialized) ?? false)) return date.toString();
          const cloneOptions = {};
          Object.assign(cloneOptions, options);

          for (const key of Object.keys(cloneOptions)) {
            if (typeof cloneOptions[key] === 'string' && cloneOptions[key].length === 0) {
              delete cloneOptions[key];
            }
          }

          return new Intl.DateTimeFormat((_this$_intl9 = this._intl) == null ? void 0 : _this$_intl9.language, cloneOptions).format(date);
        }
        /**
         * 实验性功能暂不开放
         * 时长类ICU
         */


        tt(value, unit, options) {
          var _this$_intl10, _this$_intl11;

          if (!(((_this$_intl10 = this._intl) == null ? void 0 : _this$_intl10.isInitialized) ?? false)) return value.toString();
          const cloneOptions = {};
          Object.assign(cloneOptions, options);

          for (const key of Object.keys(cloneOptions)) {
            if (typeof cloneOptions[key] === 'string' && cloneOptions[key].length === 0) {
              delete cloneOptions[key];
            }
          }

          return new Intl.RelativeTimeFormat((_this$_intl11 = this._intl) == null ? void 0 : _this$_intl11.language, cloneOptions).format(value, unit);
        }
        /**
         * 实验性功能暂不开放
         * 数组类ICU
         */


        tl(value) {
          var _this$_intl12, _this$_intl13;

          if (!(((_this$_intl12 = this._intl) == null ? void 0 : _this$_intl12.isInitialized) ?? false)) return value.toString();
          return new Intl.ListFormat((_this$_intl13 = this._intl) == null ? void 0 : _this$_intl13.language).format(value);
        }

        exists(key) {
          var _this$_intl14;

          return ((_this$_intl14 = this._intl) == null ? void 0 : _this$_intl14.exists(key)) ?? false;
        }

        get currentLanguage() {
          var _this$_intl15;

          return ((_this$_intl15 = this._intl) == null ? void 0 : _this$_intl15.language) ?? '';
        }

        get languages() {
          var _resourceDataManager$2;

          return ((_resourceDataManager$2 = resourceDataManager.resourceList) == null ? void 0 : _resourceDataManager$2.languages) ?? [];
        }

        direction(language) {
          return (language ? new Intl.Locale(language) : new Intl.Locale(this._intl.language)).textInfo().direction;
        }

        on(event, callback) {
          var _this$_intl16;

          (_this$_intl16 = this._intl) == null ? void 0 : _this$_intl16.on(event, callback);
        }

        off(event, callback) {
          var _this$_intl17;

          (_this$_intl17 = this._intl) == null ? void 0 : _this$_intl17.off(event, callback);
        }

        getResourceBundle(language) {
          var _this$_intl18;

          return (_this$_intl18 = this._intl) == null ? void 0 : _this$_intl18.getResourceBundle(language, L10nManager.DEFAULT_NAMESPACE);
        }

      }

      exports('L10nManager', L10nManager);
      L10nManager.LOCAL_STORAGE_LANGUAGE_KEY = `${mainName}/language`;
      L10nManager.DEFAULT_NAMESPACE = 'translation';
      L10nManager.l10n = new L10nManager();
      const l10n = exports('default', L10nManager.l10n);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/L10nOptions.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4618IbsRtLLbRp2dQrE3EI", "L10nOptions", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/localization-global.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "02d9etKgNBGqLPpvU7RX29o", "localization-global", undefined);

      const pluginName = exports('pluginName', 'Localization Editor');
      const mainName = exports('mainName', 'localization-editor');
      const runtimeBundleName = exports('runtimeBundleName', 'l10n');
      const runtimeDataPath = exports('runtimeDataPath', 'languages');

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./ICUComponent.ts', './L10nComponent.ts', './L10nLabel.ts', './ICUOptions.ts', './ICUType.ts', './ILanguagesJsonInfo.ts', './L10nListenEvent.ts', './L10nManager.ts', './L10nOptions.ts', './ResourceDataManager.ts', './assetManagerIniter.ts', './auto-config-intl-manager.ts', './localization-global.ts', './Intl.DateTimeFormat.ts', './Intl.DisplayNames.ts', './Intl.ListFormat.ts', './Intl.Locale.ts', './Intl.NumberFormat.ts', './Intl.PluralRules.ts', './Intl.RelativeTimeFormat.ts', './Intl.getCanonicalLocales.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/ResourceDataManager.ts", ['cc', './localization-global.ts'], function (exports) {
  'use strict';

  var cclegacy, assetManager, settings, Settings, runtimeBundleName, pluginName, runtimeDataPath, mainName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      settings = module.settings;
      Settings = module.Settings;
    }, function (module) {
      runtimeBundleName = module.runtimeBundleName;
      pluginName = module.pluginName;
      runtimeDataPath = module.runtimeDataPath;
      mainName = module.mainName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a95a0kirtJnJnMnZWSRaFn", "ResourceDataManager", undefined);

      class ResourceDataManager {
        constructor() {
          this.resourceList = void 0;
          this.resourceBundle = {};
          this._languagesJsonInfo = undefined;
        }

        async languagesJsonInfo() {
          if (!this._languagesJsonInfo) {
            const jsonAsset = await new Promise(resolve => {
              assetManager.loadBundle(runtimeBundleName, (error, bundle) => {
                if (error) {
                  console.warn(`[${pluginName}] not found resources bundle，skip load ${runtimeDataPath}`);
                  resolve(undefined);
                } else {
                  bundle.load(runtimeDataPath, (err, asset) => {
                    if (err) {
                      resolve(undefined);
                    } else {
                      resolve(asset);
                    }
                  });
                }
              });
            });

            if (!(jsonAsset != null && jsonAsset.json)) {
              return undefined;
            }

            this._languagesJsonInfo = jsonAsset.json;
          }

          return this._languagesJsonInfo;
        }

        async readResourceList() {
          {
            const languageJsonInfo = await this.languagesJsonInfo();

            if (languageJsonInfo && languageJsonInfo.languages) {
              this.resourceList = {
                defaultLanguage: languageJsonInfo.defaultLanguage,
                fallbackLanguage: languageJsonInfo.fallbackLanguage,
                languages: languageJsonInfo.languages.map(it => it.locale)
              };
            }
          }
        }

        async readResourceBundle(tags) {
          {
            var _await$this$languages, _await$this$languages2;

            (_await$this$languages = await this.languagesJsonInfo()) == null ? void 0 : (_await$this$languages2 = _await$this$languages.languages) == null ? void 0 : _await$this$languages2.forEach(it => {
              this.resourceBundle[it.locale] = it.data;
            });
          }
          return this.resourceBundle;
        }

        async loadAny(locale) {
          return (await Editor.Message.request(mainName, 'get-resource-data', [locale]))[0];
        }

        async checkBundle(bundleName) {
          const queryResult = settings.querySettings(Settings.Category.ASSETS, 'preloadBundles');
          const bundle = queryResult == null ? void 0 : queryResult.find(it => it.bundle === bundleName);
          return !!bundle;
        }

      }

      exports('ResourceDataManager', ResourceDataManager);
      ResourceDataManager.instance = new ResourceDataManager();
      const resourceDataManager = exports('default', ResourceDataManager.instance);

      cclegacy._RF.pop();
    }
  };
});

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