<template>
    <div id="creditDetail">
      <yd-navbar :title="title" bgcolor="#FFFFFF" color="#030303" >
        <div slot="left" @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
        <!--<yd-button type="primary" slot="right" @click.native="save" v-if="this.type!='已授信'">保存</yd-button>-->
      </yd-navbar>
      <div class="content" v-if="title=='已授信—未结发票'">
        <div class="loopHead">
          <div class="loopHeadP">购方全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方全称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">购房纳税人识别号</div>
          <div class="loopHeadM">
            {{userData.buyerTax}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方纳税人识别号</div>
          <div class="loopHeadM">
            {{userData.sellerTax}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">购方开户行账号</div>
          <div class="loopHeadM">
            {{userData.buyerAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方开户行账号</div>
          <div class="loopHeadM">
            {{userData.sellerAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">发票号</div>
          <div class="loopHeadM">
            {{userData.invoiceNo}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">发票代码</div>
          <div class="loopHeadM">
            {{userData.invoiceCode}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">不含税金额</div>
          <div class="loopHeadM">
            {{userData.totalPrice}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">票面总金额</div>
          <div class="loopHeadM">
            {{userData.credits}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开票日期</div>
          <div class="loopHeadM">
            {{userData.makeInvoiceTime}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">备注</div>
          <div class="loopHeadM">
            {{userData.remark}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='已授信—承兑发票'">
        <div class="loopHead">
          <div class="loopHeadP">出票人全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">出票人账号</div>
          <div class="loopHeadM">
            {{userData.account}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">出票人开户银行</div>
          <div class="loopHeadM">
            {{userData.openBank}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人全称</div>
          <div class="loopHeadM">
            {{userData.applicant}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人开户行行号</div>
          <div class="loopHeadM">
            {{userData.creditBankNo}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人账号</div>
          <div class="loopHeadM">
            {{userData.creditAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人开户行名称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">票据金额</div>
          <div class="loopHeadM">
            {{userData.credits}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">备注</div>
          <div class="loopHeadM">
            {{userData.remark}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='已授信—银行授信'">
        <div class="loopHead">
          <div class="loopHeadP">企业全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业性质</div>
          <div class="loopHeadM">
            {{userData.companyQuality}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业分类</div>
          <div class="loopHeadM">
            {{userData.companySort}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">额度类型</div>
          <div class="loopHeadM">
            高额
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">官方网站地址</div>
          <div class="loopHeadM">
            {{userData.websiteAddress}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">申请银行名称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开户银行许可证标准号</div>
          <div class="loopHeadM">
            {{userData.bankPermitNumber}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开户银行许可证电子版</div>
          <div class="loopHeadM">
            51542515215
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">其他材料</div>
          <div class="loopHeadM">
            无
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业认证申请公函</div>
          <div class="loopHeadM">
            {{userData.enterpriseCertificationationation}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">信用额度(万元)</div>
          <div class="loopHeadM">
            {{userData.credits}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照注册号</div>
          <div class="loopHeadM">
            {{userData.businessLicenseNumber}}
            <!--<span style="color: deepskyblue">查看</span>-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照</div>
          <div class="loopHeadM">
            <span style="color: deepskyblue">查看</span>
          </div>
        </div>

      </div>
      <div class="content" v-if="title=='待授信—未结发票'">
        <div class="loopHead">
          <div class="loopHeadP">购方全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
            <!--<input  class="addCreditInput" v-model="userData.compName" placeholder="请填写购方全称">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方全称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
            <!--<input  class="addCreditInput" v-model="userData.creditInstitution" placeholder="请填写卖方全称">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">购方纳税人识别号</div>
          <div class="loopHeadM">
            {{userData.buyerTax}}
            <!--<input  class="addCreditInput" v-model="userData.buyerTax" placeholder="请填写购方纳税人识别号">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方纳税人识别号</div>
          <div class="loopHeadM">
            {{userData.sellerTax}}
            <!--<input  class="addCreditInput" v-model="userData.sellerTax" placeholder="请填写卖方纳税人识别号">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">购方开户行账号</div>
          <div class="loopHeadM">
            {{userData.buyerAccount}}
            <!--<input  class="addCreditInput" v-model="userData.buyerAccount" placeholder="请填写购方开户行账号">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方开户行账号</div>
          <div class="loopHeadM">
            {{userData.sellerAccount}}
            <!--<input  class="addCreditInput" v-model="userData.sellerAccount" placeholder="请填写卖方开户行账号">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">发票号</div>
          <div class="loopHeadM">
            {{userData.invoiceNo}}
            <!--<input  class="addCreditInput" v-model="userData.invoiceNo" placeholder="请填写发票号">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">发票代码</div>
          <div class="loopHeadM">
            {{userData.invoiceCode}}
            <!--<input  class="addCreditInput" v-model="userData.invoiceCode" placeholder="请填写发票代码">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">不含税金额</div>
          <div class="loopHeadM">
            {{userData.totalPrice}}
            <!--<input  class="addCreditInput" v-model="userData.totalPrice" placeholder="请填写不含税金额">-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">票面总金额</div>
          <div class="loopHeadM">
            {{userData.credits}}
            <input  class="addCreditInput" v-model="userData.credits" placeholder="请填写票面总金额">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开票日期</div>
          <div class="loopHeadM">
            {{userData.makeInvoiceTime}}
            <!--<yd-datetime type="date" v-model="userData.makeInvoiceTime" style="text-align: right"></yd-datetime>-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
            <!--<yd-datetime type="date" v-model="userData.expiryDate" style="text-align: right"></yd-datetime>-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">备注</div>
          <div class="loopHeadM">
            {{userData.remark}}
            <!--<input  class="addCreditInput" v-model="userData.remark" placeholder="请填写备注">-->
          </div>
        </div>
        <div class="bottomButt" >
          <button class="myButtOne" @click="permission">审批</button>
          <button class="myButtTwo" @click="userReject">驳回</button>
        </div>
      </div>
      <div class="content" v-if="title=='待授信—承兑发票'">
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">出票人全称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.compName" placeholder="请填写出票人全称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">出票人账号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.account" placeholder="请填写出票人账号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">出票人开户银行</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.openBank" placeholder="请填写出票人开户银行">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">承兑人全称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.applicant" placeholder="请填写承兑人全称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">承兑人开户行行号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.creditBankNo" placeholder="请填写承兑人开户行行号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">承兑人账号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.creditAccount" placeholder="请填写承兑人账号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">承兑人开户行名称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.creditInstitution" placeholder="请填写承兑人开户行名称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">票据金额</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.credits" placeholder="请填写票据金额">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">截止日期</div>-->
          <!--<div class="loopHeadM">-->
            <!--<yd-datetime type="date" v-model="userData.expiryDate" style="text-align: right"></yd-datetime>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">备注</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.remark" placeholder="请填写备注">-->
          <!--</div>-->
        <!--</div>-->
        <div class="loopHead">
          <div class="loopHeadP">出票人全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">出票人账号</div>
          <div class="loopHeadM">
            {{userData.account}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">出票人开户银行</div>
          <div class="loopHeadM">
            {{userData.openBank}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人全称</div>
          <div class="loopHeadM">
            {{userData.applicant}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人开户行行号</div>
          <div class="loopHeadM">
            {{userData.creditBankNo}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人账号</div>
          <div class="loopHeadM">
            {{userData.creditAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人开户行名称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">票据金额</div>
          <div class="loopHeadM">
            {{userData.credits}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">备注</div>
          <div class="loopHeadM">
            {{userData.remark}}
          </div>
        </div>
        <div class="bottomButt" >
          <button class="myButtOne" @click="permission">审批</button>
          <button class="myButtTwo" @click="userReject">驳回</button>
        </div>
      </div>
      <div class="content" v-if="title=='待授信—银行授信'">
        <div class="loopHead">
          <div class="loopHeadP">企业全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业性质</div>
          <div class="loopHeadM">
            {{userData.companyQuality}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业分类</div>
          <div class="loopHeadM">
            {{userData.companySort}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">额度类型</div>
          <div class="loopHeadM">
            高额
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">官方网站地址</div>
          <div class="loopHeadM">
            {{userData.websiteAddress}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">申请银行名称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开户银行许可证标准号</div>
          <div class="loopHeadM">
            {{userData.bankPermitNumber}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开户银行许可证电子版</div>
          <div class="loopHeadM">
            51542515215
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">其他材料</div>
          <div class="loopHeadM">
            无
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业认证申请公函</div>
          <div class="loopHeadM">
            {{userData.enterpriseCertificationationation}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">信用额度(万元)</div>
          <div class="loopHeadM">
            {{userData.credits}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照注册号</div>
          <div class="loopHeadM">
            {{userData.businessLicenseNumber}}
            <!--<span style="color: deepskyblue">查看</span>-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照</div>
          <div class="loopHeadM">
            <span style="color: deepskyblue">查看</span>
          </div>
        </div>

        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">企业全称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.compName" placeholder="请填写出票人全称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">企业性质</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.companyQuality" placeholder="请填写企业性质">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">企业分类</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.companySort" placeholder="请填写企业分类">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">官方网站地址</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.websiteAddress" placeholder="请填写官方网站地址">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">申请银行名称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.creditInstitution" placeholder="请填写申请银行名称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">开户银行许可证标准号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.bankPermitNumber" placeholder="请填写开户银行许可证标准号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">开户银行许可证电子版</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.permissionNumElec" placeholder="请填写开户银行许可证电子版">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">其他材料</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.others" placeholder="请填写其他材料">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">企业认证申请公函</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.enterpriseCertificationationation" placeholder="请填写企业认证申请公函">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">信用额度(万元)</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.credits" placeholder="请填写信用额度(万元)">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">额度类型</div>-->
          <!--<div class="loopHeadM">-->
            <!--<select style="width: 100%;height: 80%;border: none" v-model="costType">-->
              <!--<option value="">选择额度类型</option>-->
              <!--<option value="高">高</option>-->
              <!--<option value="低">低</option>-->
            <!--</select>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">截止日期</div>-->
          <!--<div class="loopHeadM">-->
            <!--<yd-datetime type="date" v-model="userData.expiryDate" style="text-align: right"></yd-datetime>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">营业执照</div>-->
          <!--<div class="loopHeadM">-->
            <!--<div class="filediv">-->
              <!--<span v-for="i in  fileName">{{i}}</span>-->
              <!--<a v-if="fileName.length==0" style="color: deepskyblue">上传</a>-->
              <!--<input type="file" id="file" class="file" @change="getFile">-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">营业执照注册号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<div class="filediv">-->
              <!--<span v-for="i in  fileName1">{{i}}</span>-->
              <!--<a v-if="fileName1.length==0" style="color: deepskyblue">上传</a>-->
              <!--<input type="file" id="file1" class="file" @change="getFile1">-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <div class="bottomButt" >
          <button class="myButtOne" @click="permission">审批</button>
          <button class="myButtTwo" @click="userReject">驳回</button>
        </div>
      </div>
      <div class="content" v-if="title=='授信失败—未结发票'">
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">购方全称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.compName" placeholder="请填写购方全称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">卖方全称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.creditInstitution" placeholder="请填写卖方全称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">购方纳税人识别号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.buyerTax" placeholder="请填写购方纳税人识别号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">卖方纳税人识别号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.sellerTax" placeholder="请填写卖方纳税人识别号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">购方开户行账号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.buyerAccount" placeholder="请填写购方开户行账号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">卖方开户行账号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.sellerAccount" placeholder="请填写卖方开户行账号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">发票号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.invoiceNo" placeholder="请填写发票号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">发票代码</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.invoiceCode" placeholder="请填写发票代码">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">不含税金额</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.totalPrice" placeholder="请填写不含税金额">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">票面总金额</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.credits" placeholder="请填写票面总金额">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">开票日期</div>-->
          <!--<div class="loopHeadM">-->
            <!--<yd-datetime type="date" v-model="userData.makeInvoiceTime" style="text-align: right"></yd-datetime>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">截止日期</div>-->
          <!--<div class="loopHeadM">-->
            <!--<yd-datetime type="date" v-model="userData.expiryDate" style="text-align: right"></yd-datetime>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">备注</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.remark" placeholder="请填写备注">-->
          <!--</div>-->
        <!--</div>-->
        <div class="loopHead">
          <div class="loopHeadP">购方全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方全称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">购房纳税人识别号</div>
          <div class="loopHeadM">
            {{userData.buyerTax}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方纳税人识别号</div>
          <div class="loopHeadM">
            {{userData.sellerTax}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">购方开户行账号</div>
          <div class="loopHeadM">
            {{userData.buyerAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">卖方开户行账号</div>
          <div class="loopHeadM">
            {{userData.sellerAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">发票号</div>
          <div class="loopHeadM">
            {{userData.invoiceNo}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">发票代码</div>
          <div class="loopHeadM">
            {{userData.invoiceCode}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">不含税金额</div>
          <div class="loopHeadM">
            {{userData.totalPrice}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">票面总金额</div>
          <div class="loopHeadM">
            {{userData.credits}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开票日期</div>
          <div class="loopHeadM">
            {{userData.makeInvoiceTime}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">备注</div>
          <div class="loopHeadM">
            {{userData.remark}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='授信失败—承兑发票'">
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">出票人全称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.completeName" placeholder="请填写出票人全称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">出票人账号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.account" placeholder="请填写出票人账号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">出票人开户银行</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.bank" placeholder="请填写出票人开户银行">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">承兑人全称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.userCompleteName" placeholder="请填写承兑人全称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">承兑人开户行行号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.userBank" placeholder="请填写承兑人开户行行号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">承兑人账号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.userAccount" placeholder="请填写承兑人账号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">承兑人开户行名称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.userBankName" placeholder="请填写承兑人开户行名称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">票据金额</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.ticketCost" placeholder="请填写票据金额">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">截止日期</div>-->
          <!--<div class="loopHeadM">-->
            <!--<yd-datetime type="date" v-model="endTime" style="text-align: right"></yd-datetime>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">备注</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.tips" placeholder="请填写备注">-->
          <!--</div>-->
        <!--</div>-->
        <div class="loopHead">
          <div class="loopHeadP">出票人全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">出票人账号</div>
          <div class="loopHeadM">
            {{userData.account}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">出票人开户银行</div>
          <div class="loopHeadM">
            {{userData.openBank}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人全称</div>
          <div class="loopHeadM">
            {{userData.applicant}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人开户行行号</div>
          <div class="loopHeadM">
            {{userData.creditBankNo}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人账号</div>
          <div class="loopHeadM">
            {{userData.creditAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承兑人开户行名称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">票据金额</div>
          <div class="loopHeadM">
            {{userData.credits}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">备注</div>
          <div class="loopHeadM">
            {{userData.remark}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='授信失败—银行授信'">
        <div class="loopHead">
          <div class="loopHeadP">企业全称</div>
          <div class="loopHeadM">
            {{userData.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业性质</div>
          <div class="loopHeadM">
            {{userData.companyQuality}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业分类</div>
          <div class="loopHeadM">
            {{userData.companySort}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">额度类型</div>
          <div class="loopHeadM">
            高额
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">官方网站地址</div>
          <div class="loopHeadM">
            {{userData.websiteAddress}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">申请银行名称</div>
          <div class="loopHeadM">
            {{userData.creditInstitution}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开户银行许可证标准号</div>
          <div class="loopHeadM">
            {{userData.bankPermitNumber}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开户银行许可证电子版</div>
          <div class="loopHeadM">
            51542515215
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">截止日期</div>
          <div class="loopHeadM">
            {{userData.expiryDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">其他材料</div>
          <div class="loopHeadM">
            无
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业认证申请公函</div>
          <div class="loopHeadM">
            {{userData.enterpriseCertificationationation}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">信用额度(万元)</div>
          <div class="loopHeadM">
            {{userData.credits}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照注册号</div>
          <div class="loopHeadM">
            {{userData.businessLicenseNumber}}
            <!--<span style="color: deepskyblue">查看</span>-->
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照</div>
          <div class="loopHeadM">
            <span style="color: deepskyblue">查看</span>
          </div>
        </div>

        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">企业全称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.compName" placeholder="请填写企业全称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">企业性质</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.companyQuality" placeholder="请填写企业性质">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">企业分类</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.companySort" placeholder="请填写企业分类">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">官方网站地址</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.websiteAddress" placeholder="请填写官方网站地址">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">申请银行名称</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.creditInstitution" placeholder="请填写申请银行名称">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">开户银行许可证标准号</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.bankPermitNumber" placeholder="请填写开户银行许可证标准号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">开户银行许可证电子版</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.permissionNumElec" placeholder="请填写开户银行许可证电子版">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">其他材料</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.others" placeholder="请填写其他材料">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">企业认证申请公函</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.enterpriseCertificationationation" placeholder="请填写企业认证申请公函">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">信用额度(万元)</div>-->
          <!--<div class="loopHeadM">-->
            <!--<input  class="addCreditInput" v-model="userData.credits" placeholder="请填写信用额度(万元)">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">额度类型</div>-->
          <!--<div class="loopHeadM">-->
            <!--<select style="width: 100%;height: 80%;border: none" v-model="costType">-->
              <!--<option value="">选择额度类型</option>-->
              <!--<option value="高">高</option>-->
              <!--<option value="低">低</option>-->
            <!--</select>-->
          <!--</div>-->

        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">截止日期</div>-->
          <!--<div class="loopHeadM">-->
            <!--<yd-datetime type="date" v-model="userData.expiryDate" style="text-align: right"></yd-datetime>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">营业执照注册号</div>-->
          <!--<div class="loopHeadM">-->
            <!--&lt;!&ndash;<span style="color: deepskyblue;">查看</span>&ndash;&gt;-->
            <!--<input  class="addCreditInput" v-model="userData.businessLicenseNumber" placeholder="请填写营业执照注册号">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="loopHead">-->
          <!--<div class="loopHeadP">营业执照</div>-->
          <!--<div class="loopHeadM">-->
            <!--<span style="color: deepskyblue;">查看</span>-->
            <!--&lt;!&ndash;<div class="filediv">&ndash;&gt;-->
              <!--&lt;!&ndash;<span v-for="i in  fileName">{{i}}</span>&ndash;&gt;-->
              <!--&lt;!&ndash;<a v-if="fileName.length==0">选择文件</a>&ndash;&gt;-->
              <!--&lt;!&ndash;<input type="file" id="file1" class="file" @change="getFile">&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              fileName1:[],
              fileName:[],
              costType:'',
              endTime:'',
              startTime:'',
              title:'',
              type:'',
              status:'',
              userData:{},
            }
        },
        created() {

        },
        mounted() {
          this.userData=this.$route.query.item;
          switch (this.userData.companyQuality)
          {
              case '1':
              this.userData.companyQuality='国有';
                break;
            case '2':
              this.userData.companyQuality='合作';
              break;
            case '3':
              this.userData.companyQuality='合资';
              break;
            case '4':
              this.userData.companyQuality='独资';
              break;
            case '5':
              this.userData.companyQuality='集体';
              break;
            case '6':
              this.userData.companyQuality='私营';
              break;
            case '7':
              this.userData.companyQuality='个体工商户';
              break;
          }
          switch (this.userData.companySort)
          {
            case '0':
              this.userData.companySort='有限责任公司';
              break;
            case '1':
              this.userData.companySort='国有独资公司';
              break;
            case '2':
              this.userData.companySort='股份有限公司';
              break;
          }
          if(this.$route.query.type===0){
            this.type='待授信'
          }else if(this.$route.query.type===1){
            this.type='已授信'
          }else{
            this.type='授信失败'
          }
          this.title=this.type+'—'+this.userData.busiType;
        },
        methods: {
          goback(){
            this.$router.go(-1)
          },
//          save(){
//            console.log(this.userData.type)
//          },
          getFile:function () {
            this.fileName=[];
            var file=document.getElementById("file").files[0];
            console.log(file);
            this.fileName.push(file.name);
          },
          getFile1:function () {
            this.fileName1=[];
            var file=document.getElementById("file1").files[0];
            console.log(file);
            this.fileName1.push(file.name);
          },
          permission(){
            let vm = this;
            let url='/clcp/appCreditApi/status';
            let params = {
              id:this.userData.id,
              creditStatus:1,
            };
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
              if(res.statusCode == 200){
                vm.$dialog.confirm({
                  title: '温馨提示',
                  mes: '审批成功！',
                  opts: () => {
                    vm.$router.push({path:'/companyCredit'})
                  }
                });
              }else {
                vm.$dialog.toast({
                  mes: '提交失败',
                  timeout: 1500
                });
              }
            })
          },
          userReject(){
            let vm = this;
            let url='/clcp/appCreditApi/status';
            let params = {
              id:this.userData.id,
              creditStatus:2,
            };
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
              if(res.statusCode == 200){
                vm.$dialog.confirm({
                  title: '温馨提示',
                  mes: '驳回成功！',
                  opts: () => {
                    vm.$router.push({path:'/companyCredit'})
                  }
                });
              }else {
                vm.$dialog.toast({
                  mes: '提交失败',
                  timeout: 1500
                });
              }
            })
          },
          save(){
            this.$dialog.confirm({
              title: '温馨提示',
              mes: '保存成功',
              opts: () => {
                this.$router.push({path:'/companyCredit'})
              }
            });
          }
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
  #app .addCreditInput{
    width: 100%;
    border: none;
    text-align: end;
    background-color: white;
    color:#666666;
    height: 60%;
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
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    overflow: scroll;
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

