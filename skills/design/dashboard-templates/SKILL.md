---
name: dashboard-templates
description: Templates and patterns for admin panels, analytics dashboards, and data-heavy interfaces.
triggers:
  - "dashboard"
  - "admin panel"
  - "analytics"
  - "metrics"
  - "data table"
  - "admin"
---

# Dashboard Templates Skill

## Dashboard Layout Patterns

### Sidebar + Content (Standard)
```
┌──────────────────────────────────────────────┐
│ ┌──────┐ ┌──────────────────────────────────┐│
│ │      │ │ Top Bar: Breadcrumbs | Search  🔔 ││
│ │ Logo │ ├──────────────────────────────────┤│
│ │      │ │                                  ││
│ │ Nav  │ │   Main Content Area              ││
│ │ Links│ │                                  ││
│ │      │ │   [Metric Cards Row]             ││
│ │      │ │   [Chart]    [Chart]             ││
│ │      │ │   [Data Table]                   ││
│ │      │ │                                  ││
│ │ User │ │                                  ││
│ └──────┘ └──────────────────────────────────┘│
└──────────────────────────────────────────────┘
Sidebar: 240px desktop, icon-only (64px) tablet, hidden mobile
```

### Top Nav + Content (Simple)
```
┌──────────────────────────────────────────────┐
│ Logo    Nav Links              Search  🔔  👤 │
├──────────────────────────────────────────────┤
│                                              │
│   [Metric Cards Row]                         │
│   [Full Width Chart]                         │
│   [Data Table]                               │
│                                              │
└──────────────────────────────────────────────┘
Best for: Simple dashboards with <5 nav items
```

## Component Patterns

### Metric Card
```html
<div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
  <div class="flex items-center justify-between">
    <p class="text-sm font-medium text-gray-500">Total Revenue</p>
    <div class="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
      <svg class="w-4 h-4 text-green-600"><!-- icon --></svg>
    </div>
  </div>
  <p class="mt-3 text-3xl font-bold text-gray-900">$45,231</p>
  <div class="mt-2 flex items-center gap-1">
    <span class="text-sm font-medium text-green-600">↑ 12.5%</span>
    <span class="text-sm text-gray-400">vs last month</span>
  </div>
</div>

<!-- Layout: 4 across on desktop, 2 on tablet, 1 on mobile -->
<!-- Grid: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -->
```

### Chart Container
```html
<div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
  <div class="flex items-center justify-between mb-6">
    <div>
      <h3 class="text-lg font-semibold text-gray-900">Revenue Over Time</h3>
      <p class="text-sm text-gray-500">Last 12 months</p>
    </div>
    <div class="flex gap-2">
      <!-- Period selector -->
      <button class="px-3 py-1.5 text-xs font-medium rounded-md bg-gray-100 text-gray-900">12M</button>
      <button class="px-3 py-1.5 text-xs font-medium rounded-md text-gray-500 hover:bg-gray-50">6M</button>
      <button class="px-3 py-1.5 text-xs font-medium rounded-md text-gray-500 hover:bg-gray-50">30D</button>
    </div>
  </div>
  <div class="h-64">
    <!-- Chart goes here (Recharts, Chart.js, etc.) -->
  </div>
</div>
```

### Data Table
```html
<div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
  <!-- Table header -->
  <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
    <h3 class="font-semibold text-gray-900">Recent Orders</h3>
    <div class="flex gap-3">
      <input type="search" placeholder="Search..." 
             class="px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
      <button class="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">Filter</button>
      <button class="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">Export</button>
    </div>
  </div>
  
  <!-- Table -->
  <table class="w-full">
    <thead>
      <tr class="border-b border-gray-100">
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700">
          Order ID ↕
        </th>
        <!-- More columns -->
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-50">
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="px-6 py-4 text-sm text-gray-900">#ORD-001</td>
        <!-- More cells -->
      </tr>
    </tbody>
  </table>
  
  <!-- Pagination -->
  <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
    <p class="text-sm text-gray-500">Showing 1-10 of 248</p>
    <div class="flex gap-1">
      <button class="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">Previous</button>
      <button class="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-md">1</button>
      <button class="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">2</button>
      <button class="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">Next</button>
    </div>
  </div>
</div>
```

### Status Badge
```html
<!-- Use semantic colors consistently -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
  Active
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700">
  Pending
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700">
  Failed
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-700">
  Draft
</span>
```

### Sidebar Navigation
```html
<aside class="w-60 bg-gray-900 min-h-screen flex flex-col">
  <!-- Logo -->
  <div class="p-6">
    <img src="/logo.svg" alt="App" class="h-8" />
  </div>
  
  <!-- Nav links -->
  <nav class="flex-1 px-3 space-y-1">
    <!-- Active item -->
    <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-gray-800 text-white text-sm font-medium">
      <svg class="w-5 h-5"><!-- icon --></svg>
      Dashboard
    </a>
    <!-- Inactive item -->
    <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 text-sm transition-colors">
      <svg class="w-5 h-5"><!-- icon --></svg>
      Analytics
    </a>
    
    <!-- Section divider -->
    <div class="pt-4 mt-4 border-t border-gray-800">
      <p class="px-3 mb-2 text-xs font-medium text-gray-500 uppercase">Settings</p>
      <!-- More links -->
    </div>
  </nav>
  
  <!-- User section at bottom -->
  <div class="p-4 border-t border-gray-800">
    <div class="flex items-center gap-3">
      <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      <div>
        <p class="text-sm font-medium text-white">User Name</p>
        <p class="text-xs text-gray-400">user@email.com</p>
      </div>
    </div>
  </div>
</aside>
```

### Empty State
```html
<div class="text-center py-16">
  <svg class="w-12 h-12 text-gray-300 mx-auto mb-4"><!-- illustration --></svg>
  <h3 class="text-lg font-medium text-gray-900">No data yet</h3>
  <p class="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
    Get started by creating your first item. It only takes a minute.
  </p>
  <button class="mt-6 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition">
    Create your first item
  </button>
</div>
```

### Loading Skeleton
```html
<!-- Use instead of spinners for content loading -->
<div class="animate-pulse">
  <div class="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
  <div class="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
  <div class="h-32 bg-gray-200 rounded mb-3"></div>
</div>
```

## Chart Type Recommendations

| Data Type | Best Chart | Library |
|---|---|---|
| Trend over time | Line chart | Recharts, Chart.js |
| Comparison | Bar chart (vertical) | Recharts, Chart.js |
| Composition | Donut chart (not pie) | Recharts |
| Distribution | Histogram | D3, Recharts |
| Correlation | Scatter plot | Recharts, D3 |
| Geographic | Choropleth map | D3, Mapbox |
| Real-time | Sparkline or area chart | Recharts |
| KPI single value | Metric card with trend | Custom component |

## Dashboard Anti-Patterns
- ❌ More than 6 metric cards on one screen
- ❌ Pie charts (use donut or bar instead — pie charts are hard to read)
- ❌ 3D charts of any kind
- ❌ Rainbow color schemes for data series
- ❌ Tooltips as the only way to read values
- ❌ Auto-refresh that causes layout shift
- ❌ Full-page spinners (use skeleton loading)
- ❌ Sidebar with >12 top-level nav items (group into sections)
