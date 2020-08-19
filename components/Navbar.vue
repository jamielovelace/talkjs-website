<template>
  <div class="c-navbar bg-white bg-opacity-75 fixed top-0 inset-x-0 p-4">
    <nav class="container flex items-center">
      <Logo />
      <ul class="flex ml-6">
        <li
          v-for="item in navItems"
          :key="item.location"
          class="mr-2 relative text-dark hover:text-primary-light"
          @mouseover="item.hover = true"
          @mouseleave="item.hover = false"
        >
          <a
            :href="item.location"
            :title="item.title"
            class="inline-block py-1 px-3"
          >
            {{ item.label }}
          </a>
          <div v-if="item.children">
            <transition name="dropdown" mode="out-in">
              <NavbarDropdown
                v-show="item.hover"
                :items="[{ id: 30, label: 'Test', location: 'test' }]"
              />
            </transition>
          </div>
        </li>
      </ul>
      <ul class="ml-auto flex items-center">
        <li class="ml-2">
          <Btn has-arrow href="https://talkjs.com/dashboard/signup/premium/">
            Try for free
          </Btn>
        </li>
        <li class="ml-2">
          <Btn href="https://talkjs.com/dashboard/" color="white">
            Sign in
          </Btn>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          id: 1,
          location: 'https://talkjs.com/use-cases/',
          title: 'Use Cases',
          label: 'Use Cases',
          hover: false,
        },
        {
          id: 2,
          location: 'https://talkjs.com/features/',
          title: 'Features',
          label: 'Features',
          hover: false,
        },
        {
          id: 3,
          location: 'https://talkjs.com/pricing/',
          title: 'Pricing',
          label: 'Pricing',
          hover: false,
        },
        {
          id: 4,
          location: 'https://talkjs.com/demo/',
          title: 'Demo',
          label: 'Demo',
          hover: false,
        },
        {
          id: 5,
          location: 'https://talkjs.com/testimonials/',
          title: 'Testimonials',
          label: 'Testimonials',
          hover: false,
        },
        {
          id: 6,
          title: 'Developers',
          label: 'Developers',
          hover: false,
          children: [
            {
              id: 7,
              location: 'https://talkjs.com/docs/index.html',
              title: 'Documentation',
              label: 'Documentation',
            },
            {
              id: 8,
              location: 'https://talkjs.com/docs/Getting_Started/index.html',
              title: 'Getting Started',
              label: 'Getting Started',
            },
            {
              id: 9,
              location: 'https://talkjs.com/resources/',
              title: 'Resources',
              label: 'Resources',
            },
            {
              id: 10,
              location: 'https://github.com/talkjs/talkjs-examples',
              title: 'Code Examples',
              label: 'Code Examples',
              target: '_blank',
            },
            {
              id: 11,
              location:
                'https://talkjs.com/resources/article-category/tutorials/',
              title: 'Tutorials',
              label: 'Tutorials',
            },
            {
              id: 12,
              location: 'https://changelog.talkjs.com/',
              title: 'Changelog',
              label: 'Changelog',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
.c-navbar {
  backdrop-filter: blur(8px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: 75ms ease-out;
}
.dropdown-enter,
.dropdown-leave-active {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
