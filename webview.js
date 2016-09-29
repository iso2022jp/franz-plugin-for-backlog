module.exports = (Franz, options) => {

	function getMessages() {
		const e = document.getElementById('globalNotificationsLink') || document.querySelector('.badge--notification')
		if (e) {
			Franz.setBadge(Number(e.textContent));
		} else {
			Franz.setBadge(0)
		}
	}

	Franz.loop(getMessages)

}
