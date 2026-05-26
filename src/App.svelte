<script>
  // Pure JavaScript - no types needed!
  let count = 0;

  function handleClick(pureJS) {
    count += 1;
    console.log(pureJS);
  }
</script>

<main>
  <h1>Hello Svelte!</h1>
  <p>Count: {count}</p>
  <button on:click={handleClick}> Click me </button>
</main>

<style>
  main {
    text-align: center;
    padding: 2rem;
  }

  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  button:hover {
    background: #ff5e00;
  }
</style>
