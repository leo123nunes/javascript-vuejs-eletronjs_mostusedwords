<template>
  <div class="pill">
    <span>{{ name }}</span>
    <span class="amountArea">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

<style>
.pill *{
    padding: 5px;
}

.pill {
  margin: 5px;
  background-color: rgb(187, 52, 52);
  border-radius: 18px;
  padding: 4px 8px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.amountArea {
  height: 30px;  
  width: 30px;      
  border-radius: 18px;
  background-color: #fff;
  color: rgb(253, 79, 79);
  font-size: 0.7em;
  /* padding: 5px; */
  font-weight: bolder;
  /* margin-left: 5px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>