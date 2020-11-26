/**
 * @spec overview
 * 打刻画面の操作
 */

 /**
  * Scenarios
  */
describe('【画面】打刻画面', () => {
  context('【テスト】打刻作業',() => {
    it('【内容】開始と終了の打刻　が正常に動作されていること',　() => {

      cy.log('打刻画面に遷移すること');
      cy.visit('/timestamp');

      cy.log('出勤ボタンを押下すると出勤時間が表示されること');
      cy.get('[data-cy=onClickStartTime]').click();
      cy.get('[data-cy=startTime]')
      .should('be.visible');

      cy.log('退勤ボタンを押下すると退勤時間が表示されること');
      cy.get('[data-cy=onClickEndTime]').click();
      cy.get('[data-cy=endTime]')
      .should('be.visible');

      cy.log('出勤時間が表示されていること');
      cy.get('[data-cy=workingTime]')
      .should('be.visible')
      .should('have.text','時 間 0:00');
    });
  });
})