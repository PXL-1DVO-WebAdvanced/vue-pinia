<template>
    <div>
        <h2>Bootstrap Sass</h2>
        <ol>
            <li>
                <p>Install Bootstrap</p>
                <code>npm install bootstrap</code>
            </li>
            <br>
            <li>
                <p>Import Bootstrap Sass in _globals.scss</p>
                <code>@import "../node_modules/bootstrap/scss/bootstrap";</code>
            </li>
            <br>
            <li>
                <p>Import Bootstrap JS in main.js</p>
                <code>import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"</code>
            </li>
            <br>
            <li>
                <p>Customize variables (optional) <b>before import</b></p>
                <code>$primary: #4793AF;</code>
                <code>$secondary: #FFC470;</code>
            </li>
        </ol>
        <a href="https://getbootstrap.com/docs/5.0/customize/sass/" target="_blank" class="btn btn-primary">More info...</a>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* Add any custom styles here */
</style>
