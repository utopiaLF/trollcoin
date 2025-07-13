<template>
  <nav class="menu">
    <router-link to="/">
      <i class="bi bi-house"></i>
      <p>Home</p>
    </router-link>
    <router-link to="/refs">
      <i class="bi bi-person-plus"></i>
      <p>Referrals</p>
    </router-link>
    <router-link to="/leaderboard">
      <i class="bi bi-trophy"></i>
      <p>Leaderboard</p>
    </router-link>
    <router-link to="/about">
      <i class="bi bi-info-circle"></i>
      <p>About App</p>
    </router-link>
  </nav>
  <router-view></router-view>
</template>

<script></script>