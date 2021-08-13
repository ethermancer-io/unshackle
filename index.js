browser.storage.local.get().then((results)=>{
    if (!results.stats) results = {
        host: {
        },
        type: {
        }
    };
    browser.webNavigation.onCommitted.addListener((e)=>{
        // Filter out sub-frame related navigations
        if (e.frameId !== 0) return;
        console.log(e.url, e.timeStamp, e.transitionType);
    });
    browser.webNavigation.onCompleted.addListener((e)=>{
        // Filter out sub-frame related navigations
        if (e.frameId !== 0) return;
        console.log(e.url, e.timeStamp, e.transitionType);
    }, {
        url: [
            {
                schemes: [
                    'http',
                    'https'
                ]
            }
        ]
    });
});


//# sourceMappingURL=index.js.map
