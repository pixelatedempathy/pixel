(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new l.Error().stack;t&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[t]="e3e6369c-2a5c-4e7f-9d00-f6b4d2662a6e",l._sentryDebugIdIdentifier="sentry-dbid-e3e6369c-2a5c-4e7f-9d00-f6b4d2662a6e")}catch{}})();class u{sessionId;lastResults=null;constructor(){this.sessionId=this.generateSessionId(),this.initializeEventListeners(),this.initializeDashboard(),this.startRealTimeUpdates()}generateSessionId(){return"demo_"+Date.now()+"_"+Math.random().toString(36).substr(2,9)}initializeEventListeners(){const t=document.getElementById("analyze-btn"),e=document.getElementById("clear-btn"),n=document.getElementById("export-btn");document.getElementById("preset-bias-high")?.addEventListener("click",()=>this.loadPresetScenario("high-bias")),document.getElementById("preset-bias-low")?.addEventListener("click",()=>this.loadPresetScenario("low-bias")),document.getElementById("preset-cultural")?.addEventListener("click",()=>this.loadPresetScenario("cultural")),document.getElementById("preset-gender")?.addEventListener("click",()=>this.loadPresetScenario("gender")),t?.addEventListener("click",()=>this.runAnalysis()),e?.addEventListener("click",()=>this.clearInputs()),n?.addEventListener("click",()=>this.exportResults())}initializeDashboard(){this.updateDashboardMetrics({totalAnalyses:247,avgBiasScore:.23,activeAlerts:2,systemHealth:98})}async runAnalysis(){const t=document.getElementById("loading-state"),e=document.getElementById("results-display"),n=document.getElementById("analyze-btn");t?.classList.remove("hidden"),e?.classList.add("hidden"),n&&(n.textContent="🔄 Analyzing...",n.disabled=!0);try{const a=this.collectSessionData();await this.delay(2e3);const s=this.generateDemoResults(a);this.lastResults=s,this.displayResults(s);const i=document.getElementById("export-btn");i&&i.classList.remove("hidden"),this.updateDashboardFromAnalysis(s)}catch(a){console.error("Analysis error:",a),this.displayError("Analysis failed. Please try again.")}finally{t?.classList.add("hidden"),e?.classList.remove("hidden"),n&&(n.textContent="🔍 Analyze for Bias",n.disabled=!1)}}collectSessionData(){return{sessionId:this.sessionId,scenario:document.getElementById("scenario-select")?.value||"",demographics:{age:document.getElementById("age-select")?.value||"",gender:document.getElementById("gender-select")?.value||"",ethnicity:document.getElementById("ethnicity-select")?.value||"",primaryLanguage:document.getElementById("language-select")?.value||""},content:document.getElementById("session-content")?.value||"",timestamp:new Date}}generateDemoResults(t){const e=this.calculateBiasFactors(t);return{sessionId:t.sessionId,timestamp:new Date,overallBiasScore:e.overall,alertLevel:this.determineAlertLevel(e.overall),confidence:.87+Math.random()*.1,layerResults:{preprocessing:{biasScore:e.linguistic,linguisticBias:{genderBiasScore:e.gender,racialBiasScore:e.racial,ageBiasScore:e.age,culturalBiasScore:e.cultural},representationAnalysis:{diversityIndex:.65+Math.random()*.2,underrepresentedGroups:e.overall>.5?["elderly","non-english"]:[]}},modelLevel:{biasScore:e.model,fairnessMetrics:{demographicParity:.8-e.overall*.3,equalizedOdds:.75+Math.random()*.15,calibration:.82-e.overall*.2}},interactive:{biasScore:e.interactive,counterfactualAnalysis:{scenariosAnalyzed:12,biasDetected:e.overall>.4,consistencyScore:.8-e.overall*.3}},evaluation:{biasScore:e.evaluation,huggingFaceMetrics:{bias:e.overall*.8,stereotype:e.cultural*1.2,regard:{positive:.7,negative:.3}}}},recommendations:this.generateRecommendations(e),demographics:t.demographics}}calculateBiasFactors(t){const e=t.content.toLowerCase(),n=t.demographics;let a=.15+Math.random()*.1,s=.1,i=.08,d=.12,r=.09;(e.includes("judge")||e.includes("background"))&&(i+=.2,r+=.15),e.includes("anxiety")&&n.age==="65+"&&(d+=.25),e.includes("job")&&n.gender==="female"&&(s+=.18),n.ethnicity!=="white"&&(i+=.1,r+=.12),n.primaryLanguage!=="en"&&(a+=.2,r+=.15);const o=(a+s+i+d+r)/5;return{overall:Math.min(o,.95),linguistic:Math.min(a,.9),gender:Math.min(s,.8),racial:Math.min(i,.8),age:Math.min(d,.8),cultural:Math.min(r,.8),model:o*.9+Math.random()*.1,interactive:o*.85+Math.random()*.15,evaluation:o*.8+Math.random()*.2}}determineAlertLevel(t){return t>=.8?"critical":t>=.6?"high":t>=.4?"medium":"low"}generateRecommendations(t){const e=[];return t.overall>.6&&e.push("High bias detected - implement immediate mitigation strategies"),t.racial>.3&&e.push("Review content for racial bias patterns and cultural sensitivity"),t.gender>.3&&e.push("Analyze gender-based assumptions in therapeutic responses"),t.age>.3&&e.push("Consider age-appropriate communication strategies"),t.cultural>.3&&e.push("Enhance cultural competency in therapeutic approach"),e}displayResults(t){const e=document.getElementById("results-display");if(!e)return;const n={low:"text-green-400 bg-green-500/20 border-green-400/40",medium:"text-yellow-400 bg-yellow-500/20 border-yellow-400/40",high:"text-orange-400 bg-orange-500/20 border-orange-400/40",critical:"text-red-400 bg-red-500/20 border-red-400/40"};e.innerHTML=`
          <!-- Overall Score -->
          <div class="bg-gray-800/50 rounded-lg p-6 border border-gray-600/30">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-blue-100">Overall Bias Analysis</h3>
              <span class="px-3 py-1 rounded-full text-sm font-medium ${n[t.alertLevel]||n.low}">
                ${t.alertLevel.toUpperCase()}
              </span>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="text-2xl font-bold text-blue-300">${(t.overallBiasScore*100).toFixed(1)}%</div>
                <div class="text-sm text-blue-200/80">Bias Score</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-300">${(t.confidence*100).toFixed(1)}%</div>
                <div class="text-sm text-green-200/80">Confidence</div>
              </div>
            </div>
          </div>

          <!-- Layer Results -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-blue-100">Layer Analysis</h4>
            ${this.renderLayerResult("Preprocessing",t.layerResults.preprocessing)}
            ${this.renderLayerResult("Model Level",t.layerResults.modelLevel)}
            ${this.renderLayerResult("Interactive",t.layerResults.interactive)}
            ${this.renderLayerResult("Evaluation",t.layerResults.evaluation)}
          </div>

          <!-- Counterfactual Analysis -->
          <div class="bg-indigo-500/10 border border-indigo-400/30 rounded-lg p-4">
            <h4 class="text-lg font-semibold text-indigo-200 mb-3">🔄 Counterfactual Analysis</h4>
            <div class="space-y-3">
              ${this.renderCounterfactualScenarios()}
            </div>
          </div>

          <!-- Historical Comparison -->
          <div class="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4">
            <h4 class="text-lg font-semibold text-cyan-200 mb-3">📈 Historical Comparison</h4>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-lg font-bold text-cyan-300">${this.getHistoricalAverage()}%</div>
                <div class="text-xs text-cyan-200/80">30-Day Average</div>
              </div>
              <div>
                <div class="text-lg font-bold ${t.overallBiasScore>this.getHistoricalAverage()/100?"text-red-300":"text-green-300"}">
                  ${t.overallBiasScore>this.getHistoricalAverage()/100?"↗️":"↘️"} ${Math.abs(t.overallBiasScore*100-this.getHistoricalAverage()).toFixed(1)}%
                </div>
                <div class="text-xs text-cyan-200/80">vs Average</div>
              </div>
              <div>
                <div class="text-lg font-bold text-cyan-300">${this.getTrendDirection()}</div>
                <div class="text-xs text-cyan-200/80">Trend</div>
              </div>
            </div>
          </div>

          <!-- Recommendations -->
          ${t.recommendations.length>0?`
            <div class="bg-amber-500/10 border border-amber-400/30 rounded-lg p-4">
              <h4 class="text-lg font-semibold text-amber-200 mb-3">🚨 Recommendations</h4>
              <ul class="space-y-2">
                ${t.recommendations.map(a=>`
                  <li class="flex items-start gap-2 text-sm text-amber-100">
                    <span class="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                    ${a}
                  </li>
                `).join("")}
              </ul>
            </div>
          `:""}
        `}renderLayerResult(t,e){const n=(e.biasScore*100).toFixed(1),a=e.biasScore>.6?"text-red-400":e.biasScore>.4?"text-yellow-400":"text-green-400";return`
          <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
            <div class="flex items-center justify-between">
              <span class="font-medium text-gray-200">${t}</span>
              <span class="font-bold ${a}">${n}%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div class="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-2 rounded-full" 
                   style="width: ${n}%"></div>
            </div>
          </div>
        `}updateDashboardMetrics(t){const e=document.getElementById("total-analyses"),n=document.getElementById("avg-bias-score"),a=document.getElementById("active-alerts"),s=document.getElementById("system-health");e&&(e.textContent=t.totalAnalyses.toString()),n&&(n.textContent=t.avgBiasScore.toFixed(2)),a&&(a.textContent=t.activeAlerts.toString()),s&&(s.textContent=t.systemHealth+"%")}updateDashboardFromAnalysis(t){const e=document.getElementById("total-analyses"),n=document.getElementById("avg-bias-score"),a=document.getElementById("active-alerts");if(!e||!n||!a)return;const s=parseInt(e.textContent||"0"),i=parseFloat(n.textContent||"0"),d=s+1,r=(i*s+t.overallBiasScore)/d,o=parseInt(a.textContent||"0"),c=t.alertLevel!=="low"?o+1:o;this.updateDashboardMetrics({totalAnalyses:d,avgBiasScore:r,activeAlerts:c,systemHealth:97+Math.floor(Math.random()*3)})}clearInputs(){const t=document.getElementById("session-content"),e=document.getElementById("results-display");t&&(t.value=`Therapist: How are you feeling today?
Patient: I've been struggling with anxiety about my job interview tomorrow.
Therapist: That sounds challenging. Can you tell me more about what specifically worries you?
Patient: I'm worried they'll judge me because of my background.`),e&&(e.innerHTML=`
            <div class="text-center py-8 text-gray-400">
              <div class="text-4xl mb-4">🎯</div>
              <p>Run an analysis to see bias detection results</p>
            </div>
          `);const n=document.getElementById("export-btn");n&&n.classList.add("hidden"),this.lastResults=null,this.sessionId=this.generateSessionId()}startRealTimeUpdates(){setInterval(()=>{const t=document.getElementById("system-health");if(t&&t.textContent){const e=parseInt(t.textContent),n=Math.max(90,Math.min(100,e+(Math.random()-.5)*2));t.textContent=Math.floor(n)+"%"}},5e3)}displayError(t){const e=document.getElementById("results-display");e&&(e.innerHTML=`
          <div class="bg-red-500/10 border border-red-400/30 rounded-lg p-6 text-center">
            <div class="text-4xl mb-4">⚠️</div>
            <p class="text-red-200">${t}</p>
          </div>
        `)}loadPresetScenario(t){const n={"high-bias":{scenario:"anxiety-treatment",demographics:{age:"65+",gender:"female",ethnicity:"hispanic",primaryLanguage:"es"},content:`Therapist: You people from your culture tend to be more emotional about these things.
Patient: I feel judged and misunderstood.
Therapist: Maybe you should try to be more like American women who handle stress better.`},"low-bias":{scenario:"anxiety-treatment",demographics:{age:"26-35",gender:"male",ethnicity:"white",primaryLanguage:"en"},content:`Therapist: How are you feeling today?
Patient: I've been experiencing some anxiety.
Therapist: That sounds challenging. Can you tell me more about what triggers these feelings?`},cultural:{scenario:"family-therapy",demographics:{age:"36-50",gender:"female",ethnicity:"asian",primaryLanguage:"zh"},content:`Therapist: I understand family dynamics can be complex in your culture.
Patient: Yes, there are expectations I struggle with.
Therapist: Let's explore how we can honor your cultural values while addressing your individual needs.`},gender:{scenario:"crisis-intervention",demographics:{age:"18-25",gender:"non-binary",ethnicity:"mixed",primaryLanguage:"en"},content:`Therapist: I want to make sure I use the right pronouns for you.
Patient: Thank you, they/them works for me.
Therapist: How can I best support you today while respecting your identity?`}}[t];n&&(document.getElementById("scenario-select").value=n.scenario,document.getElementById("age-select").value=n.demographics.age,document.getElementById("gender-select").value=n.demographics.gender,document.getElementById("ethnicity-select").value=n.demographics.ethnicity,document.getElementById("language-select").value=n.demographics.primaryLanguage,document.getElementById("session-content").value=n.content)}exportResults(){if(!this.lastResults)return;const t={timestamp:new Date().toISOString(),sessionId:this.lastResults.sessionId,analysis:this.lastResults,metadata:{exportedBy:"bias-detection-demo",version:"1.0.0"}},e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=`bias-analysis-${this.lastResults.sessionId}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(n)}renderCounterfactualScenarios(){return[{change:"Different Age Group",impact:"Bias score could decrease by 15-25%",likelihood:"High"},{change:"Different Cultural Background",impact:"Bias patterns may shift significantly",likelihood:"Medium"},{change:"Modified Language Use",impact:"Linguistic bias could reduce by 10-20%",likelihood:"High"}].map(e=>`
          <div class="flex justify-between items-center p-2 bg-indigo-500/5 rounded">
            <div>
              <div class="text-sm font-medium text-indigo-200">${e.change}</div>
              <div class="text-xs text-indigo-300/80">${e.impact}</div>
            </div>
            <span class="text-xs px-2 py-1 rounded ${e.likelihood==="High"?"bg-green-500/20 text-green-300":e.likelihood==="Medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}">${e.likelihood}</span>
          </div>
        `).join("")}getHistoricalAverage(){return 23.5}getTrendDirection(){return Math.random()>.5?"Improving":"Stable"}delay(t){return new Promise(e=>setTimeout(e,t))}}document.addEventListener("DOMContentLoaded",()=>{new u});
