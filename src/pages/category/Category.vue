<!--分类-->
<template>
    <div>
        分类
        <div class="footer">
            <common-footer :footerActive="footerActive"></common-footer>
        </div>
    </div>
</template>

<script>
import CommonFooter from "../common/Footer";
export default {
    name: 'Category',
    data () {
        return {
            /* 配合Tabbar 标签栏确定footer图标高亮 */
            footerActive: 1
        }
    },
    components: {CommonFooter}
}
</script>

<style lang="scss">

</style>
