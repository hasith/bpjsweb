define(["./storage"],function(e){_.templateSettings={interpolate:/\{\{(.+?)\}\}/g};var t;(t=e.retreive("user-language"))&&require.config({locale:t});var n=function(){};return n.localize=function(e,t){var n=_.template(e);return n({nls:t})},n.setLanguage=function(t){console.log(t),e.persist("user-language",t),location.reload()},n.clearLanguage=function(){e.remove("user-language"),location.reload()},n})