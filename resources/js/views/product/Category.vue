<template>
        <div class="container-fluid px-4">

            <page-top></page-top>

            <data-table :tableHeading="tableHeading">
                <tr v-for="(data, index) in dataList" :key="index">
                    <td> {{ index+1 }} </td>
                    <td> {{ data.name }} </td>
                    <td>
                        <a @click="changeStatus(data)" v-html="showStatus(data.status)"></a>
                    </td>
                    <td>
                        <button @click="openEditModal(data,data.id)" class="btn btn-sm btn-outline-success">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button @click=" deleteInformation(data.id, index)" class="btn btn-sm btn-outline-danger">
                            <i class="fas fa-trash-alt"></i>
                        </button>

                    </td>
                </tr>
            </data-table>

            <form-modal ref="myModal" @submit="submitForm(formData)">
                    <div class="row">
                        <div class="col-md-12 d-flex">
                            <label class="col-md-4">Category Name</label>
                            <div class="col-md-8">
                                <input v-model="formData.name"
                                       v-validate="'required'" class="form-control" type="text" name="name"/>
                            </div>
                        </div>
                    </div>
            </form-modal>
        </div>
</template>

<script>
    import PageTop from "../../../components/pageTop";
    import DataTable from "../../../components/dataTable";
    import FormModal from "../../../components/formModal";

    export default {
        name: "Category",
        components: {FormModal, DataTable, PageTop},
        data() {
            return {
                tableHeading: ['Sl', 'Name', 'Status', 'Action'],

            }
        },
        mounted() {
            this.getDataList();
            this.$set(this.formData, 'name', '');
        }
    }
</script>


<style scoped>

</style>