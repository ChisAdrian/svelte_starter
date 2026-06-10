<script>
  import { fade, fly } from "svelte/transition";
  let sideBar = $state(true);

  function showHideSideBar() {
    sideBar = !sideBar;
  }

  let menus = $state([
    "Dashboard",
    "Users",
    "Products",
    "Orders",
    "Analytics",
    "Reports",
    "Settings",
    "Profile",
    "Notifications",
    "Messages",
    "Calendar",
    "Tasks",
    "Files",
    "Search",
    "Help",
    "Support",
    "Documents",
    "Invoices",
    "Teams",
    "Projects",
  ]);
</script>

<div class="fc hs">
  <div class="fs0 b2 p1 css-valeo-green">Top bar</div>

  <div class="f1 hf oa">
    <div class="f hf">
      {#if sideBar}
        <aside
          class="f fc g1 oa b1 hf"
          in:fly={{ x: -250, duration: 1000 }}
          out:fade={{ delay: 0, duration: 500 }}
        >
          <div
            class="sticky f jsb b2 p2 css-valeo-light-grey m0"
            style="top: 0;"
          >
            Side bar content here <button
              onclick={() => showHideSideBar()}
              class="b2">BTN</button
            >
          </div>

          {#each menus as menu}
            <button
              style="margin-left: 16px; margin-right: 16px;"
              class=" m0 p2 r2 b1 css-valeo-dark">{menu}</button
            >
          {/each}
        </aside>
      {/if}

      <div class="f1 b1 css-valeo-light-grey hf oa">
        <div class="sticky f jsb b2 p2 css-valeo-light-grey m0" style="top: 0;">
          <button onclick={() => showHideSideBar()} class="b2">BTN</button>
          <div>....</div>
        </div>
      </div>
    </div>
  </div>

  <div class="fs0 b2 p1 css-valeo-green">Footer</div>
</div>

<style>
  aside {
    min-width: 250px;
    width: 250px;
  }

  button:hover {
    background: var(--sentiment-positive-vibrant);
    color: var(--valeo-dark) !important;
  }
</style>
