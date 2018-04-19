<template>
  <div class="page_container">
		<div class="act_rules" @click="showRulesBox = true">
			规则
		</div>
		<div class="container_items">
			<!-- 内容显示区域 -->
			<div class="item_container">
				<div class="container_box">
					<div class="container_box-items" v-if="onlinePay">
						<div class="item item_onlinePay">
							您开通线上交易功能获得红包
							<p class="item_money text-center">
								100.00
							</p>
						</div>
						<div class="item item_getCashPacket">
							您已通过线上交易获得红包
							<p class="item_money text-center">
								10000.00
							</p>
						</div>
					</div>
					<div class="container_box-items noOnlinePay" v-else>
						<p class="text-center">您当前账户暂未开通麦滴管家</p>
						<p class="text-center red">线上支付功能，</p>
						<p class="text-center">开通后产生在线支付订单即可</p>
						<p class="text-center red">获得现金红包！</p>
					</div>
				</div>
			</div>
			<!-- 连接背景 -->
      <div v-if="onlinePay">
        <div class="item_connect"></div>
        <!-- 申请提现区域-->
        <div class="item_operate">
          <div class="tips_box">
            <p class="tips text-center">
              活动结束后才可申请提现，
            </p>
            <p class="tips text-center">
              提现金额将打款至开通线上交易时绑定的收款账户
            </p>
          </div>
          <div v-if="!isApplyed" class="btn_applyCash text-center" @click="applyCash">
            申请提现
          </div>
          <div v-else class="btn_applyCash text-center disabled">
            已申请
          </div>
        </div>
        <!-- 红包滚动区域 -->
        <div class="item_scrollBoard">
          <div class="scroll_container">
            <div class="scroll_title text-center">
              我的红包奖励
            </div>
            <div class="scroll-content">
              <ul>
                <li v-for="item in scrollList" :key="item.mobile" class="groupCell clearfix">
                  <span class="right red" style="font-weight: 700;">{{item.money}} 元</span>
                  <span class="left">{{item.mobile}}</span>
                </li>
                <div class="text-center deliver_content">
                  <divider class="deliver">到底了</divider>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center" v-else>
        <a class="btn_applyCash text-center onlinePayUrl" :href="onlinePayUrl">线上支付开通流程说明</a>
        <p class="service">客服协助热线：<a class="callTel" href="tel:400-882-7099">400-882-7099</a></p>
      </div>
		</div>
    <div class="dialog_rules">
      <x-dialog v-model="showRulesBox" :scroll="false"
        :hide-on-blur="true">
        <div class="rules_head text-center">
          活动规则
        </div>
        <div class="rules-box" @click="showRulesBox = false">
          <p class="rules_title">活动时间：</p>
          <p>2018年4月20日-2018年5月15日</p>
          <p class="rules_title">参与方式：</p>
          <p>运营商（房东）进入活动页完善登录信息，点击“立即领取”并开通在线交租支付功能后，即可参与本活动；</p>
          <p class="rules_title">奖励方式和规则：</p>
          <p>1、新开通奖励：活动期间，首次开通在线交租支付功能，并完成首次在线租房交易，每位运营商奖励可获得100元现金红包；</p>
          <p>2、新交易奖励：</p>
          <p>(1) 凡活动期间，北京、上海、广州、深圳、杭州五城运营商（房东）完成在线租房交易，每笔交易订单，月租金须大于等于1500元；其他城市运营商（房东）完成在线租房交易，每笔交易订单，月租金需大于等于1000元 ；</p>
          <p>(2) 满足以上条件，每间新签约的线上租房交易订单可获得50元现金红包，最高可获得10000元现金红包，每间新签约房间交易订单仅限享受一次奖励，活动期内签约又退房的订单不享受奖励；</p>
          <p>(3) 新交易奖励，仅限活动期间，非在线交易转在线签约并完成交易支付的订单享受</p>
          <p>3、如何提现：现金红包提现前，请确保已经绑定银行卡（企业用户请绑定对公账户），活动结束后，请运营商（房东）在活动领取页提交提现申请，现金奖励在7个工作日内一次性统一发放到开通在线交易绑定账号的银行卡；</p>
          <p>4、活动期间务必保证开通线上交易支付功能、交易房源、交易行为真实性，活动期间将进行审核，发现有作弊行为，一律取消获得的活动权益；</p>
          <p>5、本活动解释权归麦滴管家所有。</p>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import { Toast, XDialog, Divider } from 'vux'
import { getLandlordListApi, applyCashApi } from '@/api/landlord'

export default {
  name: 'landlord',
  components: {
    Toast,
    Divider,
    XDialog
  },
  data() {
    return {
      scrollList: [
        { mobile: 15158864841, money: 50 },
        { mobile: 15158864842, money: 50 },
        { mobile: 15158864843, money: 50 },
        { mobile: 15158864844, money: 50 }
      ],
      onlinePayUrl: 'http://t.cn/RmTQxYe',
      onlinePay: true,  // 开通线上支付
      showRulesBox: false,
      landlordOrgId: '',
      activityStatus: 1,
      isApplyed: false  // 申请提现
    }
  },
  mounted() {
    this.landlordOrgId = this.$route.params.landlordOrgId
    getLandlordListApi({
      landlordOrgId: this.landlordOrgId
    }).then((data) => {

    })
  },
  methods: {
    applyCash() {
      if (this.activityStatus !== 3) {
        this.$vux.toast.show({
          text: '请在活动结束后进行申请',
          type: 'cancel',
          width: '13em'
        })
        return false
      }
      applyCashApi({
        landlordOrgId: this.landlordOrgId
      }).then(() => {
        this.isApplyed = true
        this.$vux.toast.show({
          text: '提现申请提交成功',
          width: '10em'
        })
      })
    }
  }
}
</script>

<style>
.red {
	color: #f00;
}
.onlinePayUrl {
  margin: 60px 0;
  display: block;
}
.service {
  color: #fff;
  font-size: 30px;
  padding-bottom: 40px;
}
.callTel {
  font-size: 36px;
  text-decoration: underline;
  text-underline-position: unset;
}
.groupCell {
  line-height: 55px;
  font-size: 24px;
}
.deliver_content .deliver {
 padding: 0 100px;
}

.dialog_rules .weui-dialog {
 max-width: 700px;
 overflow: auto;
 width: 100%;
 border-radius: 20px;
 color: #333;
 font-size: 20px;
 text-align: left;
 padding: 40px;
 background: rgba(255, 255, 255, 0.85)
}
.rules-box {
  overflow: auto;
  max-height: 800px;
}
.dialog_rules .rules-box p {
 line-height: 44px;
}
.dialog_rules .rules_title {
  font-weight: 700;
}
.rules_head {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
