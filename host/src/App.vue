<script setup lang="ts">
import { useCounterStore } from '@shared-dep-bug/shared-lib'

// The host uses the same store that remotes will also use.
// This only works if pinia is shared as a singleton.
const counter = useCounterStore()
</script>

<template>
  <h1>Host App</h1>
  <p>Count: {{ counter.count }}</p>
  <button @click="counter.increment()">Increment</button>
</template>
