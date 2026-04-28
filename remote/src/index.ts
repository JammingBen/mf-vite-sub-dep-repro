import { defineComponent, h } from 'vue'
import { useCounterStore } from '@shared-dep-bug/shared-lib'

export default defineComponent({
  name: 'RemoteWidget',
  setup() {
    const counter = useCounterStore()
    return () =>
      h('div', [
        h('h2', 'Remote Widget'),
        h('p', `Count from remote: ${counter.count}`),
        h('button', { onClick: () => counter.increment() }, 'Increment from remote'),
      ])
  },
})
