<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen bg-[#f5f0e8] text-[#1a1510] font-sans scroll-smooth overflow-y-auto">

    <nav
      class="fixed top-0 inset-x-0 z-[100] flex items-center justify-between px-6 md:px-10 py-5 bg-[#f5f0e8]/90 backdrop-blur-md border-b border-[#c0622a]/10">
      <div class="font-serif leading-tight">
        <span class="text-[#2d4a2e] font-bold text-lg block italic leading-none">Griya Pratama</span>
        <span class="text-[#c0622a] font-bold text-lg leading-none">Asri 2</span>
      </div>

      <div class="flex items-center gap-4 md:gap-8">
        <div class="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a href="#home" class="hover:text-[#c0622a] transition">Beranda</a>
          <a href="#tentang" class="hover:text-[#c0622a] transition">Tentang</a>
          <a href="#lokasi" class="hover:text-[#c0622a] transition">Lokasi</a>
        </div>
        <UButton to="/login" label="🔐 Login Warga" variant="solid"
          class="rounded-full px-5 py-2 text-xs font-bold bg-[#2d4a2e] hover:bg-[#3d6b3f] text-white shadow-md transition-all active:scale-95" />
      </div>
    </nav>

    <section id="home" class="relative min-h-screen flex items-center px-6 md:px-10 pt-24 overflow-hidden">
      <div class="absolute inset-0 -z-10 opacity-30"
        style="background-image: radial-gradient(#c0622a 1px, transparent 1px); background-size: 32px 32px;" />

      <div class="max-w-3xl z-10 py-12">
        <div
          class="inline-flex items-center gap-2 bg-[#c0622a] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          Perumahan Klaten · 24 Unit
        </div>

        <h1 class="font-serif text-5xl md:text-8xl text-[#2d4a2e] leading-[0.95] mb-8">
          Griya Pratama <br>
          <span class="italic text-[#c0622a]">Asri 2</span>
        </h1>

        <p class="text-stone-500 text-lg md:text-xl max-w-md leading-relaxed mb-10 font-light">
          Hunian nyaman dan asri di jantung Prambanan, Klaten. Kawasan perumahan dengan 24 unit rumah yang terencana dan
          aman.
        </p>

        <div class="flex flex-wrap gap-4 mb-20">
          <a href="#rumah"
            class="bg-[#c0622a] text-white px-8 py-4 rounded-full text-sm font-bold shadow-xl shadow-orange-900/10 hover:-translate-y-1 transition-all">
            🏠 Lihat Daftar Rumah
          </a>
          <UButton to="/login" label="🔐 Login Warga" variant="solid"
            class="rounded-full px-5 py-2 text-xs font-bold bg-[#2d4a2e] hover:bg-[#3d6b3f] text-white shadow-md transition-all active:scale-95" />
        </div>

        <div class="flex gap-10 md:gap-16 pt-10 border-t border-stone-200">
          <div v-for="stat in [['24', 'Unit'], ['Klaten', 'Jateng'], ['Asri', 'Konsep']]" :key="stat[0]">
            <p class="font-serif text-3xl font-bold text-stone-900 leading-none">{{ stat[0] }}</p>
            <p class="text-[10px] uppercase tracking-widest text-stone-400 mt-2 font-bold">{{ stat[1] }}</p>
          </div>
        </div>
      </div>

      <div class="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[550px]">
        <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="360" rx="45" ry="55" fill="#3d6b3f" opacity="0.3" />
          <ellipse cx="60" cy="330" rx="32" ry="40" fill="#3d6b3f" opacity="0.5" />
          <rect x="53" y="370" width="14" height="35" rx="3" fill="#5a4032" opacity="0.4" />

          <ellipse cx="420" cy="360" rx="45" ry="55" fill="#3d6b3f" opacity="0.3" />
          <ellipse cx="420" cy="330" rx="32" ry="40" fill="#3d6b3f" opacity="0.5" />
          <rect x="413" y="370" width="14" height="35" rx="3" fill="#5a4032" opacity="0.4" />

          <ellipse cx="240" cy="395" rx="220" ry="18" fill="#d4b896" opacity="0.35" />

          <rect x="110" y="210" width="260" height="185" rx="6" fill="#fdfaf5" />
          <rect x="110" y="210" width="260" height="185" rx="6" stroke="#d4b896" stroke-width="2" />

          <polygon points="90,215 240,90 390,215" fill="#c0622a" />
          <polygon points="100,215 240,100 380,215" fill="#d4735a" />
          <polygon points="90,215 240,90 100,215" fill="#9b4d1f" opacity="0.3" />

          <rect x="290" y="115" width="28" height="55" rx="3" fill="#9b4d1f" />
          <rect x="284" y="108" width="40" height="12" rx="3" fill="#7a3d17" />

          <rect x="196" y="300" width="88" height="95" rx="5" fill="#e8dcc8" />
          <rect x="196" y="300" width="88" height="95" rx="5" stroke="#c0a880" stroke-width="1.5" />
          <rect x="207" y="311" width="30" height="42" rx="3" fill="#fff" />
          <rect x="243" y="311" width="30" height="42" rx="3" fill="#fff" />
          <circle cx="237" cy="334" r="4" fill="#c0622a" />
          <rect x="196" y="300" width="88" height="14" rx="5" fill="#c0a880" />

          <rect x="128" y="240" width="72" height="58" rx="5" fill="#d6eaff" stroke="#c0a880" stroke-width="1.5" />
          <line x1="164" y1="240" x2="164" y2="298" stroke="#c0a880" stroke-width="1.5" />
          <line x1="128" y1="269" x2="200" y2="269" stroke="#c0a880" stroke-width="1.5" />
          <rect x="133" y="246" width="12" height="18" rx="2" fill="white" opacity="0.5" />

          <rect x="280" y="240" width="72" height="58" rx="5" fill="#d6eaff" stroke="#c0a880" stroke-width="1.5" />
          <line x1="316" y1="240" x2="316" y2="298" stroke="#c0a880" stroke-width="1.5" />
          <line x1="280" y1="269" x2="352" y2="269" stroke="#c0a880" stroke-width="1.5" />
          <rect x="285" y="246" width="12" height="18" rx="2" fill="white" opacity="0.5" />

          <rect x="215" y="392" width="50" height="8" rx="4" fill="#d4b896" opacity="0.5" />

          <g opacity="0.6">
            <rect x="110" y="370" width="6" height="26" rx="2" fill="#c0a880" />
            <rect x="128" y="370" width="6" height="26" rx="2" fill="#c0a880" />
            <rect x="146" y="370" width="6" height="26" rx="2" fill="#c0a880" />
            <rect x="108" y="375" width="46" height="5" rx="2" fill="#c0a880" />
            <rect x="108" y="385" width="46" height="5" rx="2" fill="#c0a880" />

            <rect x="336" y="370" width="6" height="26" rx="2" fill="#c0a880" />
            <rect x="354" y="370" width="6" height="26" rx="2" fill="#c0a880" />
            <rect x="372" y="370" width="6" height="26" rx="2" fill="#c0a880" />
            <rect x="334" y="375" width="46" height="5" rx="2" fill="#c0a880" />
            <rect x="334" y="385" width="46" height="5" rx="2" fill="#c0a880" />
          </g>

          <ellipse cx="170" cy="395" rx="10" ry="5" fill="#c0a880" opacity="0.7" />
          <rect x="165" y="388" width="10" height="7" rx="2" fill="#9b7a50" opacity="0.7" />
          <circle cx="170" cy="384" r="7" fill="#3d6b3f" opacity="0.7" />
          <circle cx="166" cy="382" r="3" fill="#c0622a" opacity="0.9" />
          <circle cx="174" cy="380" r="2.5" fill="#d4735a" opacity="0.9" />

          <ellipse cx="310" cy="395" rx="10" ry="5" fill="#c0a880" opacity="0.7" />
          <rect x="305" y="388" width="10" height="7" rx="2" fill="#9b7a50" opacity="0.7" />
          <circle cx="310" cy="384" r="7" fill="#3d6b3f" opacity="0.7" />
          <circle cx="306" cy="382" r="3" fill="#c0622a" opacity="0.9" />
          <circle cx="314" cy="380" r="2.5" fill="#d4735a" opacity="0.9" />
        </svg>
      </div>
    </section>

    <section id="tentang" class="py-32 px-6 md:px-10 bg-[#2d4a2e] text-[#fdfaf5] relative overflow-hidden">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div class="order-2 lg:order-1">
          <div class="aspect-video bg-white/10 rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
              alt="Rumah"
              class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700">
          </div>
        </div>
        <div class="order-1 lg:order-2 space-y-6">
          <span class="text-[#d4b896] text-xs font-bold uppercase tracking-[0.3em]">Tentang Kami</span>
          <h2 class="font-serif text-5xl leading-tight text-white">Rumah Idaman di Prambanan</h2>
          <p class="text-white/70 text-lg leading-relaxed font-light">
            Griya Pratama Asri 2 berlokasi strategis di Jl. Nakula, Plambon. Menawarkan kemudahan akses namun tetap
            menjaga keasrian lingkungan demi kenyamanan Anda dan keluarga.
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="item in ['🌿 Asri', '🔒 Aman', '🏘️ Kompak', '📍 Strategis']" :key="item"
              class="p-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-medium">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="lokasi" class="py-32 px-6 md:px-10 bg-[#f5f0e8]">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <span class="text-[#c0622a] text-xs font-bold uppercase tracking-widest">Peta Lokasi</span>
          <h2 class="font-serif text-5xl text-stone-900 leading-tight tracking-tight">Kawasan Strategis</h2>
          <div class="flex gap-4 p-8 bg-white rounded-3xl border border-stone-200 shadow-xl">
            <span class="text-3xl">📍</span>
            <div class="text-stone-600 leading-relaxed">
              <strong class="text-stone-900 block text-lg font-serif italic mb-1">Griya Pratama Asri 2</strong>
              Jl. Nakula, Plambon, Joho, Kec. Prambanan, Kab. Klaten, Jawa Tengah 57454
            </div>
          </div>
        </div>
        <div class="bg-white p-3 rounded-[40px] shadow-2xl h-[400px]">
          <iframe src="http://googleusercontent.com/maps.google.com/4" class="w-full h-full rounded-[30px] grayscale"
            style="border:0;" loading="lazy" />
        </div>
      </div>
    </section>

    <footer class="bg-stone-900 py-20 px-6 text-center text-stone-500">
      <div class="font-serif text-2xl text-white italic mb-4">Griya Pratama Asri 2</div>
      <p class="max-w-md mx-auto text-sm leading-relaxed mb-10 font-light italic">
        "Hunian Harmonis di Jantung Prambanan"
      </p>
      <p class="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-600">© 2026 Muh Syahendra Anindyantoro
      </p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

.font-sans {
  font-family: 'DM Sans', sans-serif;
}

/* Inilah kunci agar bisa di-scroll */
html,
body {
  margin: 0;
  padding: 0;
  height: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Pastikan tidak ada class h-screen yang terkunci pada elemen pembungkus */
</style>