<script>
  import v from './version';
	export let count;
  export let region;
  export let version;
  let english = true;
</script>

<main class="{parseInt(version, 10) % 2 === 0 ? 'version-alternative' : 'default'}">
  <label>
    <input type="checkbox" bind:checked={english}>
    {#if english} spanish {:else} english {/if}
  </label>
  <h1>
    {count} {#if english} visits {:else} visitas {/if}
  </h1>
  <section>
    <h5>v{v}</h5>
    <h5>{region}</h5>
  </section>
</main>

<style>
	main {
    height: 100vh;
		max-width: 240px;
		margin: -8px;
    display: flex;
  }

  main.default {
    background: #DA4453;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #89216B, #DA4453);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #89216B, #DA4453); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  main.version-alternative {
    background: #00416A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #E4E5E6, #00416A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #E4E5E6, #00416A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

	h1 {
		color: #fff;
		text-transform: uppercase;
		font-size: 10em;
		font-weight: 100;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    width: 100vw;
	}

  h5 {
		color: #fff;
    margin: 0;
    text-align: right;
  }

  input {
    display: none;
  }

  label {
    color: #fff;
    cursor: pointer;
		font-size: 1.5em;
    position: fixed;
    left: 50px;
    top: 50px;
  }

  section {
    position: fixed;
    right: 50px;
    top: 50px;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
