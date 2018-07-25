<template>
    <div class="root-wrapper">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
            };
        }
    };

</script>

<style lang="scss">
html
{
    display: flex;
    position: relative;
    height: 100%;
}

body
{
    display: flex;
    flex: 1;
}

.root-wrapper
{
    display: flex;
    flex: 1;
}
</style>
