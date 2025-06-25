<template>
  <div class="bg-[#F7F5F3] h-[calc(100vh-100px)] relative">
    <div class="max-h-[calc(100vh-100px)] p-5 overflow-auto relative">
      <div :class="[item.isMe ? 'flex justify-end first:mt-0 mt-5' : 'flex justify-start  first:mt-0 mt-5']"
        v-for="(item, index) in chat" :key="index">
        <svg v-if="!item.isMe" viewBox="0 0 8 13" height="13" width="8" class="text-white"
          preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13">
          <title>tail-in</title>
          <path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z">
          </path>
          <path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
        </svg>
        <div
          :class="[item.isMe ? 'border border-green-200 bg-green-200 w-fit h-fit p-5 rounded-bl-lg rounded-br-lg rounded-tl-lg' : 'border border-white bg-white w-fit h-fit p-5 rounded-bl-lg rounded-br-lg rounded-tr-lg max-w-[230px]']">
          <div>{{ item.name }}</div>
          <div class="break-words">{{ item.message }}</div>
        </div>
        <svg v-if="item.isMe" viewBox="0 0 8 13" height="13" width="8" class="text-green-200"
          preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13">
          <title>tail-out</title>
          <path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path>
          <path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path>
        </svg>
      </div>

    </div>

    <div class="absolute w-full bottom-0 flex justify-center">
      <div
        class="w-[95%] max-w-3xl h-[50px] gap-3 flex justify-start items-center bg-white rounded-lg py-2 shadow-md px-4">
        <UInput class="w-full ring-0 !border-none focus:outline-none" variant="ghost" v-model="chatInput"
          @keydown="handleEnter" />
        <UButton @click="chat.push({ name: 'Muh Syahendra A', message: chatInput, isMe: true })">
          send</UButton>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
definePageMeta({
  layout: 'chat'
})

const chatInput = ref('')

const chat = ref([{
  name: "Muh Syahendra A",
  message: "Hello world",
  isMe: true
}, {
  name: "Muh Syahendra A",
  message: "Hello to",
  isMe: false
}])

function handleEnter(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    chat.value.push({ name: 'Muh Syahendra A', message: chatInput.value, isMe: true })
    chatInput.value = ''
  }
}

</script>