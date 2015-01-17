---
template: index.hbs
title: Tweet Lifetime is a self-hosted service that continuously monitors your Twitter account and deletes old tweets.
---

# [*Tweet Lifetime*][tweet-lifetime] is a self-hosted service that continuously monitors your Twitter account and deletes old tweets.

---

## *Why?*

It's become apparent that social media content should *not* be permanent. At best, old content is of little value to its creator. At worst it's a liability, aggregated by marketers and cited by critics.

But social media does have value in the short-term. Services like Twitter are great for making announcements and having discussions. Tweet Lifetime is an attempt to keep Twitter relevant by retaining its short-term value and limiting its long-term liability.

---

## *Suggested Donation*

<form action="https://pay-christophercliff.herokuapp.com/" method="POST">
    <script
        src="https://checkout.stripe.com/checkout.js"
        class="stripe-button"
        data-key="pk_live_4o1eGNslT02AHpN3mzxO6BXn"
        data-name="CHRISTOPHERCLIFF.COM"
        data-description="Tweet Lifetime donation"
        data-amount="1000"
    ></script>
    <input name="amount" value="1000" type="hidden">
    <input name="description" value="Tweet Lifetime donation" type="hidden">
    <input name="metadata" value="{&quot;product_id&quot;:&quot;tweet-lifetime-donation-10&quot;}" type="hidden">
</form>

This application was designed to best serve users. You're free to read and modify the source code. You're not required to give read or write permission to a commercial entity who could abuse it. It'll run for free, forever, on reliable cloud hosting. Because of these design considerations, it doesn't fit a standard commercial model.

In order to make the best service possible and keep development sustainable, I suggest that satisfied users make a donation of **$10**. You can submit a secure credit card payment on this page by clicking the blue "Pay with Card" button. Thanks for your contribution.

---

## *Get Started*

Read the [setup guide][tweet-lifetime] on GitHub.

[tweet-lifetime]: https://github.com/christophercliff/tweet-lifetime
