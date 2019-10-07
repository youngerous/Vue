<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
// 자식 comp 간 직접 소통은 불가능하다. 부모 comp를 통한다.
// 이를 편하게 하기 위해 bus object 사용
import { eventBus } from "../main";

export default{
    props:['userAge'],
    methods:{
        editAge(){
            this.userAge = 30;
            // this.$emit('ageWasEdited', this.userAge);
            // eventBus.$emit('ageWasEdited', this.userAge);
            eventBus.changeAge(this.userAge)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
