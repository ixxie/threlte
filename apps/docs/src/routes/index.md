---
title: Introduction
---

<script lang="ts">
import Example from '$examples/introduction/App.svelte'

type Testimonial = {
  image: string; // Author image
  name: string; // Author name
  title: string; // Author title
  link: string; // Source URL
  contents: string; // The testimonial itself
}
const testimonials: Testimonial[] = [
  {
    image: 'https://avatars.githubusercontent.com/u/1162160?v=4',
    name: 'Rich Harris',
    title: "Creator of Svelte.",
    link: 'https://twitter.com/Rich_Harris/status/1599090054382596097',
    contents: "indeed — threlte is where it's at. i should get round to updating the svelte cubed repo/site to make that clearer",
  },
  {
    image: 'https://www.shiyunlu.com/assets/head-shot-2020.8496dae1_iHYyX.png',
    name: 'Shiyun 诗韵',
    title: "Globalist, learner, software engineer",
    link: 'https://twitter.com/lu_shiyun/status/1598002293114540032',
    contents: `My first try at writing shaders in #threejs .. used the FBO particles technique to explore Chinese characters that have "女" (woman) as a component in them.. OMG it's so challenging! The new @threlte, made it easier though 🤓`,
  },
  {
    image: 'https://www.higsch.com/img/me_coding.jpg',
    name: 'Matthias Stahl 🇪🇺',
    title: "I am a designer creating knowledge through data visualization.",
    link: 'https://twitter.com/h_i_g_s_c_h',
    contents: "🧑‍💻 First experiments using threlte for Svelte. After I didn't succeed using svelte-cubed, threlte seems to be a rather well-documented and good working declarative THREE library for Svelte. Many thanks to @a_warnes and @Reyfenberg!",
  },
  {
    image: 'https://avatars.githubusercontent.com/u/1162160?v=4',
    name: 'Rich Harris',
    title: "Creator of Svelte.",
    link: 'https://twitter.com/Rich_Harris/status/1580663361993248769',
    contents: "give threlte.xyz a whirl. not as mature as the r3f ecosystem, but already pretty capable",
  },
  {
    image: 'https://avatars.githubusercontent.com/u/57304890?v=4',
    name: 'shiva',
    title: "Computer Science + Art student @Carnegie Mellon",
    link: 'https://twitter.com/shiva_peri/status/1541627317147009025',
    contents: "threlte, which combines threejs and svelte, is easily one of my new favorite libraries",
  },
  {
    image: 'https://www.a3k.me/favicon/apple-touch-icon.png?v=2.2.0',
    name: 'Amr',
    title: "Freelancer web developer",
    link: 'https://twitter.com/amr3k_/status/1580799004694089728',
    contents: "I built 3 webGL apps using threlte and it's amazing <3",
  },
  {
    image: 'https://avatars.githubusercontent.com/u/3778969?v=4',
    name: 'Vatroslav Vrbanić',
    title: "Creator of svelthree and svelte-accmod",
    link: 'https://twitter.com/vatro_vrbanic/status/1556947920171286528',
    contents: "I'm impressed by all the features of threlte.xyz, it's well polished / feels complete. Still, svelthree is different in many ways, and I think it's good to have alternatives. After 1.0.0-next.1, I'll have to dive deeper into threlte and compare/test it extensively.",
  }
];
</script>

# Introduction

<a id="v5-intro" href="/core-transition" style="border-bottom-width: 0;" class="font-normal bg-brand text-white p-4 pb-8 my-0 rounded-md shadow-lg flex flex-col">

