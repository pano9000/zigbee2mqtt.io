"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[89625],{628178:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-8cca8138","path":"/devices/LCZ030.html","title":"TuYa LCZ030 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa LCZ030 control via MQTT","description":"Integrate your TuYa LCZ030 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-01T17:18:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Warning","slug":"warning","link":"#warning","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Alarm temperature max (numeric)","slug":"alarm-temperature-max-numeric","link":"#alarm-temperature-max-numeric","children":[]},{"level":3,"title":"Alarm temperature min (numeric)","slug":"alarm-temperature-min-numeric","link":"#alarm-temperature-min-numeric","children":[]},{"level":3,"title":"Alarm humidity max (numeric)","slug":"alarm-humidity-max-numeric","link":"#alarm-humidity-max-numeric","children":[]},{"level":3,"title":"Alarm humidity min (numeric)","slug":"alarm-humidity-min-numeric","link":"#alarm-humidity-min-numeric","children":[]},{"level":3,"title":"Alarm humidity (enum)","slug":"alarm-humidity-enum","link":"#alarm-humidity-enum","children":[]},{"level":3,"title":"Alarm temperature (enum)","slug":"alarm-temperature-enum","link":"#alarm-temperature-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1707681933000},"filePathRelative":"devices/LCZ030.md"}')},127363:(e,i,t)=>{t.r(i),t.d(i,{default:()=>f});var a=t(166252);const r=(0,a._)("h1",{id:"tuya-lcz030",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-lcz030","aria-hidden":"true"},"#"),(0,a.Uk)(" TuYa LCZ030")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"LCZ030")],-1),u=(0,a._)("td",null,"Vendor",-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Temperature & humidity & illuminance sensor with display")],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"temperature, humidity, battery, illuminance, illuminance_lux, alarm_temperature_max, alarm_temperature_min, alarm_humidity_max, alarm_humidity_min, alarm_humidity, alarm_temperature, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/LCZ030.png",alt:"TuYa LCZ030"})])],-1),m=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),s=(0,a._)("h3",{id:"warning",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#warning","aria-hidden":"true"},"#"),(0,a.Uk)(" Warning")],-1),h=(0,a._)("p",null,"For full functionality of this device you will need to pair it to a TuYa Gateway prior use.",-1),p=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),b=(0,a.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="alarm-temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-max-numeric" aria-hidden="true">#</a> Alarm temperature max (numeric)</h3><p>Alarm temperature max. Value can be found in the published state on the <code>alarm_temperature_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_temperature_max&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="alarm-temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-min-numeric" aria-hidden="true">#</a> Alarm temperature min (numeric)</h3><p>Alarm temperature min. Value can be found in the published state on the <code>alarm_temperature_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_temperature_min&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="alarm-humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-max-numeric" aria-hidden="true">#</a> Alarm humidity max (numeric)</h3><p>Alarm humidity max. Value can be found in the published state on the <code>alarm_humidity_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_humidity_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-min-numeric" aria-hidden="true">#</a> Alarm humidity min (numeric)</h3><p>Alarm humidity min. Value can be found in the published state on the <code>alarm_humidity_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_humidity_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-humidity-enum" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-enum" aria-hidden="true">#</a> Alarm humidity (enum)</h3><p>Alarm humidity status. Value can be found in the published state on the <code>alarm_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>below_min_humdity</code>, <code>over_humidity</code>, <code>off</code>.</p><h3 id="alarm-temperature-enum" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-enum" aria-hidden="true">#</a> Alarm temperature (enum)</h3><p>Alarm temperature status. Value can be found in the published state on the <code>alarm_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>below_min_temperature</code>, <code>over_temperature</code>, <code>off</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),v={},f=(0,t(983744).Z)(v,[["render",function(e,i){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[n,(0,a._)("tbody",null,[l,(0,a._)("tr",null,[u,(0,a._)("td",null,[(0,a.Wm)(t,{to:"/supported-devices/#v=TuYa"},{default:(0,a.w5)((()=>[(0,a.Uk)("TuYa")])),_:1})])]),o,d,c])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),m,s,h,(0,a.kq)(" Notes END: Do not edit below this line "),p,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);