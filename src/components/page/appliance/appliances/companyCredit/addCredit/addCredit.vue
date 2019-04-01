<template>
    <div id="addCredit">
      <yd-navbar :title="title" bgcolor="#FFFFFF" color="#030303" >
        <router-link  slot="left" to="/companyCredit">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </router-link>
        <yd-button type="primary" slot="right" @click.native="save">保存</yd-button>
      </yd-navbar>
      <div class="content" v-if="title=='申请授信—未结发票'">
        <div class="loopHead">
          <div class="loopHeadP">购方全称</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.compName" placeholder="请填写购方全称">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方全称</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.creditInstitution" placeholder="请填写卖方全称">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">购方纳税人识别号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.buyerTax" placeholder="请填写购方纳税人识别号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方纳税人识别号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.sellerTax" placeholder="请填写卖方纳税人识别号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">购方开户行账号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.buyerAccount" placeholder="请填写购方开户行账号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方开户行账号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.sellerAccount" placeholder="请填写卖方开户行账号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">发票号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.invoiceNo" placeholder="请填写发票号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">发票代码</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.invoiceCode" placeholder="请填写发票代码">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">不含税金额</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.totalPrice" placeholder="请填写不含税金额">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">票面总金额</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.credits" placeholder="请填写票面总金额">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开票日期</div>
          <div class="loopHeadM">
            <yd-datetime type="date" v-model="startTime1" style="text-align: right"></yd-datetime>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            <yd-datetime type="date" v-model="endTime1" style="text-align: right"></yd-datetime>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">备注</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.tips" placeholder="请填写备注">
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='申请授信—承兑发票'">
        <div class="loopHead">
          <div class="loopHeadP">出票人全称</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.compName" placeholder="请填写出票人全称">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">出票人账号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.account" placeholder="请填写出票人账号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">出票人开户银行</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.openBank" placeholder="请填写出票人开户银行">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人全称</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.applicant" placeholder="请填写承兑人全称">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人开户行行号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.creditBankNo" placeholder="请填写承兑人开户行行号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人账号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.creditAccount" placeholder="请填写承兑人账号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人开户行名称</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.creditInstitution" placeholder="请填写承兑人开户行名称">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">票据金额</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.credits" placeholder="请填写票据金额">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">备注</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.remark" placeholder="请填写备注">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            <yd-datetime type="date" v-model="endTime2" style="text-align: right"></yd-datetime>
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='申请授信—银行授信'">
        <div class="loopHead">
          <div class="loopHeadP">企业全称</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.compName" placeholder="请填写企业全称">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业性质</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.companyQuality" placeholder="请填写企业性质">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业分类</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.companySort" placeholder="请填写企业分类">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">官方网站地址</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.websiteAddress" placeholder="请填写官方网站地址">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">申请银行名称</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.creditInstitution" placeholder="请填写申请银行名称">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开户银行许可证标准号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.bankPermitNumber" placeholder="请填写开户银行许可证标准号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开户银行许可证电子版</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.permissionNumElec" placeholder="请填写开户银行许可证电子版">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">其他材料</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.others" placeholder="请填写其他材料">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业认证申请公函</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.enterpriseCertification" placeholder="请填写企业认证申请公函">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">信用额度(万元)</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.credits" placeholder="请填写信用额度(万元)">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照注册号</div>
          <div class="loopHeadM">
            <input  class="creditInput" v-model="userData.businessLicenseNumber" placeholder="请填写营业执照注册号">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">额度类型</div>
          <div class="loopHeadM">
            <select style="height: 80%;border: none" v-model="costType">
              <option value="">选择额度类型</option>
              <option value="高">高</option>
              <option value="低">低</option>
            </select>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            <yd-datetime type="date" v-model="endTime3" style="text-align: right" :init-emit="false" placeHolder="请选择"></yd-datetime>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照</div>
          <div class="loopHeadM">
            <div class="filediv">
              <span v-for="i in  fileName">{{i}}</span>
              <a v-if="fileName.length==0" style="color: deepskyblue" >上传</a>
              <input type="file" id="file" class="file" @change="getFile">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              picUrl:'',
              file:[],
              fileName:[],
              title:'',
              type:'',
              userData:{},
              startTime1:'',
              endTime1:'',
              endTime2:'',
              endTime3:'',
              costType:''
            }
        },
        created() {

        },
        mounted() {
          this.type=this.$route.query.type;
          if(this.type===0){
            this.title='申请授信—未结发票'
          }else if(this.type===1){
            this.title='申请授信—承兑发票'
          }else{
            this.title='申请授信—银行授信'
          }
        },
        methods: {
          getPhotoUrl(){
            let vm=this;
            var formData = new FormData();
            formData.append('file',vm.file);
            $.ajax({
              url:  'https://wmsapi.sunwoda.com/api/app/file?relative=haveValue',
              type: "post",
              data: formData,
              cache: false,
              contentType: false,
              processData: false,
              mimeType: "multipart/form-data",
              success: function (res) {
                let result=JSON.parse(res);
                vm.picUrl=result.data;
                console.log(vm.picUrl);
              },
              error: function () {
              }
            });


          },
          save(){
            let vm = this;
            let url='clcp/appCreditApi/addCreditDeclaration';
            let params;
            if( this.title=='申请授信—未结发票'){
              params={
                busiType:1,
                compName:this.userData.compName,
                creditInstitution:this.userData.creditInstitution,
                buyerTax:this.userData.buyerTax,
                sellerTax:this.userData.sellerTax,
                buyerAccount:this.userData.buyerAccount,
                sellerAccount:this.userData.sellerAccount,
                invoiceNo:this.userData.invoiceNo,
                invoiceCode:this.userData.invoiceCode,
                totalPrice:this.userData.totalPrice,
                credits:this.userData.credits,
                makeInvoiceTime:this.startTime1,
                expiryDate:this.endTime1
              }
            }else if(this.title=='申请授信—承兑发票'){
              params={
                busiType:2,
                compName:this.userData.compName,
                account:this.userData.account,
                openBank:this.userData.openBank,
                applicant:this.userData.applicant,
                creditBankNo:this.userData.creditBankNo,
                creditAccount:this.userData.creditAccount,
                creditInstitution:this.userData.creditInstitution,
                credits:this.userData.credits,
                remark:this.userData.remark,
                expiryDate:this.endTime2
              }
            }else{
              params={
                busiType:3,
                compName:this.userData.compName,
                companyQuality:this.userData.companyQuality,
                companySort:this.userData.companySort,
                websiteAddress:this.userData.websiteAddress,
                creditInstitution:this.userData.creditInstitution,
                bankPermitNumber:this.userData.bankPermitNumber,
                businessLicenseNumber:this.userData.businessLicenseNumber,
                credits:this.userData.credits,
                remark:this.userData.remark,
                enterpriseCertification:this.enterpriseCertification,
                expiryDate:this.endTime3,
                businessPhoto:this.picUrl
              }
            }
            let heads={
              "Content-Type": "application/json",
              "Accept": "application/json",
              "X-TenantId": localStorage.getItem("tenantId"),
              "X-Logined-Sign": localStorage.getItem("username"),
              "Authorization": 'Bearer '+localStorage.getItem("token"),
              "Prefer-Lang": "zh-CN"
            };
            vm.api(vm,heads,'post',url,JSON.stringify(params),function (res) {
              console.log(res);
              if(res.statusCode==200){
                vm.$router.push({path:'/companyCredit'})
              }else{
                vm.$dialog.toast({
                  mes: '新增失败 , 请重新提交 !',
                  timeout: 1500
                });
              }
            });
          },
          getFile:function () {
            this.fileName=[];
            var file=document.getElementById("file").files[0];
            console.log(file);
            this.file=file;
            this.fileName.push(file.name);
            this.getPhotoUrl()
          },
        }

    }
