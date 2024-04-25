<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="auto" height="24" />
        <span class="ms-3 text-primary">Pinia State Management</span>
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link border border-primary rounded mx-2" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link border border-primary rounded mx-2" to="/bs">Bootstrap</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link border border-primary rounded mx-2" to="/counter">Counter <span class="badge bg-primary text-secondary">*</span></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>