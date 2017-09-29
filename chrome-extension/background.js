// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

let context = {
    api_endpoint: "https://caniagree.herokuapp.com/"
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.getSelected(null, function(tab) {
    let tabUrl = tab.url;
    let listServicesUrl = context.api_endpoint + "services"
    fetch(listServicesUrl).then(function(response) {
        return response.json()
    }).then(function(data) {
      data.data.forEach(function(element) {
        if(element.domain == tabUrl) {
          let redirectUrl = context.api_endpoint + "service/" + element.id
          chrome.tabs.create({ url: redirectUrl});
        }
      });
    })
  });
});
