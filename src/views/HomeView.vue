<template lang="html">
    <div class="container w-25 mx-auto mb-5">
        <h2>Pinia</h2>
        <p>State Management for Vue 3</p>
        <img src="@/assets/Pinialogo.png" id="image1" alt="Pinia logo" width="100%" height="auto">
        <img :src="imagePath" id="image2" alt="Pinia logo" width="100%" height="auto">
    </div>
</template>
<script>
export default {
    data() {
        return {
            imagePath: null // Initialize imagePath as null initially
        };
    },
    mounted() {
        // Assuming you're fetching image paths from an API or database
        this.fetchImage(); // Call a method to fetch image path
    },
    methods: {
        async fetchImage() {
            const imagePathFromDB = 'src/assets/Pinialogo.png'
            this.imagePath = imagePathFromDB; // Assign the fetched image path to imagePath
            console.log(this.imagePath)
        }
    }
};
</script>
