require('dotenv').config();
import { Selector } from 'testcafe';

const id = process.env.ID;
const pass = process.env.PASS;

// 0埋め2桁(枚数に対応)
const count = ('00' + process.argv[4]).slice(-2);

fixture `Getting Started`
    .page `https://service2.wi2.ne.jp/wi2was/mypageLogin?locale=ja`;


test('My first test', async t => {
    await t
        .typeText('#mypageLogin_txtLoginId', id)
        .typeText('#mypageLogin_txtPassWord', pass)
        .click('#mypageLogin_btnLogin');

    // buy
    await t
        .click('#mypageMenu_WAS03V008_BTN_TSUIKA_KOUNYUU')

    const buySelect = Selector('#cmbSetNumVal');
    const buyOption = buySelect.find('option');

    await t
        .click(buySelect)
        .click(buyOption.withText(count));

    await t
        .click('#memberTicketInput_WAS02V002_BTN_CONFIRM')
        .click('#memberTicketConf_BTN_NEXT');
});
