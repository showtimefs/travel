<template>
    <van-nav-bar
            :title="title"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    />
</template>

<script>
    import { NavBar } from 'vant';

    export default {
        name: "Title",
        components:{
            [NavBar.name]:NavBar
        },
        props : {
            title : {
                type : String,
                default : "标题",
            }
        },
        data(){
            return{

            }
        },
        methods: {
            onClickLeft() {
               this.$emit("onClickLeft")
            },
            onClickRight() {

            }
        }
    }
</script>

<style scoped>
    .van-nav-bar__title {
        max-width: 60%;
        margin: 0 auto;
        color: #202020;
        font-weight: 500;
        font-size: 16px;
    }

    .van-icon-arrow-left{
        color: #9E9E9E;
    }
</style>
