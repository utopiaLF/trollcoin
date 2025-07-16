<template>
    <nav class="menu">
    <router-link to="/" :class="{ active: $route.path === '/'}">
      <i class="bi bi-house"></i>
      <p>Home</p>
    </router-link>
    <router-link to="/refs" :class="{ active: $route.path === '/refs'}">
      <i class="bi bi-person-plus"></i>
      <p>Referrals</p>
    </router-link>
    <router-link to="/leaderboard" :class="{ active: $route.path === '/leaderboard'}">
      <i class="bi bi-trophy"></i>
      <p>Leaderboard</p>
    </router-link>
    <router-link to="/about" :class="{ active: $route.path === '/about'}">
      <i class="bi bi-info-circle"></i>
      <p>About App</p>
    </router-link>
  </nav>
</template>