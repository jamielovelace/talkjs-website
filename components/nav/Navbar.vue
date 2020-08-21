<template>
  <div
    class="c-navbar bg-white bg-opacity-75 fixed top-0 inset-x-0 z-20 px-6 py-2 md:py-4"
  >
    <nav class="max-w-6xl mx-auto flex items-center font-medium">
      <Logo class="w-10 md:w-auto" />
      <div class="flex-1 flex items-center">
        <ul class="flex ml-6">
          <li
            v-for="item in navItems"
            :key="item.location"
            class="mr-1 relative text-dark hover:text-primary-light"
            @mouseover="item.hover = true"
            @mouseleave="item.hover = false"
          >
            <a
              :href="item.location"
              :title="item.title"
              class="inline-block px-2 lg:px-4"
            >
              {{ item.label }}
            </a>
            <div v-if="item.children">
              <transition name="dropdown">
                <NavbarDropdown v-show="item.hover" :items="item.children" />
              </transition>
            </div>
          </li>
        </ul>
        <ul class="ml-auto flex items-center">
          <li class="ml-2">
            <Btn
              icon="arrow-right"
              href="https://talkjs.com/dashboard/signup/premium/"
            >
              Try for free
            </Btn>
          </li>
          <li class="ml-2">
            <Btn href="https://talkjs.com/dashboard/" color="white">
              Sign in
            </Btn>
          </li>
        </ul>
      </div>
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
  backdrop-filter: blur(10px);
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
