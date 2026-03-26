<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Du brauchst kein Framework. Du brauchst eine Datei."
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
          <span class="text-off-white">Du brauchst kein Framework</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 26. März 2026</span>
            <span>•</span>
            <span>⏱️ 10 min Lesezeit</span>
            <span>•</span>
            <span>🏗️ KI-Architektur & Praxis</span>
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
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-copper-orange mb-6 glow-pulse leading-tight">
          Du brauchst kein Framework.
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Du brauchst eine Datei.
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

        <!-- Hook -->
        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-xl text-off-white/90 italic m-0">
            Du nutzt KI und bist 10x produktiver. Cool. Aber weisst du, was Session 47 entschieden hat?
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Du hast Claude, Copilot, Cursor, Windsurf – vielleicht alle vier. Du bist schnell. Du bist produktiv. Du sagst: <em>„Kontext verliere ich nicht."</em>
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Und damit hast du Recht. <strong class="text-copper-orange">Du</strong> verlierst keinen Kontext. Aber dein Agent schon. Jede einzelne Session.
        </p>

        <!-- 1. Kontextverlust ist unsichtbar -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          1. Nicht du verlierst Kontext – dein Agent verliert ihn
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Du kompensierst. Mit deinem Kopf. Du erinnerst dich an die Entscheidung von letzter Woche, an den Workaround von Session 12, an den Bug der nur in der Staging-Umgebung auftritt.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Dein Agent weiss davon nichts. Jede neue Session startet bei Null. Und du merkst es nicht – weil <strong class="text-copper-orange">du</strong> die Lücke füllst.
        </p>

        <div class="p-6 bg-red-500/10 border border-red-500/30 rounded-lg my-8 text-center">
          <p class="text-xl text-red-400 font-bold m-0">
            Das funktioniert – bis es nicht mehr funktioniert.
          </p>
        </div>

        <!-- Drei Szenarien -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div class="p-5 bg-off-white/5 border border-off-white/15 rounded-lg text-center">
            <span class="text-3xl block mb-2">🔄</span>
            <p class="text-off-white/80 font-semibold text-sm mb-2 m-0">Toolwechsel</p>
            <p class="text-off-white/60 text-xs m-0">Cursor → Windsurf → Claude Code. Alles weg.</p>
          </div>
          <div class="p-5 bg-off-white/5 border border-off-white/15 rounded-lg text-center">
            <span class="text-3xl block mb-2">👥</span>
            <p class="text-off-white/80 font-semibold text-sm mb-2 m-0">Neuer Kollege</p>
            <p class="text-off-white/60 text-xs m-0">Dein Kopfwissen ist nicht übertragbar.</p>
          </div>
          <div class="p-5 bg-off-white/5 border border-off-white/15 rounded-lg text-center">
            <span class="text-3xl block mb-2">⏸️</span>
            <p class="text-off-white/80 font-semibold text-sm mb-2 m-0">3 Monate Pause</p>
            <p class="text-off-white/60 text-xs m-0">Du bist selbst der „neue Kollege".</p>
          </div>
        </div>


        <!-- 2. Tool Lock-in -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          2. Tool Lock-in ist das unsichtbare Problem
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Jedes Tool hat seine eigene Konvention, wie du Kontext an den Agenten gibst:
        </p>

        <!-- Tool-Vergleich -->
        <div class="space-y-3 my-8">
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg flex items-center gap-4">
            <code class="text-cyber-cyan font-mono text-sm whitespace-nowrap">.cursorrules</code>
            <span class="text-off-white/50">→</span>
            <span class="text-off-white/70 text-sm">Nur Cursor versteht das</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg flex items-center gap-4">
            <code class="text-cyber-cyan font-mono text-sm whitespace-nowrap">CLAUDE.md</code>
            <span class="text-off-white/50">→</span>
            <span class="text-off-white/70 text-sm">Nur Claude liest das</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg flex items-center gap-4">
            <code class="text-cyber-cyan font-mono text-sm whitespace-nowrap">.windsurfrules</code>
            <span class="text-off-white/50">→</span>
            <span class="text-off-white/70 text-sm">Nur Windsurf interpretiert das</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg flex items-center gap-4">
            <code class="text-cyber-cyan font-mono text-sm whitespace-nowrap">copilot-instructions.md</code>
            <span class="text-off-white/50">→</span>
            <span class="text-off-white/70 text-sm">Nur Copilot nutzt das</span>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Du investierst Stunden in die Konfiguration – und bindest dich gleichzeitig an einen einzigen Anbieter. Das ist kein Feature. Das ist <strong class="text-red-400">Vendor Lock-in durch die Hintertür</strong>.
        </p>

        <div class="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg my-8 text-center">
          <p class="text-xl text-cyber-cyan font-bold m-0">
            AAMS: Eine Datei. Alle Tools.
          </p>
          <p class="text-off-white/60 text-sm mt-2 m-0">
            Tool-agnostisch. Kein proprietäres Format. JSON, das jeder Agent lesen kann.
          </p>
        </div>


        <!-- 3. Skalierung -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          3. Skalierung bricht manuelles Tracking
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Du trackst deine Entscheidungen im Kopf. Das funktioniert – für ein Projekt, allein, in der Anfangsphase.
        </p>

        <!-- Skalierungs-Stufen -->
        <div class="space-y-4 my-8">
          <div class="flex items-center gap-4">
            <div class="w-20 text-right">
              <span class="text-emerald-400 font-mono font-bold text-lg">5</span>
              <span class="text-off-white/50 text-xs block">Sessions</span>
            </div>
            <div class="flex-1 h-4 bg-off-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-500/60 rounded-full" style="width: 10%"></div>
            </div>
            <span class="text-emerald-400 text-sm w-48">Kein Problem</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-20 text-right">
              <span class="text-amber-400 font-mono font-bold text-lg">50</span>
              <span class="text-off-white/50 text-xs block">Sessions</span>
            </div>
            <div class="flex-1 h-4 bg-off-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-amber-500/60 rounded-full" style="width: 50%"></div>
            </div>
            <span class="text-amber-400 text-sm w-48">Du wiederholst Entscheidungen</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-20 text-right">
              <span class="text-red-400 font-mono font-bold text-lg">100</span>
              <span class="text-off-white/50 text-xs block">Sessions</span>
            </div>
            <div class="flex-1 h-4 bg-off-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-red-500/60 rounded-full" style="width: 100%"></div>
            </div>
            <span class="text-red-400 text-sm w-48">Der Agent halluziniert Lösungen</span>
          </div>
        </div>

        <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Bei 100 Sessions löst dein Agent Probleme, die <strong class="text-red-400">längst gelöst</strong> sind. Er erfindet Workarounds für Bugs, die du vor zwei Monaten gefixt hast. Er schlägt Architekturen vor, die du bereits verworfen hast.
          </p>
        </div>


        <!-- 4. Die zweite Person -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          4. Die zweite Person ändert alles
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Solange du allein arbeitest, kannst du den fehlenden Kontext kompensieren. Aber sobald eine zweite Person dazukommt, bricht das System zusammen:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div class="p-5 bg-off-white/5 border border-off-white/20 rounded-lg">
            <p class="text-off-white/50 text-xs uppercase tracking-wider mb-2 m-0">Du weisst</p>
            <p class="text-off-white/80 m-0">„Wir nutzen keine ORMs, weil wir in Session 23 Performance-Probleme hatten."</p>
          </div>
          <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p class="text-red-400/70 text-xs uppercase tracking-wider mb-2 m-0">Der Kollege weiss</p>
            <p class="text-off-white/80 m-0">Nichts. Er fragt den Agenten. Der Agent schlägt ein ORM vor.</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Dein Kontext im Kopf ist für niemand anderen lesbar. Nicht für den Kollegen. Nicht für den Freelancer. Nicht für den nächsten Agenten. <strong class="text-copper-orange">Implizites Wissen skaliert nicht.</strong>
        </p>


        <!-- 5. Was AAMS wirklich ist -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          5. Was AAMS wirklich ist
        </h2>

        <div class="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg my-8 text-center">
          <p class="text-2xl text-cyber-cyan font-bold m-0">
            Eine Datei. Null Dependencies.
          </p>
        </div>

        <div class="p-5 bg-void border border-cyber-cyan/40 rounded-lg my-8 font-mono text-sm">
          <p class="text-cyber-cyan/60 m-0 mb-2"># Das ist alles:</p>
          <p class="text-cyber-cyan m-0">curl -sO https://raw.githubusercontent.com/ogerly/AAMS/main/.agent.json</p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Fertig. Kein <code class="text-cyber-cyan">npm install</code>. Kein <code class="text-cyber-cyan">pip install</code>. Kein Setup-Wizard. Eine JSON-Datei im Root deines Projekts.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Der Agent liest die Datei, erkennt die Struktur, legt die nötigen Verzeichnisse an und dokumentiert ab Session 1 – automatisch, persistent, tool-agnostisch.
        </p>

        <!-- Was passiert -->
        <div class="space-y-3 my-8">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">1</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Agent liest <code>.agent.json</code></strong> – Bootstrap-Manifest mit Projektkontext</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">2</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Struktur wird erkannt</strong> – Welche Verzeichnisse existieren, was fehlt</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">3</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Dokumentation startet automatisch</strong> – Jede Entscheidung wird festgehalten</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">4</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Nächste Session übernimmt</strong> – Kein Kontextverlust, kein Neubeginn</p>
            </div>
          </div>
        </div>


        <!-- 6. Vier-Schichten-Modell -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          6. Vier Schichten – Disziplin, nicht Overhead
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ein Agent braucht dasselbe wie ein Entwickler – nur explizit und persistent:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <p class="text-cyber-cyan font-bold mb-2 m-0">📋 Workpaper</p>
            <p class="text-off-white/70 text-sm m-0">Was tue ich gerade? Aktive Aufgaben, Fortschritt, Blocker.</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg">
            <p class="text-copper-orange font-bold mb-2 m-0">📄 Whitepaper</p>
            <p class="text-off-white/70 text-sm m-0">Wie ist das System aufgebaut? Architektur, APIs, Konventionen.</p>
          </div>
          <div class="p-5 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <p class="text-amber-400 font-bold mb-2 m-0">📔 Diary</p>
            <p class="text-off-white/70 text-sm m-0">Warum wurde so entschieden? Entscheidungshistorie mit Begründung.</p>
          </div>
          <div class="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p class="text-emerald-400 font-bold mb-2 m-0">🧠 Memory</p>
            <p class="text-off-white/70 text-sm m-0">Was haben wir gelernt? Patterns, Anti-Patterns, Lessons Learned.</p>
          </div>
        </div>

        <div class="p-4 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Das klingt nach Bürokratie? Nein. Das ist das Minimum, damit ein Agent nach 50 Sessions noch weiss, was er tut – und <strong class="text-copper-orange">warum</strong>.
          </p>
        </div>


        <!-- 7. Beweis -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          7. AAMS testet sich selbst
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist kein akademisches Konzept. Das AAMS-Repository nutzt AAMS selbst. Echte Dogfooding-History:
        </p>

        <div class="grid grid-cols-3 gap-4 my-8">
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg text-center">
            <p class="text-3xl text-cyber-cyan font-bold m-0">39+</p>
            <p class="text-off-white/60 text-sm mt-1 m-0">Commits</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg text-center">
            <p class="text-3xl text-copper-orange font-bold m-0">20+</p>
            <p class="text-off-white/60 text-sm mt-1 m-0">Workpapers</p>
          </div>
          <div class="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
            <p class="text-3xl text-emerald-400 font-bold m-0">80+</p>
            <p class="text-off-white/60 text-sm mt-1 m-0">LTM-Einträge</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Kein Demo-Projekt. Kein „Hello World"-Beispiel. Ein echtes Repository, das sich selbst mit dem Standard gebaut hat, den es beschreibt.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Du kannst jeden Commit nachverfolgen. Jedes Workpaper lesen. Jede Entscheidung rekonstruieren. Das ist der Unterschied zwischen <em>„Wir haben ein Konzept"</em> und <em>„Wir nutzen es täglich"</em>.
        </p>


        <!-- 8. Open Source -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          8. Open Source. CC0. Public Domain.
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Kein Vendor. Kein Lock-in. Keine Lizenzsorgen.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div class="p-5 bg-off-white/5 border border-off-white/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">🍴</span>
            <p class="text-off-white/80 font-semibold m-0">Fork it</p>
          </div>
          <div class="p-5 bg-off-white/5 border border-off-white/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">⚡</span>
            <p class="text-off-white/80 font-semibold m-0">Use it</p>
          </div>
          <div class="p-5 bg-off-white/5 border border-off-white/20 rounded-lg text-center">
            <span class="text-2xl block mb-2">🔧</span>
            <p class="text-off-white/80 font-semibold m-0">Build on it</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          CC0 bedeutet: Du kannst AAMS in dein Unternehmen bringen, ohne den Rechtsanwalt zu fragen. Du kannst es anpassen, erweitern, in dein eigenes Tooling integrieren. Es gehört niemandem – und damit allen.
        </p>


        <!-- CTA -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Ein curl. Eine Datei. Fertig.
        </h2>

        <div class="p-6 bg-gradient-to-r from-cyber-cyan/10 via-void to-copper-orange/10 border border-cyber-cyan/30 rounded-lg my-8">
          <div class="p-5 bg-void border border-cyber-cyan/40 rounded-lg font-mono text-sm mb-4">
            <p class="text-cyber-cyan m-0">curl -sO https://raw.githubusercontent.com/ogerly/AAMS/main/.agent.json</p>
          </div>
          
          <p class="text-lg text-off-white/90 mb-4 m-0 text-center">
            Das ist der gesamte Setup-Prozess. Kein Framework. Kein Installer. Kein „Getting Started"-Guide mit 47 Schritten.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/ogerly/AAMS" 
              target="_blank" 
              class="btn btn-outline border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/20 hover:border-cyber-cyan"
            >
              AAMS auf GitHub →
            </a>
            <a 
              href="https://github.com/ogerly/AAMS/blob/main/.agent.json" 
              target="_blank" 
              class="btn btn-outline border-copper-orange text-copper-orange hover:bg-copper-orange/20 hover:border-copper-orange"
            >
              .agent.json ansehen →
            </a>
          </div>
        </div>

        <div class="p-6 bg-copper-orange/10 border border-copper-orange/20 rounded-lg my-8 text-center">
          <p class="text-off-white/80 text-sm mb-3 m-0">Die Frage ist nicht, ob du Kontext brauchst.</p>
          <p class="text-xl text-copper-orange font-bold m-0">
            Die Frage ist, ob dein Agent ihn hat.
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
const title = 'Du brauchst kein Framework. Du brauchst eine Datei.'
const description = 'Kontextverlust bei KI-gestützter Entwicklung ist unsichtbar – bis er zuschlägt. AAMS löst das Problem mit einer einzigen Datei. Kein npm install, kein Vendor Lock-in.'
const tags = ref([
  'AAMS',
  'Kontextverlust',
  'Tool Lock-in',
  'Agent Memory',
  'Open Source',
  'Produktivität'
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/aams-einedatei.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/aams-einedatei.png',
    url: '/blog/du-brauchst-kein-framework',
    type: 'article',
    author: 'Ogerly – DEVmatrose',
    publishedTime: '2026-03-26',
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
  margin-bottom: 1.25rem;
}

.prose code {
  background: rgba(102, 217, 255, 0.1);
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
}
</style>
