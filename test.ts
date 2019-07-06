require('dotenv').config();
import { Selector } from 'testcafe';

const id = process.env.ID;
const pass = process.env.PASS;

fixture `Getting Started`
    .page `https://service2.wi2.ne.jp/wi2was/mypageLogin?locale=ja`;


test('My first test', async t => {
    await t
        .typeText('#mypageLogin_txtLoginId', id)
        .typeText('#mypageLogin_txtPassWord', pass)
        .click('#mypageLogin_btnLogin');

    // activate
    await t
        .click('#mypageMenu_WAS03V008_BTN_RIYOU_KAKUNIN')

    const radio = Selector('input').withAttribute('name', 'rdoUseTicketVal');
    await t
        .click(radio)
        .click('#memberTicketStartInput_BTN_KAKUNIN')
        .click('#memberTicketStartConf_BTN_KAISI')
});
