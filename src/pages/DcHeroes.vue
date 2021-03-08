<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">Dc Heroes {{ heroesCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeroes"
        :key="index"
      >
        <div>
          {{ hero.name }}
        </div>
        <button @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        v-model.trim="newHero"
        placeholder="Hero Name Here..."
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-r 
        from-gray-700 to-yellow-100"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";

export default {

  setup() {
    const newHeroRef = ref("");
    const newHero = ref(""); 
    const dcHeroes = ref ([
        { name: "SuperGirl" },
        { name: "Ej" },
        { name: "Aquaman" },
        { name: "Batman" },
        { name: "Flash" },
        { name: "Superman" },
      ]);

      onMounted(() => {
         newHeroRef.value.focus();
      });

     const heroesCount = computed({
       get: ()=> dcHeroes.value.length
     })

    function remove(index) {
      dcHeroes.value = dcHeroes.value.filter((hero, i) => i != index);
    }

    function addHero(){
      if (newHero.value !== "") {
        dcHeroes.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }

      return { dcHeroes, newHero, remove, addHero, newHeroRef, heroesCount }
  },

  };
</script>

<style></style>
