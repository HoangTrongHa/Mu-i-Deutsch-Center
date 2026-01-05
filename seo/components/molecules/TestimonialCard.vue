<template>
  <div :class="cardClasses" :style="cardStyle">
    <div :class="`absolute -top-3 left-1/2 h-8 w-24 -translate-x-1/2 backdrop-blur-sm shadow-sm ${tapeColor} ${tapeRotation}`" />
    
    <div class="flex flex-col h-full">
      <div class="mb-6 flex items-center gap-3">
        <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-sm flex-shrink-0">
          <img
            :src="avatar"
            :alt="`Portrait of ${name}`"
            class="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 class="font-bold text-ink font-handwritten text-xl">{{ name }}</h4>
          <p class="text-xs text-ink-light uppercase tracking-wide">{{ role }}</p>
        </div>
      </div>
      
      <p class="font-handwritten text-2xl leading-relaxed text-ink-light flex-1">
        "{{ testimonial }}"
      </p>
      
      <div class="mt-6 flex gap-1 text-orange-400">
        <Icon
          v-for="n in Math.floor(rating)"
          :key="`full-${n}`"
          :size="20"
          filled
        >
          star
        </Icon>
        <Icon
          v-if="rating % 1 !== 0"
          :size="20"
          filled
        >
          star_half
        </Icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue'

interface Props {
  name: string
  role: string
  avatar: string
  testimonial: string
  rating: number
  bgColor?: string
  lineColor?: string
  tapeColor?: string
  rotation?: string
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: '#fff9c4',
  lineColor: '#f9fbe7',
  tapeColor: 'bg-red-400/40',
  rotation: 'rotate-2',
})

const cardClasses = computed(() => {
  const base = 'relative rounded-sm p-6 text-left shadow-lg transform transition-transform'
  const hover = props.rotation === 'rotate-2' ? 'hover:-rotate-1' : 'hover:rotate-1'
  return `${base} ${hover}`
})

const cardStyle = computed(() => ({
  backgroundColor: props.bgColor,
  backgroundImage: `linear-gradient(${props.lineColor} 1px, transparent 1px)`,
  backgroundSize: '100% 20px',
}))

const tapeRotation = computed(() => {
  if (props.rotation === 'rotate-2') return 'rotate-2'
  if (props.rotation === '-rotate-2') return '-rotate-2'
  return 'rotate-1'
})
</script>
