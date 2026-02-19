<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Autonomous Agent Manifest Specification – Ein Erfahrungsbericht aus einem Jahr KI-Architekturarbeit"
        class="w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void"></div>
    </div>
    
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-b from-void via-void/95 to-void -mt-32">
      <div class="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <!-- Breadcrumb -->
        <nav class="text-sm text-cyber-cyan/60 mb-8">
          <button @click="navigateToHome" class="hover:text-cyber-cyan transition-colors">Home</button>
          <span class="mx-2">/</span>
          <button @click="navigateToBlog" class="hover:text-cyber-cyan transition-colors">Blog</button>
          <span class="mx-2">/</span>
          <span class="text-off-white">Autonomous Agent Manifest Specification</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 19. Februar 2026</span>
            <span>•</span>
            <span>⏱️ 12 min Lesezeit</span>
            <span>•</span>
            <span>🤖 KI-Architektur</span>
          </div>
          
          <button 
            @click="copyArticleLink"
            class="btn btn-sm btn-ghost border border-cyber-cyan/30 hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all"
          >
            <span v-if="!linkCopied">🔗 Link kopieren</span>
            <span v-else class="text-cyber-cyan">✓ Kopiert!</span>
          </button>
        </div>

        <!-- Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-copper-orange mb-6 glow-pulse leading-tight">
          Autonomous Agent Manifest Specification
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Ein Erfahrungsbericht aus einem Jahr KI-Architekturarbeit
        </p>

        <!-- Author Info -->
        <div class="flex items-center gap-3 mb-8">
          <div class="text-sm text-off-white/70">
            <span class="font-semibold text-off-white">Ogerly</span> – Programmierer bei
            <a href="https://github.com/DEVmatrose" target="_blank" class="text-cyber-cyan hover:underline">DEVmatrose</a>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in tags" 
            :key="tag"
            class="badge badge-outline border-cyber-cyan/50 text-cyber-cyan"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Article Content -->
    <article class="max-w-4xl mx-auto px-4 py-12">
      <div class="prose prose-invert prose-lg max-w-none">
        
        <!-- 1. Ausgangspunkt -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🧭 1. Ausgangspunkt: Komplexität jenseits von „nur Code"
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          In den letzten 12–18 Monaten habe ich ein größeres KI-gestütztes Projekt aufgebaut. Kein klassisches Webprojekt, kein isoliertes Backend, sondern ein verteiltes System mit mehreren Modulen, Agenten, Persistenz-Layern und Langzeitgedächtnis-Experimenten.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Was sich in dieser Zeit deutlich gezeigt hat:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Tools verändern sich schneller als Architekturen.</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Modelle werden besser, aber nicht stabiler im Kontext.</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Kontextverlust ist kein Randproblem, sondern systemisch.</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Agenten brauchen Struktur – nicht nur Prompts.</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das Resultat ist ein öffentliches Repository:
        </p>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <h3 class="text-xl font-bold text-copper-orange mb-2">Autonomous Agent Manifest Specification</h3>
          <p class="text-off-white/90">
            👉 <a href="https://github.com/DEVmatrose/Autonomous-Agent-Manifest-Specification" target="_blank" class="text-cyber-cyan hover:underline">github.com/DEVmatrose/Autonomous-Agent-Manifest-Specification</a>
          </p>
          <p class="text-off-white/70 mt-2">
            Es ist kein akademisches Paper. Es ist ein aus der Praxis entstandener Ordnungsrahmen.
          </p>
        </div>

        <!-- 2. Das Kernproblem -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          ⚠️ 2. Das Kernproblem: Kontextzerfall in komplexen Projekten
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Bei einfachen Projekten kann ein Entwickler vieles „im Kopf halten". Bei komplexen Ökosystemen funktioniert das nicht mehr.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ich arbeite nicht an einzelnen Komponenten, sondern an:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Multi-Service-Architekturen</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Agenten-Workflows</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Speicher- und Retrieval-Mechanismen</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> API-Orchestrierung</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Rate-Limit-Handling</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Kontext-Caching</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Versions- und Dokumentationssystemen</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Allein intern: <strong class="text-copper-orange">&gt; 50 Whitepapers</strong> und <strong class="text-copper-orange">&gt; 60 Workpapers</strong> (Stand dieses Jahres).
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist kein Overhead. Das ist die Voraussetzung für Kontrolle.
        </p>

        <!-- 3. Whitepaper–Workpaper-System -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          📄 3. Whitepaper–Workpaper-System
        </h2>

        <div class="grid md:grid-cols-2 gap-6 my-8">
          <!-- Whitepaper -->
          <div class="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <h3 class="text-xl font-bold text-cyber-cyan mb-4">Whitepaper = Architektur-Ebene</h3>
            <p class="text-off-white/80 mb-4">Ein Whitepaper beschreibt:</p>
            <ul class="space-y-2 text-off-white/80">
              <li>▸ Ziel des Moduls</li>
              <li>▸ Architekturelle Grundannahmen</li>
              <li>▸ Schnittstellen</li>
              <li>▸ Abhängigkeiten</li>
              <li>▸ Sicherheits- und Strukturprinzipien</li>
              <li>▸ Langfristige Design-Entscheidungen</li>
            </ul>
            <p class="text-cyber-cyan/80 mt-4 font-semibold">Whitepapers sind stabil. Sie ändern sich selten.</p>
          </div>

          <!-- Workpaper -->
          <div class="p-6 bg-copper-orange/10 border border-copper-orange/30 rounded-lg">
            <h3 class="text-xl font-bold text-copper-orange mb-4">Workpaper = operative Ebene</h3>
            <p class="text-off-white/80 mb-4">Ein Workpaper dokumentiert:</p>
            <ul class="space-y-2 text-off-white/80">
              <li>▸ Konkrete Session-Arbeit</li>
              <li>▸ Implementierungsdetails</li>
              <li>▸ Tests</li>
              <li>▸ Fehlerbilder</li>
              <li>▸ Iterationen</li>
              <li>▸ Entscheidungen unter Zeitdruck</li>
            </ul>
            <p class="text-copper-orange/80 mt-4 font-semibold">Workpapers sind dynamisch. Sie bilden den realen Verlauf ab.</p>
          </div>
        </div>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-lg text-off-white/90 italic">
            Mit klassischen Coding-Tools entsteht Code. Mit diesem System entsteht: <strong class="text-copper-orange">Reproduzierbare Architektur.</strong>
          </p>
          <p class="text-off-white/70 mt-2">
            Und genau das ist der Unterschied zwischen „KI benutzt" und „KI strukturell integriert".
          </p>
        </div>

        <!-- 4. Agenten-Level -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🤖 4. Agenten-Level statt Prompt-Level
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn man mit einzelnen Prompts arbeitet, reicht Kontextfenster. Wenn man mit autonomen Agenten arbeitet, braucht man:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Klare Arbeitsstruktur</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Formalisierte Dokumentation</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Maschinenlesbare Ordnungslogik</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Eindeutige Projekt-Normen</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Agenten dürfen nicht raten, wie gearbeitet wird. <strong class="text-copper-orange">Sie müssen es wissen.</strong>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Die Manifest-Spezifikation definiert genau das:
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">Projektstruktur</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">Rollen</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">Dokumentationsformat</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">Persistenz-Logik</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">Zustandsdefinitionen</div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Damit wird ein Projekt für Mensch und Maschine gleichzeitig lesbar.
        </p>

        <!-- 5. Kontextverlust -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🔥 5. Kontextverlust – das unterschätzte Problem
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Selbst mit großen Modellen bleibt ein Problem:
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
          <div class="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-sm text-red-400">Context-Limits</div>
          <div class="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-sm text-red-400">Token-Limits</div>
          <div class="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-sm text-red-400">Rate-Limits</div>
          <div class="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-sm text-red-400">Session-Reset</div>
          <div class="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-sm text-red-400">API-Instabilität</div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          In größeren Projekten ist das kein Schönheitsfehler – es ist ein <strong class="text-red-400">Produktivitätskiller</strong>.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Deshalb experimentiere ich mit:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Longtime Memory</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Zwischenpersistenz</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Strukturiertem Retrieval</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Paper-Referenzierung statt Vollkontext</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> Zustandsrekonstruktion aus Metadaten</li>
        </ul>

        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-8">
          <p class="text-lg text-off-white/90 italic">
            Kontext darf kein flüchtiger Zustand sein. <strong class="text-cyber-cyan">Er muss rekonstruierbar sein.</strong>
          </p>
        </div>

        <!-- 6. Ordnung als Architekturprinzip -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🏗️ 6. Ordnung als Architekturprinzip
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ich sehe das nicht als „Dokumentationsmethode". Ich sehe es als architektonisches Kontrollinstrument.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ordnung bedeutet:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Jeder Agent weiß, wo er steht.</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Jeder Mensch kann querlesen.</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Jede Entscheidung ist nachvollziehbar.</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Jede Iteration ist referenzierbar.</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Jede Architektur bleibt überprüfbar.</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das verhindert:
        </p>

        <div class="space-y-3 my-6">
          <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
            <p class="text-off-white/90">Schleichende Inkonsistenz</p>
          </div>
          <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
            <p class="text-off-white/90">Implizite Annahmen</p>
          </div>
          <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
            <p class="text-off-white/90">Stillschweigende Architekturbrüche</p>
          </div>
        </div>

        <!-- 7. Warum öffentlich -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🌐 7. Warum ich das Repository öffentlich gemacht habe
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Viele arbeiten inzwischen mit autonomen Agenten, lokalen LLMs, Multi-Model-Setups und verteilten Workflows. Fast alle stoßen auf dasselbe Problem:
        </p>

        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-xl text-copper-orange font-bold">
            Die Struktur fehlt. Nicht die Technologie.
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ich bin kein Wissenschaftler auf diesem Gebiet. Aber ich habe mich selbst durchgearbeitet – aus Notwendigkeit. Dieses Repository ist das Ergebnis dieser Praxis.
        </p>

        <!-- Erweiterung: Nachrüstbares Ordnungs-Layer -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🔧 Erweiterung: Manifest als nachrüstbares Ordnungs-Layer
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das System ist so gebaut, dass:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> es in bestehende Repositories eingefügt werden kann</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> es keine bestehende Code-Struktur zerstört</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> es unabhängig von Sprache oder Stack funktioniert</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> es sowohl für Menschen als auch für Agenten lesbar ist</li>
          <li class="flex items-start gap-2"><span class="text-cyber-cyan">▸</span> es projektübergreifend standardisiert werden kann</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist architektonisch sauber gedacht. <strong class="text-copper-orange">Kein Framework, kein Tool-Zwang, keine Runtime-Abhängigkeit.</strong>
        </p>

        <!-- Nachrüstbarkeit -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-10 mb-4">
          Nachrüstbarkeit als Kernprinzip
        </h3>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Viele arbeiten bereits mit Legacy-Code, gewachsenen Monorepos, Microservice-Landschaften und experimentellen KI-Projekten. Was dort fast immer fehlt:
        </p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-red-400">✗</span> Formalisierte Architekturdokumentation</li>
          <li class="flex items-start gap-2"><span class="text-red-400">✗</span> Sessionbasierte Entwicklungsprotokolle</li>
          <li class="flex items-start gap-2"><span class="text-red-400">✗</span> Rekonstruierbare Entscheidungslogik</li>
          <li class="flex items-start gap-2"><span class="text-red-400">✗</span> Agentenlesbare Struktur</li>
        </ul>

        <div class="p-6 bg-cyber-cyan/10 border-l-4 border-cyber-cyan rounded-r-lg my-8">
          <p class="text-lg text-off-white/90 italic">
            Ein bestehendes Projekt bekommt ein Manifest-Verzeichnis und arbeitet ab diesem Zeitpunkt strukturiert weiter. <strong class="text-cyber-cyan">Ohne Migration. Ohne Rewrite. Ohne Dogma.</strong>
          </p>
        </div>

        <!-- Architekturgedanke -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-10 mb-4">
          Architekturgedanke dahinter
        </h3>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Technisch betrachtet ist das System:
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">metadata-driven</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">zustandsorientiert</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">dokumentenzentriert</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">rekonstruierbar</div>
          <div class="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-center text-sm text-cyber-cyan">entkoppelt vom Code</div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Der Code bleibt Code. Aber die Ordnungslogik wird explizit. Das ist ein Unterschied, den viele unterschätzen.
        </p>

        <!-- 8. Fazit -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          🎯 8. Fazit
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          KI-Modelle werden besser. Agenten werden leistungsfähiger. Tools werden schneller. <strong class="text-copper-orange">Aber ohne Struktur entsteht Chaos.</strong>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">Mein Ansatz:</p>

        <ul class="space-y-2 my-6 pl-4">
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Whitepaper für Architektur</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Workpaper für operative Realität</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Manifest-Spezifikation für Agenten</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Longtime Memory gegen Kontextverlust</li>
          <li class="flex items-start gap-2"><span class="text-copper-orange">▸</span> Klare Projekt-Ordnungslogik</li>
        </ul>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Nicht als akademische Theorie. Sondern als <strong class="text-copper-orange">überlebensnotwendige Praxis</strong> für komplexe Systeme.
        </p>

        <!-- Repository Link -->
        <div class="p-6 bg-copper-orange/10 border border-copper-orange/30 rounded-lg my-8 text-center">
          <h3 class="text-xl font-bold text-copper-orange mb-3">Repository</h3>
          <p class="text-lg">
            <a href="https://github.com/DEVmatrose/Autonomous-Agent-Manifest-Specification" target="_blank" class="text-cyber-cyan hover:underline font-semibold">
              github.com/DEVmatrose/Autonomous-Agent-Manifest-Specification
            </a>
          </p>
        </div>

        <!-- Closing -->
        <div class="p-6 bg-void border border-cyber-cyan/20 rounded-lg my-8">
          <p class="text-lg text-off-white/80 italic">
            Wenn du selbst an größeren KI-Ökosystemen arbeitest, wird dich das Thema früher oder später einholen. Besser, man strukturiert es von Anfang an.
          </p>
        </div>

      </div>
    </article>

    <!-- Back Button -->
    <div class="max-w-4xl mx-auto px-4 pb-12 flex justify-center">
      <button 
        @click="navigateToBlog"
        class="btn btn-outline btn-primary terminal-font w-full sm:w-auto"
      >
        ← Zurück zum Blog
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSEO } from '../../../composables/useSEO'

