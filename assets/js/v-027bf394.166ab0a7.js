"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91639],{758107:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l=JSON.parse('{"key":"v-027bf394","path":"/devices/R7049.html","title":"Woox R7049 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Woox R7049 control via MQTT","description":"Integrate your Woox R7049 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-06-08T15:36:48.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Test alarm (binary)","slug":"test-alarm-binary","link":"#test-alarm-binary","children":[]},{"level":3,"title":"Test alarm result (enum)","slug":"test-alarm-result-enum","link":"#test-alarm-result-enum","children":[]},{"level":3,"title":"Battery level (enum)","slug":"battery-level-enum","link":"#battery-level-enum","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Fault alarm (binary)","slug":"fault-alarm-binary","link":"#fault-alarm-binary","children":[]},{"level":3,"title":"Silence siren (binary)","slug":"silence-siren-binary","link":"#silence-siren-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1707681933000},"filePathRelative":"devices/R7049.md"}')},119311:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var l=a(166252);const i=(0,l._)("h1",{id:"woox-r7049",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#woox-r7049","aria-hidden":"true"},"#"),(0,l.Uk)(" Woox R7049")],-1),r=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th")])],-1),o=(0,l._)("tr",null,[(0,l._)("td",null,"Model"),(0,l._)("td",null,"R7049")],-1),n=(0,l._)("td",null,"Vendor",-1),s=(0,l._)("tr",null,[(0,l._)("td",null,"Description"),(0,l._)("td",null,"Smart smoke alarm")],-1),d=(0,l._)("tr",null,[(0,l._)("td",null,"Exposes"),(0,l._)("td",null,"battery_low, smoke, test_alarm, test_alarm_result, battery_level, alarm, fault_alarm, silence_siren, linkquality")],-1),c=(0,l._)("tr",null,[(0,l._)("td",null,"Picture"),(0,l._)("td",null,[(0,l._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/R7049.png",alt:"Woox R7049"})])],-1),u=(0,l._)("h2",{id:"notes",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,l.Uk)(" Notes")],-1),h=(0,l._)("h3",{id:"pairing",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,l.Uk)(" Pairing")],-1),b=(0,l._)("p",null,"Hold the Test button pressed for 5 seconds (until the red LED blinks). After this the device will reset and try to join a network.",-1),m=(0,l.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Smoke alarm status. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="test-alarm-binary" tabindex="-1"><a class="header-anchor" href="#test-alarm-binary" aria-hidden="true">#</a> Test alarm (binary)</h3><p>Test alarm. Value can be found in the published state on the <code>test_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;test_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> test alarm is ON, if <code>false</code> OFF.</p><h3 id="test-alarm-result-enum" tabindex="-1"><a class="header-anchor" href="#test-alarm-result-enum" aria-hidden="true">#</a> Test alarm result (enum)</h3><p>Test alarm result. Value can be found in the published state on the <code>test_alarm_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>check_success</code>, <code>check_failure</code>, <code>others</code>.</p><h3 id="battery-level-enum" tabindex="-1"><a class="header-anchor" href="#battery-level-enum" aria-hidden="true">#</a> Battery level (enum)</h3><p>Battery level state. Value can be found in the published state on the <code>battery_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Alarm enable. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="fault-alarm-binary" tabindex="-1"><a class="header-anchor" href="#fault-alarm-binary" aria-hidden="true">#</a> Fault alarm (binary)</h3><p>Fault alarm status. Value can be found in the published state on the <code>fault_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault alarm is ON, if <code>false</code> OFF.</p><h3 id="silence-siren-binary" tabindex="-1"><a class="header-anchor" href="#silence-siren-binary" aria-hidden="true">#</a> Silence siren (binary)</h3><p>Silence siren. Value can be found in the published state on the <code>silence_siren</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence_siren&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence siren is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),p={},y=(0,a(983744).Z)(p,[["render",function(e,t){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.kq)(" !!!! "),(0,l.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,l.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,l.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,l.kq)(" !!!! "),i,(0,l._)("table",null,[r,(0,l._)("tbody",null,[o,(0,l._)("tr",null,[n,(0,l._)("td",null,[(0,l.Wm)(a,{to:"/supported-devices/#v=Woox"},{default:(0,l.w5)((()=>[(0,l.Uk)("Woox")])),_:1})])]),s,d,c])]),(0,l.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,b,(0,l.kq)(" Notes END: Do not edit below this line "),m])}]])}}]);