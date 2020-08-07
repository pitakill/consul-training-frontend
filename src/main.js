import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    count: 0,
    region: '',
    version: '',
  },
});

fetch(process.env.backendURL)
    .then((r) => r.json())
    .then(({count, region, version}) => {
      app.$set({count, region, version});
    })
    .catch(console.error);

export default app;
