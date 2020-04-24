<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
            <span v-if="!open" @click="open = !open">&#x25Bc; Expand</span>
        </div>
        <slot v-if="open">
            <div>Default content</div>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "CollapsibleComponent",
        data(){
            return{
                open: true
            }
        }
    }
</script>

<style scoped>
.header {
    background: lightgray;
    padding: 3px;
    cursor: pointer;
}
</style>
