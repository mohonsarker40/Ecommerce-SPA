<template>
    <div>
        <main>
            <div class="container-fluid px-4">
                <h1 class="mt-4">Dashboard</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active">Thanks for coming back!</li>
                </ol>
                <div class="row g-4">
                    <div class="col-xl-3 col-md-6 pb-4">
                        <div class="card bg-warning text-white shadow">
                            <div class="card-body d-flex justify-content-between align-items-center pb-5">
                                <span>Category</span>
                                <h4 class="mb-0">{{ dataList.category }}</h4>
<!--                                <h4 class="mb-0">{{ dataList.category }}</h4>-->
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card bg-danger text-white shadow">
                            <div class="card-body d-flex justify-content-between align-items-center pb-5">
                                <span>Subcategory</span>
                                <h4 class="mb-0">{{ dataList.sub_category }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card bg-primary text-white shadow">
                            <div class="card-body d-flex justify-content-between align-items-center pb-5">
                                <span>Product</span>
                                <h4 class="mb-0">0</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card bg-secondary text-white shadow">
                            <div class="card-body d-flex justify-content-between align-items-center pb-5">
                                <span>Order</span>
                                <h4 class="mb-0">0</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pt-2 g-4">
                    <div class="col-xl-3 col-md-6">
                        <div class="card bg-success text-white shadow">
                            <div class="card-body d-flex justify-content-between align-items-center pb-5">
                                <span>Customer</span>
                                <h4 class="mb-0">0</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        data() {
            return {}
        },
        mounted() {
            this.getDataList();
        }
    }
</script>

<style scoped>

</style>