const router = useRouter()

// Article Metadata
const title = 'Autonomous Agent Manifest Specification'
const description = 'Ein Erfahrungsbericht aus einem Jahr KI-Architekturarbeit: Whitepaper-Workpaper-System, Manifest-Spezifikation für Agenten und Ordnung als Architekturprinzip gegen Kontextverlust.'
const tags = ref([
  'KI-Architektur',
  'Agenten-Manifest',
  'Whitepaper-Workpaper',
  'Kontextmanagement',
  'Multi-Agent-Systeme',
  'Open Source'
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/autonomous-agent-manifest-specification.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/autonomous-agent-manifest-specification.png',
    url: '/blog/autonomous-agent-manifest-specification',
    type: 'article',
    author: 'Ogerly – DEVmatrose',
    publishedTime: '2026-02-19',
    tags: tags.value
  })
})

// Navigation Methods
const navigateToHome = () => {
  router.push({ name: 'home' })
}

const navigateToBlog = () => {
  router.push({ name: 'blog' })
}

// Copy Link Method
const copyArticleLink = async () => {
  const url = window.location.href
  try {
    await navigator.clipboard.writeText(url)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}
</script>

<style scoped>
.glow-pulse {
  animation: pulseGlow 4s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
  }
  50% {
    text-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
  }
}

/* Prose Styling */
.prose {
  color: #f5f5f5;
}

.prose h2 {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.prose h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1.5rem;
}

.prose a {
  color: #00d9ff;
  text-decoration: none;
  transition: color 0.2s;
}

.prose a:hover {
  color: #ff6b35;
  text-decoration: underline;
}

.prose ul {
  list-style: none;
  padding-left: 0;
}

.prose ol {
  padding-left: 1.5rem;
}

.prose strong {
  font-weight: 600;
}

.prose code {
  background: rgba(0, 217, 255, 0.1);
  padding: 0.15rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}
</style>
