<template lang="html">
    <div>
        <h2>Inline Styles</h2>
        <ol>
            <li :style="borderRed">opmaak via attribute binding met style</li>
            <li :style="{ color: primaryColor, fontStyle: fontItalic }">opmaak via attribute <b>object</b> binding met style</li>
        </ol>

        <h2>Classes</h2>
        <ol>
            <li :class="customClass">opmaak via attribute binding met class</li>
            <li :class="{ box: theValue > 5 }">ternary operator with value = 7</li>
            <li :class="greenIfValueGT5">computed property with value = 7</li>
            <li :class="redIfValueLS5">         opmaak via attribute <b>object</b> binding met computed property</li>
        </ol>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theValue: 4
        };
    },
    computed: {
        greenIfValueGT5() {
            return { green: this.theValue > 5 };
        },
    },
}
</script>
<style scoped>
    .box {
        border: 1px solid red;
        padding: 20px;
    }
    .green {
        color: green;
        font-size: 2rem;
    }
    .red {
        color: red;
        font-size: 2rem;
    }


    ol {
        list-style-position: outside;
        padding: 0;
    }
    li {
        margin: 10px 0;
    }

    
</style>