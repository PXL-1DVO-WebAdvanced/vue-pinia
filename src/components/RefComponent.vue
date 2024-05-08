<template lang="html">
    <div>
        <ul ref="itemlist">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$refs.itemlist);
    }
}
</script>




