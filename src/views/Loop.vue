<template>
  <v-container>
    <h1>Loop</h1>
    <v-row>
      <template v-for="n in 2" :key="n">
        <v-col  class="mt-2" cols="12">
          <strong>Loop {{ n }}</strong>
        </v-col>
        <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
          <v-sheet height="150" color="black"></v-sheet>
        </v-col>
      </template>
      
      <v-col class="mt-2" cols="12">
          <strong>Drinks</strong>
        </v-col>
        <v-col v-for="(drink, index) in drinks" :key="drink" cols="6" md="2">
          <v-sheet height="150" color="blue">
            <span>{{ index }}. {{ drink.name }}, {{ drink.price }}</span>
          </v-sheet>
        </v-col>

        <v-col class="mt-2" cols="12">
          <strong>Fruits</strong>
        </v-col>
        <v-col v-for="(fruit, index) in fruits" :key="fruit" cols="6" md="2">
          <v-sheet height="150" color="blue">
            <span>{{ index }}. {{ fruit.name }}, {{ fruit.price }}</span>
          </v-sheet>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "loop",
  data() {
    return {
      drinks: [
        { name: "콜라", price: 1000 },
        { name: "사이다", price: 1100 },
        { name: "환타 오렌지", price: 900 },
        { name: "제로콜라", price: 1200 },
      ],
      fruits: [
        { name: "사과", price: 1000 },
        { name: "망고", price: 6000 },
        { name: "샤인머스캣", price: 2000 },
      ],
    };
  },
};
</script>
