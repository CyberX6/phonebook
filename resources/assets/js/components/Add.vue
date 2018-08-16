<template>
    <div class="modal" :class="openmodal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close" @click="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label for="" class="label">Name</label>
                </div>
                <div class="control">
                    <input type="text" class="input" placeholder="Name" v-model="list.name">
                </div>

                <div class="field">
                    <label for="" class="label">Phone</label>
                </div>
                <div class="control">
                    <input type="number" class="input" placeholder="Phone" v-model="list.phone">
                </div>

                <div class="field">
                    <label class="label">Email</label>
                </div>
                <div class="control">
                    <input type="email" class="input" placeholder="Email" v-model="list.email">
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
        name: "Add",
        props:['openmodal'],
        data(){
            return{
                list:{
                    name:'',
                    phone:'',
                    email:''
                }
            }
        },
        methods:{
            close(){
                this.$emit('closeRequest')
            },
            save(){
                axios.post('/phonebook', this.$data).then((response)=>console.log(response)).catch((error)=>console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>
