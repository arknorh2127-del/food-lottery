
(function(){
const root=document.getElementById('nation-food3');
if(!root||root.dataset.ready)return;root.dataset.ready='1';
const $=id=>root.querySelector('#f3-'+id);
const catalog=`
八大菜系|川菜|麻婆豆腐、宫保鸡丁、回锅肉、水煮牛肉、鱼香肉丝、夫妻肺片、辣子鸡、口水鸡、毛血旺、酸菜鱼、川味冒菜、蒜泥白肉
八大菜系|鲁菜|九转大肠、葱烧海参、糖醋鲤鱼、爆炒腰花、油焖大虾、德州扒鸡、四喜丸子、锅塌豆腐、糟溜鱼片、济南把子肉
八大菜系|粤菜|白切鸡、蜜汁叉烧、脆皮烧鹅、豉汁蒸排骨、清蒸石斑鱼、菠萝咕噜肉、干炒牛河、腊味煲仔饭、豉油鸡、叉烧双拼饭、避风塘炒蟹、广式烧鸭
八大菜系|苏菜|松鼠桂鱼、蟹粉狮子头、大煮干丝、盐水鸭、软兜长鱼、响油鳝糊、无锡酱排骨、扬州炒饭、文思豆腐、金陵烤鸭
八大菜系|闽菜|佛跳墙、荔枝肉、醉排骨、沙茶面、红糟鸡、海蛎煎、福州鱼丸、福州肉燕、姜母鸭、扁肉拌面
八大菜系|浙菜|西湖醋鱼、龙井虾仁、东坡肉、宋嫂鱼羹、叫花鸡、雪菜黄鱼、杭州酱鸭、片儿川、虾爆鳝面、宁波汤圆
八大菜系|湘菜|剁椒鱼头、农家小炒肉、毛氏红烧肉、永州血鸭、湘西外婆菜、腊味合蒸、小炒黄牛肉、擂辣椒皮蛋、干锅肥肠、口味虾
八大菜系|徽菜|臭鳜鱼、徽州毛豆腐、徽州一品锅、黄山炖鸽、问政山笋、刀板香、徽州蒸鸡、石耳炖土鸡、中和汤、徽州火腿炖笋
地方风味|潮汕|潮汕牛肉火锅、牛肉粿条、潮汕卤鹅、潮汕蚝烙、生腌虾、粿汁、潮汕砂锅粥、牛肉丸汤、炒糕粿、菜头粿、普宁豆干、反沙芋头、咸水粿、潮汕肠粉
地方风味|北京|北京烤鸭、老北京炸酱面、铜锅涮肉、门钉肉饼、卤煮火烧、炒肝、爆肚、炙子烤肉、京酱肉丝、驴打滚
地方风味|东北|铁锅炖大鹅、锅包肉、小鸡炖蘑菇、猪肉炖粉条、地三鲜、东北大拉皮、酸菜白肉锅、延边冷面、东北烤肉、粘豆包
地方风味|上海|上海生煎包、葱油拌面、蟹粉小笼包、本帮红烧肉、排骨年糕、油爆虾、响油鳝丝、鲜肉月饼、四喜烤麸、本帮熏鱼
地方风味|陕西|腊汁肉夹馍、羊肉泡馍、油泼面、Biangbiang面、陕西凉皮、岐山臊子面、葫芦鸡、水盆羊肉、甑糕、酸汤水饺
地方风味|山西|刀削面、山西过油肉、莜面栲栳栳、剔尖面、猫耳朵、平遥牛肉、羊杂割、拨烂子、铁锅焖面、山西碗托
地方风味|河南|胡辣汤、河南烩面、开封灌汤包、道口烧鸡、洛阳水席、烧饼夹菜、浆面条、炒凉粉、鲤鱼焙面、羊肉炕馍
地方风味|湖北|武汉热干面、三鲜豆皮、清蒸武昌鱼、排骨藕汤、沔阳三蒸、鸭脖、襄阳牛肉面、糊汤粉、珍珠丸子、面窝
地方风味|江西|南昌拌粉、瓦罐汤、藜蒿炒腊肉、江西粉蒸肉、余干辣椒炒肉、井冈山烟笋炒肉、鄱阳湖鱼头、萍乡炒粉、景德镇冷粉、铅山烫粉
地方风味|广西|桂林米粉、柳州螺蛳粉、南宁老友粉、荔浦芋扣肉、南宁柠檬鸭、桂林啤酒鱼、螺蛳鸭脚煲、梧州纸包鸡、田螺酿、阳朔竹筒饭
地方风味|云南|过桥米线、汽锅鸡、野生菌火锅、傣味舂鸡脚、云南鲜花饼、饵丝、小锅米线、老奶洋芋、宜良烤鸭、云南破酥包
地方风味|贵州|凯里酸汤鱼、贵阳丝娃娃、花溪牛肉粉、肠旺面、贵州辣子鸡、豆米火锅、折耳根拌菜、贵州烙锅、夺夺粉、贵州糯米饭
地方风味|新疆|新疆大盘鸡、羊肉抓饭、烤包子、红柳羊肉串、新疆拉条子、馕包肉、新疆椒麻鸡、过油肉拌面、丁丁炒面、新疆烤馕
地方风味|内蒙古|手把羊肉、蒙古烤全羊、奶茶泡炒米、内蒙古焖面、羊肉火锅、羊杂碎、蒙古包子、奶皮子、沙葱炒鸡蛋、风干牛肉
地方风味|海南|海南鸡饭、海南文昌鸡、海南清补凉、海南粉、陵水酸粉、加积鸭、东山羊、椰子鸡火锅、和乐蟹、后安粉
地方风味|甘肃|兰州牛肉面、天水麻辣烫、甘肃酿皮、手抓羊肉、浆水面、牛奶鸡蛋醪糟、灰豆子、兰州烤羊排、炒炮仗、甘肃馓饭
地方风味|宁夏|羊肉臊子面、宁夏羊杂碎、宁夏烩小吃、宁夏手抓羊肉、中卫蒿子面、宁夏羊肉泡馍、羊杂烩、丁香肘子、宁夏油香、黄河鲤鱼
地方风味|天津|天津煎饼果子、天津包子、天津锅巴菜、耳朵眼炸糕、天津麻花、八珍豆腐、独面筋、贴饽饽熬小鱼、天津爆三样、熟梨糕
地方风味|河北|驴肉火烧、棋子烧饼、香河肉饼、金毛狮子鱼、缸炉烧饼、牛肉罩饼、马家卤鸡、柴沟堡熏肉、河北大锅菜、鞋底儿烧饼
地方风味|西藏|藏式牦牛肉火锅、糌粑、酥油茶、藏面、牦牛肉干、藏式土豆包子、青稞饼、藏式饺子、西藏手抓羊肉、藏式甜茶
地方风味|青海|青海土火锅、牦牛酸奶、青海手抓羊肉、尕面片、甜醅、青海酿皮、青海熬饭、焜锅馍、炮仗面、羊肠面
西餐|意大利|番茄肉酱意面、奶油培根意面、青酱鸡肉意面、松露蘑菇烩饭、西西里海鲜意面、玛格丽特披萨、意式辣香肠披萨、意式千层面、意大利烩饭、芝士焗通心粉
西餐|法式|法式油封鸭腿、法式红酒炖牛肉、法式洋葱汤、法式咸派、法式可丽饼、香煎鹅肝、法式尼斯沙拉、普罗旺斯炖菜、法式烤鸡、法式焗蜗牛
西餐|美式|美式芝士汉堡、烟熏牛胸肉、炸鸡汉堡、BBQ烤猪肋排、美式热狗、水牛城辣鸡翅、美式芝士焗薯条、费城芝士牛肉三明治、美式炸鸡、美式苹果派
西餐|西班牙|西班牙海鲜饭、西班牙土豆饼、蒜香橄榄油虾、西班牙炸丸子、西班牙烤章鱼、番茄面包、伊比利亚火腿拼盘、西班牙炖牛尾、海鲜烩饭
西餐|德国|德式烤猪肘、德式香肠拼盘、德式酸菜烤肉、德式炸猪排、德式土豆沙拉、椒盐卷饼、德式炖牛肉、德式土豆饼
西餐|墨西哥|墨西哥牛肉塔可、鸡肉卷饼、墨西哥玉米片、墨西哥牛肉芝士饼、墨西哥烤鸡饭、墨西哥辣椒炖肉、墨西哥鸡肉法吉塔、墨西哥米饭碗
西餐|地中海|希腊烤肉卷、希腊沙拉、土耳其烤肉饭、土耳其皮塔饼、鹰嘴豆泥拼盘、地中海烤鱼、以色列沙克舒卡、沙威玛烤肉卷
日韩东南亚|日本|日式豚骨拉面、日式咖喱饭、鳗鱼饭、三文鱼寿司、日式炸猪排、寿喜烧、天妇罗盖饭、日式烧鸟、章鱼烧、日式大阪烧
日韩东南亚|韩国|韩式石锅拌饭、韩式炸鸡、韩式烤肉、韩式部队锅、泡菜炒饭、韩式冷面、韩式芝士年糕、韩式参鸡汤、韩式紫菜包饭、韩式酱蟹
日韩东南亚|泰国|泰式打抛猪饭、冬阴功汤、泰式绿咖喱饭、泰式黄咖喱鸡、泰式炒河粉、泰式柠檬鱼、泰式芒果糯米饭、泰式船面、泰式猪脚饭
日韩东南亚|越南|越南牛肉河粉、越南法棍三明治、越式炸春卷、越式米纸卷、越南烤肉米粉、越南鸡肉河粉、越式香茅烤猪排饭、越式煎饼
日韩东南亚|新马印|新加坡海南鸡饭、新加坡叻沙、肉骨茶、黑胡椒螃蟹、马来西亚椰浆饭、马来西亚炒粿条、印尼炒饭、印尼沙嗲、印尼仁当牛肉、新加坡咖喱鱼头
小吃夜宵|街头小吃|烤冷面、煎饼果子、手抓饼、鸡蛋灌饼、脆皮锅盔、上海生煎包、小笼汤包、炸春卷、芝士薯条、台湾盐酥鸡、炸鸡排、长沙臭豆腐、乐山钵钵鸡、铁板鱿鱼、韩式芝士热狗
小吃夜宵|烧烤夜宵|羊肉串、牛肉串、五花肉串、烤鸡翅、蒜蓉烤生蚝、烤扇贝、烤茄子、烤韭菜、烤牛油、烤掌中宝、烤羊排、烤鱼、麻辣小龙虾、烤猪蹄、炒花甲
小吃夜宵|港式点心|鲜虾饺皇、蟹子烧麦、叉烧包、奶黄流沙包、豉汁蒸凤爪、糯米鸡、蒸排骨、鲜虾红米肠、萝卜糕、马拉糕、牛肉肠粉、艇仔粥、炸两
轻食甜品|轻食|三文鱼波奇饭、牛油果鸡肉沙拉、牛肉藜麦饭、鸡胸肉谷物碗、全麦鸡蛋三明治、鲜虾牛油果沙拉、蔬菜鸡肉卷、希腊酸奶水果碗、荞麦冷面、金枪鱼沙拉
轻食甜品|甜品|杨枝甘露、芒果班戟、港式鸡蛋仔、双皮奶、红豆沙、杏仁豆腐、手工麻薯、提拉米苏、巴斯克芝士蛋糕、焦糖布丁、法式马卡龙、抹茶千层、草莓大福、芋圆烧仙草、冰糖葫芦、榴莲千层
`;
const drinkRaw='苹果单丛、鸭屎香柠檬茶、茉莉奶绿、珍珠奶茶、乌龙奶茶、芋泥波波奶茶、伯牙绝弦、芝芝莓莓、青提茉莉、桃桃乌龙、葡萄冰茶、白桃气泡水、荔枝冰茶、百香果绿茶、冻柠茶、手打柠檬茶、柠檬气泡水、冰美式、热美式、燕麦拿铁、生椰拿铁、抹茶拿铁、香草拿铁、焦糖玛奇朵、浓缩咖啡、冰冷萃、手冲咖啡、冰镇可乐、无糖可乐、雪碧、盐汽水、苏打水、鲜椰子水、椰青美式、鲜榨橙汁、西瓜汁、鲜榨苹果汁、芒果冰沙、草莓奶昔、香蕉牛奶、冰豆浆、红枣豆浆、阿华田、热可可、酸梅汤、绿豆沙冰、杨枝甘露、港式丝袜奶茶、港式鸳鸯、无糖乌龙茶、茉莉花茶、普洱茶、热红茶、蜂蜜柚子茶、气泡矿泉水、冰水';
function foodEmoji(name,group){
 if(group==='轻食甜品')return /甜品|蛋糕|奶|冰|布丁|大福|麻薯|糖葫芦|芋圆|班戟|马卡龙/.test(name)?'🍰':'🥗';
 if(/披萨/.test(name))return '🍕';
 if(/汉堡/.test(name))return '🍔';
 if(/塔可|卷饼|肉卷|沙威玛/.test(name))return '🌮';
 if(/三明治|法棍/.test(name))return '🥪';
 if(/意面|千层面/.test(name))return '🍝';
 if(/饺|包|烧麦|馄饨|云吞|小笼/.test(name))return '🥟';
 if(/面|粉|粿条|米线|河粉|拉条子|饵丝/.test(name))return '🍜';
 if(/饭|盖饭|炒饭|抓饭|饭碗/.test(name))return '🍚';
 if(/火锅|炖|锅|涮肉|寿喜烧/.test(name))return '🍲';
 if(/鱼|虾|蟹|海鲜|蚝|贝/.test(name))return '🐟';
 if(/鸡|鸭|鹅/.test(name))return '🍗';
 if(/烤肉|牛排|羊肉|猪肘|肋排|牛肉/.test(name))return '🥩';
 if(/串|钵钵鸡|炸串/.test(name))return '🍢';
 if(/薯条/.test(name))return '🍟';
 if(/汤|粥|羹/.test(name))return '🥣';
 if(/沙拉/.test(name))return '🥗';
 return group==='小吃夜宵'?'🍡':'🍽️';
}
function drinkEmoji(name){
 if(/咖啡|拿铁|美式|冷萃|浓缩|玛奇朵/.test(name))return '☕';
 if(/奶茶|波波/.test(name))return '🧋';
 if(/椰/.test(name))return '🥥';
 if(/奶昔|牛奶|豆浆|可可|阿华田/.test(name))return '🥛';
 if(/可乐|雪碧|苏打|汽水/.test(name))return '🥤';
 if(/橙|柚|柠檬/.test(name))return '🍋';
 if(/苹果/.test(name))return '🍎';
 if(/冰沙|绿豆沙/.test(name))return '🧊';
 if(/茶|乌龙|普洱/.test(name))return '🍵';
 if(/水/.test(name))return '💧';
 return '🍹';
}
const baseFoods=catalog.trim().split('\n').flatMap(row=>{
 const [group,zone,raw]=row.split('|');
 return raw.split('、').filter(Boolean).map(name=>({group,zone,name,emoji:foodEmoji(name,group),id:group+'|'+zone+'|'+name}));
});
const baseDrinks=drinkRaw.split('、').map(name=>({name,emoji:drinkEmoji(name),id:'饮品|'+name}));
const groups=['全部','八大菜系','地方风味','西餐','日韩东南亚','小吃夜宵','轻食甜品','我的菜单'];
const labelMap={'全部':'🎲 全部','八大菜系':'🥢 八大菜系','地方风味':'🗺️ 地方风味','西餐':'🍝 西餐','日韩东南亚':'🍣 亚洲料理','小吃夜宵':'🍢 小吃夜宵','轻食甜品':'🥗 轻食甜品','我的菜单':'⭐ 我的菜单'};
let customFoods=[],customDrinks=[],blocked=new Set();
let activeGroup='全部',activeZone='全部',selected={food:null,drink:null},locks={food:false,drink:false},spinning=false,draws=0;
const history=[];
try{
 const saved=JSON.parse(localStorage.getItem('nation-food-lottery3')||'null');
 if(saved){
  if(Array.isArray(saved.food))customFoods=saved.food.filter(x=>typeof x==='string').slice(0,150);
  if(Array.isArray(saved.drinks))customDrinks=saved.drinks.filter(x=>typeof x==='string').slice(0,150);
  if(Array.isArray(saved.blocked))blocked=new Set(saved.blocked.filter(x=>typeof x==='string'));
 }
}catch(e){}
function persist(){try{localStorage.setItem('nation-food-lottery3',JSON.stringify({food:customFoods,drinks:customDrinks,blocked:[...blocked]}))}catch(e){}}
function foods(){
 return baseFoods.concat(customFoods.map(name=>({group:'我的菜单',zone:'自定义',name,emoji:foodEmoji(name,'我的菜单'),id:'我的菜单|自定义|'+name})));
}
function drinks(){
 return baseDrinks.concat(customDrinks.map(name=>({name,emoji:drinkEmoji(name),id:'饮品|'+name})));
}
function availableFood(){
 return foods().filter(x=>!blocked.has(x.id)&&(activeGroup==='全部'||x.group===activeGroup)&&(activeZone==='全部'||x.zone===activeZone));
}
function availableDrink(){return drinks().filter(x=>!blocked.has(x.id))}
function groupCount(group){
 return foods().filter(x=>!blocked.has(x.id)&&(group==='全部'||x.group===group)).length;
}
function status(s){$('status').textContent=s}
function random(items){return items[Math.floor(Math.random()*items.length)]}
function paint(k,item){
 $(k+'emoji').textContent=item?item.emoji:(k==='food'?'🍽️':'🥤');
 $(k+'name').textContent=item?item.name:'等待开奖';
}
function renderFilters(){
 const host=$('groups');host.replaceChildren();
 groups.forEach(g=>{
  if(g==='我的菜单'&&groupCount(g)===0&&activeGroup!==g)return;
  const b=document.createElement('button');b.type='button';b.className='chip'+(activeGroup===g?' active':'');
  b.textContent=labelMap[g]+' · '+groupCount(g);
  b.disabled=spinning;b.setAttribute('aria-pressed',String(activeGroup===g));
  b.addEventListener('click',()=>{if(spinning)return;activeGroup=g;activeZone='全部';render();status('已切换到「'+g+'」，开始抽奖吧！')});
  host.appendChild(b);
 });
 const zonehost=$('zones');zonehost.replaceChildren();
 if(activeGroup==='全部'||activeGroup==='我的菜单'){
  const t=document.createElement('span');t.className='zonehint';
  t.textContent=activeGroup==='全部'?'涵盖全国地方菜、八大菜系、西餐、亚洲料理与各类小吃': '你亲手添加的常吃餐食，都在这里';
  zonehost.appendChild(t);
 }else{
  const options=['全部',...new Set(foods().filter(x=>x.group===activeGroup).map(x=>x.zone))];
  options.forEach(z=>{
   const count=foods().filter(x=>!blocked.has(x.id)&&x.group===activeGroup&&(z==='全部'||x.zone===z)).length;
   const b=document.createElement('button');b.type='button';b.className='zone'+(activeZone===z?' active':'');
   b.textContent=z+(z==='全部'?'':' · '+count);
   b.disabled=spinning||count===0;
   b.setAttribute('aria-pressed',String(activeZone===z));
   b.addEventListener('click',()=>{activeZone=z;render();status(z==='全部'?'随机抽取整个分类':'已指定「'+z+'」美食')});
   zonehost.appendChild(b);
  });
 }
}
function renderHistory(){
 const host=$('history');host.replaceChildren();
 if(!history.length){const x=document.createElement('span');x.className='muted';x.textContent='还没有开奖记录';host.appendChild(x);return;}
 history.slice(0,5).forEach((item,i)=>{
  const x=document.createElement('span');x.className='historyitem';x.textContent=(i===0?'最新 · ':'')+item;host.appendChild(x);
 });
}
function renderCustom(){
 const host=$('customlist');host.replaceChildren();
 $('customstat').textContent=`自定义：${customFoods.length} 道美食 / ${customDrinks.length} 种饮品 · 已排除 ${blocked.size} 项`;
 for(const k of ['food','drink'])for(const name of k==='food'?customFoods:customDrinks){
 const b=document.createElement('button');b.type='button';b.textContent=name+' ×';b.setAttribute('aria-label','删除'+name);b.disabled=spinning;
 b.onclick=()=>{if(spinning)return;if(k==='food')customFoods=customFoods.filter(x=>x!==name);else customDrinks=customDrinks.filter(x=>x!==name);if(selected[k]?.name===name){selected[k]=null;locks[k]=false;}blocked.delete(k==='food'?'我的菜单|自定义|'+name:'饮品|'+name);persist();render();};host.append(b);
 }
}
function render(){
 renderFilters();renderHistory();renderCustom();
 $('totalfood').textContent=foods().length;$('totaldrink').textContent=drinks().length;$('totalzone').textContent=new Set(baseFoods.map(x=>x.zone)).size;
 $('currentcount').textContent=availableFood().length+' 道可选';$('count').textContent='已抽 '+draws+' 次';
 for(const k of ['food','drink']){
 paint(k,selected[k]);$(k+'origin').textContent=selected[k]?(k==='food'?selected[k].zone:'今日饮品'):'等待你的选择';
 $(k+'lock').textContent=locks[k]?'🔒 已锁定':'🔓 锁定';$(k+'lock').setAttribute('aria-pressed',String(locks[k]));$(k+'lock').disabled=spinning||!selected[k];
 $(k+'ban').disabled=spinning||!selected[k];$('draw'+k).disabled=spinning||locks[k];
 }
 for(const id of ['draw','explore','resetlocks','savefood','savedrink','reset','unban'])$(id).disabled=spinning;
 $('draw').textContent=spinning?'正在随机抽取…':'🎲 一键抽取吃喝套餐';
}
async function draw(kinds){
 if(spinning)return;
 const targets=kinds.filter(k=>!locks[k]);if(!targets.length){status('请先解锁一个结果');return;}
 if(targets.some(k=>!(k==='food'?availableFood():availableDrink()).length)){status('当前范围没有可选项，请切换分类、添加菜单或恢复排除项');return;}
 spinning=true;render();status('正在翻菜单…');
 for(const k of targets)$(k+'card').classList.add('rolling');
 await new Promise(r=>setTimeout(r,matchMedia('(prefers-reduced-motion: reduce)').matches?0:650));
 for(const k of targets){let pool=k==='food'?availableFood():availableDrink();const alternatives=pool.filter(x=>x.id!==selected[k]?.id);selected[k]=random(alternatives.length?alternatives:pool);$(k+'card').classList.remove('rolling');}
 spinning=false;draws++;const record=[selected.food?.name,selected.drink?.name].filter(Boolean).join(' + ');history.unshift(record);history.splice(5);render();status('本次抽中：'+record);
}
$('draw').onclick=()=>draw(['food','drink']);
for(const k of ['food','drink']){
 $('draw'+k).onclick=()=>draw([k]);
 $(k+'lock').onclick=()=>{if(spinning||!selected[k])return;locks[k]=!locks[k];render();status(locks[k]?'已锁定，重抽时保留结果':'已解锁');};
 $(k+'ban').onclick=()=>{if(spinning||!selected[k])return;const name=selected[k].name;blocked.add(selected[k].id);selected[k]=null;locks[k]=false;persist();render();status('已排除 '+name);};
 $('save'+k).onclick=()=>{if(spinning)return;const input=$('add'+k),name=input.value.trim();if(!name){status('请先填写名称');return;}const pool=k==='food'?foods():drinks();if(pool.some(x=>x.name===name)){status('菜单里已经有这个名称');return;}const list=k==='food'?customFoods:customDrinks;if(list.length>=150){status('自定义菜单最多 150 项');return;}list.push(name.slice(0,35));input.value='';persist();render();status('已加入：'+name);};
 $('add'+k).onkeydown=e=>{if(e.key==='Enter')$('save'+k).click();};
}
$('resetlocks').onclick=()=>{locks={food:false,drink:false};render();status('已全部解锁');};
$('explore').onclick=()=>{
 if(spinning)return;if(locks.food){status('请先解锁美食，再探索地方菜系');return;}
 const pool=baseFoods.filter(x=>['地方风味','八大菜系'].includes(x.group)&&!blocked.has(x.id));
 const zones=[...new Map(pool.map(x=>[x.zone,x])).values()];if(!zones.length){status('地方菜系已全部排除，请恢复排除项');return;}
 const item=random(zones);activeGroup=item.group;activeZone=item.zone;render();draw(['food','drink']);
};
$('unban').onclick=()=>{blocked.clear();persist();render();status('已恢复全部排除项');};
$('reset').onclick=()=>{if(!confirm('清空自定义菜单和排除记录，恢复初始菜单？'))return;customFoods=[];customDrinks=[];blocked.clear();activeGroup=activeZone='全部';selected={food:null,drink:null};locks={food:false,drink:false};draws=0;history.length=0;persist();render();status('已恢复初始菜单');};
render();
})();
