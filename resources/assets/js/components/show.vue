<template>
    <div class="modal" :class="openmodal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add New</p>
                <button class="delete" aria-label="close" @click="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label for="" class="label">Name</label>
                </div>
                <div class="control">
                    <input type="text" class="input" placeholder="Name">
                </div>

                <div class="field">
                    <label for="" class="label">Phone</label>
                </div>
                <div class="control">
                    <input type="number" class="input" placeholder="Phone">
                </div>

                <div class="field">
                    <label class="label">Email</label>
                </div>
                <div class="control">
                    <input type="email" class="input" placeholder="Email">
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="save">Save changes</button>
                <button class="button" @click="close">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Show",
        props:['openmodal'],
        methods:{
            close(){
                this.$emit('closeRequest')
            }
        }
    }
</script>

<style scoped>

</style>