</script>
<style scoped>
  select{
    direction: rtl;

  }
  .yd-navbar {
    border-bottom: 1px solid #eeeeee;
  }
  .yd-btn-primary:not(.yd-btn-loading) {
    background-color: deepskyblue;
  }

  .loopHead{
    background-color: white;
    min-height: 50px;

    display: flex;
    /*border-bottom: solid 1px #eeeeee*/
  }
  .loopHeadP{
    color: #000000;
    font-family: 微软雅黑;
    font-size: 14px;
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.34rem
  }
  ::-webkit-scrollbar{
    display:none;
  }
  .loopHeadM{
    color: #666666;
    font-family:  微软雅黑;
    font-size: 14px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:0.34rem
  }
  #app .creditInput{
    width: 100%;
    border: none;
    text-align: end;
    background-color: white;
    height: 60%;
    color: #666666;
    outline:none
  }
  .bottomButt{
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .myButtOne{
    height: 0.8rem;
    width:2.24rem ;
    border-radius: 0.4rem;
    font-size:0.28rem ;
    border: 1px solid rgba(15, 174, 253, 1);
    color:#0FAEFD;
    margin-right: 1rem;
  }
  .myButtTwo{
    height: 0.8rem;
    width:2.24rem ;
    border-radius: 0.4rem;
    color:#FF0B0B ;
    font-size:0.28rem ;
    border: 1px solid rgba(255, 11, 11, 1);
  }
  .content{
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100% - 50px);
    padding-top: 0.2rem;
  }
  .filediv {
    position: relative;
    display: flex;
    align-items: center;

  }
  .file {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    opacity: 0;
  }

</style>

