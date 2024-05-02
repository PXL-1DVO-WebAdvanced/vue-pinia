<template lang="html">
    <div class="container w-25 mx-auto mb-5">
        <h2>Pinia</h2>
        <p>State Management for Vue 3</p>
        <img src="/assets/Pinialogo.png" id="image1" alt="Pinia logo" width="100%" height="auto"> 

        <h2>{{ title }}</h2>
        <p>{{ intro }}</p>
        <img :src="imagePath" id="image2" :alt="imageAlt" width="100%" height="auto">
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Pinia',
            intro: 'State Management for Vue 3',
            imagePath: '/assets/Pinialogo.png',
            imageAlt: 'Pinia logo'
        };
    },
};
</script>



