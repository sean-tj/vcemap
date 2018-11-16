//所有workshop数据 
function getAllWorkshops() {
    var workshopsAddress = new Array;
    workshopsAddress[0] = { name: '湖州服务站', address: '湖州市花鸟市场龙安路7-11号', X: 120.08212, Y: 30.865717, Mg: '张三', phone: '123456' };
    workshopsAddress[1] = { name: '车间', address: '浙江省湖州市德清县乾龙南路168号', X: 120.049831, Y: 30.567583, Mg: '张三', phone: '123456' };
    workshopsAddress[2] = { name: '嘉兴服务站', address: '嘉兴市经济开发区周安路中安市场16栋120号 ', X: 120.789132, Y: 30.784678, Mg: '张三', phone: '123456' };
    workshopsAddress[3] = { name: '杭州服务站', address: '杭州好运路2-6号5号楼', X: 120.130394, Y: 30.355783, Mg: '张三', phone: '123456' };
    workshopsAddress[4] = { name: '益阳办事处', address: '益阳市朝阳区荷花路姚家湾安置小区2栋1楼', X: 112.359524, Y: 28.574671, Mg: '张三', phone: '123456' };
    workshopsAddress[5] = { name: '株洲', address: '湖南省长沙市暮云镇南湖大道159号', X: 112.995724, Y: 28.030882, Mg: '张三', phone: '123456' };
    workshopsAddress[6] = { name: '娄底办事处', address: '娄底市娄涟高速公路潇湘职业学院旁', X: 111.990926, Y: 27.770002, Mg: '张三', phone: '123456' };
    workshopsAddress[7] = { name: '渝西服务站', address: '重庆市永川区昌州大道西段28号科创学院对面', X: 105.89389, Y: 29.371944, Mg: '张三', phone: '123456' };
    workshopsAddress[8] = { name: '泸州站', address: '泸州市江阳区二级路君安物流27号门市', X: 105.440777, Y: 28.913259, Mg: '张三', phone: '123456' };
    workshopsAddress[9] = { name: '泸州服务站', address: '泸州市江阳区蓝安路二段9号', X: 105.425332, Y: 28.844093, Mg: '张三', phone: '123456' };
    workshopsAddress[10] = { name: '上海服务站', address: '上海市浦东新区金京路2095号', X: 121.623637, Y: 31.272047, Mg: '张三', phone: '123456' };
    //workshopsAddress[0] = { name: '赤峰服务站', address: '内蒙古赤峰市红山物流园区物贸街中段铁龙公司' };
    //workshopsAddress[1] =  {name:'通辽服务站',address:'内蒙古通辽市金港物流园B3-3'}; 
    //workshopsAddress[2] =  {name:'霍林河服务站',address:'内蒙古霍林郭勒市豪林国际西商03号'};
    //workshopsAddress[3] =  {name:'锡林浩特服务站',address:'内蒙古锡林浩特市锡林大街东段中心血站西50米沃尔沃公司'};
    //workshopsAddress[4] =  {name:'海拉尔服务站',address:'内蒙古呼伦贝尔市海拉尔区建设镇光明村天地物流2号楼2号门市'}; 
    //workshopsAddress[5] =  {name:'乌兰浩特服务站',address:'内蒙古兴安盟科尔沁右翼前旗兴科家园3期12号楼四单元401室'};
    //workshopsAddress[6] =  {name:'白音华服务站',address:'内蒙古锡林郭勒盟西乌珠穆沁旗白音华镇亿源物流白音华机械城 VOLVO售后服务中心'};
    //workshopsAddress[7] =  {name:'芜湖站',address:'芜湖市高新技术产业开发区中山南路680号'};
    //workshopsAddress[8] =  {name:'蚌埠站',address:'蚌埠市国际汽车城三区七栋29-30号'};
    //workshopsAddress[9] =  {name:'巢湖站',address:'巢湖市亚父农贸市场C18-29'};
    //workshopsAddress[10] =  {name:'六安站',address:'六安市金安区金太阳国际汽车城A7-8'};
    //workshopsAddress[11] =  {name:'宿州站',address:'宿州市埇桥区东十里铺东1000米'};
    //workshopsAddress[12] =  {name:'铜陵站',address:'铜陵市狮子山区铜陵国际汽车城A区5栋11号'};
    //workshopsAddress[13] =  {name:'宣城站',address:'宣城市宣州区金坝街道望城岗恒利超市'};
    //workshopsAddress[14] =  {name:'阜阳站',address:'阜阳市京九办事处新安大道999号阜阳国际汽配城28#高办楼119室'};
    //workshopsAddress[15] =  {name:'安庆站',address:'安庆市宜秀区黄土坑东路36-2号'};
    //workshopsAddress[16] =  {name:'重庆项目服务站',address:'重庆市九龙坡区聚业路118号'};
    //workshopsAddress[17] =  {name:'渝万服务站',address:'重庆市万州区双河口龙腾大道198号C栋1号（双河口高速收费站旁）'};
    //workshopsAddress[18] =  {name:'渝南服务站',address:'重庆市南川区西城街道办事处长远居委9组52号 '};
    //workshopsAddress[19] =  {name:'渝西服务站',address:'重庆市永川区昌州大道西段28号科创学院对面'};
    //workshopsAddress[20] =  {name:'渝黔服务站',address:'重庆市黔江区正阳街道 谊隆时代广场'};
    //workshopsAddress[21] =  {name:'江津服务点',address:'重庆市九龙坡区聚业路118号'};
    //workshopsAddress[22] =  {name:'遵义服务站',address:'贵州省遵义市红花岗区忠庄镇药业园区工程机械市场沃尔沃挖掘机办事处'};
    //workshopsAddress[23] =  {name:'重庆车间服务站',address:'重庆市九龙坡区聚业路118号'};
    //workshopsAddress[24] =  {name:'新余服务站',address:'江西省新余市九鼎汽车大市场12栋116-118号'};
    //workshopsAddress[25] =  {name:'赣州服务站',address:'赣州市水东镇时间公园二期虔东大道88-10号 '};
    //workshopsAddress[26] =  {name:'宜春东服务站',address:'江西省南昌县小蓝工业园金沙大道春秋路77号'};
    //workshopsAddress[27] =  {name:'吉安服务站',address:'吉安市井冈山大道106号中心人民医院职工楼'};
    //workshopsAddress[28] =  {name:'赣西南服务站',address:'宜春市袁州区环城南路日出康城13栋1单元'};
    //workshopsAddress[29] =  {name:'济宁服务站',address:'济宁市任城区西外环105国道路西美恒汽配城B1-102'};
    //workshopsAddress[30] =  {name:'枣庄服务站',address:'枣庄市市中区青檀南路青云.锦绣花城B7-12'};
    //workshopsAddress[31] =  {name:'临沂服务站',address:'临沂市河东区东兴路工程机械市场57号'};
    //workshopsAddress[32] =  {name:'日照服务站',address:'日照市东港区山东路169号'};
    //workshopsAddress[32] =  {name:'青岛服务站',address:'青岛市城阳区赵红路3--12号沃尔沃建筑设备'};
    //workshopsAddress[34] =  {name:'济南服务站',address:'济南市槐荫区美里路1929号'};
    //workshopsAddress[35] =  {name:'烟台服务站',address:'烟台市芝罘区机场路朱家疃综合楼VOLVO'};
    //workshopsAddress[36] =  {name:'潍坊服务站',address:'潍坊市坊子老区潍洲路与恒安街交叉路口路西中国农机城六号'};
    //workshopsAddress[37] =  {name:'连云港服务站',address:'江苏省连云港市连云区连云港中山路243号'};
    //workshopsAddress[38] =  {name:'泰莱服务站',address:'泰安市泰山区圣源小区（凤凰路88号）1号楼1单元301室'};
    //workshopsAddress[39] =  {name:'泰莱服务站',address:'泰安市泰山区圣源小区（凤凰路88号）1号楼1单元301室'};
    //workshopsAddress[40] =  {name:'龙口港服务站',address:'烟台市龙口市环海中路1899号龙口港7号门'};
    //workshopsAddress[41] =  {name:'山东黄金服务站',address:'烟台市莱州市金城镇新城金矿'};
    //workshopsAddress[42] =  {name:'岚山港服务点',address:'日照市岚山区甜园小区'};
    //workshopsAddress[43] =  {name:'广西信发服务站',address:''};
    //workshopsAddress[44] =  {name:'广西信发服务站',address:'广西壮族自治区百色市，靖西市新圩财政所'};
    //workshopsAddress[45] =  {name:'日照港二公司服务站',address:'日照市东港区海滨五路日照港6号门'};
    //workshopsAddress[46] =  {name:'烟台港服务站',address:'烟台市芝罘区环海路89号保税港区'};
    //workshopsAddress[47] =  {name:'菏泽服务站',address:'菏泽市牡丹区富年国际汽配城28栋11号'};
    //workshopsAddress[48] =  {name:'威海服务组',address:'威海市青岛中路220-1号'};
    //workshopsAddress[49] =  {name:'滨洲服务站',address:'潍坊市坊子老区潍洲路与恒安街交叉路口路西中国农机城六号'};
    //workshopsAddress[50] =  {name:'淄博服务站',address:'淄博市高新区(张店区)颐和花园北侧沿街房B-27号'};
    //workshopsAddress[51] =  {name:'德州服务组',address:'德州市德城区东北城五金建材二区8栋10号'};
    //workshopsAddress[52] =  {name:'日照港三公司',address:'日照市东港区海滨五路日照港6号门'};
    //workshopsAddress[53] =  {name:'大修厂',address:'济南市槐荫区美里路1929号'};
    //workshopsAddress[54] =  {name:'路面',address:'济南市槐荫区美里路1929号'};
    //workshopsAddress[55] =  {name:'东营服务组',address:'东营市西城区油建一公司对面'};
    //workshopsAddress[56] =  {name:'焦作',address:'焦作市世纪路中华翰苑9号楼2单元'};
    //workshopsAddress[57] =  {name:'安阳',address:'安阳市文峰区黄河大道与东风路交叉口警苑小筑'};
    //workshopsAddress[58] =  {name:'郑州',address:'河南省荥阳市中原西路与京城路交叉口向北300米路西'};
    //workshopsAddress[59] =  {name:'洛阳',address:'伊洛路与望春门街交叉口'};
    //workshopsAddress[60] =  {name:'三门峡',address:'渑池县城关镇五里河沃尔沃办事处'};
    //workshopsAddress[61] =  {name:'南阳',address:'南阳市卧龙区北京路与信臣路交叉口向西四公里'};
    //workshopsAddress[62] =  {name:'信阳',address:'信阳市平桥区312国道与京港澳高速口向东3公里路南'};
    //workshopsAddress[63] =  {name:'平顶山',address:'宝丰县东环路博城和谐园'};
    //workshopsAddress[64] =  {name:'总部',address:'河南省荥阳市中原西路与京城路交叉口向北300米路西'};
    //workshopsAddress[65] =  {name:'包头服务站',address:'包头市九原区三道沙河110国道662公里处沃尔沃服务中心'};
    //workshopsAddress[66] =  {name:'乌海服务站',address:'乌海市还比弯曲林荫大道东北街7号凯洋建材城'};
    //workshopsAddress[67] =  {name:'薛家湾服务站',address:'鄂尔多斯市准格尔旗薛家湾金岸国际小区'};
    //workshopsAddress[68] =  {name:'上湾服务站',address:'鄂尔多斯市伊金霍洛旗乌兰木伦镇上湾村天隆公寓'};
    //workshopsAddress[69] =  {name:'弓家塔服务站',address:'鄂尔多斯市准格尔旗纳日松镇川掌大剧院内'};
    //workshopsAddress[70] =  {name:'呼市服务站',address:'呼市金川开发区金二道内蒙辽鞍院内'};
    //workshopsAddress[71] =  {name:'车间',address:'鄂尔多斯市东胜区铜川镇孙家湾'};
    //workshopsAddress[72] =  {name:'东胜服务站',address:'鄂尔多斯市东胜区铜川镇苏勒德大街44号附2号'};
    //workshopsAddress[73] =  {name:'阿拉善左旗服务站',address:'阿拉善盟阿左旗金三角物流城'};
    //workshopsAddress[74] =  {name:'阿拉善右旗服务站',address:'阿拉善右旗 巴丹吉林镇'};
    //workshopsAddress[75] =  {name:'十堰服务站',address:' 十堰市白浪东路11号机械市场14.15.16号门面'};
    //workshopsAddress[76] =  {name:'襄阳服务站',address:'湖北省襄阳市襄州区卧龙路襄阳新城'};
    //workshopsAddress[77] =  {name:'黄石服务站',address:'黄石市黄石港区天行御景庄园二期门面VOLVO'};
    //workshopsAddress[78] =  {name:'宜昌服务站',address:'湖北省宜昌市猇亭区先锋路69号黑马物流园办公室15-20号'};
    //workshopsAddress[79] =  {name:'恩施服务站',address:'恩施市红庙盛芳花园B栋129室'};
    //workshopsAddress[80] =  {name:'荆州服务站',address:'荆州市沙市区关沮镇杨泗村三号路九组杨泗网吧旁(湖北山推)'};
    //workshopsAddress[81] =  {name:'武汉服务站',address:'武汉市盘龙城经济开发宋岗一路特一号'};
    //workshopsAddress[82] =  {name:'武汉服务站',address:'武汉市盘龙城经济开发宋岗一路特一号'};
    //workshopsAddress[83] =  {name:'咸宁服务站',address:'"咸宁市咸安区咸宝路洁丽雅小区6栋二单元101室'};
    //workshopsAddress[84] =  {name:'荆门服务站',address:'"荆门市东宝区牌楼镇鄂中循环经济城B区108-110号'};
    //workshopsAddress[85] =  {name:'随州服务站',address:'"随州市曾都区南郊柳树淌社区6组商贸街109号'};
    //workshopsAddress[86] =  {name:'竹山服务站',address:'湖北省十堰市竹溪县京溪家园小区1栋4单元204室'};
    //workshopsAddress[87] =  {name:'大客户服务',address:'湖北省武汉市盘龙城经济开发区宋岗一路特一号'};
    //workshopsAddress[88] =  {name:'黄冈服务站',address:'黄石市花湖天行御景庄园二期门面VOLVO'};
    //workshopsAddress[89] =  {name:'江铜',address:'江西省南昌市国家高新技术开发区昌东大道7666号'};
    //workshopsAddress[90] =  {name:'大修厂',address:'湖北省武汉市黄陂区盘龙城经济开发区宋岗一路特一号'};
    //workshopsAddress[91] =  {name:'孝感服务站',address:'孝感市孝武大道红人服饰往毛陈方向300米'};
    //workshopsAddress[92] =  {name:'长沙办事处',address:'长沙市天心区暮云镇暮云工业园南湖路159号'};
    //workshopsAddress[93] =  {name:'衡阳办事处',address:'衡阳市蒸湘区联合街道杨柳村三组'};
    //workshopsAddress[94] =  {name:'怀化办事处',address:'怀化市湖天大道岩落坡6栋VOLOV办事处'};
    //workshopsAddress[95] =  {name:'常德办事处',address:'常德市灌溪镇汤家坪村7组'};
    //workshopsAddress[96] =  {name:'娄底办事处',address:'娄底市娄涟高速公路潇湘职业学院旁'};
    //workshopsAddress[97] =  {name:'永州办事处',address:'永州市零陵区永州大道永州职业技术学院'};
    //workshopsAddress[98] =  {name:'郴州办事处',address:'郴州市北湖区天龙汽车站附近'};
    //workshopsAddress[99] =  {name:'岳阳办事处',address:'岳阳市奇家岭街道办事处蔡家社区方叶组岳光路'};
    //workshopsAddress[100] =  {name:'邵阳办事处',address:'邵阳市隆回县二中对面'};
    //workshopsAddress[101] ={name:'吉首办事处',address:'吉首市社塘坡乡西门口'};
    //workshopsAddress[102] ={name:'益阳办事处',address:'益阳市朝阳区荷花路姚家湾安置小区2栋1楼'};
    //workshopsAddress[103] ={name:'湘潭办事处',address:'湖南省长沙市 暮云镇 南湖大道159号'};
    //workshopsAddress[104] ={name:'张家界办事处',address:'张家界市火车站旁黄金塔小区 '};
    //workshopsAddress[105] ={name:'株洲',address:'湖南省长沙市 暮云镇 南湖大道159号'};
    //workshopsAddress[106] ={name:'广州总部',address:'广东省广州市天河区柯木塱广汕二路181号中南大楼'};
    //workshopsAddress[107] ={name:'海南海口服务站',address:'"海南省海口市琼山区新大洲大道509号 (省农业广场对面）"'};
    //workshopsAddress[108] ={name:'海南三亚服务站',address:'三亚市吉阳区抱坡路亚盛建材加工厂第三幢'};
    //workshopsAddress[109] ={name:'广东云浮服务点',address:'云浮市云城区六都镇中材水泥厂正对面'};
    //workshopsAddress[110] ={name:'广东惠州服务站',address:'广东省惠州市小金口金罗路33号'};
    //workshopsAddress[111] ={name:'广东清远韶关服务站',address:'清远市源潭镇VOLVO广州中南公司( 源潭医院往佛冈方向前三十米即到)'};
    //workshopsAddress[112] ={name:'广东梅州服务点',address:'广东省梅州市梅江区爱心路市教育居宿舍A栋503'};
    //workshopsAddress[113] ={name:'福建龙岩华润',address:'福建省龙岩市新罗区龙岩大道三华乐宜居2号1408'};
    //workshopsAddress[114] ={name:'广东茂名服务站',address:'广东省茂名市电白区羊角镇南香塘村'};
    //workshopsAddress[115] ={name:'广东揭阳服务站',address:'广东省揭阳市揭东区新亨镇伟业渔港旁VOLVO中南华星揭阳办事处'};
    //workshopsAddress[116] ={name:'海南儋州服务站',address:'儋州那大镇恒大二期8栋102室'};
    //workshopsAddress[117] ={name:'南区南宁服务站',address:'南宁市江南区同乐大道50号电子信息标准厂房8号厂房501号'};
    //workshopsAddress[118] ={name:'南区钦州服务站',address:'钦州市钦南区金海湾东大道 VOLVO中南华星'};
    //workshopsAddress[119] ={name:'北区河池服务点',address:'河池市城西工程机械市场B区9号'};
    //workshopsAddress[120] ={name:'北区桂林服务站',address:'桂林市灵川县禾家铺中国石化加油站北面大楼1楼办公室 '};
    //workshopsAddress[121] ={name:'北区贺州服务站',address:'贺州市八步区汽车总站附近（VOLVO公司）'};
    //workshopsAddress[122] ={name:'北区柳州服务站',address:'广西柳州市新兴工业园柳州机动车交易城F栋4号'};
    //workshopsAddress[123] ={name:'北区百色服务站',address:'百色市右江区城东大道大同粮库大门旁铺面 中南华星VOLVO'};
    //workshopsAddress[124] ={name:'南区梧州服务点',address:'广西梧州市龙圩区广信路173号'};
    //workshopsAddress[125] ={name:'南区防城服务站',address:'防城港市港口区港务局东大门5栋5-111、5-112号 '};
    //workshopsAddress[126] ={name:'南区玉林服务站',address:'玉林市名山街道太阳村南门二环路边沃尔沃中南华星'};
    //workshopsAddress[127] ={name:'南宁大修厂',address:'南宁市银海大道870号'};
    //workshopsAddress[128] ={name:'项目那坡服务点',address:'那坡县龙合乡百益矿业 '};
    //workshopsAddress[129] ={name:'项目平果服务点',address:'广西百色平果县平果铝业'};
    //workshopsAddress[130] ={name:'成都服务站',address:'四川省成都市郫县现代工业港南区西源大道2399号'};
    //workshopsAddress[131] ={name:'绵阳服务站',address:'绵阳高新区绵兴东路116号6幢33号1-3层'};
    //workshopsAddress[132] ={name:'南充服务站',address:'四川省南充市顺庆区马市铺路453号'};
    //workshopsAddress[133] ={name:'广元服务站',address:'广元市利州区雪峰821运业大楼正对面，沃尔沃挖机广元办事处'};
    //workshopsAddress[134] ={name:'巴中服务站',address:'巴中市巴州区兴文五金机电市场a1'};
    //workshopsAddress[135] ={name:'广安服务站',address:'四川省广安市广安区长乐街181号'};
    //workshopsAddress[136] ={name:'遂宁服务站',address:'四川省遂宁市船山区物流港西部机械城5-63号'};
    //workshopsAddress[137] ={name:'大修厂服务站',address:'成都郫县现代工业港南区西源大道2399号'};
    //workshopsAddress[138] ={name:'泸州服务站',address:'泸州市江阳区蓝安路二段9号 '};
    //workshopsAddress[139] ={name:'宜宾服务站',address:'宜宾市翠屏区天池圣马聚福苑小区4-1附23号'};
    //workshopsAddress[140] ={name:'雅安服务站',address:'雅安多营镇茶马大道266号'};
    //workshopsAddress[141] ={name:'乐山服务站',address:'乐山市市中区棉竹镇高坝村2组牡丹路100号'};
    //workshopsAddress[142] ={name:'西昌服务站',address:'西昌重型机械物流园区'};
    //workshopsAddress[143] ={name:'达州服务站',address:'达州区兴盛东街333号，一新国际社区D6栋，爱洗优家D6店收'};
    //workshopsAddress[144] ={name:'石家庄',address:'石家庄市和平东路619号美新建材市场西院2-5号'};
    //workshopsAddress[145] ={name:'大修厂',address:'保定市南市区河北农大二分厂阳光庄园小区门脸1号'};
    //workshopsAddress[146] ={name:'邯郸',address:'邢台市豫让桥路699号'};
    //workshopsAddress[147] ={name:'唐山大客户',address:'邯郸市北环路与107国道交叉口东行500米路北邯郸柴瑞院内'};
    //workshopsAddress[148] ={name:'唐山',address:'唐山市开平区八里庄商业楼'};
    //workshopsAddress[149] ={name:'承德',address:'承德市开发东区雹神庙小区5-1底商'};
    //workshopsAddress[150] ={name:'六盘水服务站',address:'贵州省六盘水市钟山区矿山机电市场C栋125号'};
    //workshopsAddress[151] ={name:'贵阳市项目服务点',address:'贵州省贵阳市野鸭乡新寨村84号阳关收费站旧址'};
    //workshopsAddress[152] ={name:'都匀服务站',address:'贵州省都匀市沙坝北出口沃尔沃'};
    //workshopsAddress[153] ={name:'贵阳北服务站',address:'贵州省贵阳市野鸭乡新寨村84号阳关收费站旧址'};
    //workshopsAddress[154] ={name:'安顺服务站',address:'安顺市西秀区两六路董家庄安置小区路口volvo'};
    //workshopsAddress[155] ={name:'凯里服务点',address:'贵州省都匀市沙坝北出口沃尔沃'};
    //workshopsAddress[156] ={name:'铜仁服务站',address:'贵州省铜仁市思南县交警队下行50米沃尔沃'};
    //workshopsAddress[157] ={name:'毕节服务站',address:'贵州省毕节市头步桥创美批发市场斜对面沃尔沃办事处'};
    //workshopsAddress[158] ={name:'贵阳南服务站',address:'贵州省贵阳市野鸭乡新寨村84号阳关收费站旧址'};
    //workshopsAddress[159] ={name:'太原',address:'太原市小店区101号'};
    //workshopsAddress[160] ={name:'大同',address:'平城区绿洲西城一区'};
    //workshopsAddress[161] ={name:'浑源',address:'浑源县世纪龙鼎小区南区'};
    //workshopsAddress[162] ={name:'朔州',address:'山西省朔州市开发区锦秀苑小区'};
    //workshopsAddress[163] ={name:'宁武',address:'山西省忻州市宁武县万佛洞凤凰西街治洪小区'};
    //workshopsAddress[164] ={name:'保德',address:'山西省忻州市保德县统计小区'};
    //workshopsAddress[165] ={name:'孝义',address:'山西省孝义市振兴西街通运汽车家园'};
    //workshopsAddress[166] ={name:'离石',address:'山西省吕梁市离石区兴南路214号，卧龙山庄'};
    //workshopsAddress[167] ={name:'娄烦',address:'山西省太原市娄烦县北大街公安巷居委会隔壁'};
    //workshopsAddress[168] ={name:'阳泉',address:'山西省阳泉市李荫路黄沙岩段307复线入口处沃尔沃公司'};
    //workshopsAddress[169] ={name:'昔阳',address:'山西省晋中市昔阳县乐平镇南关回迁楼'};
    //workshopsAddress[170] ={name:'介休',address:'山西省晋中市介休市宋古小区'};
    //workshopsAddress[171] ={name:'段纯',address:'山西省吕梁市交口县双池镇讲理村10号楼'};
    //workshopsAddress[172] ={name:'临汾',address:'山西省临汾市尧都区屯里镇高河桥利亚江机械城，Volvo临汾办事处'};
    //workshopsAddress[173] ={name:'运城',address:'山西省运城市盐湖区北相镇王桐村口盐湖工程机械城'};
    //workshopsAddress[174] ={name:'长治',address:'山西省长治市郊区长兴北路裕警苑'};
    //workshopsAddress[175] ={name:'晋城',address:'山西省晋城市太行路南段2316号，怡泽园小区'};
    //workshopsAddress[176] ={name:'原平',address:'山西省忻州市原平市轩岗镇石滩村如意小区'};
    //workshopsAddress[177] ={name:'路面',address:'山西省太原市清徐县307国道北50米'};
    //workshopsAddress[178] ={name:'河津',address:'山西省河津市新耿街城南木子超市四楼'};
    //workshopsAddress[179] ={name:'和顺',address:'山西省晋中市和顺县佳和苑小区2号楼2单元'};
    //workshopsAddress[180] ={name:'大修厂',address:'山西省清徐县307国道山西沃源建筑设备'};
    //workshopsAddress[181] ={name:'电销',address:'山西省太原市清徐县307国道北50米'};
    //workshopsAddress[182] ={name:'五台',address:'山西省忻州市五台县古城小二楼'};
    //workshopsAddress[183] ={name:'思茅服务站',address:'普洱市思茅区南屏镇凤凰社区52幢'};
    //workshopsAddress[184] ={name:'大理服务站',address:'大理经济开发区下关大凤路南侧云瑞酒店副楼一楼'};
    //workshopsAddress[185] ={name:'曲靖服务站',address:'云南省曲靖市麒麟区文华街道丰登二组地基号252号'};
    //workshopsAddress[186] ={name:'腾冲服务站',address:'保山市腾冲市腾越镇上绮罗社区邮电小区321号'};
    //workshopsAddress[187] ={name:'丽江服务站',address:'丽江市玉龙新县城青龙南路和庆云路交叉口（万隆家园对面）'};
    //workshopsAddress[188] ={name:'昆明东服务点',address:'安宁市太平镇时代贸港工程机械城B3、B4幢'};
    //workshopsAddress[189] ={name:'临沧服务站',address:'临沧市环城路喜鹊窝村（鑫佰利超市旁）'};
    //workshopsAddress[190] ={name:'昭通服务站',address:'昭通市昭阳区佳园路51附7号'};
    //workshopsAddress[191] ={name:'景洪服务站',address:'景洪市江北澜沧江路8号水墨丹青9-4S'};
    //workshopsAddress[192] ={name:'昆明西服务点',address:''};
    //workshopsAddress[193] ={name:'保山服务站',address:'保山市隆阳区云瑞村320国道边'};
    //workshopsAddress[194] ={name:'海外设备',address:''};
    //workshopsAddress[195] ={name:'蒙自服务站',address:'云南省个旧市大屯镇红河大道红技驾校旁'};
    //workshopsAddress[196] ={name:'兴义服务站',address:'黔西南州顶效开发区复烤厂4号门旁'};
    //workshopsAddress[197] ={name:'沈阳分公司',address:'沈阳经济技术开发区沈辽路106号'};
    //workshopsAddress[198] ={name:'大连分公司',address:'大连市华北路285N-3'};
    //workshopsAddress[199] ={name:'抚顺分公司',address:'抚顺市顺城区前甸镇唯美品格小区3号楼4门市'};
    //workshopsAddress[200] ={name:'丹东分公司',address:'丹东市振安区东平大街7号楼7-1'};
    //workshopsAddress[201] ={name:'本溪分公司',address:'本溪市明山区樱花街30-1-8 明山交警执法站旁边'};
    //workshopsAddress[202] ={name:'铁岭分公司',address:'铁岭市银州区岭东街山境欣园小区11号楼三门市'};
    //workshopsAddress[203] ={name:'阜新分公司',address:'阜新市海州区振兴路30-10'};
    //workshopsAddress[204] ={name:'鞍山分公司',address:'鞍山市千山区解放西路850号（阪芙小镇）'};
    //workshopsAddress[205] ={name:'锦州分公司',address:'锦州市太和区锦娘路国际汽配城3-3-7号'};
    //workshopsAddress[206] ={name:'朝阳分公司',address:'朝阳市龙城西大营子高速路口西100米路南'};
    //workshopsAddress[207] ={name:'营口分公司',address:'大石桥市 营大路 佳美馨居1号楼105门市'};
    //workshopsAddress[208] ={name:'葫芦岛分公司',address:'锦州市太和区锦娘路国际汽配城3-3-7号'};
    //workshopsAddress[209] ={name:'辽阳分公司',address:'辽宁省辽阳县辽鞍路89-1号'};
    //workshopsAddress[210] ={name:'沈阳车间',address:'沈阳经济技术开发区沈辽路106号'};
    //workshopsAddress[211] ={name:'辽阳车间',address:'辽宁省辽阳县辽鞍路89-1号'};
    //workshopsAddress[212] ={name:'西安南服务站',address:'西安市未央区西宝疏导路6号 西安通冠工程机械有限公司'};
    //workshopsAddress[213] ={name:'汉中服务站',address:'汉中市汉台区鑫源新区千户村隔壁沃尔沃'};
    //workshopsAddress[214] ={name:'安康服务站',address:'安康市汉滨区江北后张岭269号沃尔沃公司'};
    //workshopsAddress[215] ={name:'安康服务站',address:'安康市汉滨区江北后张岭269号沃尔沃公司'};
    //workshopsAddress[216] ={name:'西安市未央区大修车间',address:'西安市未央区西宝疏导路6号 西安通冠工程机械有限公司'};
    //workshopsAddress[217] ={name:'大柳塔服务站',address:'榆林市神木县大柳塔镇前柳塔（大柳塔交警队附近）'};
    //workshopsAddress[218] ={name:'延安服务站',address:'延安市宝塔区南二十里铺葵花机械市场'};
    //workshopsAddress[219] ={name:'宝鸡服务站',address:'宝鸡市陈仓区陈仓大道底店路口'};
    //workshopsAddress[220] ={name:'渭南服务站',address:'渭南市临渭区渭南师范学院南门一楼沃尔沃'};
    //workshopsAddress[221] ={name:'商洛服务站',address:'商洛市商州区杨峪河镇赵湾村福满门铝材'};
    //workshopsAddress[222] ={name:'镇安服务站',address:'商洛市镇安县（顺丰隔壁）渔洞峡桥头往南50米'};
    //workshopsAddress[223] ={name:'西安北服务站',address:'西安市未央区西宝疏导路6号 西安通冠工程机械有限公司'};
    //workshopsAddress[224] ={name:'长春服务站',address:'吉林省长春市经济技术开发区昆山路2777号'};
    //workshopsAddress[225] ={name:'路面-宁镇',address:'南京市六合区葛塘街道赢鑫路2号'};
    //workshopsAddress[226] ={name:'路面-苏锡常',address:'苏州市东吴南路6号'};
    //workshopsAddress[227] ={name:'路面-安徽分公司',address:'合肥市包河区当涂路4326号都市田园C3幢102'};
    //workshopsAddress[228] ={name:'齐齐哈尔办事处',address:'齐齐哈尔市龙沙区谊联名居小区10号楼2单元101室'};
    //workshopsAddress[229] ={name:'哈尔滨办事处',address:'哈尔滨市香坊区哈平路集中区温州路3号'};
    //workshopsAddress[230] ={name:'佳木斯办事处',address:'佳木斯市前进区山水家园D2栋1单元902室'};
    //workshopsAddress[231] ={name:'河南路面服务站',address:'河南省荥阳市中原西路与京城路交叉口向北100米路西 '};
    //workshopsAddress[232] ={name:'陕西路面服务站',address:'西安市三桥西宝疏导路中段6号'};
    //workshopsAddress[233] ={name:'兰州l路面服务站',address:'兰州市西固区南滨河路闽兴建材市场A区1号'};
    //workshopsAddress[234] ={name:'福建省三明服务站',address:'三明市三元区荆东村荆东路三明学院对面柳工'};
    //workshopsAddress[235] ={name:'福建省福州服务站',address:'福州仓山区浦上大道百花洲路运泰智慧产业园2座9层 '};
    //workshopsAddress[236] ={name:'福建省建阳服务点',address:'建瓯市东峰镇井歧村中山街39号 '};
    //workshopsAddress[237] ={name:'福建省龙岩服务站',address:'龙岩新罗区龙门镇山背（环达机械）'};
    //workshopsAddress[238] ={name:'福建省泉州服务站',address:'泉州市安溪县城厢镇仙苑村二环路安德物流中国石油边591幢（国昌汽车服务中心）591幢303室'};
    //workshopsAddress[239] ={name:'厦门装载机点',address:'甘肃省白银市景泰县705路国土局家属院1单元102室'};
    //workshopsAddress[240] ={name:'南京服务站',address:'南京市六合区葛塘街道赢鑫路2号'};
    //workshopsAddress[241] ={name:'常州服务站',address:'常州市武进区湖塘高力汽博城5-107、108号'};
    //workshopsAddress[242] ={name:'苏州分公司',address:'苏州吴中区东吴南路6号'};
    //workshopsAddress[243] ={name:'镇江分公司',address:'镇江市润洲区国际工业品城G区107-108号'};
    //workshopsAddress[244] ={name:'上海服务站',address:'上海市浦东新区金京路2095号'};
    //workshopsAddress[245] ={name:'杭州服务站',address:'杭州好运路2-6号5号楼'};
    //workshopsAddress[246] ={name:'嘉兴服务站',address:'嘉兴市经济开发区周安路中安市场16栋120号 '};
    //workshopsAddress[247] ={name:'湖州服务站',address:'湖州市花鸟市场龙安路7-11号'};
    //workshopsAddress[248] ={name:'衢州服务站',address:'衢州市双港西路336-338号'};
    //workshopsAddress[249] ={name:'金华服务站',address:'金华市金衢路兴滨街1号'};
    //workshopsAddress[250] ={name:'温州服务站',address:'温州市瓯海南白象西象路30-8号（白象村委会对面）'};
    //workshopsAddress[251] ={name:'宁波服务站',address:'宁波市镇海区蛟川街道东生路219号北大荒园区'};
    //workshopsAddress[252] ={name:'车间',address:'浙江省湖州市德清县乾龙南路168号'};
    //workshopsAddress[253] ={name:'舟山服务站',address:'舟山市定海区兴舟大道金鹰大酒店对面中集物流店面房'};
    //workshopsAddress[254] ={name:'天水服务站',address:'甘肃省天水市麦积区曹家埂建工市场'};
    //workshopsAddress[255] ={name:'陇南服务站',address:'甘肃省陇南市武都区殿沟村沃尔沃办事处'};
    //workshopsAddress[256] ={name:'临夏服务站',address:'甘肃省临夏市迎宾大道百盛超市隔壁VOLVO临夏办事处'};
    //workshopsAddress[257] ={name:'兰州服务站',address:'甘肃省兰州市西固区南滨河路二支路1号'};
    //workshopsAddress[258] ={name:'陇西服务站',address:'甘肃省定西市陇西县文峰镇鸿运公司对面陇西沃尔沃办事处'};
    //workshopsAddress[259] ={name:'车间',address:'甘肃省兰州市西固区南滨河路二支路1号'};
    //workshopsAddress[260] ={name:'平凉服务站',address:'甘肃省平凉市崆峒区三角城武警医院向东150米，沃尔沃平凉办事处'};
    //workshopsAddress[261] ={name:'成都总部大修厂',address:'成都市龙泉驿区驿都大道341号'};
    //workshopsAddress[262] ={name:'西昌站',address:'西昌市航天大道西段67号'};
    //workshopsAddress[263] ={name:'攀枝花站',address:'攀枝花市西区清香坪天骏汽车交易市场'};
    //workshopsAddress[264] ={name:'泸州站',address:'泸州市江阳区二级路君安物流27号门市 '};
    //workshopsAddress[265] ={name:'乐山站',address:'乐山市市中区乐夹路5号'};
    //workshopsAddress[266] ={name:'资阳站',address:'资阳市娇子大道银杏苑小区营业房门市 '};
    //workshopsAddress[267] ={name:'宜宾站',address:'宜宾市新村天池展场'};
    //workshopsAddress[268] ={name:'雅安站',address:'雅安市多营镇金仓东路一号（交通局对面）'};
    //workshopsAddress[269] ={name:'自贡站',address:'自贡市自流分进井区舒坪镇金鱼村11队（出收费站往荣县方向305省道95公里处）'};
    //workshopsAddress[270] ={name:'海北站',address:'西宁市城北区柴达木路517号'};
    //workshopsAddress[271] ={name:'海西站',address:'青海省海西州大柴旦行委团结路11号'};
    //workshopsAddress[272] ={name:'西宁站',address:'青海省西宁市柴达木路517号'};
    //workshopsAddress[273] ={name:'松江服务站',address:'九新公路3158号'};
    //workshopsAddress[274] ={name:'大丰服务站',address:'大丰港港口332省道'};
    //workshopsAddress[275] ={name:'湛江服务站',address:'湛江市麻章区经一路宝钢湛江钢铁厂'};
    //workshopsAddress[276] ={name:'BJCD北京总部',address:'北京市朝阳区朝阳门外大街乙6号朝外SOHOA座1010室'};
    //workshopsAddress[277] ={name:'云南服务站',address:'昆明市晋宁区昆阳镇回龙村光学厂'};
    //workshopsAddress[278] ={name:'四川服务站',address:'四川省凉山彝族自治州西昌市新城锦绣小区5幢1单元'};
    //workshopsAddress[279] ={name:'乌恰服务站',address:'新疆乌恰县双拥路25号汇祥永金'};
    //workshopsAddress[280] ={name:'海外服务站',address:'东帝汶科瓦利马县苏艾市祖玛莱区'};
    //workshopsAddress[281] ={name:'大修车间',address:'甘肃省兰州市安宁区酒钢宏顺物流园；宁夏回族自治区银川市贺兰县德胜工业园区新胜西路6号'};
    //workshopsAddress[282] ={name:'敦煌服务站',address:'甘肃省敦煌市魏家桥小康新村'};
    //workshopsAddress[283] ={name:'嘉酒服务站',address:'甘肃省嘉峪关市兰新东路3016号'};
    //workshopsAddress[284] ={name:'张掖服务站',address:'张掖市甘州区张火公路水堪院'};
    //workshopsAddress[285] ={name:'武威服务站',address:'甘肃省武威市凉州区西关南路啤酒厂家属院8栋7单元201'};
    //workshopsAddress[286] ={name:'白银服务站',address:'甘肃省白银市银宇通钢材市场第6、7号铺面'};
    //workshopsAddress[287] ={name:'银川服务站',address:'宁夏回族自治区银川市贺兰县德胜工业园区新胜西路6号'};
    //workshopsAddress[288] ={name:'中卫服务站',address:'宁夏中卫市迎宾北大道21号'};
    //workshopsAddress[289] ={name:'固原服务站',address:'宁夏回族自治区固原市原州区农资城3-2'};
    //workshopsAddress[290] ={name:'抚州服务站',address:'江西省抚州市临川区赣东大道1288号'};
    //workshopsAddress[291] ={name:'九江服务站',address:'江西省九江市浔阳区长虹北路9号世豪名置6号楼106商铺'};
    //workshopsAddress[292] ={name:'景德镇服务站',address:'江西景德镇珠山区石岭村加油站向前200米VOLVO办事处'};
    //workshopsAddress[293] ={name:'承德服务站',address:'河北省承德市双滦区西地双赢汽车城一期中段西展厅'};
    //workshopsAddress[294] ={name:'唐山服务站',address:'河北省唐山市开来区八里庄商业楼370'};
    //workshopsAddress[295] ={name:'石家庄服务站',address:'河北省石家庄市新华区石清路114号'};
    //workshopsAddress[296] ={name:'张家口服务站',address:'河北省张家口市宣化区沙岭子镇屈家庄村村口'};
    //workshopsAddress[297] ={name:'邯郸服务站',address:'河北省邯郸市武安市东山铁厂北门西50米路南院内'};
    //workshopsAddress[298] ={name:'雄安新区服务站',address:'河北省保定市雄县雄州镇韩西楼村'};
    //workshopsAddress[299] ={name:'邢台服务站',address:'河北省邢台市桥东区豫让桥路688号'};
    //workshopsAddress[300] ={name:'龙海',address:'福建省漳州市龙海市榜山镇梧浦村18号'};
    //workshopsAddress[301] ={name:'龙岩服务站',address:'福建省龙岩市新罗区龙门镇建材交易城A3-6'};
    //workshopsAddress[302] ={name:'三明服务站',address:'福建省南平市建阳区白茶铺'};
    //workshopsAddress[303] ={name:'徐州站',address:'徐州市鼓楼区琵琶街道金驹物流园钢贸交易楼4楼B4005'};
    //workshopsAddress[304] ={name:'盐城站',address:'盐城市亭湖区伍佑街道新亚驾校对面'};
    //workshopsAddress[305] ={name:'扬州站',address:'扬州市仪征市新城镇新北花苑'};
    //workshopsAddress[306] ={name:'连云港站',address:'连云港市海州区新浦开发区204国道旁'};
    //workshopsAddress[307] ={name:'泰州站',address:'泰州市姜堰区华东五金城对面'};
    //workshopsAddress[308] ={name:'包头',address:'包头市青山区装备制造产业园区新规划区'};
    //workshopsAddress[309] ={name:'拉萨',address:'拉萨市堆龙德庆区'};
    //workshopsAddress[310] ={name:'林芝',address:'林芝市'};
    //workshopsAddress[311] ={name:'日喀则',address:'日喀则'};
    return workshopsAddress;
}

