<template>
    <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    />
</template>

<script>
    import { Row, Col, Icon, Cell, CellGroup } from 'vant';

    export default {
        name: "header",
        components:{

        },
        methods: {
            onClickLeft() {
                Toast('返回');
            },
            onClickRight() {
                Toast('按钮');
            }
        }
    }
</script>

<style scoped>

</style>
