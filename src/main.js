import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    count: 0,
    version: '',
  },
});

fetch(process.env.backendURL)
    .then((r) => r.json())
    .then(({count, version}) => {
      app.$set({count, version});
    })
    .catch(console.error);

export default app;
