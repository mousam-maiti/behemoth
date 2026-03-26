---
name: landing-pages
description: Ready-to-use landing page section templates with HTML/Tailwind code patterns.
triggers:
  - "landing page"
  - "marketing page"
  - "homepage"
  - "sales page"
  - "product page"
---

# Landing Page Templates Skill

## Pre-Build Checklist
Before writing any landing page code:
1. Check `.behemoth/design-system/MASTER.md` for colors, fonts, and style
2. If none exists, run `/design` first to generate one
3. Load the `ui-styles` skill for CSS pattern reference
4. Load the `frontend-patterns` skill for component structure

## Section Templates

### Hero — Headline + CTA + Image (SaaS)
```html
<section class="relative overflow-hidden bg-white">
  <div class="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-16 lg:px-8 lg:py-32">
    <div class="lg:max-w-xl">
      <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        <!-- Max 10 words. Lead with the benefit, not the product. -->
        Ship faster without breaking things
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        <!-- 1-2 sentences. Explain what + for whom. -->
        Automated testing and deployment for teams that move fast.
        Catch bugs before your users do.
      </p>
      <div class="mt-10 flex items-center gap-x-4">
        <a href="#" class="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors">
          Start free trial
        </a>
        <a href="#" class="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
          See demo →
        </a>
      </div>
    </div>
    <div class="mt-16 lg:mt-0 lg:flex-1">
      <!-- Product screenshot with subtle shadow -->
      <img src="/screenshot.png" alt="Product dashboard" 
           class="rounded-xl shadow-2xl ring-1 ring-gray-200" />
    </div>
  </div>
</section>
```

### Social Proof — Logo Bar
```html
<section class="bg-gray-50 py-12">
  <div class="mx-auto max-w-7xl px-6">
    <p class="text-center text-sm font-medium text-gray-500 mb-8">
      Trusted by 2,000+ teams worldwide
    </p>
    <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      <!-- Grayscale logos, consistent height (32-40px) -->
      <img src="/logo1.svg" alt="Company" class="h-8 opacity-60 hover:opacity-100 transition" />
      <!-- Repeat 4-6 logos -->
    </div>
  </div>
</section>
```

### Features — 3 Column Grid
```html
<section class="py-24 bg-white">
  <div class="mx-auto max-w-7xl px-6">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-3xl font-bold text-gray-900">Everything you need</h2>
      <p class="mt-4 text-lg text-gray-600">Built for modern development teams.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Feature card (repeat 3x) -->
      <div class="p-6 rounded-xl bg-gray-50">
        <!-- Use SVG icon, never emoji -->
        <div class="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-indigo-600"><!-- icon --></svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900">Feature Name</h3>
        <p class="mt-2 text-gray-600">Brief description of what this feature does and why it matters.</p>
      </div>
    </div>
  </div>
</section>
```

### Testimonials — Card Grid
```html
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6">
    <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">What people are saying</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Testimonial card -->
      <div class="bg-white p-8 rounded-xl shadow-sm">
        <div class="flex items-center gap-3 mb-4">
          <img src="/avatar.jpg" alt="" class="w-10 h-10 rounded-full" />
          <div>
            <p class="font-semibold text-gray-900">Name</p>
            <p class="text-sm text-gray-500">Role, Company</p>
          </div>
        </div>
        <p class="text-gray-600 italic">"Testimonial quote goes here. Keep it real and specific."</p>
      </div>
    </div>
  </div>
</section>
```

### Pricing — 3 Tier Table
```html
<section class="py-24 bg-white">
  <div class="mx-auto max-w-7xl px-6">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
      <!-- Monthly / Annual toggle -->
      <div class="mt-6 inline-flex items-center bg-gray-100 rounded-lg p-1">
        <button class="px-4 py-2 text-sm font-medium rounded-md bg-white shadow-sm">Monthly</button>
        <button class="px-4 py-2 text-sm font-medium text-gray-600">Annual (save 20%)</button>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <!-- Tier card — middle one highlighted -->
      <div class="border rounded-2xl p-8">
        <h3 class="text-lg font-semibold">Starter</h3>
        <p class="mt-4"><span class="text-4xl font-bold">$29</span><span class="text-gray-500">/mo</span></p>
        <ul class="mt-8 space-y-3">
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500"><!-- check --></svg>
            <span>Feature description</span>
          </li>
        </ul>
        <button class="mt-8 w-full py-3 rounded-lg border font-semibold hover:bg-gray-50 transition">
          Get started
        </button>
      </div>
      <!-- Popular tier: add ring-2 ring-indigo-600, "Most Popular" badge -->
    </div>
  </div>
</section>
```

### FAQ — Accordion
```html
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-3xl px-6">
    <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">Frequently asked questions</h2>
    <div class="space-y-4">
      <!-- FAQ item — use <details> for no-JS accordion -->
      <details class="group bg-white rounded-xl shadow-sm">
        <summary class="flex items-center justify-between p-6 cursor-pointer font-medium text-gray-900">
          Question text here?
          <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"><!-- chevron --></svg>
        </summary>
        <div class="px-6 pb-6 text-gray-600">
          Answer text here. Keep it concise and helpful.
        </div>
      </details>
    </div>
  </div>
</section>
```

### CTA — Final Call to Action
```html
<section class="py-24 bg-indigo-600">
  <div class="mx-auto max-w-4xl px-6 text-center">
    <h2 class="text-3xl font-bold text-white">Ready to get started?</h2>
    <p class="mt-4 text-lg text-indigo-100">Start your free trial today. No credit card required.</p>
    <div class="mt-10 flex justify-center gap-4">
      <a href="#" class="rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition">
        Start free trial
      </a>
      <a href="#" class="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10 transition">
        Talk to sales
      </a>
    </div>
  </div>
</section>
```

### Footer
```html
<footer class="bg-gray-900 py-16">
  <div class="mx-auto max-w-7xl px-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 class="text-sm font-semibold text-white mb-4">Product</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-sm text-gray-400 hover:text-white transition">Features</a></li>
        </ul>
      </div>
      <!-- Repeat for: Company, Resources, Legal -->
    </div>
    <div class="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
      <p class="text-sm text-gray-500">© 2026 Company. All rights reserved.</p>
      <div class="flex gap-4">
        <!-- Social icons (SVG, not emoji) -->
      </div>
    </div>
  </div>
</footer>
```

## Anti-Patterns (Never Do These)
- ❌ Emojis as icons — use SVG icon libraries (Lucide, Heroicons, Phosphor)
- ❌ Stock photos of people shaking hands — use real product screenshots
- ❌ "Click here" link text — use descriptive action words
- ❌ Walls of text — break into scannable chunks
- ❌ Auto-playing video with sound
- ❌ Carousel with >3 slides that auto-rotates
- ❌ Missing `cursor-pointer` on clickable elements
- ❌ No hover states on interactive elements
- ❌ Purple-to-pink gradient backgrounds on everything (AI cliche)
