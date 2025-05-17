<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <router-link class="nav-link" to="/admin/dashboard">
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-tachometer"></i>
                        </div>
                        Dashboard
                    </router-link>
<!--                    <a class="nav-link">-->
<!--                        <div class="sb-nav-link-icon">-->
<!--                            <i class="fas fa-shield-alt"></i> RBAC-->
<!--                        </div>-->
<!--                    </a>-->
<!--                    <a class="nav-link">-->
<!--                        <div class="sb-nav-link-icon">-->
<!--                            <i class="fas fa-cog"></i> Settings-->
<!--                        </div>-->
<!--                    </a>-->

                    <template v-for="(menu, mIndex) in Config.menus">
                        <template v-if="menu.sub_menus.length > 0">
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                <span>{{ menu.name }}</span>
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <template v-for="(subMenu, sIndex) in menu.sub_menus">
                                        <router-link class="nav-link" :to="subMenu.link">{{ subMenu.name }}</router-link>
                                    </template>
                                </nav>
                            </div>
                        </template>
                        <template v-else>
                            <router-link class="nav-link" :to="menu.link">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                {{ menu.name }}
                            </router-link>
                        </template>
                    </template>


                        <router-link class="nav-link" to="/admin/category">Category<i class="ps-5 fas fa-angle-right"></i></router-link>
                        <router-link class="nav-link" to="/admin/sub_category">Sub Category<i class="ps-5 fas fa-angle-right"></i></router-link>
                        <router-link class="nav-link" to="/admin/product">Product<i class="ps-5 fas fa-angle-right"></i></router-link>

                    <!--customer menu-->
                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse"
                       data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts">
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <span>Customer</span>
                        <div class="sb-sidenav-collapse-arrow">
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-left"></i></div>
                        </div>
                    </a>
                    <div class="collapse" id="collapseLayouts2" aria-labelledby="headingOne"
                         data-bs-parent="#sidenavAccordion">
                        <nav class="sb-sidenav-menu-nested nav">
                            <router-link class="nav-link" to="">Order</router-link>
                        </nav>
                    </div>


                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Rangpur Shop
            </div>
        </nav>
    </div>
</template>



<script>
    export default {
        name: "sideNav",
        methods : {
            getConfigurations : function (){
                const _this = this;
                let url = _this.urlGenerate('api/configurations');
                _this.httpReq('get', url, {}, {}, function (retData){
                    _this.$store.commit('Config', retData.result);
                    _this.$store.commit('permissions', retData.result.permissions);
                })
            }
        },
        mounted() {
            this.getConfigurations();
        }
    }
</script>
<style scoped>
</style>