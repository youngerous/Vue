<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default{
    // define a property which should be settable from outside.
    // prop의 이름은 부모 컴포넌트에서 v-bind로 설정한 이름과 같아야 한다.
    props: {
        myName: {
            type: String, 
            // required: true // should always be passed.
        },
        resetFn: Function,
        userAge: Number
    },
    methods:{
        switchName(){
            return this.myName.split('').reverse().join('');
        },
        resetName(){
            this.myName = 'Max'; // 메모리 내의 객체를 변경하기 때문에 부모 컴포넌트에도 영향. (ref type의 경우)
            this.$emit('nameWasReset', this.myName);
        },
    },
    created(){
        eventBus.$on('ageWasEdited', (age)=>{
            this.userAge = age;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
