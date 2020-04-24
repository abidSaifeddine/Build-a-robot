<template>
    <div>
        <h1>{{ part.title }}</h1>
        <p>
            {{ part.description }}
        </p>
    </div>
</template>

<script>
    import parts from "../data/parts";
    export default {
        name: "PartDetails",
        props: ['id', 'partType'],
        computed:
            {
                part() {
                    const { id, partType } = this;
                    return parts[partType].find(part => part.id === +id);
                }
            }
    }
</script>

<style scoped>

</style>
