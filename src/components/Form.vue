<template>
  <form id="form-1" @submit="customHandler">
    <RequiredField></RequiredField>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { useForm } from "vee-validate";
import RequiredField from './RequiredField.vue'

const { handleSubmit, validate } = useForm()

const customHandler =  handleSubmit((values) => {
  console.log('form submitted')
})
</script>
