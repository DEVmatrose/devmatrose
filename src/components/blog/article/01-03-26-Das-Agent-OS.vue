<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Das Agent-OS – Wenn Governance selbst zum Betriebssystem wird"
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
          <span class="text-off-white">Das Agent-OS</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 1. März 2026</span>
            <span>•</span>
            <span>⏱️ 12 min Lesezeit</span>
            <span>•</span>
            <span>🏗️ KI-Architektur & Governance</span>
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
          Das Agent-OS
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Wenn Governance selbst zum Betriebssystem wird
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

        <!-- Intro / These -->
        <div class="p-6 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-xl text-off-white/90 italic m-0">
            Wir stehen nicht vor der nächsten UI-Revolution. Wir stehen vor einer Architekturverschiebung.
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Die Frage ist nicht mehr:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div class="p-5 bg-off-white/5 border border-off-white/20 rounded-lg">
            <p class="text-off-white/50 text-xs uppercase tracking-wider mb-2 m-0">Gestern</p>
            <p class="text-off-white/80 text-lg italic m-0">„Welches Betriebssystem läuft auf deinem Rechner?"</p>
          </div>
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <p class="text-cyber-cyan/70 text-xs uppercase tracking-wider mb-2 m-0">Heute</p>
            <p class="text-cyber-cyan text-lg italic m-0">„Wer kontrolliert die Entscheidungen, die dein System trifft?"</p>
          </div>
        </div>

        <!-- 1. Vom Produkt zum Zustand -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          1. Vom Produkt zum Zustand
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Windows, macOS, Linux – sie sind Produkte. Versioniert, paketiert, distribuiert.
        </p>

        <div class="p-6 bg-copper-orange/10 border border-copper-orange/20 rounded-lg my-8 text-center">
          <p class="text-xl text-copper-orange font-bold m-0">
            Ein Agent-OS wäre kein Produkt. Es wäre ein Zustand.
          </p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ein Zustand, der sich zusammensetzt aus:
        </p>

        <!-- Zustand-Komponenten als visuelle Karten -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 my-8">
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg text-center">
            <span class="text-2xl block mb-2">🖥️</span>
            <span class="text-off-white/80 text-sm font-semibold">Hardware</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg text-center">
            <span class="text-2xl block mb-2">🧠</span>
            <span class="text-off-white/80 text-sm font-semibold">Kontext</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg text-center">
            <span class="text-2xl block mb-2">🔑</span>
            <span class="text-off-white/80 text-sm font-semibold">Identität</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg text-center">
            <span class="text-2xl block mb-2">🎯</span>
            <span class="text-off-white/80 text-sm font-semibold">Zieldefinition</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg text-center">
            <span class="text-2xl block mb-2">📜</span>
            <span class="text-off-white/80 text-sm font-semibold">Governance</span>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist kein neues Kernel-Projekt. Das ist ein <strong class="text-copper-orange">Konfigurations-Graph mit Entscheidungslogik</strong>.
        </p>

        <!-- 2. Der USB-Gedanke -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          2. Der USB-Gedanke – technisch entzaubert
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Stell dir vor: Du steckst einen Stick ein. Kein Installer startet. Kein Setup-Assistent. Stattdessen:
        </p>

        <!-- USB-Flow als vertikale Steps -->
        <div class="space-y-3 my-8">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">1</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Hardware wird analysiert</strong> – Was steht zur Verfügung?</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">2</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Zielzustand wird definiert</strong> – Was soll das System können?</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">3</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Agent erstellt einen Aktionsplan</strong> – Welche Schritte sind nötig?</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">4</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Nur freigegebene Aktionen werden ausgeführt</strong> – Kontrolle bleibt beim Besitzer</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center flex-shrink-0 text-cyber-cyan font-bold">5</div>
            <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex-1">
              <p class="text-off-white/80 m-0"><strong class="text-cyber-cyan">Jede Entscheidung wird dokumentiert</strong> – Audit-Trail von Tag-1</p>
            </div>
          </div>
        </div>

        <div class="p-4 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Das System entsteht nicht durch Klicks – es entsteht durch <strong class="text-copper-orange">deklarierte Intention + kontrollierte Wirkung</strong>.
          </p>
        </div>

        <!-- 3. Das Problem der Millionen Betriebssysteme -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          3. Das Problem der Millionen Betriebssysteme
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn jedes System individuell erzeugt wird, entstehen:
        </p>

        <!-- Risiko-Karten -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
            <span class="text-3xl block mb-2">♾️</span>
            <p class="text-red-400 font-semibold text-sm m-0">Millionen Konfigurationen</p>
          </div>
          <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
            <span class="text-3xl block mb-2">🌀</span>
            <p class="text-red-400 font-semibold text-sm m-0">Millionen Zustände</p>
          </div>
          <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
            <span class="text-3xl block mb-2">⚠️</span>
            <p class="text-red-400 font-semibold text-sm m-0">Millionen potenzielle Risiken</p>
          </div>
        </div>

        <div class="p-6 bg-copper-orange/10 border border-copper-orange/20 rounded-lg my-8 text-center">
          <p class="text-xl text-copper-orange font-bold m-0">
            Deshalb ist Governance kein Add-on. Governance ist das Betriebssystem.
          </p>
        </div>

        <!-- Der Mantel: Struktur > UI -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Der Mantel: Struktur &gt; UI
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ein Agent-OS ist kein Kernel-Ersatz. Es ist ein <strong class="text-copper-orange">Governance-Mantel über einem bestehenden Host-System</strong>. Und genau hier setzen wir an.
        </p>

        <!-- AAMS Section -->
        <div class="p-6 bg-gradient-to-r from-cyber-cyan/10 via-void to-cyber-cyan/5 border border-cyber-cyan/30 rounded-lg my-8">
          <h3 class="text-xl font-bold text-cyber-cyan mb-4 m-0">AAMS – Gedächtnis und Reproduzierbarkeit</h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div class="p-3 bg-void/50 border border-cyber-cyan/20 rounded">
              <p class="text-off-white/80 text-sm m-0">📋 <strong class="text-cyber-cyan">Bootstrap-Manifest</strong> im Root</p>
            </div>
            <div class="p-3 bg-void/50 border border-cyber-cyan/20 rounded">
              <p class="text-off-white/80 text-sm m-0">🔄 <strong class="text-cyber-cyan">Klarer WORKING-Flow</strong></p>
            </div>
            <div class="p-3 bg-void/50 border border-cyber-cyan/20 rounded">
              <p class="text-off-white/80 text-sm m-0">📜 <strong class="text-cyber-cyan">Rekonstruierbare</strong> Entscheidungshistorie</p>
            </div>
            <div class="p-3 bg-void/50 border border-cyber-cyan/20 rounded">
              <p class="text-off-white/80 text-sm m-0">🔧 <strong class="text-cyber-cyan">Tool-agnostische</strong> Struktur</p>
            </div>
          </div>

          <div class="p-4 bg-void border border-cyber-cyan/20 rounded-lg">
            <p class="text-off-white/80 text-sm m-0 italic">
              Ein Agent weiss, wo er ist. Und ein Mensch weiss, was der Agent getan hat.
            </p>
            <p class="text-off-white/60 text-xs mt-2 m-0">
              Ohne diese Schicht wird jedes autonome System instabil.
            </p>
          </div>
        </div>

        <!-- ImprintGuard Section -->
        <div class="p-6 bg-gradient-to-r from-copper-orange/10 via-void to-copper-orange/5 border border-copper-orange/30 rounded-lg my-8">
          <h3 class="text-xl font-bold text-copper-orange mb-4 m-0">ImprintGuard – Kontrolle der Wirkung</h3>
          
          <p class="text-off-white/80 mb-4">
            Agenten sollen planen dürfen. Aber sie dürfen nicht unkontrolliert handeln.
          </p>

          <!-- Layer A vs Layer B -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
              <p class="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2 m-0">Layer A – Offen</p>
              <p class="text-off-white/70 text-sm m-0">Analyse, Planung, Dokumentation</p>
              <p class="text-emerald-400/60 text-xs mt-2 m-0">→ Keine Freigabe nötig</p>
            </div>
            <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p class="text-red-400 font-bold text-sm uppercase tracking-wider mb-2 m-0">Layer B – Geschützt</p>
              <p class="text-off-white/70 text-sm m-0">Installationen, Netzwerk, Credentials, Deployment</p>
              <p class="text-red-400/60 text-xs mt-2 m-0">→ Explizite Freigabe erforderlich</p>
            </div>
          </div>

          <!-- ImprintGuard Features -->
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2 bg-void/50 border border-off-white/10 rounded text-center">
              <p class="text-off-white/70 text-xs m-0">🔒 Execution-Gating</p>
            </div>
            <div class="p-2 bg-void/50 border border-off-white/10 rounded text-center">
              <p class="text-off-white/70 text-xs m-0">🎫 Token-basierte Freigabe</p>
            </div>
            <div class="p-2 bg-void/50 border border-off-white/10 rounded text-center">
              <p class="text-off-white/70 text-xs m-0">🔀 Planung ≠ Ausführung</p>
            </div>
            <div class="p-2 bg-void/50 border border-off-white/10 rounded text-center">
              <p class="text-off-white/70 text-xs m-0">🛡️ Schutz vor Silent Execution</p>
            </div>
          </div>

          <div class="p-3 bg-void border border-copper-orange/20 rounded-lg mt-4">
            <p class="text-off-white/80 text-sm italic m-0">
              Damit wird Autonomie nicht zur Blackbox.
            </p>
          </div>
        </div>

        <!-- Machtverschiebung -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Warum das die Macht verschiebt
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Heute kontrollieren Konzerne Distribution, Identität, Infrastruktur und Execution-Umgebungen.
        </p>

        <!-- Vergleich: Heute vs. Agent-OS -->
        <div class="overflow-x-auto my-8">
          <table class="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th class="p-3 text-left bg-off-white/10 border border-off-white/20 text-off-white/70">Dimension</th>
                <th class="p-3 text-left bg-red-500/10 border border-red-500/20 text-red-400">Heute (Konzerne)</th>
                <th class="p-3 text-left bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Agent-OS (Besitzer)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-off-white/10 text-off-white/70">Identität</td>
                <td class="p-3 border border-off-white/10 text-off-white/60">Cloud-Account</td>
                <td class="p-3 border border-off-white/10 text-off-white/60">Lokal verwaltet</td>
              </tr>
              <tr>
                <td class="p-3 border border-off-white/10 text-off-white/70">Compute</td>
                <td class="p-3 border border-off-white/10 text-off-white/60">Remote-Datacenter</td>
                <td class="p-3 border border-off-white/10 text-off-white/60">Lokal orchestriert</td>
              </tr>
              <tr>
                <td class="p-3 border border-off-white/10 text-off-white/70">Software</td>
                <td class="p-3 border border-off-white/10 text-off-white/60">Lizenziert / SaaS</td>
                <td class="p-3 border border-off-white/10 text-off-white/60">On-Demand generiert</td>
              </tr>
              <tr>
                <td class="p-3 border border-off-white/10 text-off-white/70">Audit</td>
                <td class="p-3 border border-off-white/10 text-off-white/60">Intransparent</td>
                <td class="p-3 border border-off-white/10 text-off-white/60">Vollständig auditierbar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist keine Anti-Konzern-Rhetorik. Das ist eine <strong class="text-copper-orange">strukturelle Konsequenz</strong>.
        </p>

        <!-- Grenzen der Zentralisierung -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
          <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center">
            <span class="text-xl block mb-2">⚡</span>
            <p class="text-amber-400 text-xs font-semibold m-0">Energiegrenzen</p>
          </div>
          <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center">
            <span class="text-xl block mb-2">📜</span>
            <p class="text-amber-400 text-xs font-semibold m-0">Governance-Grenzen</p>
          </div>
          <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center">
            <span class="text-xl block mb-2">📈</span>
            <p class="text-amber-400 text-xs font-semibold m-0">Skalierungsgrenzen</p>
          </div>
          <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center">
            <span class="text-xl block mb-2">🤝</span>
            <p class="text-amber-400 text-xs font-semibold m-0">Vertrauensgrenzen</p>
          </div>
        </div>

        <!-- Der eigentliche Engpass -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Der eigentliche Engpass
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Nicht Rechenleistung. Nicht Modellgrösse. Sondern:
        </p>

        <div class="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg my-8 text-center">
          <p class="text-2xl text-cyber-cyan font-bold m-0">Entscheidungs-Transparenz</p>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn wir nicht nachvollziehen können, warum Dinge passieren, tauschen wir nur eine Abhängigkeit gegen die nächste:
        </p>

        <!-- Transparenz-Fragen -->
        <div class="space-y-3 my-8">
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex items-center gap-3">
            <span class="text-red-400 text-lg">❓</span>
            <p class="text-off-white/80 text-sm m-0">Warum wurde etwas <strong class="text-off-white">installiert</strong>?</p>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex items-center gap-3">
            <span class="text-red-400 text-lg">❓</span>
            <p class="text-off-white/80 text-sm m-0">Warum wurde ein <strong class="text-off-white">Port geöffnet</strong>?</p>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex items-center gap-3">
            <span class="text-red-400 text-lg">❓</span>
            <p class="text-off-white/80 text-sm m-0">Warum wurde ein <strong class="text-off-white">Credential erzeugt</strong>?</p>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/15 rounded-lg flex items-center gap-3">
            <span class="text-red-400 text-lg">❓</span>
            <p class="text-off-white/80 text-sm m-0">Warum wurde ein <strong class="text-off-white">Service gestartet</strong>?</p>
          </div>
        </div>

        <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Ohne Antworten tauschen wir nur <strong class="text-red-400">SaaS-Abhängigkeit gegen Agent-Abhängigkeit</strong>.
          </p>
        </div>

        <!-- Das Agent-OS ist kein Produkt -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Das Agent-OS ist kein Produkt
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg text-center">
            <span class="text-2xl block mb-2">📐</span>
            <p class="text-copper-orange font-semibold m-0">Ein Integrationsstandard</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg text-center">
            <span class="text-2xl block mb-2">🛡️</span>
            <p class="text-copper-orange font-semibold m-0">Ein Governance-Layer</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg text-center">
            <span class="text-2xl block mb-2">🗺️</span>
            <p class="text-copper-orange font-semibold m-0">Ein Konfigurations-Graph</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg text-center">
            <span class="text-2xl block mb-2">🧭</span>
            <p class="text-copper-orange font-semibold m-0">Ein kontrollierter Entscheidungsraum</p>
          </div>
        </div>

        <div class="p-6 bg-gradient-to-r from-copper-orange/10 via-cyber-cyan/5 to-copper-orange/10 border border-copper-orange/20 rounded-lg my-8 text-center">
          <p class="text-off-white/80 text-sm mb-3 m-0">Vielleicht ist das die eigentliche Revolution:</p>
          <p class="text-xl text-copper-orange font-bold m-0">
            Nicht weniger Klicks. Nicht bessere UI.
          </p>
          <p class="text-lg text-cyber-cyan mt-3 m-0">
            Sondern Systeme, die uns gehören – weil wir ihre Entscheidungen nachvollziehen können.
          </p>
        </div>

        <!-- Offene Frage -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          Offene Frage
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Soll die Wirkungsschicht zuerst:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <p class="text-cyber-cyan font-bold mb-2 m-0">🖥️ Den lokalen Desktop schützen?</p>
            <p class="text-off-white/60 text-sm m-0">Nutzer-nahe Kontrolle, direktes Feedback, schnelle Iteration</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg">
            <p class="text-copper-orange font-bold mb-2 m-0">🖧 Server- und Provisioning-Prozesse kontrollieren?</p>
            <p class="text-off-white/60 text-sm m-0">Infrastruktur-kritisch, höheres Risiko, grösserer Hebel</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Beides ist möglich. Die Priorisierung entscheidet über die Richtung des gesamten Projekts.
        </p>

        <!-- CTA: AAMS GitHub -->
        <div class="p-6 bg-gradient-to-r from-cyber-cyan/10 via-void to-copper-orange/10 border border-cyber-cyan/20 rounded-lg my-8 text-center">
          <p class="text-lg text-off-white/90 mb-3 m-0">
            <strong class="text-cyber-cyan">AAMS</strong> und <strong class="text-copper-orange">ImprintGuard</strong> sind Open Source.
          </p>
          <a 
            href="https://github.com/DEVmatrose" 
            target="_blank" 
            class="btn btn-outline border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/20 hover:border-cyber-cyan"
          >
            Zum Repository auf GitHub →
          </a>
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
const title = 'Das Agent-OS – Wenn Governance selbst zum Betriebssystem wird'
const description = 'Wir stehen vor einer Architekturverschiebung: Agent-OS als Governance-Mantel über bestehenden Systemen. AAMS für Gedächtnis, ImprintGuard für kontrollierte Wirkung.'
const tags = ref([
  'Agent-OS',
  'Governance',
  'AAMS',
  'ImprintGuard',
  'Autonomie',
  'Dezentralisierung'
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/agentic-os.png`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/agentic-os.png',
    url: '/blog/das-agent-os',
    type: 'article',
    author: 'Ogerly – DEVmatrose',
    publishedTime: '2026-03-01',
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
