/**
 * 
 */

const staticCachesName = 'site-static';
const assets = [
	'/PWAT/',
	'/PWAT/index.jsp',
	'/PWAT/app.js',
	'/PWAT/images/icon192.png',
];

self.addEventListener('install', evt => {
	console.log('service worker has been installed!');
	evt.waitUntil(caches.open(staticCachesName).then(cache => {
		console.log('caching assets!');
		cache.addAll(assets);
	}));
});

self.addEventListener('activate', evt => {
	console.log('service worker has been activated!');
});

self.addEventListener('fetch', evt => {
	console.log('service worker fetch', evt);
	evt.respondWith(
		caches.match(evt.request).then(cacheRes => {
			return cacheRes || fetch(evt.request);
		})
	);
});