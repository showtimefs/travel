<template>
    <div class="contain">
        <Title :title="title" @onClickLeft="onClickLeft"></Title>
    </div>
</template>

<script>
    import Title from './../../components/header'

    export default {
        name: "pushStroke",
        components:{
            Title
        },
        data(){
            return{
                title:"发布行程"
            }
        },
        methods:{
            onClickLeft(){

            }
        }
    }
</script>

<style scoped>


</style>
