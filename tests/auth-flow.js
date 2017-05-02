module.exports = {
  'get to signup page': (client) => {

    client
      .url(client.launchUrl)
      .waitForElementVisible('.navbar', 1000)
      .click('a[href="/signup"]')

      client.assert.urlContains('signup')
      client.assert.cssClassPresent('#form','signup_form')
  },

  'signup user and redirect to applications': (client) => {

  }
}
