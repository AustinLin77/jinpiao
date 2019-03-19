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
        path: '/test',
        component: resolve => require(['../components/page/appliance/appliances/companyUser/test.vue'], resolve,),

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
        meta: { keepAlive:true },
      },
      {
        path: '/ticketDetails',
        component: resolve => require(['../components/page/appliance/appliances/ticketPayments/ticketDetails/ticketDetails.vue'], resolve,),
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
        meta: { keepAlive:true },
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
