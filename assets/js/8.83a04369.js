(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{327:function(e,t,o){"use strict";o(99);t.a={data:function(){return{yuu:{}}},mounted:function(){var e=this.$site.themeConfig.yuu,t=void 0===e?{}:e,o=t.labels,r=void 0===o?{}:o;this.yuu={themes:t.colorThemes||["blue","red","purple"],defaultColorTheme:t.defaultColorTheme||"default",defaultDarkTheme:t.defaultDarkTheme||!1,disableDarkTheme:t.disableDarkTheme||!1,disableThemeIgnore:t.disableThemeIgnore||!1,extraOptions:t.extraOptions||{},labels:{darkTheme:r.darkTheme||"Enable Dark Theme?",forcedThemes:r.forcedThemes||"Ignore Forced Themes?"}},this.yuu.hasThemes=Array.isArray(this.yuu.themes)&&this.yuu.themes.length>0}}},330:function(e,t,o){"use strict";var r=o(44);o(99),o(47),o(175),o(176),o(22);t.a={mounted:function(){"default"===this.yuu.defaultColorTheme||localStorage.getItem("color-theme")||localStorage.setItem("color-theme",this.yuu.defaultColorTheme),this.setPageTheme()},beforeUpdate:function(){this.setPageTheme()},methods:{setTheme:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this.yuu.themes||{};if(Array.isArray(o)&&o.length){var a=document.body.classList,s=o.map((function(e){return"yuu-theme-".concat(e)}));if(!e)return t&&localStorage.setItem("color-theme","default"),a.remove.apply(a,Object(r.a)(s));if(e&&!o.includes(e)){var n=localStorage.getItem("color-theme");return this.setTheme(o.includes(n)?n:null)}a.remove.apply(a,Object(r.a)(s.filter((function(t){return t!=="yuu-theme-".concat(e)})))),a.add("yuu-theme-".concat(e)),t&&localStorage.setItem("color-theme",e)}},setPageTheme:function(){var e=this.$page.frontmatter.forceTheme,t=localStorage.getItem("color-theme"),o="true"===localStorage.getItem("ignore-forced-themes"),r=!0!==this.yuu.disableThemeIgnore&&o?t:e||t;this.setTheme(r,!1)}}}},333:function(e,t,o){"use strict";o(343)},334:function(e,t,o){"use strict";o(344)},335:function(e,t,o){"use strict";o(345)},336:function(e,t,o){"use strict";o(346)},337:function(e,t,o){"use strict";o(347)},338:function(e,t,o){"use strict";o(348)},343:function(e,t,o){},344:function(e,t,o){},345:function(e,t,o){},346:function(e,t,o){},347:function(e,t,o){},348:function(e,t,o){},361:function(e,t,o){"use strict";t.a={data:function(){return{darkTheme:!1,ignoreForcedThemes:!1}},mounted:function(){!0!==this.yuu.disableDarkTheme&&(!0!==this.yuu.defaultDarkTheme||localStorage.getItem("dark-theme")||localStorage.setItem("dark-theme",!0),this.darkTheme="true"===localStorage.getItem("dark-theme"),this.toggleDarkTheme()),!0!==this.yuu.disableThemeIgnore&&(this.ignoreForcedThemes="true"===localStorage.getItem("ignore-forced-themes"))},methods:{toggleDarkTheme:function(){if(this.darkTheme)return document.body.classList.add("yuu-theme-dark"),localStorage.setItem("dark-theme",!0);document.body.classList.remove("yuu-theme-dark"),localStorage.setItem("dark-theme",!1)},toggleForcedThemes:function(){if(this.ignoreForcedThemes)return this.setTheme(localStorage.getItem("color-theme")),localStorage.setItem("ignore-forced-themes",!0);localStorage.removeItem("ignore-forced-themes")}}}},519:function(e,t,o){"use strict";o.r(t);var r=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],a={methods:{getMsg:function(){return r[Math.floor(Math.random()*r.length)]}}},s=o(9),n=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"theme-container"},[t("div",{staticClass:"theme-default-content"},[t("h1",[this._v("404")]),this._v(" "),t("blockquote",[this._v(this._s(this.getMsg()))]),this._v(" "),t("RouterLink",{attrs:{to:"/"}},[this._v("\n      Take me home.\n    ")])],1)])}),[],!1,null,null,null).exports,u=o(327),i=o(330),h=o(361),l={components:{ParentLayout:n},mixins:[u.a,i.a,h.a]},c=(o(333),o(334),o(335),o(336),o(337),o(338),Object(s.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("ParentLayout")}),[],!1,null,null,null));t.default=c.exports}}]);