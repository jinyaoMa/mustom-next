(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{467:function(t,e,n){},468:function(t,e,n){},497:function(t,e,n){"use strict";n(467)},498:function(t,e,n){"use strict";n(468)},505:function(t,e,n){"use strict";n.r(e);var o=n(58),a=n(0),s={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},u={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:!0,updateEvent:null}},computed:{popupConfig:function(){return Object(a.h)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||s["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||s["/"].buttonText}},created:function(){o.a.$on("sw-updated",this.onSWUpdated),this.rawPopupConfig=s},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(497),n(2)),p={components:{SWUpdatePopup:Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"fec8b358",null).exports}},c=(n(498),Object(i.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.enabled,a=e.reload;return[o?n("div",{staticClass:"my-sw-update-popup"},[n("div",{staticClass:"msg",domProps:{innerHTML:t._s(t.$localeConfig.pwa.message)}}),t._v(" "),n("div",[n("span",{staticClass:"btn",on:{click:a}},[t._v(t._s(t.$localeConfig.pwa.button))])])]):t._e()]}}])})}),[],!1,null,"1043ec52",null));e.default=c.exports}}]);