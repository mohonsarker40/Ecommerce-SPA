import axios from 'axios'
import {Validate} from 'vee-validate';

export default {
    data() {
        return {}
    },
    methods: {

        deleteInformation: function (id, index) {
            const _this = this;
                let url = `${_this.urlGenerate()}/${id}`;
                _this.httpReq('delete', url, {}, {}, function (retData) {
                    _this.getDataList();
                });
        },

        getRequiredData: function (array) {
            const _this = this;

            // যদি কেউ ভুল করে 'category, sub_category' টাইপে দেয়, তাহলে split করে দাও
            if (array.length === 1 && typeof array[0] === 'string' && array[0].includes(',')) {
                array = array[0].split(',').map(i => i.trim());
            }

            _this.httpReq('post', _this.urlGenerate('api/required_data'), array, {}, function (retData) {
                $.each(retData.result, function (eachItem, value) {
                    _this.$set(_this.requiredData, eachItem, value);
                });
            });
        },


        httpReq: function (method, url, data = {}, params = {}, callback = false) {
            axios({
                method: method,
                url: url,
                data: data,
                params: params
            }).then(function (res) {
                if (parseInt(res.data.status) === 5000) {
                    return;
                }
                if (parseInt(res.data.status) === 3000) {
                    return;
                }
                if (typeof callback === 'function') {
                    callback(res.data);
                }
            });
        },


        getDataList: function () {
            const _this = this;
            axios.get(_this.urlGenerate())
                .then(function (response) {
                    if (parseInt(response.data.status) === 2000) {
                        _this.$store.commit('dataList', response.data.result);
                    }
                    if (parseInt(response.data.status) === 5000) {

                    }

                });
        },
        changeStatus: function(obj = {}, showMessage = true) {
            const _this = this;
            this.$store.commit('httpRequest', true);
            _this.axios({ method: "patch", url: `${_this.urlGenerate()}/status`, data: obj })
                .then(function(response) {
                    _this.$store.commit('httpRequest', false);
                    obj.status = obj.status === 1 ? 0 : 1;
                    _this.getDataList(_this.currentPagination);
                    if (showMessage) {
                        _this.$toastr(response.data.result, response.data.message, 'Success');
                    }
                }).catch(function(error) {
                _this.$store.commit('httpRequest', false);
                if (showMessage) {
                    var retData = error.response.data;
                    _this.$toastr('error', retData.message, 'Error');
                }
            });
        },
        submitForm : function (formData = {}, optParms = {}, callback ){
            const _this = this;
            let method = (_this.formType === 2) ? 'put' : 'post';
            let url = (_this.formType === 2) ? `${_this.urlGenerate()}/${_this.updateId}` : _this.urlGenerate();
            _this.$validator.validateAll().then(valid => {
                if (valid) {
                    axios({
                        method: method,
                        url: url,
                        data: formData
                    }).then(function (res){
                        if (parseInt(res.data.status) === 2000){

                            if (optParms.modalForm === undefined ){
                                _this.closeModal();
                            }
                            if (optParms.reloadList === undefined){
                                _this.getDataList();
                            }
                            if (typeof callback === 'function'){
                                callback(res.data.result);
                            }
                        }else if(parseInt(res.data.status) === 3000){
                            $.each(res.data.result, function (index, errorValue) {
                                _this.$validator.errors.add({
                                    id: index,
                                    field: index,
                                    name: index,
                                    msg: errorValue[0],
                                });
                            })
                            // _this.errors = res.data.result;
                            // console.log(_this.errors);
                        }else{
                            console.log('toaster');
                        }
                    });
                }
            });
        }

    }
}

