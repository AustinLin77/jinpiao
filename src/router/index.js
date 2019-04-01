import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: resolve => require(['../components/login.vue'], resolve)
        },
        {
            path: '/main',
            component: resolve => require(['../components/page/main.vue'], resolve),
            meta: { keepAlive:true },
            children:[{
                path:"/",
                redirect:"/indexpage"
            },
                {
                    path: '/indexpage',
                    component: resolve => require(['../components/page/indexpage/index.vue'], resolve)
                },
                {
                    path: '/appliance',
                    component: resolve => require(['../components/page/appliance/index.vue'], resolve,),
                },
                {
                    path: '/me',
                    component: resolve => require(['../components/page/me/index.vue'], resolve)
                },
               {
                    path: '/message',
                    component: resolve => require(['../components/page/message/index.vue'], resolve)
                },
            ]
        },

      {
        path: '/fillSendInfo',
        component: resolve => require(['../components/page/appliance/appliances/certification/fillSendInfo/fillSendInfo.vue'], resolve,),
        meta: { keepAlive:true },
      },
      {
        path: '/fillTicketInfo',
        component: resolve => require(['../components/page/appliance/appliances/certification/fillTicketInfo/fillTicketInfo.vue'], resolve,),
        meta: { keepAlive:true },
      },
      {
        path: '/fillPermisstionInfo',
        component: resolve => require(['../components/page/appliance/appliances/certification/fillPermissonInfo/fillPermissonInfo.vue'], resolve,),
        meta: { keepAlive:true },
      },
      {
        path: '/ticketPayments',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketPayment.vue'], resolve,),
        // meta: { keepAlive:true },
      },
      {
        path: '/payment',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/payment/payment.vue'], resolve,),
      },
      {
        path: '/comfirmPayment',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/comfirmPayment/comfirmPayment.vue'], resolve,),
      },
      {
        path: '/ticketDetails',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketDetails/ticketDetails.vue'], resolve,),
        // meta: { keepAlive:true },
      },
      {
        path: '/searchList',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketDetails/searchList/searchList.vue'], resolve,),
      },
      {
        path: '/resouces',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketDetails/resouces/resouces.vue'], resolve,),
      },
      {
        path: '/listDetails',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketDetails/searchList/listDetails/listDetails.vue'], resolve,),
      },
      {
        path: '/handlerComfirm',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketDetails/cashManagement/handlerComfirm/handlerComfirm.vue'], resolve,),
      },
      {
        path: '/cashComfirm',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketDetails/cashComfirm/cashComfirm.vue'], resolve,),
      },
      {
        path: '/cashManagement',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketDetails/cashManagement/cashManagement.vue'], resolve,),
      },
      //人脸识别
      {
        path: '/facerecognition',
        component: resolve => require(['../components/page/facerecognition.vue'], resolve,),
      },
      //金票还款
      {
        path: '/repayTicket',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/index.vue'], resolve,),
        meta: { keepAlive:true },
      },
      //还款管理
      {
        path: '/repaymanage',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/repaymanage/index.vue'], resolve,),
        meta: { keepAlive:true },
      },

      //还款详情
      {
        path: '/repayitem',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/repaymanage/child/repayitem.vue'], resolve,),
        meta: { keepAlive:true },
      },
      //托管平台
      {
        path: '/tgstage',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/tgstage/index.vue'], resolve,),
        meta: { keepAlive:true },
      },
      //托管平台详情
      {
        path: '/tgstageitem',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/tgstage/child/tgstageitem.vue'], resolve,),
        // meta: { keepAlive:true },
      },
      //账单查询
      {
        path: '/zdsearch',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/tgstage/child/zdsearch.vue'], resolve,),
        meta: { keepAlive:true },
      },
      //账单详情
      {
        path: '/zditem',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/tgstage/child/zditem.vue'], resolve,),
        meta: { keepAlive:true },
      },
      //支付经办
      {
        path: '/zfjb',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/tgstage/child/zfjb.vue'], resolve,),
        meta: { keepAlive:true },
      },
      //支付审核
      {
        path: '/zfsh',
        component: resolve => require(['../components/page/appliance/appliances/repayTicket/tgstage/child/zfsh.vue'], resolve,),
        meta: { keepAlive:true },
      },


      //金票审核
      {
        path: '/approvalTicket',
        component: resolve => require(['../components/page/appliance/appliances/approvalTicket/index.vue'], resolve,),
        meta: { keepAlive:true },
      },
      //金票审核详细页
      {
        path: '/ticketitem',
        component: resolve => require(['../components/page/appliance/appliances/approvalTicket/child/ticketitem.vue'], resolve,),
        // meta: { keepAlive:true },
      },
      //金票操作页面审核 驳回页面
      {
        path: '/approvelitem',
        component: resolve => require(['../components/page/appliance/appliances/approvalTicket/child/approvelitem.vue'], resolve,),
        // meta: { keepAlive:true },
      },

      {
        path: '/fillHandlerInfo',
        component: resolve => require(['../components/page/appliance/appliances/certification/fillHandlerInfo/fillHandlerInfo.vue'], resolve,),
      },
      {
        path: '/fillLawyerInfo',
        component: resolve => require(['../components/page/appliance/appliances/certification/fillLawyerInfo/fillLawyerInfo.vue'], resolve,),
      },
      {
        path: '/fillCompanyInfo',
        component: resolve => require(['../components/page/appliance/appliances/certification/fillCompanyInfo/fillCompanyInfo.vue'], resolve,),
      },
      {
        path: '/certification',
        component: resolve => require(['../components/page/appliance/appliances/certification/certification.vue'], resolve,),
      },
      {
        path: '/creditDetails',
        component: resolve => require(['../components/page/appliance/appliances/companyCredit/creditDetails/creditDetails.vue'], resolve,),
      },
      {
        path: '/addCredit',
        component: resolve => require(['../components/page/appliance/appliances/companyCredit/addCredit/addCredit.vue'], resolve,),
      },
      {
        path: '/companyCredit',
        component: resolve => require(['../components/page/appliance/appliances/companyCredit/companyCredit.vue'], resolve,),

      },
      {
        path: '/companyUser',
        component: resolve => require(['../components/page/appliance/appliances/companyUser/companyUser.vue'], resolve,),
      },
      {
        path: '/addHandler',
        component: resolve => require(['../components/page/appliance/appliances/companyUser/addHandler/addHandler.vue'], resolve,),
      },
      {
        path: '/handlerDetail',
        component: resolve => require(['../components/page/appliance/appliances/companyUser/handlerDetail/handlerDetail.vue'], resolve,),
      },
      {
        path: '/set',
        component: resolve => require(['../components/page/me/set/set.vue'], resolve,),
      },
      {
        path: '/changePass',
        component: resolve => require(['../components/page/me/set/changePass/changePass.vue'], resolve,),
      },
      {
        path: '/gesturePass',
        component: resolve => require(['../components/page/me/set/gesturePass/gesturePass.vue'], resolve,),
      },
      {
        path: '/changeGesturePass',
        component: resolve => require(['../components/page/me/set/gesturePass/changeGesturePass/changeGesturePass.vue'], resolve,),
      },
        {
          path: '/registerList',
          component: resolve => require(['../components/page/indexpage/registerList/registerList.vue'], resolve,),
        },
        {
          path: '/changeHeadPic',
          component: resolve => require(['../components/page/me/changeHeadPic/changeHeadPic.vue'], resolve,),
        },
        {
          path: '/personalInfo',
          component: resolve => require(['../components/page/me/personalInfomation/personalInfo.vue'], resolve,),
        },
      {
        path: '/companyInfo',
        component: resolve => require(['../components/page/me/companyInfomation/companyInfo.vue'], resolve,),
      },
      {
        path: '/changeName',
        component: resolve => require(['../components/page/me/personalInfomation/changeName/changeName.vue'], resolve,),
      },
      {
        path: '/changeTel',
        component: resolve => require(['../components/page/me/personalInfomation/changeTel/changeTel.vue'], resolve,),
      },
      {
        path: '/changeDept',
        component: resolve => require(['../components/page/me/personalInfomation/changeDept/changeDept.vue'], resolve,),
      },
      {
        path: '/changeMail',
        component: resolve => require(['../components/page/me/personalInfomation/changeMail/changeMail.vue'], resolve,),
      },
      {
        path: '/changeSex',
        component: resolve => require(['../components/page/me/personalInfomation/changeSex/changeSex.vue'], resolve,),
      },
      {
        path: '/changeNum',
        component: resolve => require(['../components/page/me/personalInfomation/changeNum/changeNum.vue'], resolve,),
      },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
