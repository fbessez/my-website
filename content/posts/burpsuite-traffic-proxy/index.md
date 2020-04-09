---
title: Proxying your iPhone Traffic with BurpSuite
description: Quick guide to set up a listener for your iPhone traffic
date: '2020-04-10'
draft: false
slug: '/pensieve/burpsuite-traffic-proxy'
tags:
  - Network Monitoring
  - Traffic Proxy
---

## What is this?

If you ever want to see details about the requests that leave your iPhone, this is a quick little guide...

## Quick Guide

1. Download and Install [Burp Suite](https://portswigger.net/burp/communitydownload)
2. In Burp Suite, set up a Proxy Listener on a specific port. [help doc](https://portswigger.net/support/configuring-an-ios-device-to-work-with-burp)
3. On your iPhone, go to Settings > Wi-Fi > click the info icon > Configure Proxy > Manual
4. In Manual HTTP Proxy config, set Server to your computer I.P address
5. In Manual HTTP Proxy config, set Port to the port value from step 2
6. For HTTPS Proxying, the client (your iPhone) will need to download the [SSL Cert](https://support.portswigger.net/customer/portal/articles/1841109-Mobile%20Set-up_iOS%20Device%20-%20Installing%20CA%20Certificate.html) from Burp Suite.
7. Once downloaded, visit http://burp on your phone. This should prompt you to install a Profile. Upon completing approval flow, visit General > About > Certificate Trust Settings and toggle PortSwigger CA on.
8. Restart Burp Suite and begin using your phone. You should see some traffic in Burp Suite which you can now filter as you wish.

Recently while updating with [Skela](https://github.com/Upstatement/skela-wp-theme) with webpack, I encountered a weird error where I wasn't able to run a simple script:
