<template>
    <div class="modal" :id="modalId">
        <div class="modal-dialog modal-xs ">
            <form @submit.prevent="submit()" >
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{modalTitle}}</h4>
                        <button type="button" class="btn-close"  @click="closeModal(modalId)"></button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click="closeModal(modalId)">Close</button>
                        <button type="submit" class="btn btn-success" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: "formModal",
        props: {
            modalId : {
                type : [String],
                default : 'myModal'
            },

        },
        methods : {

            submit : function (){
                this.$emit('submit');
            },
            // show() {
            //     $(`#${this.modalId}`).modal('show');
            // },
            // closeModal() {
            //     $(`#${this.modalId}`).modal('hide');
            // },
        }
    }

</script>

<style scoped>

</style>