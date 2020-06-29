import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    count: 0,
  },
});

fetch(process.env.backendURL)
    .then((r) => r.json())
    .then(({count}) => {
      app.$set({count});
    })
    .catch(console.error);

export default app;
