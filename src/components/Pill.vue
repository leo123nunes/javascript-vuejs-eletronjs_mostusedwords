<template>
  <div :class="{superUsed : (amount / mostusedamount) * 100 <= 100 && (amount / mostusedamount) * 100 > 80, 
                veryUsed : (amount / mostusedamount) * 100 <= 80 && (amount / mostusedamount) * 100 > 60, 
                normalUsed : (amount / mostusedamount) * 100 <= 60 && (amount / mostusedamount) * 100 > 40,
                littleUsed: (amount / mostusedamount) * 100 <= 40 && (amount / mostusedamount) * 100 > 20,
                veryLittleUsed: (amount / mostusedamount) * 100 <= 20 && (amount / mostusedamount) * 100 > 0}">
    <span>{{ name }}</span>
    <span class="amountArea">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount", "mostusedamount"],
};
</script>

<style>
.pill *, .superUsed *, .veryUsed *, .normalUsed *, .littleUsed *, .veryLittleUsed *{
    padding: 5px;
}

.superUsed{
  margin: 5px;
  background-color: rgb(206, 15, 15);
  border-radius: 18px;
  padding: 4px 8px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.veryUsed{
  margin: 5px;
  background-color: rgb(184, 104, 0);
  border-radius: 18px;
  padding: 4px 8px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.normalUsed{
  margin: 5px;
  background-color: #adaa00;
  border-radius: 18px;
  padding: 4px 8px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.littleUsed{
  margin: 5px;
  background-color: #507a01;
  border-radius: 18px;
  padding: 4px 8px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.veryLittleUsed{
  margin: 5px;
  background-color: #22a51e;
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
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>