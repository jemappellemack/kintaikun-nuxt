<template>
  <div>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">勤怠くん</a>
          <NuxtLink class="navbar-item" to="/timestamp">打刻</NuxtLink>
          <NuxtLink class="navbar-item" to="/works">一覧</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>