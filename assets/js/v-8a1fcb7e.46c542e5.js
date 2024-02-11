"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[33974],{952678:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-8a1fcb7e","path":"/devices/TS0601_thermostat_2.html","title":"TuYa TS0601_thermostat_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_thermostat_2 control via MQTT","description":"Integrate your TuYa TS0601_thermostat_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-12-01T15:07:19.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Open window (binary)","slug":"open-window-binary","link":"#open-window-binary","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Error status (numeric)","slug":"error-status-numeric","link":"#error-status-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Schedule monday (text)","slug":"schedule-monday-text","link":"#schedule-monday-text","children":[]},{"level":3,"title":"Schedule tuesday (text)","slug":"schedule-tuesday-text","link":"#schedule-tuesday-text","children":[]},{"level":3,"title":"Schedule wednesday (text)","slug":"schedule-wednesday-text","link":"#schedule-wednesday-text","children":[]},{"level":3,"title":"Schedule thursday (text)","slug":"schedule-thursday-text","link":"#schedule-thursday-text","children":[]},{"level":3,"title":"Schedule friday (text)","slug":"schedule-friday-text","link":"#schedule-friday-text","children":[]},{"level":3,"title":"Schedule saturday (text)","slug":"schedule-saturday-text","link":"#schedule-saturday-text","children":[]},{"level":3,"title":"Schedule sunday (text)","slug":"schedule-sunday-text","link":"#schedule-sunday-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1707681933000},"filePathRelative":"devices/TS0601_thermostat_2.md"}')},110317:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var d=o(166252);const a=(0,d._)("h1",{id:"tuya-ts0601-thermostat-2",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#tuya-ts0601-thermostat-2","aria-hidden":"true"},"#"),(0,d.Uk)(" TuYa TS0601_thermostat_2")],-1),i=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"TS0601_thermostat_2")],-1),l=(0,d._)("td",null,"Vendor",-1),c=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Thermostat radiator valve")],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"battery_low, lock (state), open_window, frost_protection, error_status, climate (system_mode, preset, local_temperature_calibration, local_temperature, current_heating_setpoint), schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, linkquality")],-1),u=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat_2.png",alt:"TuYa TS0601_thermostat_2"})])],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"White-label"),(0,d._)("td",null,"S366 Cloud Even")],-1),h=(0,d._)("h2",{id:"notes",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,d.Uk)(" Notes")],-1),p=(0,d._)("h3",{id:"pairing",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,d.Uk)(" Pairing")],-1),y=(0,d._)("p",null,'Long press left button (Auto/Manual Mode) AND right button (Comfort/Energy Saving Mode) until "Zigbee connection status"-light (the wifi icon) flashes',-1),b=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="open-window-binary" tabindex="-1"><a class="header-anchor" href="#open-window-binary" aria-hidden="true">#</a> Open window (binary)</h3><p>Enables/disables the status on the device. Value can be found in the published state on the <code>open_window</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> open window is ON, if <code>OFF</code> OFF.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary" aria-hidden="true">#</a> Frost protection (binary)</h3><p>When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C.. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="error-status-numeric" tabindex="-1"><a class="header-anchor" href="#error-status-numeric" aria-hidden="true">#</a> Error status (numeric)</h3><p>Error status. Value can be found in the published state on the <code>error_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>system_mode</code>, <code>preset</code>, <code>local_temperature_calibration</code>, <code>local_temperature</code>, <code>current_heating_setpoint</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>holiday</code>, <code>program</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-5</code> and the maximum value is <code>5</code> with a step size of <code>0.1</code>.</li></ul><h3 id="schedule-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-monday-text" aria-hidden="true">#</a> Schedule monday (text)</h3><p>Schedule for monday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_monday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_monday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-tuesday-text" aria-hidden="true">#</a> Schedule tuesday (text)</h3><p>Schedule for tuesday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_tuesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_tuesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-wednesday-text" aria-hidden="true">#</a> Schedule wednesday (text)</h3><p>Schedule for wednesday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_wednesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_wednesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-thursday-text" aria-hidden="true">#</a> Schedule thursday (text)</h3><p>Schedule for thursday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_thursday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_thursday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-friday-text" aria-hidden="true">#</a> Schedule friday (text)</h3><p>Schedule for friday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_friday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_friday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-saturday-text" aria-hidden="true">#</a> Schedule saturday (text)</h3><p>Schedule for saturday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_saturday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_saturday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-sunday-text" aria-hidden="true">#</a> Schedule sunday (text)</h3><p>Schedule for sunday, format: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_sunday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_sunday&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',30),_={},m=(0,o(983744).Z)(_,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),a,(0,d._)("table",null,[i,(0,d._)("tbody",null,[s,(0,d._)("tr",null,[l,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,d.w5)((()=>[(0,d.Uk)("TuYa")])),_:1})])]),c,r,u,n])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,p,y,(0,d.kq)(" Notes END: Do not edit below this line "),b])}]])}}]);