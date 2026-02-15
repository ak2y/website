/* Minimal portfolio — main.js (Bootstrap v5.3.8) */

(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Year
  const yearNow = $("#yearNow");
  if (yearNow) yearNow.textContent = String(new Date().getFullYear());

  // Reveal on scroll
  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Copy to clipboard + toast
  const toastEl = $("#toast");
  const toastBody = $("#toastBody");
  const toast = toastEl ? bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 1600 }) : null;

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    }
  }

  $$("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const val = btn.getAttribute("data-copy");
      if (!val) return;
      const ok = await copyText(val);
      if (toastBody) toastBody.textContent = ok ? "Copied!" : "Could not copy.";
      toast?.show();
    });
  });

  // Optional: background uploader (works if you uncomment the HTML block with #bgUpload)
  const bgUpload = $("#bgUpload");
  if (bgUpload) {
    bgUpload.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        document.documentElement.style.setProperty("--user-bg", `url('${reader.result}')`);
        document.body.classList.add("has-user-bg");
      };
      reader.readAsDataURL(file);
    });
  }

  // Smooth scroll to tabs when a tab is clicked from navbar (nice UX)
  const tabsAnchor = $("#tabs");
  $$('a[data-bs-toggle="tab"][href="#tabs"]').forEach((a) => {
    a.addEventListener("click", () => {
      if (!tabsAnchor) return;
      const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      setTimeout(() => {
        tabsAnchor.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      }, 0);
    });
  });
})();
