<template>
  <div class="min-h-screen bg-void text-off-white">
    <!-- Hero Image -->
    <div class="relative w-full h-96 overflow-hidden">
      <img 
        :src="heroImage" 
        alt="Agenten-Architektur jenseits des Kindergartens – AAMS meets soul.md"
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
          <span class="text-off-white">Agenten-Architektur jenseits des Kindergartens</span>
        </nav>

        <!-- Meta Info & Share -->
        <div class="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm">
          <div class="flex flex-wrap gap-4 text-off-white/70">
            <span>📅 1. April 2026</span>
            <span>•</span>
            <span>⏱️ 12 min Lesezeit</span>
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
          Agenten-Architektur jenseits des Kindergartens
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-cyber-cyan/90 mb-8 leading-relaxed">
          Warum eine soul.md ohne Rückgrat wertlos ist.
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
            „Ein Agent, der nur aus Charakter-Instruktionen besteht, ist ein digitaler Goldfisch. Er hat eine Persönlichkeit, aber kein prozessuales Gedächtnis."
          </p>
        </div>

        <!-- 1. Intro: Der MD-Hype und die Realität -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          1. Der MD-Hype und die Realität
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Jeder redet gerade über Agenten, die über Markdown-Dateien gesteuert werden. <code class="text-cyber-cyan">soul.md</code>, <code class="text-cyber-cyan">heartbeat.md</code>, <code class="text-cyber-cyan">design.md</code> – die Tech-Welt feiert, dass man einem Agenten über Textdateien sagen kann, wer er ist. Willkommen im Jahr 2024, Leute.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist ein netter Anfang. Aber für echte Produktion? Zu wenig. Viel zu wenig.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ich nutze seit 12 Monaten <strong class="text-copper-orange">AAMS</strong> (Agentic Asset Management System). Ein WORKPAPER oder WHITEPAPER sind keine Vorschläge – sie sind die materielle Realität des Agenten. Ohne sie gibt es keinen Fortschritt, nur Halluzinationen.
        </p>

        <div class="p-6 bg-red-500/10 border border-red-500/30 rounded-lg my-8 text-center">
          <p class="text-xl text-red-400 font-bold m-0">
            Zeit, den Spielplatz zu verlassen.
          </p>
        </div>

        <!-- 2. Das Drei-Schichten-Modell -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          2. Die Anatomie eines Profi-Agenten: Drei Schichten
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wenn das Skelett (AAMS) steht, kann man anfangen, dem Agenten ein paar interessante Gadgets zu geben. Ich nenne es die <em>„Erweiterung des Kindergartens"</em> – nützliche Files, die dem Agenten helfen, sich in einer komplexen Welt zurechtzufinden. Aber alles braucht eine Hierarchie:
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6 font-bold text-center">
          <span class="text-cyber-cyan">Stabilität</span> → <span class="text-copper-orange">Identität</span> → <span class="text-emerald-400">Aktivität</span>
        </p>

        <!-- Schicht A: Motorik -->
        <h3 class="text-2xl font-bold text-cyber-cyan mt-10 mb-4">
          A. Die Motorik (Runtime & Takt)
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <p class="text-cyber-cyan font-bold mb-2 m-0">💓 heartbeat.md</p>
            <p class="text-off-white/70 text-sm m-0">Der autonome Puls. Kein Warten auf User-Input. Der Loop, der den Agenten zum Handeln zwingt.</p>
          </div>
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <p class="text-cyber-cyan font-bold mb-2 m-0">⚡ hook.md / cron.md</p>
            <p class="text-off-white/70 text-sm m-0">Reaktive vs. proaktive Trigger. Wann handelt der Agent, ohne dass du es ihm sagst?</p>
          </div>
        </div>

        <!-- Schicht B: Kognition -->
        <h3 class="text-2xl font-bold text-copper-orange mt-10 mb-4">
          B. Die Kognition (Identität & Ausrichtung)
        </h3>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Hier wird es spannend. Hier integrieren wir die neuen Konzepte in die bestehende Architektur:
        </p>

        <div class="space-y-4 my-6">
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg">
            <p class="text-copper-orange font-bold mb-2 m-0">🧬 soul.md – Werte & Charakter</p>
            <p class="text-off-white/70 text-sm m-0">Die Seele. Wer bin ich? Was sind meine Prinzipien? Ein guter Anfang – aber eben nur der Anfang.</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg">
            <p class="text-copper-orange font-bold mb-2 m-0">🔑 account.md – Multi-Identität</p>
            <p class="text-off-white/70 text-sm m-0">Hier wird es ernst. Der Agent braucht kein „Self-Statement", er braucht Zugriff. Sport-Blog? Identität A. Business-Mails? Identität B. Die Brücke zwischen dem „Ich" des Agenten und seinen digitalen Werkzeugen.</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg">
            <p class="text-copper-orange font-bold mb-2 m-0">📊 agenda.md – Zielerreichung & KPIs</p>
            <p class="text-off-white/70 text-sm m-0">Die soul.md sagt, wer er ist. Die agenda.md sagt, was er heute wirklich erreichen muss. Das Messinstrument für KPIs innerhalb der AAMS-Struktur.</p>
          </div>
          <div class="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p class="text-emerald-400 font-bold mb-2 m-0">🔗 decentral.md – Souverän im Web3</p>
            <p class="text-off-white/70 text-sm m-0">Mein persönlicher Favorit. Wir bauen hier keine Sklaven für zentrale Plattformen. Die Anker für Nostr, IPFS oder Bitcoin-Identitäten. Hier wird der Agent souverän.</p>
          </div>
          <div class="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p class="text-emerald-400 font-bold mb-2 m-0">🤝 social.md – Web of Trust</p>
            <p class="text-off-white/70 text-sm m-0">Das Kontaktbuch der Zukunft. Welchen anderen Agenten vertraut er – und welchen nicht? Ein „Web of Trust" auf Dateiebene.</p>
          </div>
        </div>

        <!-- Schicht C: Das Rückgrat -->
        <h3 class="text-2xl font-bold text-emerald-400 mt-10 mb-4">
          C. Das Rückgrat: AAMS (Das Gedächtnis-System)
        </h3>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Das ist der „Erwachsenen-Teil". Hier trennt sich Spielzeug von Architektur:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div class="p-5 bg-off-white/5 border border-off-white/20 rounded-lg">
            <p class="text-off-white/90 font-bold mb-2 m-0">📋 .agent.json & READ-AGENT.md</p>
            <p class="text-off-white/60 text-sm m-0">Der verbindliche Vertrag zwischen Mensch, Tool und Maschine. Kein Vorschlag – ein Manifest.</p>
          </div>
          <div class="p-5 bg-off-white/5 border border-off-white/20 rounded-lg">
            <p class="text-off-white/90 font-bold mb-2 m-0">📂 WORKING/ Verzeichnis</p>
            <p class="text-off-white/60 text-sm m-0">Strikte Trennung: WHITEPAPER (Architektur-Wahrheit) und WORKPAPER (Session-Protokoll). Kein Mischen, kein Raten.</p>
          </div>
          <div class="p-5 bg-off-white/5 border border-off-white/20 rounded-lg col-span-1 sm:col-span-2">
            <p class="text-off-white/90 font-bold mb-2 m-0">🧠 MEMORY/</p>
            <p class="text-off-white/60 text-sm m-0">Ein menschlich lesbarer Git-Index (<code class="text-cyber-cyan">ltm-index.md</code>) schlägt jeden Vektorstore, wenn es um Auditierbarkeit geht. Du kannst jeden Eintrag lesen, versionieren, hinterfragen.</p>
          </div>
        </div>

        <div class="p-6 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg my-8 text-center">
          <p class="text-xl text-cyber-cyan font-bold m-0">
            AAMS liefert die Disziplin. Die neuen MD-Files liefern die Kreativität.
          </p>
          <p class="text-off-white/60 text-sm mt-2 m-0">
            Das eine ist das Rückgrat, das andere ist das Gesicht.
          </p>
        </div>

        <!-- 3. Markt-Check -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          3. Markt-Check: Was machen die anderen?
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Ein kurzer Blick über den Tellerrand – nicht um zu kopieren, sondern um zu zeigen, wo wir stehen:
        </p>

        <div class="space-y-3 my-8">
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg flex items-center gap-4">
            <code class="text-cyber-cyan font-mono text-sm whitespace-nowrap">Google Stitch</code>
            <span class="text-off-white/50">→</span>
            <span class="text-off-white/70 text-sm">design.md für UI-Konsistenz. Wichtiges Puzzleteil, aber kein System.</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg flex items-center gap-4">
            <code class="text-cyber-cyan font-mono text-sm whitespace-nowrap">OpenClaw & Claude Code</code>
            <span class="text-off-white/50">→</span>
            <span class="text-off-white/70 text-sm">Entdecken gerade das dateibasierte Gedächtnis. AAMS hat es seit 12 Monaten.</span>
          </div>
          <div class="p-4 bg-off-white/5 border border-off-white/20 rounded-lg flex items-center gap-4">
            <code class="text-cyber-cyan font-mono text-sm whitespace-nowrap">skill.md</code>
            <span class="text-off-white/50">→</span>
            <span class="text-off-white/70 text-sm">Der Versuch, Fähigkeiten zu standardisieren. Guter Ansatz, aber kein Rückrat.</span>
          </div>
        </div>

        <div class="p-4 bg-copper-orange/10 border-l-4 border-copper-orange rounded-r-lg my-8">
          <p class="text-off-white/90 m-0">
            Alle diese Ansätze lösen <strong class="text-copper-orange">Teilprobleme</strong>. Keiner liefert das Gesamtsystem. Das ist der Unterschied: AAMS ist keine Datei – es ist eine Architektur.
          </p>
        </div>

        <!-- 4. Warum AAMS die Wirbelsäule ist -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          4. Warum AAMS die Wirbelsäule ist
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
            <p class="text-cyber-cyan font-bold mb-2 m-0">🔧 Tool-Agnostik</p>
            <p class="text-off-white/70 text-sm m-0">Ein AAMS-Agent funktioniert in Cursor, in der Konsole mit Claude Code oder als autonomer Python-Loop. Die Intelligenz steckt im Repo, nicht im Tool.</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border border-copper-orange/30 rounded-lg">
            <p class="text-copper-orange font-bold mb-2 m-0">💾 Persistence</p>
            <p class="text-off-white/70 text-sm m-0">Was passiert, wenn der Context-Fenster-Reset kommt? Bei den anderen: Alles weg. Bei AAMS: Nichts passiert. Das Workpaper überlebt.</p>
          </div>
        </div>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Während andere noch über „System-Prompts" diskutieren, loggt mein Agent bereits die dritte erfolgreiche Session des Tages in sein WORKPAPER ein.
        </p>

        <div class="p-5 bg-void border border-cyber-cyan/40 rounded-lg my-8 font-mono text-sm">
          <p class="text-cyber-cyan/60 m-0 mb-2"># Session 47 – Workpaper Eintrag</p>
          <p class="text-cyber-cyan m-0 mb-1">STATUS: ✅ Abgeschlossen</p>
          <p class="text-cyber-cyan m-0 mb-1">KONTEXT: Agent kennt alle 46 vorherigen Sessions</p>
          <p class="text-cyber-cyan m-0">ERGEBNIS: Architektur-Entscheidung dokumentiert, Whitepaper aktualisiert</p>
        </div>

        <!-- 5. Das Drei-Schichten-Diagramm -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          5. Stabilität → Identität → Aktivität
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          So sieht die Hierarchie aus. Wer die Schichten von unten nach oben baut, hat ein System. Wer nur die obere Schicht baut, hat ein Spielzeug:
        </p>

        <!-- Layer Diagram -->
        <div class="my-8 space-y-2">
          <div class="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-t-lg text-center">
            <p class="text-emerald-400 font-bold text-lg m-0">🚀 Aktivität</p>
            <p class="text-off-white/60 text-sm m-0 mt-1">heartbeat.md · hook.md · cron.md</p>
            <p class="text-off-white/40 text-xs m-0 mt-1">Der Motor, der alles antreibt</p>
          </div>
          <div class="p-5 bg-copper-orange/10 border-x border-copper-orange/30 text-center">
            <p class="text-copper-orange font-bold text-lg m-0">🧬 Identität</p>
            <p class="text-off-white/60 text-sm m-0 mt-1">soul.md · account.md · agenda.md · decentral.md · social.md</p>
            <p class="text-off-white/40 text-xs m-0 mt-1">Wer bin ich? Wo sind meine Accounts? Wem vertraue ich?</p>
          </div>
          <div class="p-5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-b-lg text-center">
            <p class="text-cyber-cyan font-bold text-lg m-0">⚓ Stabilität – AAMS</p>
            <p class="text-off-white/60 text-sm m-0 mt-1">.agent.json · WHITEPAPER · WORKPAPER · MEMORY/ · ltm-index.md</p>
            <p class="text-off-white/40 text-xs m-0 mt-1">Das Fundament. Die Git-Wahrheit. Das Langzeitgedächtnis.</p>
          </div>
        </div>

        <div class="p-6 bg-red-500/10 border border-red-500/30 rounded-lg my-8 text-center">
          <p class="text-xl text-red-400 font-bold m-0">
            Wer nur das Gesicht baut, wird bei der kleinsten Böe umgeblasen.
          </p>
          <p class="text-off-white/60 text-sm mt-2 m-0">
            Wer nur das Rückgrat hat, ist funktionell, aber einsam. Wir kombinieren beides.
          </p>
        </div>

        <!-- 6. Die neuen Gadgets im Detail -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          6. Die „Kindergarten-Erweiterungen" im Detail
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Jetzt, da das Rückgrat steht, schauen wir uns die neuen Files an, die dem Agenten ein Gesicht geben:
        </p>

        <!-- account.md -->
        <div class="p-6 bg-off-white/5 border border-copper-orange/30 rounded-lg my-8">
          <h3 class="text-xl font-bold text-copper-orange mb-4 m-0">🔑 account.md – Multi-Identitäts-Management</h3>
          <p class="text-off-white/80 mb-4 m-0">
            Ein Mensch hat verschiedene Rollen. Ein Agent auch. Die <code class="text-cyber-cyan">account.md</code> verwaltet die Profile:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="p-3 bg-void border border-off-white/10 rounded text-center">
              <span class="text-2xl">🏋️</span>
              <p class="text-off-white/70 text-sm m-0 mt-1">Sport-Blog → Identität A</p>
            </div>
            <div class="p-3 bg-void border border-off-white/10 rounded text-center">
              <span class="text-2xl">💼</span>
              <p class="text-off-white/70 text-sm m-0 mt-1">Business → Identität B</p>
            </div>
            <div class="p-3 bg-void border border-off-white/10 rounded text-center">
              <span class="text-2xl">🔧</span>
              <p class="text-off-white/70 text-sm m-0 mt-1">Dev-Projekt → Identität C</p>
            </div>
          </div>
        </div>

        <!-- agenda.md -->
        <div class="p-6 bg-off-white/5 border border-copper-orange/30 rounded-lg my-8">
          <h3 class="text-xl font-bold text-copper-orange mb-4 m-0">📊 agenda.md – KPIs für KI</h3>
          <p class="text-off-white/80 mb-4 m-0">
            Der Tacho für den Erfolg. Nicht nur <em>„Was mache ich?"</em>, sondern <em>„Habe ich mein Ziel erreicht?"</em>
          </p>
          <div class="p-4 bg-void border border-cyber-cyan/30 rounded font-mono text-sm">
            <p class="text-cyber-cyan/60 m-0 mb-1"># agenda.md – Tagesziele</p>
            <p class="text-cyber-cyan m-0 mb-1">- [x] Blog-Artikel fertigstellen (Deadline: 14:00)</p>
            <p class="text-cyber-cyan m-0 mb-1">- [x] PR reviewen und mergen</p>
            <p class="text-amber-400 m-0">- [ ] WHITEPAPER Kapitel 3 überarbeiten</p>
          </div>
        </div>

        <!-- decentral.md -->
        <div class="p-6 bg-off-white/5 border border-emerald-500/30 rounded-lg my-8">
          <h3 class="text-xl font-bold text-emerald-400 mb-4 m-0">🔗 decentral.md – Der souveräne Agent</h3>
          <p class="text-off-white/80 mb-4 m-0">
            Hier liegen die Anker für die Freiheit. Keine API-Ketten, keine Plattform-Abhängigkeit:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="p-4 bg-void border border-emerald-500/20 rounded text-center">
              <span class="text-2xl">⚡</span>
              <p class="text-emerald-400 font-bold text-sm m-0 mt-1">Nostr</p>
              <p class="text-off-white/50 text-xs m-0">Dezentrale Identität</p>
            </div>
            <div class="p-4 bg-void border border-emerald-500/20 rounded text-center">
              <span class="text-2xl">📦</span>
              <p class="text-emerald-400 font-bold text-sm m-0 mt-1">IPFS</p>
              <p class="text-off-white/50 text-xs m-0">Verteilte Speicherung</p>
            </div>
            <div class="p-4 bg-void border border-emerald-500/20 rounded text-center">
              <span class="text-2xl">₿</span>
              <p class="text-emerald-400 font-bold text-sm m-0 mt-1">Bitcoin</p>
              <p class="text-off-white/50 text-xs m-0">Souveräne Wertanlage</p>
            </div>
          </div>
        </div>

        <!-- social.md -->
        <div class="p-6 bg-off-white/5 border border-emerald-500/30 rounded-lg my-8">
          <h3 class="text-xl font-bold text-emerald-400 mb-4 m-0">🤝 social.md – Web of Trust auf Dateiebene</h3>
          <p class="text-off-white/80 mb-4 m-0">
            Ab hier beginnt die wahre Kreativität. Vertrauensnetzwerke zwischen Agenten. Wer darf was? Wer kennt wen?
          </p>
          <div class="p-4 bg-void border border-cyan-500/30 rounded font-mono text-sm">
            <p class="text-cyber-cyan/60 m-0 mb-1"># social.md – Vertrauensnetzwerk</p>
            <p class="text-emerald-400 m-0 mb-1">✅ Agent-DevOps → trust_level: high</p>
            <p class="text-emerald-400 m-0 mb-1">✅ Agent-QA → trust_level: high</p>
            <p class="text-amber-400 m-0 mb-1">⚠️ Agent-External → trust_level: medium</p>
            <p class="text-red-400 m-0">❌ Agent-Unknown → trust_level: none</p>
          </div>
        </div>

        <!-- 7. Fazit -->
        <h2 class="text-3xl font-bold text-copper-orange mt-12 mb-6">
          7. Kreativität braucht Struktur
        </h2>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          AAMS liefert die Disziplin. Die neuen MD-Files liefern die Kreativität. Das eine ist das Rückgrat, das andere ist das Gesicht.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wer nur das Gesicht baut, wird bei der kleinsten Böe umgeblasen. Wer nur das Rückgrat hat, ist funktionell, aber einsam.
        </p>

        <p class="text-lg text-off-white/90 leading-relaxed mb-6">
          Wer keine Ordnung in seinen Files hat, wird <strong class="text-copper-orange">niemals</strong> einen Multi-Agenten-Verbund steuern können. Denn die <code class="text-cyber-cyan">social.md</code> funktioniert nur, wenn jeder Agent in diesem Verbund weiß, wer er ist (<code class="text-cyber-cyan">soul.md</code>), was er heute tun soll (<code class="text-cyber-cyan">agenda.md</code>) und wo seine Ergebnisse liegen (AAMS).
        </p>

        <div class="p-6 bg-gradient-to-r from-cyber-cyan/10 via-void to-copper-orange/10 border border-cyber-cyan/30 rounded-lg my-8">
          <p class="text-lg text-off-white/90 mb-4 m-0 text-center">
            Lerne den Unterschied zwischen einem <strong class="text-red-400">Agenten-Prompt</strong> und einem <strong class="text-cyber-cyan">Agenten-System</strong>.
          </p>

          <p class="text-lg text-off-white/90 mb-4 m-0 text-center">
            Wir nutzen die neue MD-Kreativität, um unserem bewährten AAMS-Rückgrat ein Gesicht zu geben – <strong class="text-copper-orange">nicht um es zu ersetzen</strong>.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
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
          <p class="text-off-white/80 text-sm mb-3 m-0">Während andere noch über „System-Prompts" diskutieren...</p>
          <p class="text-xl text-copper-orange font-bold m-0">
            ...loggt mein Agent bereits die dritte erfolgreiche Session des Tages in sein WORKPAPER ein.
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
const title = 'Agenten-Architektur jenseits des Kindergartens: Warum eine soul.md ohne Rückgrat wertlos ist'
const description = 'Ein Agent, der nur aus Charakter-Instruktionen besteht, ist ein digitaler Goldfisch. AAMS liefert die Disziplin, die neuen MD-Files die Kreativität. So baut man echte Agenten-Systeme.'
const tags = ref([
  'AAMS',
  'Agenten-Architektur',
  'soul.md',
  'Multi-Agent-Systeme',
  'Dezentralisierung',
  'Web of Trust'
])

// Hero Image
const basePath = import.meta.env.BASE_URL
const heroImage = computed(() => `${basePath}images/blog/social-md-aams.jpg`)

// State
const linkCopied = ref(false)

// SEO Meta Tags
onMounted(() => {
  useSEO({
    title: title,
    description: description,
    image: '/images/blog/social-md-aams.jpg',
    url: '/blog/agenten-architektur-jenseits-des-kindergartens',
    type: 'article',
    author: 'Ogerly – DEVmatrose',
    publishedTime: '2026-04-01',
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
