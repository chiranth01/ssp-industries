/**
 * SSP Industries - Premium Mobile Navigation Module
 * Dynamically builds and controls the mobile navigation drawer.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inject Hamburger Button
  const actionContainer = document.querySelector("header div.flex.items-center.gap-6");
  if (actionContainer) {
    const mobileBtn = document.createElement("button");
    mobileBtn.id = "mobile-menu-btn";
    mobileBtn.className = "block md:hidden text-stone-500 hover:text-brand-green focus:outline-none z-50 ml-2";
    mobileBtn.setAttribute("aria-label", "Toggle Menu");
    mobileBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
    actionContainer.appendChild(mobileBtn);
  }

  // 2. Create and Append Mobile Drawer Panel
  const drawer = document.createElement("div");
  drawer.id = "mobile-menu-drawer";
  drawer.className = "fixed inset-0 z-[60] translate-x-full transition-transform duration-500 ease-in-out pointer-events-none";
  drawer.innerHTML = `
    <!-- Backdrop overlay -->
    <div id="mobile-menu-overlay" class="absolute inset-0 bg-stone-900/40 backdrop-blur-sm opacity-0 transition-opacity duration-500 pointer-events-none"></div>
    
    <!-- Drawer Content Panel -->
    <div class="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#fcfbf9] border-l border-stone-200/80 shadow-2xl flex flex-col justify-between p-8 z-10 pointer-events-auto">
      
      <!-- Top header in drawer -->
      <div class="flex items-center justify-between pb-6 border-b border-stone-200">
        <a href="index.html" class="flex items-center gap-2">
          <img src="assets/logo_new_revolving.png" alt="SSP Logo" class="w-5 h-5 object-contain rotate-slow">
          <span class="font-heading font-black text-lg tracking-wider text-stone-900">
            SSP <span class="text-[#2d5a27] font-bold">SYSTEMS</span>
          </span>
        </a>
        <button id="close-menu-btn" class="text-stone-500 hover:text-[#2d5a27] focus:outline-none">
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      <!-- Links list -->
      <nav class="flex flex-col gap-6 py-8 flex-grow">
        <a href="index.html" class="mobile-nav-link text-lg font-bold text-stone-800 hover:text-[#2d5a27] transition-colors py-2 border-b border-stone-100 flex items-center justify-between">
          Home
          <i class="fa-solid fa-chevron-right text-xs opacity-40"></i>
        </a>
        <a href="divisions.html" class="mobile-nav-link text-lg font-bold text-stone-800 hover:text-[#2d5a27] transition-colors py-2 border-b border-stone-100 flex items-center justify-between">
          Divisions
          <i class="fa-solid fa-chevron-right text-xs opacity-40"></i>
        </a>
        
        <!-- About Us Submenu Container -->
        <div class="flex flex-col border-b border-stone-100 pb-4">
          <div class="text-stone-400 font-mono text-[10px] tracking-wider uppercase py-2">
            About Us
          </div>
          <a href="about.html" class="mobile-nav-link text-base font-bold text-stone-800 hover:text-[#2d5a27] transition-colors pl-4 py-2 flex items-center justify-between">
            About Company
            <i class="fa-solid fa-chevron-right text-xs opacity-30"></i>
          </a>
          <a href="team.html" class="mobile-nav-link text-base font-bold text-stone-800 hover:text-[#2d5a27] transition-colors pl-4 py-2 flex items-center justify-between">
            Team
            <i class="fa-solid fa-chevron-right text-xs opacity-30"></i>
          </a>
          <a href="achievements.html" class="mobile-nav-link text-base font-bold text-stone-800 hover:text-[#2d5a27] transition-colors pl-4 py-2 flex items-center justify-between">
            Achievements
            <i class="fa-solid fa-chevron-right text-xs opacity-30"></i>
          </a>
        </div>

        <a href="products.html" class="mobile-nav-link text-lg font-bold text-stone-800 hover:text-[#2d5a27] transition-colors py-2 border-b border-stone-100 flex items-center justify-between">
          Products
          <i class="fa-solid fa-chevron-right text-xs opacity-40"></i>
        </a>
      </nav>

      <!-- Drawer Footer with CTA and info -->
      <div class="space-y-6 pt-6 border-t border-stone-200">
        <div class="flex items-center gap-4 text-stone-500">
          <a href="#" class="hover:text-[#2d5a27] transition-colors"><i class="fa-solid fa-globe text-base"></i></a>
          <a href="#" class="hover:text-[#2d5a27] transition-colors"><i class="fa-solid fa-magnifying-glass text-base"></i></a>
        </div>
        <a href="contact.html" class="block w-full text-center px-6 py-3.5 bg-[#2d5a27] hover:bg-[#1e3e1a] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-300">
          Contact Us
        </a>
        <div class="text-[9px] text-stone-400 font-mono tracking-widest uppercase">
          SYS.LOC // CH_ZURICH [ACTIVE]
        </div>
      </div>

    </div>
  </div>
  `;
  document.body.appendChild(drawer);

  // 3. Highlight Active Navigation Item
  const currentPath = window.location.pathname;
  const mobileLinks = drawer.querySelectorAll(".mobile-nav-link");
  mobileLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      (href && currentPath.includes(href)) ||
      (href === "index.html" &&
        (currentPath === "/" ||
          currentPath.endsWith("/") ||
          currentPath.endsWith("index.html")))
    ) {
      link.classList.remove("text-stone-800");
      link.classList.add("text-[#2d5a27]");
    }
  });

  // 4. Set up Click Handlers for opening/closing drawer
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("close-menu-btn");
  const overlay = document.getElementById("mobile-menu-overlay");

  function toggleMenu(open) {
    if (open) {
      drawer.classList.remove("pointer-events-none");
      drawer.classList.remove("translate-x-full");
      drawer.classList.add("translate-x-0");
      drawer.classList.add("drawer-active");
      
      overlay.classList.remove("pointer-events-none");
      overlay.classList.remove("opacity-0");
      overlay.classList.add("opacity-100");
      
      document.body.classList.add("overflow-hidden");
      if (window.lenis) window.lenis.stop();
    } else {
      drawer.classList.add("pointer-events-none");
      drawer.classList.remove("translate-x-0");
      drawer.classList.add("translate-x-full");
      drawer.classList.remove("drawer-active");
      
      overlay.classList.add("pointer-events-none");
      overlay.classList.remove("opacity-100");
      overlay.classList.add("opacity-0");
      
      // Do not unlock scroll if preloader is still showing
      const preloader = document.getElementById("preloader");
      if (!preloader || preloader.style.display === "none") {
        document.body.classList.remove("overflow-hidden");
      }
      if (window.lenis) window.lenis.start();
    }
  }

  if (openBtn) openBtn.addEventListener("click", () => toggleMenu(true));
  if (closeBtn) closeBtn.addEventListener("click", () => toggleMenu(false));
  if (overlay) overlay.addEventListener("click", () => toggleMenu(false));
});
