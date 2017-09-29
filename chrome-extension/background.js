// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // var newURL = "http://stackoverflow.com/";
  //TODO chrome.tabs.create({ url: newURL });

  chrome.tabs.getSelected(null, function(tab) {
    var tabUrl = tab.url;
    var testUrl = "https://caniagree.herokuapp.com/services"
    fetch(testUrl).then(function(response) {
        return response.json();
    }).then(function(data) {
      alert(data);
    })
  });
});
