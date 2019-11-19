export function media(qs, cb) {
	if (cb) {
		const q = window.matchMedia(`screen and (${qs})`);
		const matches = () => {
			if (q.matches) {
				cb({matches: true});
			} else {
				cb({matches: false});
			}
		}
		matches();
		q.addListener(matches);
	}
}

export function isTablet(cb) {
  const device = `min-width: ${getComputedStyle(document.documentElement).getPropertyValue('--tablet')}`;
  media(device, cb);
}

export function isDesktop(cb) {
  const device = `min-width: ${getComputedStyle(document.documentElement).getPropertyValue('--desktop')}`;
  media(device, cb);
}