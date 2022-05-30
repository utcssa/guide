<template>
  <ParentLayout>
    <template #page-bottom>
      <button
        :class="['display-comments', { primary: !loaded, secondary: loaded }]"
        @click="loaded = !loaded"
      >
        {{ loaded ? '关闭评论区' : '展示评论区' }}
      </button>
      <CommentService v-if="loaded" :darkmode="isDarkMode" />
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

const isDarkMode = ref(false)

let observer

onMounted(() => {
  const html = document.querySelector('html') as HTMLElement

  isDarkMode.value = html.classList.contains('dark')

  // watch theme change
  observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains('dark')
  })

  observer.observe(html, {
    attributeFilter: ['class'],
    attributes: true,
  })
})

onBeforeUnmount(() => {
  observer.disconnect()
})

const loaded = ref(false)
</script>

<style>
.display-comments {
  display: block;
  margin: 0 auto;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  transition: background-color var(--t-color);
  box-sizing: border-box;
}

.display-comments.primary {
  color: var(--c-bg);
  background-color: var(--c-brand);
  border-color: var(--c-brand);
}

.display-comments.primary:hover {
  background-color: var(--c-brand-light);
}

.display-comments.secondary {
  color: var(--c-brand);
  background-color: var(--c-bg);
  border-color: var(--c-brand);
}

.display-comments.secondary:hover {
  color: var(--c-bg);
  background-color: var(--c-brand-light);
}
</style>
