module.exports = {
  'get to signup page': (browser) => {

    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.navbar', 1000)
      .click('a[href="/signup"]')

      browser.assert.urlContains('signup')
      browser.assert.cssClassPresent('form','signup_form')
  },

  'signup user and redirect to applications': (browser) => {

    browser
      .setValue('input[type=text]', 'testuser')
      .setValue('input[type=password]', 'testtest')
      .click('input[type=submit]')
      .waitForElementVisible('.navbar', 1000)
      .getText('h1', function(res) {
        this.assert.equal(res.value, 'Thanks for signing up!')
      })

    browser.assert.urlContains('/applications')
  },

  'close': (browser) => browser.end()
}
