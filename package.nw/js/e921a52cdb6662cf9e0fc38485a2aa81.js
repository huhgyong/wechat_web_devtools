'use strict';!function(require,directRequire){var a,b,c;const d=require('react'),e=require('./common/locales/index.js'),f='proxy';module.exports=(b=a=class extends d.Component{constructor(a){super(a),c.call(this);let b=a.settings.proxyType||'SYSTEM',d=a.settings.proxyHost||'',e=a.settings.proxyPort||'';if('SYSTEM'!=b&&'DIRECT'!=b){let a=b.replace('PROXY','').split(':');e=a.splice(-1,1),d=a.join('')}this.state={proxyType:b,proxyHost:d,proxyPort:e}}getSetting(){return{proxyType:this.state.proxyType,proxyHost:this.state.proxyHost,proxyPort:this.state.proxyPort}}render(){let a=this.state.proxyType,b='DIRECT'!==a&&'SYSTEM'!==a;return d.createElement('div',{className:'setting-theme ui-form'},d.createElement('div',{className:'ui-form-item ui-form-item-inline ui-form-item-vt'},d.createElement('label',{htmlFor:'',className:'ui-form-label'},e.config.SETTING_PROXY_SETTING),d.createElement('div',{className:'ui-form-controls'},d.createElement('label',{htmlFor:'',className:'ui-radio',onClick:this.changeProxy,"data-type":'DIRECT'},d.createElement('i',{className:'DIRECT'===a?'ui-icon-radio-o':'ui-icon-radio'}),d.createElement('span',{className:'ui-radio-text'},e.config.SETTING_PROXY_NONE)),d.createElement('label',{htmlFor:'',className:'ui-radio',onClick:this.changeProxy,"data-type":'SYSTEM'},d.createElement('i',{className:'SYSTEM'===a?'ui-icon-radio-o':'ui-icon-radio'}),d.createElement('span',{className:'ui-radio-text'},e.config.SETTING_PROXY_SYSTEM)),d.createElement('label',{htmlFor:'',className:'ui-radio',onClick:this.changeProxy,"data-type":'USER'},d.createElement('i',{className:b?'ui-icon-radio-o':'ui-icon-radio'}),d.createElement('span',{className:'ui-radio-text'},e.config.SETTING_PROXY_USER)),d.createElement('div',{className:'setting-proxy ui-flex'},d.createElement('div',{className:'setting-proxy-host ui-flex-item'},d.createElement('div',{className:'ui-input-box'},d.createElement('input',{type:'text',placeholder:e.config.SETTING_PROXY_ADDRESS,className:'ui-input',disabled:!b,value:this.state.proxyHost,onChange:this.changeProxyHost,onBlur:this.setProxy,onKeyPress:this.onProxyInputKeyPress}))),d.createElement('div',{className:'setting-proxy-sep'},d.createElement('p',null,':')),d.createElement('div',{className:'setting-proxy-port'},d.createElement('div',{className:'ui-input-box'},d.createElement('input',{type:'text',placeholder:e.config.SETTING_PROXY_PORT,className:'ui-input',disabled:!b,value:this.state.proxyPort,onChange:this.changeProxyPort,onBlur:this.setProxy,onKeyPress:this.onProxyInputKeyPress})))))))}},c=function(){this.changeProxy=(a)=>{let b,c=a.currentTarget,d=c.dataset,e=d.type;'USER'===e?(b=`PROXY ${this.state.proxyHost}:${this.state.proxyPort}`,this.props.updateIDESetting(f,'proxyHost',this.state.proxyHost),this.props.updateIDESetting(f,'proxyPort',this.state.proxyPort)):b=e,this.props.updateIDESetting(f,'proxyType',b),this.setState({proxyType:b})},this.changeProxyHost=(a)=>{let b=a.currentTarget.value.trim(),c=this.state.proxyPort||'80',d=`PROXY ${b}:${c}`;this.setState({proxyHost:b,proxyType:d},()=>{this.setProxy()})},this.changeProxyPort=(a)=>{let b=a.currentTarget.value.trim(),c=`PROXY ${this.state.proxyHost}:${b}`;b=b.replace(/[^0-9]/g,''),this.setState({proxyPort:b,proxyType:c},()=>{this.setProxy()})},this.setProxy=()=>{this.props.updateIDESetting(f,'proxyType',`PROXY ${this.state.proxyHost}:${this.state.proxyPort}`),this.props.updateIDESetting(f,'proxyHost',this.state.proxyHost),this.props.updateIDESetting(f,'proxyPort',this.state.proxyPort)},this.onProxyInputKeyPress=(a)=>{'Enter'===a.key&&this.setProxy()}},b)}(require('lazyload'),require);