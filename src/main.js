import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    count: '',
  },
});

fetch(process.env.backendURL)
    .then((r) => r.json())
    .then(({count}) => {
      app.$set({count: `${count} visit${count === 1 ? '' : 's'}`});
    })
    .catch(console.error);

export default app;
