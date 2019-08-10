chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	fetch(request.path, request.options)
		.then((response) => response.json())
		.then((response) => sendResponse(response))
		.catch((error) => sendResponse({ error }));

	return true;
});