//url参数解析函数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//添加初始化坐标点
function addIniPointMark(iniPointX, iniPointY, initname) {
    var centerpoint = new BMap.Point(iniPointX, iniPointY);
    var iniIcon = new BMap.Icon("images/marker32.png", new BMap.Size(32, 32));
    var marker = new BMap.Marker(centerpoint, { icon: iniIcon });
    marker.name = initname;
    marker.addEventListener("click", function () {
        var opts = {
            width: 310,     // 信息窗口宽度    
            height: 180,     // 信息窗口高度    
            title: ""  // 信息窗口标题   
        }       
        var infoWindow = new BMap.InfoWindow("<span style='font-size:15px;color:black;background-color:#FFFFFF'>" + marker.name + "</span>", opts);  // 创建信息窗口对象    
        map.openInfoWindow(infoWindow, point);      // 打开信息窗口   
    });
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画			           			
}

//添加workshop坐标点
function addWorkShopMarker(point, workshopName) {
    var myIcon = new BMap.Icon("images/workshop48.png", new BMap.Size(48, 48));
    var marker = new BMap.Marker(point, { icon: myIcon });
    marker.name = workshopName;
    map.addOverlay(marker);
    marker.addEventListener("click", function () {
        var opts = {
            width: 310,     // 信息窗口宽度    
            height: 160,     // 信息窗口高度    
            title: ""  // 信息窗口标题   
        }
        var infoWindow = new BMap.InfoWindow("<span style='font-size:15px;color:black;background-color:#FFFFFF'>" + marker.name + "</span>", opts);  // 创建信息窗口对象    
        map.openInfoWindow(infoWindow, point);      // 打开信息窗口   
    });
}

function Rad(d) {
    return d * Math.PI / 180.0; //经纬度转换成三角函数中度分表形式。
}
//计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
function GetDistance(lat1, lng1, lat2, lng2) {
    var radLat1 = Rad(lat1);
    var radLat2 = Rad(lat2);
    var a = radLat1 - radLat2;
    var b = Rad(lng1) - Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // 地球半径，千米;
    s = Math.round(s * 10000) / 10000; //输出为公里
    s = Math.round(s * 1000) / 1; //单位修改为米,取整
    //s=s.toFixed(4);
    return s;
}

//画范围泛圆形
//centre:椭圆中心点,X:横向经度,Y:纵向纬度
function add_oval(centre, x, y) {
    var assemble = new Array();
    var angle;
    var dot;
    var tangent = x / y;
    for (i = 0; i < 36; i++) {
        angle = (2 * Math.PI / 36) * i;
        dot = new BMap.Point(centre.lng + Math.sin(angle) * y * tangent, centre.lat + Math.cos(angle) * y);
        assemble.push(dot);
    }
    return assemble;
}



