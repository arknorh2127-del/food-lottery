require('node:fs').mkdirSync('work',{recursive:true});
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:8765');
const name=k=>page.locator('#f3-'+k+'name').textContent();const click=id=>page.locator('#f3-'+id).click();const draw=async id=>{await click(id);await page.waitForFunction(()=>!document.querySelector('#f3-draw').disabled);};
console.log('Menu:',await page.locator('.stats').innerText());
await draw('draw');assert.notEqual(await name('food'),'等待开奖');const first=await name('food');await click('foodlock');await draw('draw');assert.equal(await name('food'),first);await click('resetlocks');await draw('drawfood');assert.notEqual(await name('food'),first);
await click('foodban');assert.equal(await name('food'),'等待开奖');await page.reload();assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('nation-food-lottery3')).blocked.length),1);
await page.locator('summary').click();await page.locator('#f3-addfood').fill('测试私房饭');await click('savefood');await page.locator('#f3-adddrink').fill('测试果茶');await click('savedrink');await page.reload();await page.getByRole('button',{name:/我的菜单 ·/}).click();await draw('drawfood');assert.equal(await name('food'),'测试私房饭');await click('foodban');await draw('drawfood');assert.match(await page.locator('#f3-status').innerText(),/没有可选项/);
await page.locator('summary').click();await click('unban');await draw('explore');assert.notEqual(await name('food'),'测试私房饭');
await page.getByRole('button',{name:/八大菜系 ·/}).click();await page.getByRole('button',{name:/^川菜 ·/}).click();await draw('drawfood');assert.equal(await page.locator('#f3-foodorigin').innerText(),'川菜');
for(const width of [320,390,1440]){await page.setViewportSize({width,height:1000});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await page.screenshot({path:`work/preview-${width}.png`,fullPage:true});}
assert.equal(await page.locator('.hero').evaluate(el=>getComputedStyle(el,'::after').content),'none');assert.deepEqual(errors,[]);
page.on('dialog',d=>d.accept());await click('reset');assert.equal(await name('food'),'等待开奖');
await page.evaluate(()=>localStorage.setItem('nation-food-lottery3','{broken'));await page.reload();await draw('draw');assert.deepEqual(errors,[]);
console.log('PASS: draw, reroll, locks, exclusions, persistence, custom menus, empty pool, explore, region filter, reset, corrupt storage, 320/390/1440 layout, removed decoration, no JS errors');await browser.close();})();
