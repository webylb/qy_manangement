import {mapGetters, mapMutations, mapActions} from 'vuex'

import * as core from '../../api/common'

export const userInfoMixin = {
    created: function () {
        if (!this.userInfo.state) {
            this.getUserInfo()
        }
    },
    computed: {
        ...mapGetters([
            'userInfo',
        ])
    },
    methods: {
        getUserInfo() {
            core.userInfo().then((res) => {
                if (res) {
                    res.data.state = true
                    this.setUserInfo(res.data)
                }
            })
        },
        ...mapMutations({
            setUserInfo: 'SET_USER_INFO',
        }),
    }
};

export const accountInfoMixin = {
    created: function () {
        if (!this.accountInfo.state) {
            this.getAccountInfo()
        }
    },
    computed: {
        ...mapGetters([
            'accountInfo',
        ])
    },
    methods: {
        getAccountInfo() {
            core.accountInfo().then((res) => {
                if (res) {
                    let _data = {}
                    _data.balance = res.data;
                    _data.state = true
                    this.setAccountInfo(_data)
                }
            })
        },
        ...mapMutations({
            setAccountInfo: 'SET_ACCOUNT_INFO',
        }),
    }
};
export const addressInfoMixin = {
    created: function () {
        // 0 初始化 1只改list 2什么都不做
        console.log(this.addressInfo.state)
        if (this.addressInfo.state !== 2) {
            this.getAddressInfo()
        } else {
            console.log('1221')
            this.chosenAddressId = this.addressInfo.chosenAddressId
        }
    },
    computed: {
        ...mapGetters([
            'addressInfo',
        ])
    },
    methods: {
        addressCallBack() {
            // '回显回调不能删除'
        },
        _handleList(data) {
            if (data.length === 0) {
                this.showEmpty = true
            }
            // let _list = []
            let _chosenAddressId = '';
            for (let i = 0; i < data.length; i++) {
                let _isDefault = '';
                if (data[i].isDefault === 'Y') {
                    _chosenAddressId = data[i].id;
                    this.chosenAddressId = data[i].id;
                    _isDefault = '[默认地址] '
                }
                data[i].name = data[i].realname;
                data[i].tel = data[i].mobile;
                data[i].addressCopy = data[i].address;
                data[i].address = _isDefault + data[i].province + ' ' + data[i].city + ' ' + data[i].district + ' ' + data[i].town + ' ' + data[i].address

            }
            return {list: data, chosenAddressId: _chosenAddressId}
        },
        getAddressInfo() {
            core.addressList().then((res) => {
                if (res) {
                    if (this.addressInfo.state === 0) {
                        let _data = this._handleList(res.data);
                        this.changeAddressInfo({status: 2, chosenAddressId: _data.chosenAddressId, list: _data.list})
                    } else if (this.addressInfo.state === 1) {
                        this.setAddressList(this._handleList(res.data).list)
                        this.setAddressState(2);
                        this.chosenAddressId = this.addressInfo.chosenAddressId;


                    }

                }
                this.addressCallBack()
            })
        },
        ...mapMutations({
            setAddressList: 'SET_ADDRESS_LIST',
            setAddressState: 'SET_ADDRESS_STATE'
        }),
        ...mapActions([
            'changeAddressInfo'
        ])
    }
}
import {List} from 'vant'
import Empty from '../../components/Empty/Empty'
import OrderList from '../../components/OrderList/OrderList'
import * as oderFormCore from '../../api/orderForm'

export const orderFormMixin = {
    data() {
        return {
            loading: false,
            finished: false,
            showEmpty: false,
            allOrderList: []
        }

    },
    created() {
        this.currentPageAll = 1
    },
    methods: {
        getOrderForm(opts) {
            this.loading = true;
            oderFormCore.orderForm(opts).then(res => {
                if (res) {
                    this.currentPageAll++;
                    let _data = res.data;
                    for (var i = 0; i < _data.data.length; i++) {
                        if (_data.data[i].payStatus === 'WAIT') {
                            _data.data[i].orderState = 0;
                            _data.data[i].orderStateStr = '待付款'
                        } else if(_data.data[i].payStatus === 'SUCCESS'){
                            if (_data.data[i].shipStatus === 'WAIT') {
                                _data.data[i].orderState = 1;
                                _data.data[i].orderStateStr = '待发货'
                            } else {
                                if (_data.data[i].confirmReceiptStatus === 'WAIT') {
                                    _data.data[i].orderState = 2;
                                    _data.data[i].orderStateStr = '待收货'
                                } else {
                                    _data.data[i].orderState = 3;
                                    _data.data[i].orderStateStr = '已完成'
                                }
                            }
                        }else {
                            _data.data[i].orderState = 4;
                            _data.data[i].orderStateStr = '已关闭'
                        }

                        let _num = 0
                        for (var j = 0; j < _data.data[i].orderDetails.length; j++) {
                            _data.data[i].orderDetails[j].skuCover = _data.data[i].orderDetails[j].itemCover;
                            _data.data[i].orderDetails[j].skuSpecNameValueJson = _data.data[i].orderDetails[j].specNameValueJson;
                            _data.data[i].orderDetails[j].skuTitle = _data.data[i].orderDetails[j].itemTitle;
                            _num = _num + _data.data[i].orderDetails[j].num
                        }
                        _data.data[i].num = _num
                    }
                    this.allOrderList = this.allOrderList.concat(res.data.data);
                    this.loading = false;
                    if (this.allOrderList.length === 0) {
                        this.showEmpty = true
                    }
                    if (res.data.data.length === 0) {
                        this.loading = false;
                        this.finished = true;
                        return false
                    }
                }
            })
        },
        getSubmitOrderForOrderId(id, money) {
            oderFormCore.submitOrderForOrderId({orderId: id}).then(res => {
                if (res) {

                    this.$router.push({
                        path: '/cashier',
                        query: {
                            payMoney: money,
                            payUrl: res.data.payUrl,
                            payOrderData: res.data.payOrderData
                        }
                    })
                }
            })
        },
        subOrderPay(opts) {
            this.getSubmitOrderForOrderId(opts.id, opts.price)
        },
        getCancelOrder(opts){
            oderFormCore.cancellationOfOrder(opts).then(res=>{
                if (res){
                    this.handleCancelOrder(opts);
                    this.$toast({
                        message: '成功取消订单！'
                    })
                }
            })
        },
        cancelOrder(id){
            this.$dialog.alert({
                message: '是否确认取消订单？',
                confirmButtonColor: '#ff5448',
                showCancelButton:true,
                confirmButtonText:'确定取消',
                cancelButtonText:'暂不取消',
                closeOnClickOverlay: true,

            }).then(() => {
                this.getCancelOrder({orderId: id})
            });
        },

        getConfirmOrder(opts){
            oderFormCore.confirmOrder(opts).then(res=>{
                if (res){
                    this.handleConfirmOrder(opts);
                    this.$toast({
                        message: '确认收货成功！'
                    })
                }
            })
        },
        confirmationOfReceipt(id){
            this.$dialog.alert({
                message: '是否确认收货？',
                confirmButtonColor: '#ff5448',
                showCancelButton:true,
                confirmButtonText:'确定收货',
                cancelButtonText:'暂不收货',
                closeOnClickOverlay: true,

            }).then(() => {
                this.getConfirmOrder({orderId: id})
            });
        },
        lookLogistics(id){
            this.$router.push(`/logistics/${id}`)
        },
        removeItem(id){
            this.handleCancelOrder({orderId:id})
        }
    },
    components: {
        [List.name]: List,
        Empty,
        OrderList
    }
}