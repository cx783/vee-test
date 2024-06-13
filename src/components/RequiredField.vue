<template>
  <input v-model="value" type="text" name="name" />
  <span role="alert">{{ errorMessage }}</span>
</template>

<script setup>
import { useField } from 'vee-validate'

const { value, errorMessage} = useField('name', 'required')
</script>