<svg style="max-width: 400px; margin: 0 auto;" class="px-8 w-full" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1291.45 315.46"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#ff3f04;}</style></defs><g><path class="cls-1" d="M218.74,99.32c-21.36,0-38.93,7.23-55.12,23.43V35.24h-32.38V223.02c-13.35,9.15-25.12,13.42-37.55,13.42-21.36,0-32.38-12.06-32.38-34.8V126.19h54.16v-23.43H61.31V43.16L28.92,61.08v41.69H0v23.43H28.92v77.52c0,35.14,20.67,56.15,60.98,56.15,15.12,0,28.52-3.06,41.34-9.58v6.13h32.38v-109.21c15.16-16.88,29.97-24.46,47.89-24.46,22.74,0,33.42,11.37,33.42,35.14v98.53h32.38v-100.94c0-36.17-20.67-56.16-58.57-56.16Z"/><path class="cls-1" d="M475.66,99.32c-18.87,0-35.72,5.24-49.26,14.38-11.38-10.05-24.8-14.38-42.37-14.38-24.8,0-43.75,8.61-59.6,28.25-.69-8.61-2.07-16.88-3.79-24.8h-31.69c2.41,9.99,3.44,21.36,3.44,36.52v117.13h32.38v-101.29c14.81-22.39,30.66-32.38,50.3-32.38,12.62,0,22.09,3.35,30.72,11.49-8.62,12.76-13.5,28.37-13.5,45.7,0,47.89,35.83,79.93,89.23,79.93,25.84,0,48.23-7.24,68.9-22.39l-12.75-19.29c-16.88,12.75-34.79,18.6-55.12,18.6-33.76,0-54.09-17.91-57.19-49.61h128.16c.69-3.1,1.03-7.24,1.03-11.71,0-44.44-33.07-76.14-78.89-76.14Zm-49.61,66.83c4.13-27.22,21.7-44.1,48.58-44.1s44.1,16.88,47.54,44.1h-96.12Z"/><path class="cls-1" d="M712.33,236.43c-21.36,0-32.38-12.06-32.38-34.8V126.19h54.16v-23.43h-54.16V43.16l-32.38,17.91v41.69h-28.92v23.43h28.92v77.52c0,10.44,1.84,19.62,5.46,27.38-7.94,3.62-15.46,5.35-23.37,5.35-21.36,0-32.04-12.06-32.04-34.8V35.24h-95.77v23.43h63.39V203.71c0,35.14,20.33,56.15,60.63,56.15,15.76,0,29.45-3.13,42.83-10.3,9.88,6.7,23.18,10.3,39.85,10.3,20.33,0,37.55-5.51,54.43-17.57l-12.06-19.98c-13.78,9.65-25.84,14.13-38.59,14.13Z"/><path class="cls-1" d="M912.83,175.45c0-44.44-33.07-76.14-78.89-76.14-48.23,0-83.37,34.11-83.37,80.62s35.83,79.93,89.23,79.93c25.84,0,48.23-7.24,68.9-22.39l-12.75-19.29c-16.88,12.75-34.8,18.6-55.12,18.6-33.76,0-54.09-17.91-57.19-49.61h128.16c.69-3.1,1.03-7.24,1.03-11.71Zm-128.5-9.3c4.13-27.22,21.7-44.1,48.58-44.1s44.1,16.88,47.54,44.1h-96.12Z"/></g><rect class="cls-1" x="998.42" width="293.02" height="315.46"/><path class="cls-2" d="M1230.05,191.93c0,51.3-43.7,74.48-139.08,74.48h-31.16v-25.84h26.98c74.48,0,106.78-14.44,106.78-48.26,0-22.04-15.58-33.44-45.98-33.44-19.76,0-37.24,4.56-57,14.82l-21.28-7.6,8.36-117.04h143.26v29.64h-116.28l-4.56,67.26c17.48-8.74,36.1-13.3,56.24-13.3,47.5,0,73.72,21.28,73.72,59.28Z"/></svg>

<p class="!my-0 !py-0">Learn more about the exciting changes that are happening to threlte in version 5:</p>
<ul class="!pb-0 !mb-0">
<li>
Hundreds of new components
</li>
<li>
Better <code style="background-color: #DE3700">react-three-fiber</code> ecosystem compatibility
</li>
<li>
New prop syntax
</li>
<li>
A custom preprocessor
</li>
</ul>
</a>

Threlte is a renderer and component library for Svelte to build and render three.js scenes **declaratively** and **state-driven** in Svelte apps.

<ExampleWrapper playgroundHref="/introduction">
<Example />

<div slot="code">

@[code svelte|title=App.svelte](../examples/introduction/App.svelte)
@[code svelte|title=Scene.svelte](../examples/introduction/Scene.svelte)

</div>
</ExampleWrapper>

It's inspired by the sensible defaults of [react-three-fiber](https://github.com/pmndrs/react-three-fiber), the simplicity and effectiveness of Sveltes reactivity model and [Svelte Cubed](https://github.com/Rich-Harris/svelte-cubed).

It provides strictly typed components to quickly and easily build three.js scenes with deep reactivity and interactivity out-of-the-box.

It also aims to provide the building blocks to quickly extend Threlte when it's needed.

:::admonition type="note"
Threlte is still in active development and you should expect breaking changes. Check the release notes before updating. If you want to be on the safe side, install Threlte with `npm i @threlte/core --save-exact` to lock the versions, same goes for `@threlte/extras` and `@threlte/rapier`
:::

## Don't take our word for it!

<!-- <div class="flex justify-center p-4">
  <video preload="auto" autoplay="autoplay" class="w-full" controls>
    <source src="https://i.imgur.com/1Kea5Wk.mp4" type="video/mp4" />
  </video>
</div> -->

<div class="grid place-items-center grid-cols-1 992:grid-cols-2 gap-3">
  {#each testimonials as _t}
    <a href={_t.link} rel="external" class="w-full h-full rounded-md px-4 border-none bg-gray-50 duration-200 shadow-xl hover:shadow-2xl">
      <div class="flex gap-6">
        <img src={_t.image} alt="{_t.name} profile photo" class="rounded-full w-12 h-12 object-cover" />
        <div class="grow">
          <h4 class="mb-0">{_t.name}</h4>
          <p class="text-sm font-normal text-gray-400">{_t.title}</p>
        </div>
      </div>
      <p class="mt-0 font-normal text-base text-gray-600">{_t.contents}</p>
    </a>
  {/each}
</div>
